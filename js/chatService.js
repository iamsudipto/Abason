// js/chatService.js — Owner ↔ Buyer সরাসরি চ্যাট (client wrapper)
//
// Backend: conversations + chat_messages টেবিল (RLS: শুধু participant), open_conversation RPC
// (buyer-এর phone_verified লাগে — Module 1 নীতি), DB trigger-এ ২০ msg/min rate limit,
// read_at শুধু প্রাপক সেট করতে পারে। এই ফাইলটা শুধু ডেটা লেয়ার — UI app.js-এ।

class ChatError extends AppError {
  constructor(code, message) { super(code, message); this.name = 'ChatError'; }
}

function _chatErrFromDb(error, fallback) {
  const msg = (error && error.message) || '';
  const m = msg.match(/^([A-Z_]+):\s*(.+)$/);
  if (m) return new ChatError(m[1], m[2]);
  return new ChatError('DB_ERROR', fallback || msg || 'কিছু একটা সমস্যা হয়েছে।');
}

const ChatSvc = {
  /** চ্যাট খোলা/খুঁজে বের করা — returns conversation id. PHONE_VERIFY_REQUIRED হলে UI verify modal খুলবে। */
  async openConversation(propertyId) {
    const { data, error } = await abashonDB.rpc('open_conversation', { prop_id: propertyId });
    if (error) throw _chatErrFromDb(error, 'চ্যাট খোলা যায়নি।');
    return data; // bigint id
  },

  /** conversation নিজের তালিকা থেকে লুকানো (hard-delete নয় — soft, per-user)। নতুন মেসেজ এলে ফিরে আসবে। */
  async hide(conversationId) {
    const { data, error } = await abashonDB.rpc('hide_conversation', { conv_id: conversationId });
    if (error) throw _chatErrFromDb(error, 'কথোপকথন লুকানো যায়নি।');
    return data === true;
  },

  /** আমার সব conversation, নতুন মেসেজ আগে। প্রতিটাতে unread count আলাদা কোয়েরি না করে বাল্ক আনা হয়। */
  async myConversations() {
    const _uid = (await abashonDB.auth.getUser()).data.user?.id || '';
    const { data, error } = await abashonDB
      .from('conversations')
      .select('id,property_id,buyer_id,owner_id,buyer_name,owner_name,last_message_at,properties(title,area,city)')
      .not('hidden_by', 'cs', `{${_uid}}`)   // নিজে যেগুলো hide করেছি বাদ (soft-hide)
      .order('last_message_at', { ascending: false });
    if (error) throw _chatErrFromDb(error, 'কথোপকথন লোড করা যায়নি।');
    const convos = data || [];
    if (!convos.length) return convos;
    // unread per convo (একটা কোয়েরিতে): আমার না-পড়া, অন্যের পাঠানো
    const { data: unread } = await abashonDB
      .from('chat_messages')
      .select('conversation_id')
      .is('read_at', null)
      .neq('sender_id', (await abashonDB.auth.getUser()).data.user?.id || '');
    const counts = {};
    (unread || []).forEach(r => { counts[r.conversation_id] = (counts[r.conversation_id] || 0) + 1; });
    convos.forEach(c => c.unread = counts[c.id] || 0);
    return convos;
  },

  /** এক থ্রেডের মেসেজ (সর্বশেষ ১০০), পুরনো→নতুন। sinceId দিলে শুধু নতুনগুলো (polling-এর জন্য)। */
  async messages(conversationId, sinceId) {
    let q = abashonDB.from('chat_messages')
      .select('id,sender_id,body,created_at,read_at')
      .eq('conversation_id', conversationId)
      .order('id', { ascending: true }).limit(100);
    if (sinceId) q = q.gt('id', sinceId);
    const { data, error } = await q;
    if (error) throw _chatErrFromDb(error, 'মেসেজ লোড করা যায়নি।');
    return data || [];
  },

  async send(conversationId, body) {
    const text = (body || '').trim();
    if (!text) throw new ChatError('INVALID_INPUT', 'কিছু লিখুন।');
    if (text.length > 2000) throw new ChatError('INVALID_INPUT', 'মেসেজ সর্বোচ্চ ২০০০ অক্ষর।');
    const { data: { user } } = await abashonDB.auth.getUser();
    if (!user) throw new ChatError('UNAUTHENTICATED', 'আগে লগইন করুন।');
    const { data, error } = await abashonDB
      .from('chat_messages')
      .insert({ conversation_id: conversationId, sender_id: user.id, body: text })
      .select('id,sender_id,body,created_at').single();
    if (error) throw _chatErrFromDb(error, 'মেসেজ পাঠানো যায়নি।');
    return data;
  },

  /** থ্রেড খোলার সময়: অন্যের পাঠানো unread গুলো read মার্ক (trigger নিশ্চিত করে শুধু read_at বদলায়)। */
  async markRead(conversationId) {
    const { data: { user } } = await abashonDB.auth.getUser();
    if (!user) return;
    await abashonDB.from('chat_messages')
      .update({ read_at: new Date().toISOString() })
      .eq('conversation_id', conversationId)
      .neq('sender_id', user.id)
      .is('read_at', null);
  },

  async unreadTotal() {
    const { data, error } = await abashonDB.rpc('my_unread_count');
    if (error) return 0;
    return Number(data) || 0;
  },
};
