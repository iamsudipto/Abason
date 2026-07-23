// js/authService.js — username+password auth. Supabase নিজে email/phone-কেই identifier হিসেবে
// চেনে (username কোনো native auth concept না), তাই signup-এ email বা phone যেটা দেওয়া হয় সেটাই
// আসল identifier হিসেবে ব্যবহার হয়; login-এর সময় username দিয়ে resolve_login_identifier() RPC
// কল করে সেই email/phone বের করে, তারপর signInWithPassword() কল হয়।
const AuthSvc = {
  // identifier: {email} অথবা {phone} — ঠিক একটাই থাকবে, signup ফর্ম যেটা পাঠাবে সেটাই
  async signUp(identifier, password, meta) {
    const payload = identifier.email
      ? { email: identifier.email, password, options: { data: meta } }
      : { phone: identifier.phone, password, options: { data: meta } };
    const { data, error } = await abashonDB.auth.signUp(payload);
    if (error) throw error;
    return data;
  },

  async signInWithUsername(username, password) {
    const { data: rows, error: rErr } = await abashonDB.rpc('resolve_login_identifier', { p_username: username });
    if (rErr) throw rErr;
    const row = rows && rows[0];
    if (!row || (!row.email && !row.phone)) throw new Error('এই username দিয়ে কোনো account পাওয়া যায়নি।');
    const payload = row.email ? { email: row.email, password } : { phone: row.phone, password };
    const { data, error } = await abashonDB.auth.signInWithPassword(payload);
    if (error) throw new Error('ভুল username অথবা password।');
    return data;
  },

  async signOut() {
    await abashonDB.auth.signOut();
  },

  // session object আগের মতোই shaped (session.user, session.loc, session.nidMask) — app.js-এর
  // বাকি অংশে কোনো rename লাগবে না।
  async getCurrentProfile(retries=2){
    const { data: { user } } = await abashonDB.auth.getUser();
    if (!user) return null;
    const { data: profile } = await abashonDB
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();
    if (!profile) {
      if(retries>0){ await new Promise(r=>setTimeout(r,400)); return this.getCurrentProfile(retries-1); }
      return null;
    }
    return {
      id: profile.id,
      name: profile.name,
      user: profile.username,
      phone: profile.phone,
      role: profile.role,
      loc: profile.location,
      nidMask: profile.nid_mask,
      email: user.email,
      isAdmin: !!profile.is_admin,
      // Owner/buyer verification system — set ONLY by send-otp/verify-otp/verify-face
      // edge functions (service role); never trust/derive these client-side.
      phoneVerified: !!profile.phone_verified,
      nidNumber: profile.nid_number || null,
      nidImagePath: profile.nid_image_path || null,
      faceVerified: !!profile.face_verified,
      faceVerificationScore: profile.face_verification_score,
      noShowCount: profile.no_show_count || 0,
      bookingSuspendedUntil: profile.booking_suspended_until || null
    };
  }
};
