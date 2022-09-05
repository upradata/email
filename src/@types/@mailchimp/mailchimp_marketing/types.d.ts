export interface Config {
    apiKey?: string | undefined;
    accessToken?: string | undefined;
    server?: string | undefined;
}
export interface Options {
    skipMergeValidation: boolean;
}
export declare type Status = 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';
export interface Body {
    status?: Status | undefined;
    email_type?: 'html' | 'text' | undefined;
    merge_fields?: Record<string, any> | undefined;
    interests?: Record<string, any> | undefined;
    language?: string | undefined;
    vip?: boolean | undefined;
    location?: {
        latitude: number;
        logitude: number;
    } | undefined;
    marketing_permissions?: Array<{
        marketing_permission_id: string;
        enabled: boolean;
    }> | undefined;
    ip_signup?: string | undefined;
    timestamp_signup?: string | undefined;
    ip_opt?: string | undefined;
    timestamp_opt?: string | undefined;
}
export interface AddListMemberBody extends Body {
    email_address: string;
    tags?: string[] | undefined;
}
export interface UpdateListMemberBody extends Body {
    email_address?: string | undefined;
}
export interface SetListMemberBody extends Body {
    email_address: string;
    status_if_new: Status;
}


export interface CreateListBody extends Body {
    name: string;
    contact: Contact;
    permission_reminder: string;
    email_type_option: boolean;
    campaign_defaults: { from_name: string; from_email: string; subject: string; language: string; };
    use_archive_bar?: boolean;
    notify_on_subscribe?: string;
    notify_on_unsubscribe?: string;
    double_optin?: boolean;
    marketing_permissions?: boolean;
}
export type Member = {
    emailAddress?: string;

    emailType?: string;

    status?: string;

    mergeFields?: object;

    interests?: object;

    language?: string;

    vip?: boolean;

    location?: object;

    ipSignup?: string;

    timestampSignup?: string;

    ipOpt?: string;

    timestampOpt?: string;
};


export interface BatchListMembersBody extends Body {
    members: Array<Member>;
    updateExisting?: boolean;
    syncTags?: boolean;
}

export interface CreateSegmentBody {
    name: string;
    options?: {
        match?: 'any' | 'all';
        conditions?: Array<{
            field: 'EMAIL';
            op: 'contains';
            value: string; // email address
        }>;
    };
}

export declare type StatusTag = 'active' | 'inactive';
export interface TagBody {
    name: string;
    status: StatusTag;
}
export interface MemberTagsBody {
    tags: TagBody[];
}

export interface Contact {
    company: string;
    address1: string;
    address2?: string;
    phone?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}


export interface SuccessResponse {
    id: string;
    _links: Links[];
    status?: string;
}

export interface MemberSuccessResponse extends SuccessResponse {
    email_address: string;
    unique_email_id: string;
    contact_id: string;
    full_name: string;
    web_id: number;
    email_type: string;
    status: string;
    unsubscribe_reason: string;
    consents_to_one_to_one_messaging: boolean;
    merge_fields: Record<string, any>;
    interests: Record<string, any>;
    stats: MemberStats;
    ip_signup: string;
    timestamp_signup: string;
    ip_opt: string;
    timestamp_opt: string;
    member_rating: string;
    last_changed: string;
    language: string;
    vip: boolean;
    email_client: string;
    location: FullMemberLocation;
    marketing_permissions: MemberMarketingPermissions[];
    last_note: MemberLastNote;
    source: string;
    tags_count: number;
    tags: Tags[];
    list_id: string;
}
export interface MemberStats {
    avg_open_rate: number;
    avg_click_rate: number;
    ecommerce_data: MemberEcommerceData;
}
export interface MemberEcommerceData {
    total_revenue: number;
    number_of_orders: number;
    currency_code: number;
}
export interface MemberLocation {
    latitude: number;
    logitude: number;
}
export interface FullMemberLocation extends MemberLocation {
    gmtoff: number;
    dstoff: number;
    country_code: string;
    timezone: string;
    region: string;
}
export interface MemberMarketingPermissions extends MemberMarketingPermissionsInput {
    text: string;
}
export interface MemberMarketingPermissionsInput {
    marketing_permission_id: string;
    enabled: boolean;
}
export interface MemberLastNote {
    note_id: number;
    created_at: string;
    created_by: string;
    note: string;
}
export interface Tags {
    id: number;
    name: string;
}
export declare type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export interface Links {
    rel: string;
    href: string;
    method: HttpMethod;
    targetSchema: string;
    schema: string;
}


export interface ErrorResponse {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
}
