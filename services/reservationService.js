/**
 * reservationService.js — Mock property reservation lock for Abashon.
 *
 * HARD LIMITATION (read before trusting this):
 *   This lock lives in localStorage, which is PER-BROWSER. It cannot see locks set by
 *   other users on other devices. It therefore CANNOT prevent double-booking in reality —
 *   two buyers on two laptops can both "lock" the same property. It only prevents a single
 *   browser from re-locking, and drives the countdown UI. Treat it as a UX simulation, not
 *   a concurrency guarantee.
 *
 * TODO(production):
 *   - Move the lock to a shared, authoritative store with atomic writes:
 *       * Firebase Firestore (transaction) or Realtime DB — fastest to ship, has TTL patterns.
 *       * or PostgreSQL row-level lock (SELECT ... FOR UPDATE) + a `reserved_until` column.
 *   - Push live expiry/updates to all clients via WebSocket (Socket.IO) or Firestore
 *     listeners, so every buyer sees "Reserved" instantly and the waiting list advances.
 *   - Enforce the lock server-side on the payment/booking endpoint — never rely on the
 *     client having "checked" first (a client check is advisory only).
 *   - Run expiry cleanup with a scheduled job / TTL index, not on-read in one browser.
 *   - Expected real endpoints: POST /api/reservation/lock, GET /api/reservation/:id/status,
 *     POST /api/reservation/:id/release, plus a WS channel `reservation:{propertyId}`.
 *
 * Design rules honoured:
 *   - Promise-based (even though storage is sync) so the interface matches the real API
 *     and swapping to fetch() changes nothing for callers.
 *   - Validation isolated; typed errors; auto-cleanup of expired locks; no UI logic here.
 */

'use strict';

export const SERVICE_CONFIG = { MOCK: true };

const DEFAULT_LOCK_MS = 24 * 60 * 60 * 1000; // 24 hours
const KEY_PREFIX = 'reservation_lock_';
const LATENCY_MS = [150, 400];

export class ReservationError extends Error {
  /** @param {string} code @param {string} message */
  constructor(code, message) { super(message); this.name = 'ReservationError'; this.code = code; }
}

/* ------------------------------------------------------------------ */
/* Storage shim: localStorage with in-memory fallback (never throws)   */
/* ------------------------------------------------------------------ */

const _mem = new Map();
const _storage = {
  get(key) {
    try { const v = localStorage.getItem(key); return v == null ? (_mem.get(key) ?? null) : v; }
    catch { return _mem.get(key) ?? null; }
  },
  set(key, val) {
    try { localStorage.setItem(key, val); } catch { /* private mode / disabled */ }
    _mem.set(key, val);
  },
  remove(key) {
    try { localStorage.removeItem(key); } catch { /* ignore */ }
    _mem.delete(key);
  },
};

function _delay(min = LATENCY_MS[0], max = LATENCY_MS[1]) {
  const ms = Math.floor(min + Math.random() * (max - min));
  return new Promise((res) => setTimeout(res, ms));
}

function _key(propertyId) { return KEY_PREFIX + propertyId; }

/** Read + parse a lock, auto-deleting it if expired. @returns {?{userId:string,lockedUntil:number,lockedAt:number}} */
function _readActiveLock(propertyId) {
  const raw = _storage.get(_key(propertyId));
  if (!raw) return null;
  let lock;
  try { lock = JSON.parse(raw); } catch { _storage.remove(_key(propertyId)); return null; }
  if (!lock || typeof lock.lockedUntil !== 'number' || Date.now() >= lock.lockedUntil) {
    _storage.remove(_key(propertyId)); // auto-cleanup
    return null;
  }
  return lock;
}

/* ------------------------------------------------------------------ */
/* Validation (pure, exported)                                         */
/* ------------------------------------------------------------------ */

/** @param {*} id @returns {boolean} */
export function isValidId(id) {
  return (typeof id === 'string' && id.trim().length > 0) ||
         (typeof id === 'number' && Number.isFinite(id));
}

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */

/**
 * Lock a property for a user for a fixed window (default 24h).
 * @param {string|number} propertyId
 * @param {string|number} userId
 * @param {{ durationMs?: number, simulateTimeout?: boolean }} [opts]
 * @returns {Promise<{ locked: true, propertyId: string, userId: string, lockedUntil: number, lockedAt: number }>}
 * @throws {ReservationError} code = 'INVALID_INPUT' | 'ALREADY_LOCKED' | 'TIMEOUT'
 */
export async function lockProperty(propertyId, userId, opts) {
  if (opts && opts.simulateTimeout) {
    throw new ReservationError('TIMEOUT', 'Reservation service timed out.');
  }
  if (!isValidId(propertyId) || !isValidId(userId)) {
    throw new ReservationError('INVALID_INPUT', 'propertyId এবং userId প্রয়োজন।');
  }

  await _delay();

  const existing = _readActiveLock(propertyId);
  if (existing && String(existing.userId) !== String(userId)) {
    throw new ReservationError('ALREADY_LOCKED', 'এই প্রপার্টি বর্তমানে সংরক্ষিত (reserved)।');
  }

  const durationMs = (opts && opts.durationMs) || DEFAULT_LOCK_MS;
  const now = Date.now();
  const lock = { userId: String(userId), lockedAt: now, lockedUntil: now + durationMs };
  _storage.set(_key(propertyId), JSON.stringify(lock));

  return { locked: true, propertyId: String(propertyId), userId: lock.userId, lockedUntil: lock.lockedUntil, lockedAt: lock.lockedAt };
}

/**
 * Check the lock status of a property (auto-cleans expired locks).
 * @param {string|number} propertyId
 * @returns {Promise<{ isLocked: boolean, remainingMs: number, lockedUntil: (number|null), userId: (string|null) }>}
 * @throws {ReservationError} code = 'INVALID_INPUT'
 */
export async function checkLockStatus(propertyId) {
  if (!isValidId(propertyId)) {
    throw new ReservationError('INVALID_INPUT', 'propertyId প্রয়োজন।');
  }
  await _delay(80, 200);

  const lock = _readActiveLock(propertyId);
  if (!lock) return { isLocked: false, remainingMs: 0, lockedUntil: null, userId: null };

  return {
    isLocked: true,
    remainingMs: Math.max(0, lock.lockedUntil - Date.now()),
    lockedUntil: lock.lockedUntil,
    userId: lock.userId,
  };
}

/**
 * Release a lock. Only the holder may release it.
 * @param {string|number} propertyId
 * @param {string|number} userId
 * @returns {Promise<{ released: boolean }>}
 * @throws {ReservationError} code = 'INVALID_INPUT' | 'NOT_HOLDER' | 'NOT_LOCKED'
 */
export async function releaseLock(propertyId, userId) {
  if (!isValidId(propertyId) || !isValidId(userId)) {
    throw new ReservationError('INVALID_INPUT', 'propertyId এবং userId প্রয়োজন।');
  }
  await _delay(80, 200);

  const lock = _readActiveLock(propertyId);
  if (!lock) throw new ReservationError('NOT_LOCKED', 'কোনো সক্রিয় লক নেই।');
  if (String(lock.userId) !== String(userId)) {
    throw new ReservationError('NOT_HOLDER', 'শুধু লক-holder এটি রিলিজ করতে পারে।');
  }
  _storage.remove(_key(propertyId));
  return { released: true };
}

/**
 * Sweep and delete every expired lock in this browser. Call on app boot if you like.
 * @returns {Promise<{ cleaned: number }>}
 */
export async function cleanupExpiredLocks() {
  let cleaned = 0;
  try {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key && key.startsWith(KEY_PREFIX)) {
        const propertyId = key.slice(KEY_PREFIX.length);
        if (!_readActiveLock(propertyId)) cleaned++; // _readActiveLock removes if expired
      }
    }
  } catch { /* storage unavailable — nothing to sweep */ }
  return { cleaned };
}
