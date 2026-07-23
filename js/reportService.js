// js/reportService.js — Module 4 (part): "Report this user" -> admin review queue.
//
// Never an automated ban trigger — every report lands in `reports` (status='open') for a
// human admin to review via ReportSvc.adminList()/adminResolve(). No-show tracking and
// booking rate limits (the rest of Module 4) are enforced directly in Postgres — see the
// enforce_booking_limits / handle_no_show triggers in the migration; the UI just needs to
// surface the RATE_LIMIT / BOOKING_SUSPENDED error codes those triggers raise.

class ReportError extends AppError {
  constructor(code, message) { super(code, message); this.name = 'ReportError'; }
}

const ReportSvc = {
  // AKSIS Phase 7 — সন্দেহজনক listing রিপোর্ট (Section 24)। reported_id NOT NULL বলে
  // property-এর owner_id স্বয়ংক্রিয়ভাবে ব্যবহার হয় — client কোনো user-id সরবরাহ করে না।
  async reportListing(propertyId, category, reason, files) {
    if (!reason || !reason.trim()) throw new ReportError('INVALID_INPUT', 'কারণ লিখুন।');
    const { data: { user } } = await abashonDB.auth.getUser();
    if (!user) throw new ReportError('UNAUTHENTICATED', 'লগইন করুন।');
    const { data: prop, error: propErr } = await abashonDB.from('properties').select('owner_id').eq('id', propertyId).maybeSingle();
    if (propErr || !prop) throw new ReportError('NOT_FOUND', 'এই লিস্টিং পাওয়া যায়নি।');
    const evidence_paths = [];
    for (const file of (files || [])) {
      if (file.size > 10 * 1024 * 1024) continue; // ১০MB cap — ticket-attachment-এর একই সীমা
      const path = `${user.id}/reports/${Date.now()}-${file.name}`;
      const { error: upErr } = await abashonDB.storage.from('user-documents').upload(path, file);
      if (!upErr) evidence_paths.push(path);
    }
    const { data, error } = await abashonDB.from('reports').insert({
      reporter_id: user.id, reported_id: prop.owner_id, listing_id: propertyId,
      category: category || 'other', reason: reason.trim(), evidence_paths,
    }).select('id,status,created_at').single();
    if (error) throw new ReportError('SAVE_FAILED', 'Report জমা দেওয়া যায়নি।');
    return data;
  },
  /**
   * @param {string} reportedUserId
   * @param {string} reason
   */
  async reportUser(reportedUserId, reason) {
    if (!reason || !reason.trim()) throw new ReportError('INVALID_INPUT', 'কারণ লিখুন।');
    const { data: { user } } = await abashonDB.auth.getUser();
    if (!user) throw new ReportError('UNAUTHENTICATED', 'লগইন করুন।');
    if (user.id === reportedUserId) throw new ReportError('INVALID_INPUT', 'নিজেকে report করা যাবে না।');

    const { data, error } = await abashonDB
      .from('reports')
      .insert({ reporter_id: user.id, reported_id: reportedUserId, reason: reason.trim() })
      .select('id,status,created_at').single();
    if (error) throw new ReportError('SAVE_FAILED', 'Report জমা দেওয়া যায়নি।');
    return data;
  },

  /** Reports the current user has filed. */
  async myReports() {
    const { data, error } = await abashonDB.from('reports').select('*').order('created_at', { ascending: false });
    if (error) throw new ReportError('LOAD_FAILED', 'Reports লোড করা যায়নি।');
    return data;
  },

  /** Admin-only (RLS/RPC enforces is_admin): the open review queue, with names joined in. */
  async adminListOpen() {
    const { data, error } = await abashonDB.rpc('admin_list_reports', { status_filter: 'open' });
    if (error) throw new ReportError('LOAD_FAILED', 'Queue লোড করা যায়নি।');
    return data;
  },

  /** Admin-only: mark reviewed/actioned with a note — always a human decision, never automatic. */
  async adminResolve(reportId, status, adminNote) {
    if (!['reviewed', 'actioned'].includes(status)) throw new ReportError('INVALID_INPUT', 'ভুল status।');
    const { data: { user } } = await abashonDB.auth.getUser();
    const { data, error } = await abashonDB
      .from('reports')
      .update({ status, admin_note: adminNote || null, reviewed_by: user?.id, reviewed_at: new Date().toISOString() })
      .eq('id', reportId).select().single();
    if (error) throw new ReportError('SAVE_FAILED', 'Update করা যায়নি।');
    return data;
  },
};
