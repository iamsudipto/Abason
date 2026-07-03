# আবাসন (Abashon) — Architecture

**One honest page instead of a 50-page blueprint.** This document states exactly what the
demo is, what production requires, and why each choice was made. Judges reward accurate
scoping over aspirational architecture.

---

## 1. Current state (what you are looking at)

A **static frontend prototype** — vanilla HTML/CSS/JS, no backend, runs from `file://`.

```
abashon/
├── index.html          Markup: pages, modals, nav
├── css/style.css       Classic ivory theme (design tokens, components)
├── js/
│   ├── aiDB.js         AI Assistant database — 175 real listings
│   │                   (Dhaka 75 · Sylhet 50 · Chattogram 50)
│   ├── services.js     Mock service layer (OTP, NID, payment, reservation)
│   └── app.js          App logic: auth, dashboards, booking, AI search
├── services/           Documented, unit-testable versions of each mock
│   ├── otpService.js · nidService.js · paymentService.js · reservationService.js
│   └── README.md       What is mocked vs. what production needs
└── docs/ARCHITECTURE.md  (this file)
```

**What is real:** the 175-listing dataset, the deterministic AI retrieval engine over it
(Bangla + English parsing: city, area, beds, budget, furnished, tenant, amenities — with a
guaranteed "no matching property was found" instead of hallucination), role-based auth UI
(buyer/seller), buyer booking flow with reservation countdown, seller listing flow.

**What is simulated:** OTP, NID verification, payments, and the reservation lock. All four
live in `js/services.js` behind Promise-based interfaces that mirror real API shapes —
swapping to production means replacing function bodies with `fetch()` calls; callers do
not change. Accounts live in `localStorage` (plaintext — acceptable only in a demo).

**Hard limits that cannot be fixed client-side:** cross-user reservation locking
(double-booking prevention), real identity verification, real payment, seller listings
appearing in other users' catalogs. Each requires a shared server.

## 2. AI Assistant — why retrieval, not RAG

The assistant searches **only** `js/aiDB.js`. It is a deterministic retrieval engine
(structured parsing → hard filters → ranked scoring), not an LLM:

- **Zero hallucination by construction.** An LLM can invent listings; a filter cannot.
  The requirement "never recommend properties not in the database" is a mathematical
  guarantee here, not a prompt instruction.
- **175 structured rows do not need vector embeddings.** Semantic search adds
  infrastructure (embedding model, vector store, API keys) and *reduces* precision on
  structured queries like "৩ বেড ধানমন্ডি under 60000."
- **Updating the data = replacing one file.** No code changes.

Production path if the catalog grows to thousands of free-text listings: server-side
hybrid search (Postgres full-text + pgvector), with the LLM used only to *parse the query*
and *phrase the answer* — never to originate listing data.

## 3. Production architecture (the build that comes after the demo)

```
Next.js (Vercel) ──► Supabase (Postgres + Auth + RLS + Storage)
        │                    │
        │                    ├── Row-Level Security: sellers edit only their rows
        │                    └── reserved_until column + atomic transaction = real lock
        ├──► SSLCommerz (cards) / bKash PGW — verified via server webhook (IPN)
        ├──► SMS gateway (bulksmsbd / SSL Wireless) for real OTP
        └──► Porichoy partner API for NID KYC (institutional access; hardest dependency)
```

**Why these:** Supabase gives Postgres, auth, storage and row-level security on a free
tier — one vendor replaces four mocks. Vercel deploys the frontend free. SSLCommerz is
the standard BD card gateway (merchant KYC ≈ 2–4 weeks; sandbox available immediately).
NID verification has **no public API** — it requires an approved partner and is the
longest-lead item; ship v1 with phone OTP only and add NID KYC later.

**Core tables:** `users` (role, verified flags) · `listings` (owner FK, status) ·
`bookings` (state machine: submitted → reserved → visited → approved → paid → agreed →
handed_over) · `payments` (gateway ref, webhook-confirmed) · `reservations`
(listing FK unique-active, expires_at — enforced in a transaction, which is what actually
prevents double-booking).

**Cost reality:** free tier covers ~100–1,000 users (Supabase 500MB / 50k MAU, Vercel
hobby). First forced spend is the SMS gateway (per-message) and Supabase Pro (~$25/mo)
around 10k users. Payment gateways charge per transaction, not monthly.

## 4. Security posture — demo vs. production

| Area | Demo (now) | Production (required) |
|---|---|---|
| Passwords | plaintext in localStorage | bcrypt server-side, never client |
| Sessions | localStorage flag | httpOnly cookie + JWT refresh |
| NID | masked display only | partner KYC; store token + last-4 only |
| Payments | mock, "Demo Mode" labeled | gateway-hosted page, webhook verify |
| Locking | per-browser localStorage | DB transaction + expiry job |
| Input validation | client-side | client **and** server (client is advisory) |

**The demo says "Demo Mode" on every payment surface on purpose.** Claiming otherwise
to judges is the fastest way to lose their trust when they open DevTools.
