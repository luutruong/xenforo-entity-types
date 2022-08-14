export namespace XFEntity {
  export type NodeTypeId = 'Category' | 'Forum' | 'LinkForum' | 'Page' | 'SearchForum';
  export type UserAvatarUrls = {
    o: string | null;
    s: string | null;
    m: string | null;
    l: string | null;
    h: string | null;
  };
  export type VisibilityState = 'visible' | 'moderated' | 'deleted';

  // Node, Forum
  export interface BaseNode {
    node_id: number;
    title: string;
    node_type_id: NodeTypeId;
  }

  export interface Node extends BaseNode {
    breadcrumbs: BaseNode[];
    display_in_list: boolean;
    display_order: number;
    description: string;
    node_name: string | null;
    parent_node_id: number;
    view_url: string;
  }

  export interface Forum extends Node {
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
  export interface Thread {
    can_edit: boolean;
    can_edit_tags: boolean;
    can_hard_delete: boolean;
    can_ignore: boolean;
    can_lock_unlock: boolean;
    can_reply: boolean;
    can_report: boolean;
    can_soft_delete: boolean;
    can_stick_unstick: boolean;
    can_upload_attachments: boolean;
    can_view_attachments: boolean;
    can_watch: boolean;
    custom_fields: CustomFieldValue;
    discussion_open: boolean;
    discussion_state: VisibilityState;
    discussion_type: string;
    first_post_id: number;
    FirstPost?: Post | null;
    first_post_reaction_score: number;

    Forum?: Forum | null;
    highlighted_post_ids: number[];
    is_first_post_pinned: boolean;
    is_ignored: boolean;
    is_unread: boolean;
    is_watching: boolean;
    last_post_date: number;
    LastPost?: Post | null;
    last_post_id: number;
    last_post_user_id: number;
    last_post_username: string;
    node_id: number;
    post_date: number;
    prefix?: string;
    prefix_id: number;
    reply_count: number;
    sticky: boolean;
    tags: string[];
    thread_id: number;
    title: string;
    User: User | null;
    user_id: number;
    username: string;
    view_count: number;
    view_url: string;
    visitor_post_count: number;
  }

  export interface PrefixGroup {
    display_order: number;
    prefix_group_id: number;
    title: string;
  }

  export interface Prefix {
    description: string;
    display_order: number;
    is_usable: boolean;
    prefix_group_id: number;
    prefix_id: number;
    title: string;
  }

  // User
  export interface BaseUser {
    user_id: number;
    username: string;
    avatar_urls: UserAvatarUrls;
  }

  export interface User extends BaseUser {
    about: string;

    activity_visible?: boolean;
    alert_optout?: any[];
    allow_post_profile?: 'members' | 'followed' | 'none';
    allow_receive_news_feed?: 'everyone' | 'members' | 'followed' | 'none';
    allow_send_personal_conversation?: 'members' | 'followed' | 'none';
    allow_view_identities?: 'everyone' | 'members' | 'followed' | 'none';
    allow_view_profile?: 'everyone' | 'members' | 'followed' | 'none';

    can_ban: boolean;
    can_be_delete: boolean;
    can_be_reported: boolean;
    can_converse: boolean;
    can_edit: boolean;
    can_follow: boolean;
    can_ignore: boolean;
    can_post_profile: boolean;
    can_start_converse: boolean;
    can_upload_attachment_on_profile: boolean;
    can_upload_avatar: boolean;
    can_view_current_activity: boolean;
    can_view_profile: boolean;
    can_view_profile_posts: boolean;
    can_warn: boolean;
    custom_fields: CustomFieldValue;
    
    custom_title?: string;
    email?: string;
    email_on_conversation?: boolean;

    following: number[];
    ignoring: number[];
    
    is_admin?: boolean;

    is_followed: boolean;
    is_ignored: boolean;
    is_staff: boolean;
    last_activity: number;
    location: string;
    message_count: string;
    profile_banner_urls: {
      l: string | null;
      m: string | null;
    };
    question_solution_count: number;
    reaction_score: number;
    register_date: number;
    signature: string;
    
    timezone?: string;

    trophy_points: number;
    user_id: number;
    user_title: string;
    user_state: 'valid' | 'email_confirm' | 'email_confirm_edit' | 'moderated' | 'email_bounce' | 'rejected' | 'disabled';
    username: string;
    view_url: string;
    vote_score: number;
    website: string;
  }

  // Post
  export interface Post extends ReactionData {
    post_id: number;
    user_id: number;
    username: string;
    User: User | null;
    message: string;
    message_parsed: string;
    thread_id: number;
    position: number;
    reaction_score: number;
    can_report: boolean;
    can_soft_delete: boolean;
    is_ignored: boolean;
    post_date: number;
    Attachments: Attachment[];
    embed_metadata: {[key: string]: any};
    view_url: string;

    message_state: VisibilityState;
    Thread: Thread;
  }

  // Attachment
  export interface Attachment {
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
  export interface Notification {
    alert_id: number;
    alert_text: string;
    content_type: string;
    content_id: number;
    event_date: number;
    is_unviewed: boolean;
    user_id: number;
    username: string;
    User: User;
    view_date: number;
    action: string;
    is_unread: boolean;
    read_date: number;
  }

  // Conversation
  export interface Conversation {
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
    Starter: User;
    LastMessage?: ConversationMessage | null;
    start_date: number;
    open_invite: boolean;
    recipient_count: number;
    recipients: {[key: number]: string};
    reply_count: number;
    view_url: string;
  }

  export interface ConversationMessage extends ReactionData {
    attach_count: number;
    can_edit: boolean;
    embed_metadata: {[key: string]: any};
    is_unread: boolean;
    message_id: number;
    user_id: number;
    username: string;
    User: User;
    conversation_id: number;
    message_date: number;
    message_parsed: string;
    reaction_score: number;
    view_url: string;
    message_state: VisibilityState;
    Conversation: Conversation;
  }

  // ProfilePost
  export interface ProfilePost extends ReactionData {
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
    User: User | null;
    view_url: string;
    message_state: VisibilityState;
  }

  export interface ProfilePostComment extends ReactionData {
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
    User: User | null;
    user_id: number;
    username: string;
    view_url: string;
    message_state: VisibilityState;
    embed_metadata: {[key: string]: any};
  }

  // Reactions
  export interface ReactionContent {
    reaction_content_id: number;
    reaction_id: number;
    content_type: string;
    content_id: number;
    reaction_user_id: number;
    reaction_date: number;
    ReactionUser: User | null;
  }

  export interface ReactionData {
    can_react: boolean;
    is_reacted_to: boolean;
    visitor_reaction_id?: number;
    tapi_reactions: Array<{
      image: string;
      total: number;
    }>
  }

  export interface PaginationData {
    current_page: number
    last_page: number
    per_page: number
    shown: number
    total: number
  }

  export interface CustomField {
    description: string;
    display_group: string;
    display_order: number;
    field_id: string;
    field_type: string;
    match_params: {[key: string]: any};
    match_type: string;
    max_length: number;
    required: boolean;
    title: string;
  }

  export type CustomFieldValue = {[key: string]: any};
}
