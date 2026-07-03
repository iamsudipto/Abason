# Abashon — Mock Service Layer

Four **mock** service modules that simulate the backend the Abashon frontend will eventually
talk to. Every module is Promise-based, validates input in isolated pure helpers, throws typed
errors (`.code`), and simulates network latency. **No mock logic lives in UI components** — the
UI calls these services and renders whatever they return.

Because the interfaces mirror the real API shape, going live means **replacing the body of each
function with a `fetch()` call** — callers don't change. Flip `SERVICE_CONFIG.MOCK` to `false`
per module during the swap.

```
services/
├── otpService.js          Phone OTP (send / verify)
├── nidService.js          National ID verification
├── paymentService.js      Card (Luhn) + wallet payment
├── reservationService.js  24h property lock + countdown
└── README.md              this file
```

## What is mocked vs. what production needs

| Service | Mocked now | Production requirement | Effort / blocker |
|---|---|---|---|
| **otpService** | 6-digit code in an in-memory `Map`, 5-min expiry, code shown in console/`devCode` | SMS gateway + **server-side** code store (Redis TTL). Code is generated and checked on the backend and **never returned to the client**. | SMS gateway signup: **Twilio** (intl) or **bulksmsbd / SSL Wireless / Alpha SMS** (local). Days, not weeks. |
| **nidService** | Format check (10/13/17 digits) + 2–3s delay + deterministic dummy identity | Real EC-NID verification via an **institutional/approved partner** (Porichoy, or a bank/MFS reseller). Server-side only; store a token + masked NID, never the full number. | **No public API.** Requires company registration + signed agreement. Weeks + legal. Hardest of the four. |
| **paymentService** | Luhn card check, 2s "processing", mock `transactionId`, `demo:true` flag; `…0002` card always declines | **SSLCommerz** for cards (start on sandbox), separate **bKash/Nagad** wallet APIs; verify via **IPN/webhook** server-side; never handle raw PAN/CVV (PCI-DSS). | Merchant account + KYC/trade-licence approval: **~2–4 weeks**. Sandbox works immediately. |
| **reservationService** | `localStorage` lock keyed `reservation_lock_${id}`, 24h expiry, auto-cleanup, countdown data | **Shared authoritative store** with atomic writes (Firestore transaction / Postgres `FOR UPDATE`) + **WebSocket** live sync + server-enforced lock at payment. | Needs a backend + realtime layer. **Until then, cross-user double-booking cannot be prevented.** |

## The one limitation judges will probe first

`reservationService` uses `localStorage`, which is **per-browser**. It drives the countdown and
stops a single browser from re-locking, but it **cannot** stop two different users on two devices
from locking the same property. Real reservation integrity requires a shared database and a
server that enforces the lock at the moment of payment. This is called out at the top of the file
and is not a bug to "fix" client-side — it's an architectural boundary.

## Error contract (all modules)

Every rejection is a typed error with a `.code`. Branch on the code, not the message:

```js
try {
  await sendOTP(phone);
} catch (e) {
  if (e.code === 'INVALID_INPUT') { /* show field error */ }
  else if (e.code === 'TIMEOUT') { /* offer retry */ }
  else { /* generic failure */ }
}
```

Common codes: `INVALID_INPUT`, `TIMEOUT`, `EXPIRED`, `NOT_FOUND`, `CARD_DECLINED`,
`ALREADY_LOCKED`, `NOT_HOLDER`, `TOO_MANY_ATTEMPTS`.

## Testing the failure paths

The mocks are deterministic where it matters, so demos don't break randomly:

- **OTP / NID / Payment / Reservation timeout:** pass `{ simulateTimeout: true }`.
- **NID not found:** any number starting `0000`.
- **Card declined:** any card ending `0002`.
- **Reservation already locked:** call `lockProperty` from one browser, then check status.

## Usage sketch (ES modules)

```js
import { sendOTP, verifyOTP } from './services/otpService.js';
import { verifyNID } from './services/nidService.js';
import { initiatePayment } from './services/paymentService.js';
import { lockProperty, checkLockStatus } from './services/reservationService.js';
```

> Note: these files use ES-module `export`. Load them with `<script type="module">`, which
> requires serving over `http(s)` (a local dev server), not opening `index.html` via `file://`.
> If you must run from `file://`, strip the `export` keywords and load as classic scripts.
