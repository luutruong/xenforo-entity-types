export namespace XFEntities {
  export type NodeTypeId = 'Category' | 'Forum' | 'LinkForum' | 'Page' | 'SearchForum';
  export type UserAvatarUrls = {
    o: string | null;
    s: string | null;
    m: string | null;
    l: string | null;
    h: string | null;
  };

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
    thread_id: number;
    title: string;
    user_id: number;
    username: string;
    post_date: number;
    User: User;
    first_post_id: number;
    FirstPost: Post;
    can_watch: boolean;
    can_reply: boolean;
    can_soft_delete: boolean;
    can_upload_attachments: boolean;
    can_view_attachments: boolean;
    can_ignore: boolean;
    can_report: boolean;
    is_watching: boolean;
    reply_count: number;
    view_count: number;
    view_url: string;
    tags: string[];
    prefix: string;
    Forum?: Forum;
  }

  export interface ThreadPrefix {
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
    message_count: number;
  }

  // Post
  export interface Post {
    post_id: number;
    user_id: number;
    username: string;
    User: User;
    message: string;
    message_parsed: string;
    thread_id: number;
    position: number;
    reaction_score: number;
    can_report: boolean;
    can_react: boolean;
    can_soft_delete: boolean;
    is_ignored: boolean;
    is_reacted_to: boolean;
    visitor_reaction_id: number;
    post_date: number;
    Attachments: Attachment[];
    embed_metadata: {[key: string]: any};
  }

  // Attachment
  export interface Attachment {
    attachment_id: number;
    width: number;
    height: number;
    thumbnail_width: number;
    thumbnail_height: number;
    view_url: string;
    thumbnail_url: string;
    filename: string;
    file_size: number;
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
    conversation_id: number;
    title: string;
    user_id: number;
    username: string;
    Starter: User;
    last_message_id: number;
    last_message_date: number;
    LastMessage: ConversationMessage;
    can_upload_attachment: boolean;
    can_reply: boolean;
    start_date: number;
  }

  export interface ConversationMessage {
    message_id: number;
    user_id: number;
    username: string;
    User: User;
    conversation_id: number;
    message_date: number;
    message_parsed: string;
    can_react: boolean;
    is_reacted_to: boolean;
    visitor_reaction_id: number;
  }

  // ProfilePost
  export interface ProfilePost {
    profile_post_id: number;
    profile_user_id: number;
    can_comment: boolean;
    can_ignore: boolean;
    can_react: boolean;
    can_soft_delete: boolean;
    can_view_attachments: boolean;
    comment_count: number;
    is_ignored: boolean;
    is_reacted_to: boolean;
    visitor_reaction_id: number;
    message: string;
    message_parsed: string;
    post_date: number;
    user_id: number;
    username: string;
    User: User;
    view_url: string;
  }

  export interface ProfilePostComment {
    can_react: boolean;
    can_soft_delete: boolean;
    comment_date: number;
    is_ignored: boolean;
    is_reacted_to: boolean;
    visitor_reaction_id: number;
    message: string;
    message_parsed: string;
    profile_post_comment_id: number;
    profile_post_id: number;
    User: User;
    user_id: number;
    username: string;
  }
}
