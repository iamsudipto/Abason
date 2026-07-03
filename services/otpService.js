/**
 * otpService.js — Mock OTP (One-Time Password) service for Abashon.
 *
 * TODO(production):
 *   - Replace the in-memory Map with a server-side store (Redis with TTL is ideal).
 *   - Generate + store the code ONLY on the backend. NEVER return the code to the client.
 *     In this mock, `devCode` is exposed so the UI can display it — that path is gated
 *     behind SERVICE_CONFIG.MOCK and MUST be removed on swap.
 *   - Send the SMS through a gateway: Twilio (international) or bulksmsbd / SSL Wireless
 *     / Alpha SMS (local Bangladesh, cheaper, supports Bangla sender IDs).
 *   - Add per-phone rate limiting and IP throttling on the backend to prevent SMS-bombing.
 *   - Expected real endpoints: POST /api/otp/send  and  POST /api/otp/verify (JWT-scoped).
 *
 * Design rules honoured:
 *   - Promise-based async interface (network latency simulated with setTimeout).
 *   - Validation lives in standalone, testable helpers (isValidBDPhone, isSixDigitCode).
 *   - Every edge case rejects with a typed ServiceError (.code) — no silent failures.
 *   - No UI logic here: the service returns data; the caller decides how to toast it.
 */

'use strict';

export const SERVICE_CONFIG = { MOCK: true };

const OTP_TTL_MS = 5 * 60 * 1000;   // 5 minutes
const MAX_ATTEMPTS = 5;
const LATENCY_MS = [500, 1200];      // simulated network round-trip window

/** In-memory session store. Resets on page reload — acceptable for a single-session demo. */
const _otpStore = new Map(); // sessionId -> { code, phone, expiresAt, attempts }

/** Typed error so callers can branch on `.code` instead of parsing message strings. */
export class OtpError extends Error {
  /** @param {string} code @param {string} message */
  constructor(code, message) { super(message); this.name = 'OtpError'; this.code = code; }
}

/* ------------------------------------------------------------------ */
/* Internal helpers (not UI-facing)                                    */
/* ------------------------------------------------------------------ */

/** Resolve after a randomised delay to imitate real latency. */
function _delay(min = LATENCY_MS[0], max = LATENCY_MS[1]) {
  const ms = Math.floor(min + Math.random() * (max - min));
  return new Promise((res) => setTimeout(res, ms));
}

/** Deterministic, opt-in timeout so the failure path is testable without random demo breakage. */
function _guardTimeout(opts) {
  if (opts && opts.simulateTimeout) {
    return Promise.reject(new OtpError('TIMEOUT', 'Request timed out. Please try again.'));
  }
  return null;
}

function _genSessionId() {
  return (globalThis.crypto && crypto.randomUUID)
    ? crypto.randomUUID()
    : 'otp_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
}

function _genCode() {
  return String(Math.floor(100000 + Math.random() * 900000)); // always 6 digits, no leading-zero loss
}

/* ------------------------------------------------------------------ */
/* Validation (pure, exported for unit tests)                          */
/* ------------------------------------------------------------------ */

/**
 * Validate a Bangladesh mobile number.
 * Accepts +880 / 880 / leading-0 forms and normalises to 01XXXXXXXXX.
 * @param {string} phone
 * @returns {{ ok: boolean, normalised?: string }}
 */
export function isValidBDPhone(phone) {
  if (typeof phone !== 'string') return { ok: false };
  const digits = phone.replace(/[\s-]/g, '').replace(/^\+?880/, '0');
  return /^01[3-9]\d{8}$/.test(digits) ? { ok: true, normalised: digits } : { ok: false };
}

/**
 * Validate that a supplied code is a 6-digit string.
 * @param {string} code
 * @returns {boolean}
 */
export function isSixDigitCode(code) {
  return typeof code === 'string' && /^\d{6}$/.test(code);
}

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */

/**
 * Generate and "send" a 6-digit OTP for a phone number.
 * @param {string} phoneNumber                 - BD mobile number in any common format.
 * @param {{ simulateTimeout?: boolean }} [opts]
 * @returns {Promise<{ sessionId: string, expiresAt: number, phone: string, devCode?: string }>}
 *          `devCode` is present ONLY while SERVICE_CONFIG.MOCK === true. Remove on production swap.
 * @throws {OtpError} code = 'INVALID_INPUT' | 'TIMEOUT'
 */
export async function sendOTP(phoneNumber, opts) {
  const timeout = _guardTimeout(opts);
  if (timeout) return timeout;

  const check = isValidBDPhone(phoneNumber);
  if (!check.ok) {
    throw new OtpError('INVALID_INPUT', 'সঠিক বাংলাদেশি মোবাইল নম্বর দিন (01XXXXXXXXX).');
  }

  await _delay();

  const sessionId = _genSessionId();
  const code = _genCode();
  const expiresAt = Date.now() + OTP_TTL_MS;
  _otpStore.set(sessionId, { code, phone: check.normalised, expiresAt, attempts: 0 });

  // Dev-only visibility. A real gateway would deliver this via SMS and the server would never echo it.
  if (SERVICE_CONFIG.MOCK) {
    console.warn(`[otpService MOCK] OTP for ${check.normalised}: ${code} (session ${sessionId})`);
  }

  const result = { sessionId, expiresAt, phone: check.normalised };
  if (SERVICE_CONFIG.MOCK) result.devCode = code; // <-- STRIP on production swap
  return result;
}

/**
 * Verify a code against a session. Consumes the session on success.
 * @param {string} sessionId
 * @param {string} code
 * @param {{ simulateTimeout?: boolean }} [opts]
 * @returns {Promise<{ verified: true, phone: string }>}
 * @throws {OtpError} code = 'INVALID_INPUT' | 'NOT_FOUND' | 'EXPIRED' | 'TOO_MANY_ATTEMPTS' | 'INVALID_CODE' | 'TIMEOUT'
 */
export async function verifyOTP(sessionId, code, opts) {
  const timeout = _guardTimeout(opts);
  if (timeout) return timeout;

  if (typeof sessionId !== 'string' || !sessionId) {
    throw new OtpError('INVALID_INPUT', 'Session ID প্রয়োজন।');
  }
  if (!isSixDigitCode(code)) {
    throw new OtpError('INVALID_INPUT', 'কোড অবশ্যই ৬ সংখ্যার হতে হবে।');
  }

  await _delay(300, 700);

  const session = _otpStore.get(sessionId);
  if (!session) throw new OtpError('NOT_FOUND', 'সেশন পাওয়া যায়নি। আবার কোড পাঠান।');

  if (Date.now() > session.expiresAt) {
    _otpStore.delete(sessionId);
    throw new OtpError('EXPIRED', 'কোডের মেয়াদ শেষ। নতুন কোড নিন।');
  }
  if (session.attempts >= MAX_ATTEMPTS) {
    _otpStore.delete(sessionId);
    throw new OtpError('TOO_MANY_ATTEMPTS', 'অনেকবার ভুল হয়েছে। নতুন কোড নিন।');
  }
  if (session.code !== code) {
    session.attempts += 1;
    throw new OtpError('INVALID_CODE', `ভুল কোড। বাকি চেষ্টা: ${MAX_ATTEMPTS - session.attempts}।`);
  }

  _otpStore.delete(sessionId); // single-use
  return { verified: true, phone: session.phone };
}

/**
 * Remaining validity of a session in ms (0 if missing/expired). Useful for a countdown UI.
 * @param {string} sessionId
 * @returns {number}
 */
export function getOtpRemainingMs(sessionId) {
  const s = _otpStore.get(sessionId);
  if (!s) return 0;
  return Math.max(0, s.expiresAt - Date.now());
}
