// js/authService.js
const AuthSvc = {
  async signUp({ name, username, email, phone, role, loc, nidMask, password }) {
    const { data, error } = await abashonDB.auth.signUp({ email, password });
    if (error) throw error;

    const userId = data.user.id;
    const { error: profileErr } = await abashonDB
      .from('profiles')
      .insert({ id: userId, name, username, phone, role, location: loc, nid_mask: nidMask });
    if (profileErr) throw profileErr;

    return data;
  },

  async signIn(email, password) {
    const { data, error } = await abashonDB.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  },

  async signOut() {
    await abashonDB.auth.signOut();
  },

  // Returns a session object shaped exactly like the old localStorage session
  // (session.user, session.loc, session.nidMask) so the rest of app.js needs no renaming.
  async getCurrentProfile() {
    const { data: { user } } = await abashonDB.auth.getUser();
    if (!user) return null;
    const { data: profile } = await abashonDB
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();
    if (!profile) return null;
    return {
      id: profile.id,
      name: profile.name,
      user: profile.username,
      phone: profile.phone,
      role: profile.role,
      loc: profile.location,
      nidMask: profile.nid_mask,
      email: user.email
    };
  }
};