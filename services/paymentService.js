/**
 * paymentService.js — Mock payment processing for Abashon.
 *
 * DEMO MODE — NO REAL TRANSACTION IS PROCESSED.
 * The UI must show a persistent label: "Demo Mode — No real transaction processed".
 * This service returns `demo: true` on every result so the UI can render that badge;
 * it does not draw the badge itself (no UI logic in the service layer).
 *
 * TODO(production):
 *   - Cards (Visa/Mastercard): integrate SSLCommerz. You need a merchant account +
 *     KYC/trade-licence approval, which takes ~2–4 weeks. Start on their SANDBOX
 *     (store_id/store_passwd for sandbox) while approval is pending.
 *   - Never touch raw card data (PAN/CVV) in your own code — that triggers PCI-DSS scope.
 *     Use the gateway's hosted page or tokenisation; this mock's Luhn check is for UX only.
 *   - Mobile wallets (bKash/Nagad/Rocket) are a DIFFERENT flow — MSISDN + PIN + agreement
 *     APIs, not card numbers. Luhn does NOT apply. Use bKash Checkout (URL) / Nagad PGW.
 *   - Verify payment server-side via IPN/webhook + a status query; never trust the
 *     client "success" redirect alone.
 *   - Expected real endpoints: POST /api/payment/init  ->  gateway redirect URL,
 *     then webhook  POST /api/payment/ipn  confirms and flips order status.
 *
 * Design rules honoured:
 *   - Promise-based; ~2s simulated processing.
 *   - Luhn + field validation isolated in pure helpers.
 *   - Typed errors for invalid input, decline, and timeout.
 */

'use strict';

export const SERVICE_CONFIG = { MOCK: true };

const PROCESSING_MS = [1500, 2500];
export const SUPPORTED_METHODS = ['visa', 'mastercard', 'bkash', 'nagad', 'rocket', 'sslcommerz'];

export class PaymentError extends Error {
  /** @param {string} code @param {string} message */
  constructor(code, message) { super(message); this.name = 'PaymentError'; this.code = code; }
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function _delay(min = PROCESSING_MS[0], max = PROCESSING_MS[1]) {
  const ms = Math.floor(min + Math.random() * (max - min));
  return new Promise((res) => setTimeout(res, ms));
}

function _guardTimeout(opts) {
  if (opts && opts.simulateTimeout) {
    return Promise.reject(new PaymentError('TIMEOUT', 'Payment gateway timed out.'));
  }
  return null;
}

function _txnId() {
  return 'TXN-' + Date.now().toString(36).toUpperCase() + '-' +
    Math.random().toString(36).slice(2, 6).toUpperCase();
}

/* ------------------------------------------------------------------ */
/* Validation (pure, exported)                                         */
/* ------------------------------------------------------------------ */

/**
 * Luhn checksum — validates a card number's structure (NOT that it can pay).
 * Applies to Visa/Mastercard only. Do not run wallet numbers through this.
 * @param {string} cardNumber
 * @returns {boolean}
 */
export function luhnCheck(cardNumber) {
  if (typeof cardNumber !== 'string') return false;
  const digits = cardNumber.replace(/[\s-]/g, '');
  if (!/^\d{13,19}$/.test(digits)) return false;
  let sum = 0, dbl = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = digits.charCodeAt(i) - 48;
    if (dbl) { d *= 2; if (d > 9) d -= 9; }
    sum += d;
    dbl = !dbl;
  }
  return sum % 10 === 0;
}

/**
 * Validate an expiry month/year (MM, YY or YYYY) is in the future.
 * @param {number|string} month @param {number|string} year
 * @returns {boolean}
 */
export function isValidExpiry(month, year) {
  const m = Number(month);
  let y = Number(year);
  if (!Number.isInteger(m) || m < 1 || m > 12) return false;
  if (!Number.isInteger(y)) return false;
  if (y < 100) y += 2000;
  const now = new Date();
  const exp = new Date(y, m); // first day of month AFTER expiry
  return exp > now;
}

/** @param {string} cvv @returns {boolean} */
export function isValidCVV(cvv) {
  return typeof cvv === 'string' && /^\d{3,4}$/.test(cvv);
}

/**
 * Full card-object validation, aggregating the pure checks above.
 * @param {{ number: string, month: (number|string), year: (number|string), cvv: string }} card
 * @returns {{ ok: boolean, reason?: string }}
 */
export function validateCard(card) {
  if (!card || typeof card !== 'object') return { ok: false, reason: 'কার্ডের তথ্য নেই।' };
  if (!luhnCheck(card.number)) return { ok: false, reason: 'কার্ড নম্বর সঠিক নয়।' };
  if (!isValidExpiry(card.month, card.year)) return { ok: false, reason: 'কার্ডের মেয়াদ সঠিক নয়।' };
  if (!isValidCVV(card.cvv)) return { ok: false, reason: 'CVV সঠিক নয়।' };
  return { ok: true };
}

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */

/**
 * Initiate a card payment (mock).
 * Test hook: a card number ending in 0002 is always DECLINED (like real sandbox test cards).
 * @param {number} amount                       - Amount in BDT, > 0.
 * @param {string} orderId                      - Your internal order/booking id.
 * @param {{ number: string, month: (number|string), year: (number|string), cvv: string }} card
 * @param {{ simulateTimeout?: boolean }} [opts]
 * @returns {Promise<{ status: 'SUCCESS', transactionId: string, amount: number, orderId: string, method: string, demo: boolean, processedAt: string }>}
 * @throws {PaymentError} code = 'INVALID_INPUT' | 'CARD_DECLINED' | 'TIMEOUT'
 */
export async function initiatePayment(amount, orderId, card, opts) {
  const timeout = _guardTimeout(opts);
  if (timeout) return timeout;

  if (typeof amount !== 'number' || !Number.isFinite(amount) || amount <= 0) {
    throw new PaymentError('INVALID_INPUT', 'পরিমাণ সঠিক নয়।');
  }
  if (typeof orderId !== 'string' || !orderId.trim()) {
    throw new PaymentError('INVALID_INPUT', 'Order ID প্রয়োজন।');
  }
  const check = validateCard(card);
  if (!check.ok) throw new PaymentError('INVALID_INPUT', check.reason);

  await _delay();

  const last4 = card.number.replace(/[\s-]/g, '').slice(-4);
  if (last4 === '0002') {
    throw new PaymentError('CARD_DECLINED', 'কার্ড প্রত্যাখ্যাত হয়েছে (insufficient funds).');
  }

  return {
    status: 'SUCCESS',
    transactionId: _txnId(),
    amount,
    orderId,
    method: /^4/.test(last4) ? 'visa' : 'card',
    demo: SERVICE_CONFIG.MOCK,     // UI shows "Demo Mode" badge when true
    processedAt: new Date().toISOString(),
  };
}

/**
 * Initiate a mobile-wallet payment (mock). Separate from cards on purpose — no Luhn here.
 * @param {number} amount
 * @param {string} orderId
 * @param {'bkash'|'nagad'|'rocket'} method
 * @param {string} msisdn                        - Payer wallet number (01XXXXXXXXX).
 * @param {{ simulateTimeout?: boolean }} [opts]
 * @returns {Promise<{ status: 'SUCCESS', transactionId: string, amount: number, orderId: string, method: string, demo: boolean, processedAt: string }>}
 * @throws {PaymentError} code = 'INVALID_INPUT' | 'TIMEOUT'
 */
export async function initiateWalletPayment(amount, orderId, method, msisdn, opts) {
  const timeout = _guardTimeout(opts);
  if (timeout) return timeout;

  if (typeof amount !== 'number' || amount <= 0) throw new PaymentError('INVALID_INPUT', 'পরিমাণ সঠিক নয়।');
  if (typeof orderId !== 'string' || !orderId.trim()) throw new PaymentError('INVALID_INPUT', 'Order ID প্রয়োজন।');
  if (!['bkash', 'nagad', 'rocket'].includes(method)) throw new PaymentError('INVALID_INPUT', 'ওয়ালেট মেথড সঠিক নয়।');
  if (!/^01[3-9]\d{8}$/.test(String(msisdn).replace(/[\s-]/g, ''))) {
    throw new PaymentError('INVALID_INPUT', 'সঠিক ওয়ালেট নম্বর দিন।');
  }

  await _delay();

  return {
    status: 'SUCCESS',
    transactionId: _txnId(),
    amount,
    orderId,
    method,
    demo: SERVICE_CONFIG.MOCK,
    processedAt: new Date().toISOString(),
  };
}
