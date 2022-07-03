export type XFEntityNodeTypeId = 'Category' | 'Forum' | 'LinkForum' | 'Page' | 'SearchForum';
export type XFEntityUserAvatarUrls = {
  o: string | null;
  s: string | null;
  m: string | null;
  l: string | null;
  h: string | null;
};
export type XFEntityState = 'visible' | 'moderated' | 'deleted';

// Node, Forum
export interface XFEntityBaseNode {
  node_id: number;
  title: string;
  node_type_id: XFEntityNodeTypeId;
}

export interface XFEntityNode extends XFEntityBaseNode {
  breadcrumbs: XFEntityBaseNode[];
  display_in_list: boolean;
  display_order: number;
  description: string;
  node_name: string | null;
  parent_node_id: number;
  view_url: string;
}

export interface XFEntityForum extends XFEntityNode {
  node_type_id: 'Forum';
  type_data: {
    allow_posting: boolean;
    can_create_thread: boolean;
    can_upload_attachment: boolean;
    discussion_count: number;
    is_unread: boolean;
    message_count: number;
    min_tags: number;
    require_prefix: boolean;
  };
}

// Thread
export interface XFEntityThread {
  thread_id: number;
  title: string;
  user_id: number;
  username: string;
  post_date: number;
  User: XFEntityUser;
  first_post_id: number;
  FirstPost: XFEntityPost;
  LastPost?: XFEntityPost;
  
  // perms
  can_edit: boolean;
  can_edit_tags: boolean;
  can_hard_delete: boolean;
  can_watch: boolean;
  can_reply: boolean;
  can_soft_delete: boolean;
  can_upload_attachments: boolean;
  can_view_attachments: boolean;
  can_ignore: boolean;
  can_report: boolean;

  is_watching: boolean;
  is_ignored: boolean;
  is_unread: boolean;

  reply_count: number;
  view_count: number;
  view_url: string;
  tags: string[];
  prefix: string;
  Forum?: XFEntityForum;
  discussion_state: XFEntityState;
  discussion_type: string;
  discussion_open: boolean;
  custom_fields: {[key: string]: any};

  // last post
  last_post_date: number;
  last_post_id: number;
  last_post_user_id: number;
  last_post_username: string;
  sticky: boolean;
}

export interface XFEntityThreadPrefixGroup {
  display_order: number;
  prefix_group_id: number;
  title: string;
}

export interface XFEntityThreadPrefix {
  description: string;
  display_order: number;
  is_usable: boolean;
  prefix_group_id: number;
  prefix_id: number;
  title: string;
}

// User
export interface XFEntityBaseUser {
  user_id: number;
  username: string;
  avatar_urls: XFEntityUserAvatarUrls;
}

export interface XFEntityUser extends XFEntityBaseUser {
  email: string;
  register_date: number;
  user_title: string;
  can_start_converse: boolean;
  can_post_profile: boolean;
  can_upload_avatar: boolean;
  can_view_profile: boolean;
  can_converse: boolean;
  can_be_reported: boolean;
  can_follow: boolean;
  is_followed: boolean;
  is_staff: boolean;
  is_banned: boolean;
  is_ignored: boolean;
  message_count: number;
  activity_visible: boolean;
  last_activity: number;
  view_url: string;

  // @since2021102300
  reaction_score: number;
  trophy_points: number;

  // @since2021110500
  user_state: 'valid' | 'email_confirm' | 'email_confirm_edit' | 'moderated' | 'email_bounce' | 'rejected' | 'disabled';
  profile_banner_urls: {
    l: string | null;
    m: string | null;
  };
  location: string;
}

// Post
export interface XFEntityPost extends XFEntityReactionData {
  post_id: number;
  user_id: number;
  username: string;
  User: XFEntityUser | null;
  message: string;
  message_parsed: string;
  thread_id: number;
  position: number;
  reaction_score: number;
  can_report: boolean;
  can_soft_delete: boolean;
  is_ignored: boolean;
  post_date: number;
  Attachments: XFEntityAttachment[];
  embed_metadata: {[key: string]: any};
  view_url: string;

  message_state: XFEntityState;
  Thread: XFEntityThread;
}

// Attachment
export interface XFEntityAttachment {
  attachment_id: number;
  width: number;
  height: number;
  thumbnail_width: number;
  thumbnail_height: number;
  direct_url: string;
  thumbnail_url: string;
  filename: string;
  file_size: number;
  is_audio: boolean;
  is_video: boolean;
  attach_date: number;
  content_id: number;
  content_type: string;
  view_count: number;
}

// UserAlert
export interface XFEntityNotification {
  alert_id: number;
  alert_text: string;
  content_type: string;
  content_id: number;
  event_date: number;
  is_unviewed: boolean;
  user_id: number;
  username: string;
  User: XFEntityUser;
  view_date: number;
  action: string;
  is_unread: boolean;
  read_date: number;
}

// Conversation
export interface XFEntityConversation {
  can_edit: boolean;
  can_invite: boolean;
  can_reply: boolean;
  can_upload_attachment: boolean;
  conversation_id: number;
  conversation_open: boolean;
  first_message_id: number;
  is_starred: boolean;
  is_unread: boolean;
  last_message_date: number;
  last_message_id: number;
  last_message_user_id: number;
  title: string;
  user_id: number;
  username: string;
  Starter: XFEntityUser;
  LastMessage?: XFEntityConversationMessage | null;
  start_date: number;
  open_invite: boolean;
  recipient_count: number;
  recipients: {[key: number]: string};
  reply_count: number;
  view_url: string;
}

export interface XFEntityConversationMessage extends XFEntityReactionData {
  attach_count: number;
  can_edit: boolean;
  embed_metadata: {[key: string]: any};
  is_unread: boolean;
  message_id: number;
  user_id: number;
  username: string;
  User: XFEntityUser;
  conversation_id: number;
  message_date: number;
  message_parsed: string;
  reaction_score: number;
  view_url: string;
  message_state: XFEntityState;
  Conversation: XFEntityConversation;
}

// ProfilePost
export interface XFEntityProfilePost extends XFEntityReactionData {
  profile_post_id: number;
  profile_user_id: number;

  can_comment: boolean;
  can_edit: boolean;
  can_ignore: boolean;
  can_soft_delete: boolean;
  can_view_attachments: boolean;

  comment_count: number;
  is_ignored: boolean;
  message: string;
  message_parsed: string;
  post_date: number;
  user_id: number;
  username: string;
  User: XFEntityUser | null;
  view_url: string;
  message_state: XFEntityState;
}

export interface XFEntityProfilePostComment extends XFEntityReactionData {
  can_edit: boolean;
  can_hard_delete: boolean;
  can_ignore: boolean;
  can_soft_delete: boolean;
  can_view_attachments: boolean;

  comment_date: number;
  is_ignored: boolean;
  message: string;
  message_parsed: string;
  profile_post_comment_id: number;
  profile_post_id: number;
  User: XFEntityUser | null;
  user_id: number;
  username: string;
  view_url: string;
  message_state: XFEntityState;
  embed_metadata: {[key: string]: any};
}

// Reactions
export interface XFEntityReactionContent {
  reaction_content_id: number;
  reaction_id: number;
  content_type: string;
  content_id: number;
  reaction_user_id: number;
  reaction_date: number;
  ReactionUser: XFEntityUser | null;
}

export interface XFEntityReactionData {
  can_react: boolean;
  is_reacted_to: boolean;
  visitor_reaction_id?: number;
  tapi_reactions: Array<{
    image: string;
    total: number;
  }>
}

export interface XFPaginationData {
  current_page: number
  last_page: number
  per_page: number
  shown: number
  total: number
}