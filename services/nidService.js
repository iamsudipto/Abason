/**
 * nidService.js — Mock National ID (NID) verification for Abashon.
 *
 * TODO(production):
 *   - There is NO public NID verification API in Bangladesh. Access to the Election
 *     Commission (EC) "Porichoy" / EC-NID gateway is institutional: you apply as a
 *     registered company, sign an agreement, and integrate through an approved partner
 *     (e.g. Porichoy.gov.bd, or banks/MFS providers who resell verified access).
 *   - Verification must run server-side. The NID number + a selfie/photo are sent to the
 *     gateway; it returns name, DOB, father/mother name and a match score. NEVER call it
 *     from the browser and NEVER cache raw NID data client-side.
 *   - Store only a verification token / boolean + masked NID (last 4), not the full number.
 *   - Expected real endpoint: POST /api/nid/verify  ->  { verified, name, dob, refId }.
 *
 * Design rules honoured:
 *   - Promise-based; 2–3s delay imitates the real gateway's slow response.
 *   - Format validation isolated in isValidNIDFormat (pure, unit-testable).
 *   - Typed errors for every edge case; no UI logic in the service.
 */

'use strict';

export const SERVICE_CONFIG = { MOCK: true };

const LATENCY_MS = [2000, 3000]; // EC gateway is genuinely slow; mirror that

export class NidError extends Error {
  /** @param {string} code @param {string} message */
  constructor(code, message) { super(message); this.name = 'NidError'; this.code = code; }
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function _delay(min = LATENCY_MS[0], max = LATENCY_MS[1]) {
  const ms = Math.floor(min + Math.random() * (max - min));
  return new Promise((res) => setTimeout(res, ms));
}

function _guardTimeout(opts) {
  if (opts && opts.simulateTimeout) {
    return Promise.reject(new NidError('TIMEOUT', 'NID gateway timed out. Try again later.'));
  }
  return null;
}

/** Deterministic dummy identity so the same NID always returns the same person (feels real). */
function _dummyIdentity(nid) {
  const first = ['Rahim', 'Karim', 'Sadia', 'Tanvir', 'Nusrat', 'Imran', 'Farhana', 'Sabbir'];
  const last = ['Uddin', 'Ahmed', 'Islam', 'Chowdhury', 'Khatun', 'Hossain', 'Akter', 'Rahman'];
  let h = 0;
  for (const ch of String(nid)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const name = `${first[h % first.length]} ${last[(h >>> 3) % last.length]}`;
  const year = 1970 + (h % 35);
  const month = String(1 + (h % 12)).padStart(2, '0');
  const day = String(1 + (h % 28)).padStart(2, '0');
  return { name, dob: `${year}-${month}-${day}` };
}

/* ------------------------------------------------------------------ */
/* Validation (pure, exported)                                         */
/* ------------------------------------------------------------------ */

/**
 * Validate NID format. Bangladesh uses THREE lengths in active circulation:
 *   10 digits (smart card), 13 digits (legacy paper NID — very common),
 *   17 digits (13 + 4-digit birth-year prefix).
 * @param {string} nidNumber
 * @returns {boolean}
 */
export function isValidNIDFormat(nidNumber) {
  return typeof nidNumber === 'string' && /^(\d{10}|\d{13}|\d{17})$/.test(nidNumber.trim());
}

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */

/**
 * Verify a National ID number (mock).
 * @param {string} nidNumber
 * @param {{ simulateTimeout?: boolean }} [opts]
 * @returns {Promise<{ verified: true, nid: string, maskedNid: string, name: string, dob: string, refId: string }>}
 * @throws {NidError} code = 'INVALID_INPUT' | 'NOT_FOUND' | 'TIMEOUT'
 */
export async function verifyNID(nidNumber, opts) {
  const timeout = _guardTimeout(opts);
  if (timeout) return timeout;

  const nid = typeof nidNumber === 'string' ? nidNumber.trim() : '';
  if (!isValidNIDFormat(nid)) {
    throw new NidError('INVALID_INPUT', 'NID অবশ্যই ১০, ১৩ বা ১৭ সংখ্যার হতে হবে।');
  }

  await _delay();

  // Deterministic "record not found" case so the failure branch is testable:
  // any NID beginning with "0000" is treated as unregistered.
  if (nid.startsWith('0000')) {
    throw new NidError('NOT_FOUND', 'এই NID সিস্টেমে পাওয়া যায়নি।');
  }

  const { name, dob } = _dummyIdentity(nid);
  return {
    verified: true,
    nid,
    maskedNid: nid.slice(0, 3) + '••••' + nid.slice(-3),
    name,
    dob,
    refId: 'NIDREF-' + Date.now().toString(36).toUpperCase(),
  };
}
