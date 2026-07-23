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

## Owner & Buyer Verification System (Modules 1–5)

These modules talk to REAL Supabase (Postgres + Edge Functions + Storage), not in-browser
mocks — so they live in `js/` (classic scripts, same `abashonDB`-global style as
`authService.js` / `propertyService.js`), not this `services/` folder. Listed here anyway so
the mock-vs-real table above stays the single source of truth for the whole verification story.

| Module | File(s) | Mocked now | Production requirement |
|---|---|---|---|
| 1. Phone OTP | `js/phoneVerificationService.js` + `send-otp`/`verify-otp` edge functions | Code stored server-side (`otp_codes` table), SMS "sent" only to Edge Function logs unless `SMS_GATEWAY_API_KEY` is set | bulksmsbd / SSL Wireless account |
| 2. NID capture | `js/faceVerificationService.js` (`submitNid`) | Format check only (10/13/17 digits) + private storage upload | No public verification API exists — format-only is the permanent ceiling, not a stopgap |
| 3. Face verification | `js/faceVerificationService.js` (`submitFaceVerification`) + `verify-face` edge function | Deterministic demo score unless `FACE_API_PROVIDER` is set | AWS Rekognition `CompareFaces` or Azure Face API; real liveness session, not a client-reported flag |
| 4. Anti-spam (rate limit / no-show / reports) | DB triggers (`enforce_booking_limits`, `handle_no_show`) + `js/reportService.js` | Fully real — these run in Postgres today, not mocked | Nothing further needed to go live; thresholds live in `app_settings` |
| 5. Reverse image check | `js/imageReviewService.js` + `check-listing-image` edge function | Never flags unless `imageUrl` contains `demo-flag`, unless `GOOGLE_VISION_API_KEY` is set | Google Vision Web Detection API key |

**Non-goals, on purpose (do not build these):** NID numbers are never checked against a
government database (no public API exists). Identity data is never shared with a third party
proactively — only via a logged, human-approved legal request. Trust/anti-fraud signals are
verification-based, never completion-based, and no ban is ever fully automated — every
`reports` row and every no-show suspension is reviewable by a human admin.

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

## AI Housing Copilot (Gemini)

| Module | File(s) | Mocked now | Production requirement |
|---|---|---|---|
| AI Copilot | `js/aiCopilotService.js` + `ai-copilot` edge function | `GEMINI_API_KEY` না বসানো পর্যন্ত `{demo:true}` ফেরত যায় → client নিঃশব্দে deterministic engine-এ (aiMatch + CHAT_FAQ) ফিরে যায় | Google AI Studio free key → Supabase Dashboard → Edge Functions → Secrets-এ `GEMINI_API_KEY` |

Grounding: প্রতি প্রশ্নের সাথে deterministic search-এর টপ listing + মিলে-যাওয়া curated FAQ context হিসেবে যায়; system prompt-এ CONTEXT-এর বাইরের listing/দাম বানানো নিষিদ্ধ। User-facing technical error কোথাও নেই (Fallback Rules)।
