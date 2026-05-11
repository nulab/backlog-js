import { PassThrough } from 'stream';
import * as Types from "./types";

export namespace File {

  export type FileData = NodeFileData | BrowserFileData;

  export interface NodeFileData {
    body: PassThrough,
    url: string,
    filename: string
  }

  export interface BrowserFileData {
    body: any,
    url: string,
    blob?: () => Promise<Blob>
  }

  export interface FileInfo {
    id: number;
    name: string;
    size: number;
  }

  export interface IssueFileInfo extends FileInfo {
    createdUser: User.User;
    created: string;
  }

  export interface WikiFileInfo extends FileInfo {
    createdUser: User.User;
    created: string;
  }

  export interface PullRequestFileInfo extends FileInfo {
    createdUser: User.User;
    created: string;
  }

  export interface DocumentFileInfo extends FileInfo {
    createdUser: User.User;
    created: string;
  }
}

export namespace OAuth2 {

  export interface AccessToken {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
  }
}

export namespace Space {

  export interface Space {
    spaceKey: string;
    name: string;
    ownerId: number;
    lang: string;
    timezone: string;
    reportSendTime: string;
    textFormattingRule: Types.TextFormattingRule;
    created: string;
    updated: string;
  }

  export interface Notification {
    content: string;
    updated: string;
  }
}

export namespace Project {
  export interface Project {
    id: number;
    projectKey: string;
    name: string;
    chartEnabled: boolean;
    useResolvedForChart: boolean;
    subtaskingEnabled: boolean;
    projectLeaderCanEditProjectLeader: boolean;
    useWiki: boolean;
    useFileSharing: boolean;
    useWikiTreeView: boolean;
    useOriginalImageSizeAtWiki: boolean;
    useSubversion: boolean;
    useGit: boolean;
    textFormattingRule: Types.TextFormattingRule;
    archived: boolean;
    displayOrder: number;
    useDevAttributes: boolean;
  }

  export interface RecentlyViewedProject {
    project: Project;
    updated: string;
  }

  export interface ProjectStatus {
    id: number;
    projectId: number;
    name: string;
    color: Types.ProjectStatusColor;
    displayOrder: number;
  }

  export interface Category {
    id: number;
    projectId: number;
    name: string;
    displayOrder: number;
  }

  export interface Version {
    id: number;
    projectId: number;
    name: string;
    description?: string;
    startDate?: string;
    releaseDueDate?: string;
    archived: boolean;
    displayOrder: number;
  }

  export interface CustomFieldItem {
    id: number;
    name: string;
    displayOrder: number;
  }

  export interface CustomFieldInitialDate {
    id: number;
    shift?: number;
    date?: string;
  }

  export interface CustomField {
    id: number;
    projectId: number;
    typeId: Types.CustomFieldType;
    name: string;
    description: string;
    required: boolean;
    useIssueType: boolean;
    applicableIssueTypes: number[];
    displayOrder: number;
    version: number;
    // Numeric (typeId: 3)
    min?: number | string | null;
    max?: number | string | null;
    initialValue?: number | null;
    unit?: string | null;
    // Date (typeId: 4)
    initialDate?: CustomFieldInitialDate | null;
    // SingleList (5), MultipleList (6), CheckBox (7), Radio (8)
    items?: CustomFieldItem[];
    allowAddItem?: boolean;
    // CheckBox (7), Radio (8)
    allowInput?: boolean;
  }

  export interface SharedFile {
    id: number;
    projectId: number;
    type: string;
    dir: string;
    name: string;
    size: number;
    createdUser: User.User;
    created: string;
    updatedUser: User.User;
    updated: string;
  }
}

export namespace User {
  export interface User {
    id: number;
    userId: string;
    name: string;
    roleType: Types.RoleType;
    lang: Types.Language;
    mailAddress: string;
    lastLoginTime: string;
  }
}

export namespace Activity {

  export interface ActivityChange {
    field: string;
    field_text: string;
    new_value: string;
    old_value: string;
    type: string;
  }

  export interface ActivityAttachment {
    id: number;
    name: string;
    size: number;
  }

  export interface ActivitySharedFile {
    id: number;
    dir: string;
    name: string;
    size: number;
  }

  export interface ActivityExternalFileLink {
    name: string;
    url: string;
  }

  export interface ActivityComment {
    id: number;
    content: string;
  }

  export interface IssueCreatedContent {
    id: number;
    key_id: number;
    summary: string;
    description: string;
  }

  export interface IssueContent {
    id: number;
    key_id: number;
    summary: string;
    description: string;
    comment: ActivityComment;
    changes: ActivityChange[];
    attachments: ActivityAttachment[];
    shared_files: ActivitySharedFile[];
    external_file_links: ActivityExternalFileLink[];
  }

  export interface IssueDeletedContent {
    id: number;
    key_id: number;
  }

  export interface MultiUpdateLink {
    id: number;
    key_id: number;
    title: string;
    comment: ActivityComment;
  }

  export interface MultiUpdateChange {
    field: string;
    new_value: string;
    type: string;
  }

  export interface IssueMultiUpdateContent {
    tx_id: number;
    comment: { content: string };
    link: MultiUpdateLink[];
    changes: MultiUpdateChange[];
  }

  export interface IssueMultiCreatedLink {
    id: number;
    key_id: number;
    title: string;
  }

  export interface IssueMultiCreatedContent {
    link: IssueMultiCreatedLink[];
  }

  export interface WikiAttachment {
    id: number;
    name: string;
    size: number;
  }

  export interface WikiContent {
    id: number;
    name: string;
    content: string;
    diff: string;
    version: number;
    attachments: WikiAttachment[];
    shared_files: ActivitySharedFile[];
  }

  export interface FileContent {
    id: number;
    dir: string;
    name: string;
    size: number;
  }

  export interface SvnContent {
    rev: string;
    comment: string;
  }

  export interface GitRevision {
    rev: string;
    comment: string;
  }

  export interface GitRepository {
    id: number;
    name: string;
    description: string;
  }

  export interface GitPushedContent {
    repository: GitRepository;
    change_type: string;
    revision_type: string;
    ref: string;
    revision_count: number;
    revisions: GitRevision[];
  }

  export interface GitRepositoryCreatedContent {
    repository: GitRepository;
  }

  export interface ProjectMemberUpdatedContent {
    users: User.User[];
    group_project_activities: { id: number; type: number }[];
    comment: string;
  }

  export interface PullRequestChange {
    field: string;
    new_value: string;
    old_value: string;
  }

  export interface PullRequestIssue {
    id: number;
    key_id: number;
    issue_key?: string;
    summary: string;
    description: string;
  }

  export interface PullRequestContent {
    id: number;
    number: number;
    summary: string;
    description: string;
    comment: ActivityComment | null;
    changes: PullRequestChange[];
    issue: PullRequestIssue | null;
    repository: GitRepository;
  }

  export interface VersionContent {
    id: number;
    name: string;
    start_date: string;
    reference_date: string;
    description: string;
  }

  export interface VersionChange {
    field: string;
    new_value: string;
    old_value: string;
  }

  export interface VersionUpdatedContent {
    id: number;
    name: string;
    changes: VersionChange[];
  }

  export interface TeamSnapshot {
    id: number;
    name: string;
  }

  export interface ProjectTeamContent {
    parties: TeamSnapshot[];
  }

  export interface StatusDeletedContent {
    deletedStatus: { name: string };
    link: IssueMultiCreatedLink[];
    change: MultiUpdateChange | null;
  }

  export interface DocumentContent {
    id: string;
    title: string;
  }

  export interface DocumentMultiContent {
    documents: DocumentContent[];
  }

  export type ActivityContent =
    | IssueCreatedContent
    | IssueContent
    | IssueDeletedContent
    | IssueMultiUpdateContent
    | IssueMultiCreatedContent
    | WikiContent
    | FileContent
    | SvnContent
    | GitPushedContent
    | GitRepositoryCreatedContent
    | ProjectMemberUpdatedContent
    | PullRequestContent
    | VersionContent
    | VersionUpdatedContent
    | ProjectTeamContent
    | StatusDeletedContent
    | DocumentContent
    | DocumentMultiContent;

  export interface Activity {
    id: number;
    project: Project.Project;
    type: Types.ActivityType;
    content: ActivityContent;
    notifications: []; // Always an empty array. https://nulab.com/release-notes/backlog/backlog-will-changes-to-the-get-recent-updates-apis/
    createdUser: User.User;
    created: string;
  }
}

export namespace DiskUsage {
  export interface DiskUsage {
    issue: number;
    wiki: number;
    file: number;
    subversion: number;
    git: number;
    gitLFS: number;
  }

  export interface ProjectDiskUsage extends DiskUsage {
    projectId: number;
  }

  export interface SpaceDiskUsage extends DiskUsage {
    capacity: number;
    details: ProjectDiskUsage[];
  }
}

export namespace CommentNotification {
  export interface CommentNotification {
    id: number;
    alreadyRead: boolean;
    reason: number;
    user: User.User;
    resourceAlreadyRead: boolean;
  }
}

export namespace Document {
  export interface Document {
    id: string;
    projectId: number;
    title: string;
    plain: string;
    json: string;
    statusId: number;
    emoji: string | null;
    attachments: File.DocumentFileInfo[];
    tags: Tag[];
    createdUser: User.User;
    created: string;
    updatedUser: User.User;
    updated: string;
  }

  export interface Tag {
    id: number;
    name: string;
  }

  export interface ActiveTrashTree {
    id: string;
    children: DocumentTreeNode[];
  }

  export interface DocumentTreeNode {
    id: string;
    name?: string;
    children: DocumentTreeNode[];
    statusId?: number
    emoji?: string;
    emojiType?: string;
    updated?: string;
  }

  export interface DocumentTree {
    projectId: string;
    activeTree?: ActiveTrashTree;
    trashTree?: ActiveTrashTree;
  }
}

export namespace CustomFieldValue {
  export interface CustomFieldValueItem {
    id: number;
    name: string;
    displayOrder: number;
  }

  export interface TextCustomFieldValue {
    id: number;
    fieldTypeId: Types.CustomFieldType.Text | Types.CustomFieldType.TextArea;
    name: string;
    value: string | null;
  }

  export interface NumericCustomFieldValue {
    id: number;
    fieldTypeId: Types.CustomFieldType.Numeric;
    name: string;
    value: number | null;
  }

  export interface DateCustomFieldValue {
    id: number;
    fieldTypeId: Types.CustomFieldType.Date;
    name: string;
    value: string | null;
  }

  export interface SingleListCustomFieldValue {
    id: number;
    fieldTypeId: Types.CustomFieldType.SingleList;
    name: string;
    value: CustomFieldValueItem | null;
  }

  export interface MultipleListCustomFieldValue {
    id: number;
    fieldTypeId: Types.CustomFieldType.MultipleList;
    name: string;
    value: CustomFieldValueItem[];
  }

  export interface CheckBoxCustomFieldValue {
    id: number;
    fieldTypeId: Types.CustomFieldType.CheckBox;
    name: string;
    value: CustomFieldValueItem[];
    otherValue: string | null;
  }

  export interface RadioCustomFieldValue {
    id: number;
    fieldTypeId: Types.CustomFieldType.Radio;
    name: string;
    value: CustomFieldValueItem | null;
    otherValue: string | null;
  }

  export type CustomFieldValue =
    | TextCustomFieldValue
    | NumericCustomFieldValue
    | DateCustomFieldValue
    | SingleListCustomFieldValue
    | MultipleListCustomFieldValue
    | CheckBoxCustomFieldValue
    | RadioCustomFieldValue;
}

export namespace Issue {
  export interface IssueType {
    id: number;
    projectId: number;
    name: string;
    color: Types.IssueTypeColor;
    displayOrder: number;
    templateSummary?: string;
    templateDescription?: string;
  }

  export interface Priority {
    id: number;
    name: string;
  }

  export interface Resolution {
    id: number;
    name: string;
  }

  export interface Issue {
    id: number;
    projectId: number;
    issueKey: string;
    keyId: number;
    issueType: IssueType;
    summary: string;
    description: string;
    resolution?: Resolution;
    priority: Priority;
    status: Project.ProjectStatus;
    assignee?: User.User;
    category: Project.Category[];
    versions: Project.Version[];
    milestone: Project.Version[];
    startDate?: string;
    dueDate?: string;
    estimatedHours?: number;
    actualHours?: number;
    parentIssueId?: number;
    createdUser: User.User;
    created: string;
    updatedUser: User.User;
    updated: string;
    customFields: CustomFieldValue.CustomFieldValue[];
    attachments: File.IssueFileInfo[];
    sharedFiles: Project.SharedFile[];
    stars: Star.Star[];
  }

  export interface RecentlyViewedIssue {
    issue: Issue;
    updated: string;
  }

  export interface IssueCount {
    count: number;
  }

  export interface IssueCommentCount {
    count: number;
  }

  export interface Comment {
    id: number;
    projectId: number;
    issueId: number;
    content: string;
    changeLog: ChangeLog.IssueChangeLog[];
    createdUser: User.User;
    created: string;
    updated: string;
    stars: Star.Star[];
    notifications: CommentNotification.CommentNotification[];
  }
}

export namespace Star {
  export interface Star {
    id: number;
    comment?: string;
    url: string;
    title: string;
    presenter: User.User;
    created: string;
  }

  export interface StarCount {
    count: number;
  }
}

export namespace Wiki {
  export interface Tag {
    id: number;
    name: string;
  }

  export interface History {
    pageId: number;
    version: number;
    name: string;
    content: string;
    createdUser: User.User;
    created: string;
  }

  export interface WikiListItem {
    id: number;
    projectId: number;
    name: string;
    tags: Tag[];
    createdUser: User.User;
    created: string;
    updatedUser: User.User;
    updated: string;
  }

  export interface Wiki {
    id: number;
    projectId: number;
    name: string;
    content: string;
    tags: Tag[];
    attachments: File.WikiFileInfo[];
    sharedFiles: Project.SharedFile[];
    stars: Star.Star[];
    createdUser: User.User;
    created: string;
    updatedUser: User.User;
    updated: string;
  }

  export interface RecentlyViewedWiki {
    page: WikiListItem;
    updated: string;
  }

  export interface WikiCount {
    count: number;
  }
}

export namespace PullRequest {
  export interface Status {
    id: number;
    name: string;
  }

  export interface PullRequest {
    id: number;
    projectId: number;
    repositoryId: number;
    number: number;
    summary: string;
    description: string;
    base: string;
    branch: string;
    status: Status;
    assignee?: User.User;
    issue: Issue.Issue;
    baseCommit?: string;
    branchCommit?: string;
    mergeCommit?: string;
    closeAt?: string;
    mergeAt?: string;
    createdUser: User.User;
    created: string;
    updatedUser: User.User;
    updated: string;
    attachments: File.PullRequestFileInfo[];
    stars: Star.Star[];
  }

  export interface Comment {
    id: number;
    content: string;
    changeLog: ChangeLog.PullRequestChangeLog[]
    createdUser: User.User;
    created: string;
    updated: string;
    stars: Star.Star[];
    notifications: CommentNotification.CommentNotification[];
  }

  export interface PullRequestCount {
    count: number;
  }

  export interface PullRequestCommentCount {
    count: number;
  }
}

export namespace ChangeLog {
  export interface ChangeLog {
    field: string;
    newValue: string;
    originalValue: string;
  }

  export interface AttachmentInfo {
    id: number;
    type: string;
  }

  export interface AttributeInfo {
    id: number;
    typeId: number;
  }

  export interface NotificationInfo {
    type: string;
  }

  export interface IssueChangeLog extends ChangeLog {
    attachmentInfo: AttachmentInfo;
    attributeInfo: AttributeInfo;
    notificationInfo: NotificationInfo;
  }

  export type PullRequestChangeLog = ChangeLog;
}

export namespace Git {
  export interface GitRepository {
    id: number;
    projectId: number;
    name: string;
    description: string;
    hookUrl?: string;
    httpUrl: string;
    sshUrl: string;
    displayOrder: number;
    pushedAt?: string;
    createdUser: User.User;
    created: string;
    updatedUser: User.User;
    updated: string;
  }
}

export namespace WatchingList {
  export interface WatchingListItem {
    id: number;
    resourceAlreadyRead: boolean;
    note: string;
    type: string;
    issue: Issue.Issue;
    lastContentUpdated: string;
    created: string;
    updated: string;
  }

  export interface WatchingListCount {
    count: number;
  }
}

export namespace Team {
  export interface Team {
    id: number;
    name: string;
    members: User.User[];
    displayOrder?: number;
    createdUser: User.User;
    created: string;
    updatedUser: User.User;
    updated: string;
  }
}

export namespace Notification {
  export interface Notification {
    id: number;
    alreadyRead: boolean;
    reason: number;
    resourceAlreadyRead: boolean;
    project: Project.Project;
    issue?: Issue.Issue;
    comment?: Issue.Comment;
    pullRequest?: PullRequest.PullRequest;
    pullRequestComment?: PullRequest.Comment;
    sender: User.User;
    created: string;
  }

  export interface NotificationCount {
    count: number;
  }
}

export namespace Webhook {
  export interface Webhook {
    id: number;
    name: string;
    description: string;
    hookUrl: string;
    allEvent: boolean;
    activityTypeIds: Types.WebhookActivityId[];
    createdUser: User.User;
    created: string;
    updatedUser: User.User;
    updated: string;
  }
}

export namespace License {
  export interface License {
    active: boolean;
    attachmentLimit: number;
    attachmentLimitPerFile: number;
    attachmentNumLimit: number;
    attribute: boolean;
    attributeLimit: number;
    burndown: boolean;
    commentLimit: number;
    componentLimit: number;
    fileSharing: boolean;
    gantt: boolean;
    git: boolean;
    issueLimit: number;
    licenceTypeId: number;
    limitDate: string;
    nulabAccount: boolean;
    parentChildIssue: boolean;
    postIssueByMail: boolean;
    projectLimit: number;
    pullRequestAttachmentLimitPerFile: number;
    pullRequestAttachmentNumLimit: number;
    remoteAddress: boolean;
    remoteAddressLimit: number;
    startedOn: string;
    storageLimit: number;
    subversion: boolean;
    subversionExternal: boolean;
    userLimit: number;
    versionLimit: number;
    wikiAttachment: boolean;
    wikiAttachmentLimitPerFile: number;
    wikiAttachmentNumLimit: number;
  }
}

export namespace RateLimit {
  export interface RateLimit {
    rateLimit: ApiRateLimits;
  }

  export interface ApiRateLimits {
    read: ApiRateLimit;
    update: ApiRateLimit;
    search: ApiRateLimit;
    icon: ApiRateLimit;
  }

  export interface ApiRateLimit {
    limit: number;
    remaining: number;
    reset: number;
  }
}
