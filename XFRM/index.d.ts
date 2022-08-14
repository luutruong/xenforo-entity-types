import {XFEntity} from '..';

export namespace XFRMEntity {
  export interface Category {
    allow_commercial_external: boolean;
    allow_external: boolean;
    allow_fileless: boolean;
    allow_local: boolean;
    can_add: boolean;
    can_upload_images: boolean;
    custom_fields: XFEntity.CustomField[];
    description: string;
    display_order: number;
    enable_support_url: boolean;
    enable_versioning: boolean;
    last_resource_id: number;
    last_resource_title: string;
    last_update: number;
    min_tags: number;
    parent_category_id: number;
    prefix: XFEntity.Prefix[];
    resource_category_id: number;
    resource_count: number;
    title: string;
    view_url: string;
  }

  export interface Resource {
    alt_support_url: string;
    can_download: boolean;
    can_edit: boolean;
    can_edit_icon: boolean;
    can_edit_tags: boolean;
    can_hard_delete: boolean;
    can_soft_delete: boolean;
    can_view_description_attachments: boolean;

    Category?: Category;

    currency: string;
    custom_fields: XFEntity.CustomFieldValue;
    download_count: number;
    external_url: string;
    icon_url: string | null;
    is_watching: boolean;
    last_update: number;

    prefix?: string;
    prefix_id: number;

    price: string;
    rating_avg: number;
    rating_count: number;
    rating_weighted: number;
    resource_category_id: number;
    resource_date: number;
    resource_id: number;
    resource_state: XFEntity.VisibilityState;
    resource_type: 'download' | 'external_purchase' | 'fileless';
    tag_line: string;
    tags: string[];
    title: string;
    User: XFEntity.User | null;
    user_id: number;
    username: string;
    version: string;
    view_count: number;
    view_url: string;
  }

  export interface ResourceUpdate extends XFEntity.ReactionData {
    attach_count: number;
    can_edit: boolean;
    can_hard_delete: boolean;
    can_soft_delete: boolean;
    can_view_attachments: boolean;
    last_edit_date: boolean;
    message: string;
    message_parsed: string;
    message_state: XFEntity.VisibilityState;
    post_date: number;
    reaction_score: number;
    resource_id: number;
    resource_update_id: number;
    title: string;
    view_url: string;
    warning_message: string;
  }

  export interface ResourceReview {
    author_response: string;
    can_author_reply: boolean;
    can_hard_delete: boolean;
    can_soft_delete: boolean;
    custom_fields: XFEntity.CustomFieldValue;
    is_anonymous: boolean;
    message: string;
    rating: number;
    rating_date: number;
    rating_state: XFEntity.VisibilityState;
    Resource?: Resource | null;
    resource_id: number;
    resource_rating_id: number;
    resource_version_id: number;
    User: XFEntity.User | null;
    user_id: number;
    version_string: string;
    view_url: string;
  }

  export interface ResourceVersion {
    can_download: boolean;
    can_hard_delete: boolean;
    can_soft_delete: boolean;
    download_count: number;
    download_url: string;
    rating_avg: number;
    rating_count: number;
    release_date: number;
    Resource?: Resource | null;
    resource_id: number;
    resource_version_id: number;
    version_state: XFEntity.VisibilityState;
    version_string: string;
    view_url: string;
  }
}
