import { PassThrough } from "stream";

//#region \0rolldown/runtime.js
declare namespace types_d_exports {
  export { ActivityType, ClassicRoleType, CustomFieldType, Fetch, IssueTypeColor, Language, NormalRoleType, ProjectStatusColor, RoleType, TextFormattingRule, WebhookActivityId };
}
type TextFormattingRule = "backlog" | "markdown";
declare enum ClassicRoleType {
  Admin = 1,
  User = 2,
  Reporter = 3,
  Viewer = 4,
  GuestReporter = 5,
  GuestViewer = 6
}
declare enum NormalRoleType {
  Admin = 1,
  MemberOrGuest = 2,
  MemberOrGuestForAddIssues = 3,
  MemberOrGuestForViewIssues = 4
}
type RoleType = ClassicRoleType | NormalRoleType;
type Language = "en" | "ja" | null;
declare enum ActivityType {
  Undefined = -1,
  IssueCreated = 1,
  IssueUpdated = 2,
  IssueCommented = 3,
  IssueDeleted = 4,
  WikiCreated = 5,
  WikiUpdated = 6,
  WikiDeleted = 7,
  FileAdded = 8,
  FileUpdated = 9,
  FileDeleted = 10,
  SvnCommitted = 11,
  GitPushed = 12,
  GitRepositoryCreated = 13,
  IssueMultiUpdated = 14,
  ProjectUserAdded = 15,
  ProjectUserRemoved = 16,
  NotifyAdded = 17,
  PullRequestAdded = 18,
  PullRequestUpdated = 19,
  PullRequestCommented = 20,
  PullRequestMerged = 21,
  MilestoneCreated = 22,
  MilestoneUpdated = 23,
  MilestoneDeleted = 24,
  ProjectGroupAdded = 25,
  ProjectGroupDeleted = 26
}
type IssueTypeColor = "#e30000" | "#990000" | "#934981" | "#814fbc" | "#2779ca" | "#007e9a" | "#7ea800" | "#ff9200" | "#ff3265" | "#666665";
type ProjectStatusColor = "#ea2c00" | "#e87758" | "#e07b9a" | "#868cb7" | "#3b9dbd" | "#4caf93" | "#b0be3c" | "#eda62a" | "#f42858" | "#393939";
declare enum CustomFieldType {
  Text = 1,
  TextArea = 2,
  Numeric = 3,
  Date = 4,
  SingleList = 5,
  MultipleList = 6,
  CheckBox = 7,
  Radio = 8
}
type WebhookActivityId = number;
type Fetch = typeof fetch;
declare namespace option_d_exports {
  export { Document$1 as Document, Issue$1 as Issue, Notification$1 as Notification, OAuth2$2 as OAuth2, Order, Project$1 as Project, PullRequest$1 as PullRequest, Space$1 as Space, Team$1 as Team, User$1 as User, WatchingList$1 as WatchingList, Wiki$1 as Wiki };
}
type Order = "asc" | "desc";
declare namespace Notification$1 {
  interface GetNotificationsParams {
    minId?: number;
    maxId?: number;
    count?: number;
    order?: Order;
  }
  interface GetNotificationsCountParams {
    alreadyRead: boolean;
    resourceAlreadyRead: boolean;
  }
}
declare namespace Document$1 {
  interface GetDocumentsParams {
    projectId?: number[];
    keyword?: string;
    sort?: "created" | "updated";
    order?: Order;
    offset: number;
    count?: number;
  }
  interface AddDocumentParams {
    projectId: number;
    title?: string;
    content?: string;
    emoji?: string;
    parentId?: string;
    addLast?: boolean;
  }
}
declare namespace Space$1 {
  interface GetActivitiesParams {
    activityTypeId?: ActivityType[];
    minId?: number;
    maxId?: number;
    count?: number;
    order?: Order;
  }
  interface PutSpaceNotificationParams {
    content: string;
  }
}
declare namespace User$1 {
  interface PostUserParams {
    userId: string;
    password: string;
    name: string;
    mailAddress: string;
    roleType: RoleType;
  }
  interface PatchUserParams {
    password?: string;
    name?: string;
    mailAddress?: string;
    roleType?: RoleType;
  }
  interface GetUserActivitiesParams {
    activityTypeId?: ActivityType[];
    minId?: number;
    maxId?: number;
    count?: number;
    order?: Order;
  }
  interface GetUserStarsParams {
    minId?: number;
    maxId?: number;
    count?: number;
    order?: Order;
  }
  interface GetUserStarsCountParams {
    since?: string;
    until?: string;
  }
  interface GetRecentlyViewedParams {
    order?: Order;
    offset?: number;
    count?: number;
  }
}
declare namespace WatchingList$1 {
  interface GetWatchingListParams {
    order?: Order;
    sort?: "created" | "updated" | "issueUpdated";
    count?: number;
    offset?: number;
    resourceAlreadyRead?: boolean;
    issueId?: number[];
  }
  interface GetWatchingListCountParams {
    resourceAlreadyRead?: boolean;
    alreadyRead?: boolean;
  }
  interface PostWatchingListItemParams {
    issueIdOrKey: string | number;
    note: string;
  }
}
declare namespace Team$1 {
  interface GetTeamsParams {
    order?: Order;
    offset?: number;
    count?: number;
  }
  interface PostTeamParams {
    name: string;
    members?: number[];
  }
  interface PatchTeamParams {
    name?: string;
    members?: number[];
  }
}
declare namespace Project$1 {
  interface PostProjectParams {
    name: string;
    key: string;
    chartEnabled: boolean;
    projectLeaderCanEditProjectLeader?: boolean;
    subtaskingEnabled: boolean;
    textFormattingRule: TextFormattingRule;
  }
  interface PatchProjectParams {
    name?: string;
    key?: string;
    chartEnabled?: boolean;
    subtaskingEnabled?: boolean;
    projectLeaderCanEditProjectLeader?: boolean;
    textFormattingRule?: TextFormattingRule;
    archived?: boolean;
  }
  interface GetProjectsParams {
    archived?: boolean;
    all?: boolean;
  }
  interface DeleteProjectUsersParams {
    userId: number;
  }
  interface PostProjectAdministrators {
    userId: number;
  }
  interface DeleteProjectAdministrators {
    userId: number;
  }
  interface PostIssueTypeParams {
    name: string;
    color: IssueTypeColor;
  }
  interface PatchIssueTypeParams {
    name?: string;
    color?: IssueTypeColor;
  }
  interface DeleteIssueTypeParams {
    substituteIssueTypeId: number;
  }
  interface PostCategoriesParams {
    name: string;
  }
  interface PatchCategoriesParams {
    name: string;
  }
  interface PostVersionsParams {
    name: string;
    description?: string;
    startDate?: string;
    releaseDueDate?: string;
  }
  interface PatchVersionsParams {
    name: string;
    description?: string;
    startDate?: string;
    releaseDueDate?: string;
    archived?: boolean;
  }
  interface PostCustomFieldParams {
    typeId: CustomFieldType;
    name: string;
    applicableIssueTypes?: number[];
    description?: string;
    required?: boolean;
  }
  interface PostCustomFieldWithNumericParams extends PostCustomFieldParams {
    min?: number;
    max?: number;
    initialValue?: number;
    unit?: string;
  }
  interface PostCustomFieldWithDateParams extends PostCustomFieldParams {
    min?: string;
    max?: string;
    initialValueType?: number;
    initialDate?: string;
    initialShift?: number;
  }
  interface PostCustomFieldWithListParams extends PostCustomFieldParams {
    items?: string[];
    allowInput?: boolean;
    allowAddItem?: boolean;
  }
  interface PatchCustomFieldParams {
    name?: string;
    applicableIssueTypes?: number[];
    description?: string;
    required?: boolean;
  }
  interface PatchCustomFieldWithNumericParams extends PatchCustomFieldParams {
    min?: number;
    max?: number;
    initialValue?: number;
    unit?: string;
  }
  interface PatchCustomFieldWithDateParams extends PatchCustomFieldParams {
    min?: string;
    max?: string;
    initialValueType?: number;
    initialDate?: string;
    initialShift?: number;
  }
  interface PatchCustomFieldWithListParams extends PatchCustomFieldParams {
    items?: string[];
    allowInput?: boolean;
    allowAddItem?: boolean;
  }
  interface PostCustomFieldItemParams {
    name: string;
  }
  interface PatchCustomFieldItemParams {
    name: string;
  }
  interface GetSharedFilesParams {
    order?: Order;
    offset?: number;
    count?: number;
  }
  interface PostWebhookParams {
    name?: string;
    description?: string;
    hookUrl?: string;
    allEvent?: boolean;
    activityTypeIds?: WebhookActivityId[];
  }
  interface PatchWebhookParams {
    name?: string;
    description?: string;
    hookUrl?: string;
    allEvent?: boolean;
    activityTypeIds?: number[];
  }
  interface PostStarParams {
    issueId?: number;
    commentId?: number;
    wikiId?: number;
    pullRequestId?: number;
    pullRequestCommentId?: number;
  }
  interface PostStatusParams {
    name: string;
    color: ProjectStatusColor;
  }
  interface PatchStatusParams {
    name?: string;
    color?: ProjectStatusColor;
  }
}
declare namespace Issue$1 {
  interface PostIssueParams {
    projectId: number;
    summary: string;
    priorityId: number;
    issueTypeId: number;
    parentIssueId?: number;
    description?: string;
    startDate?: string;
    dueDate?: string;
    estimatedHours?: number;
    actualHours?: number;
    categoryId?: number[];
    versionId?: number[];
    milestoneId?: number[];
    assigneeId?: number;
    notifiedUserId?: number[];
    attachmentId?: number[];
    [customField_: string]: any;
  }
  interface PatchIssueParams {
    summary?: string;
    parentIssueId?: number;
    description?: string;
    statusId?: number;
    resolutionId?: number;
    startDate?: string;
    dueDate?: string;
    estimatedHours?: number;
    actualHours?: number;
    issueTypeId?: number;
    categoryId?: number[];
    versionId?: number[];
    milestoneId?: number[];
    priorityId?: number;
    assigneeId?: number;
    notifiedUserId?: number[];
    attachmentId?: number[];
    comment?: string;
    [customField_: string]: any;
  }
  interface GetIssuesParams {
    projectId?: number[];
    issueTypeId?: number[];
    categoryId?: number[];
    versionId?: number[];
    milestoneId?: number[];
    statusId?: number[];
    priorityId?: number[];
    assigneeId?: number[];
    createdUserId?: number[];
    resolutionId?: number[];
    parentChild?: ParentChildType;
    attachment?: boolean;
    sharedFile?: boolean;
    sort?: SortKey;
    order?: Order;
    offset?: number;
    count?: number;
    createdSince?: string;
    createdUntil?: string;
    updatedSince?: string;
    updatedUntil?: string;
    startDateSince?: string;
    startDateUntil?: string;
    dueDateSince?: string;
    dueDateUntil?: string;
    hasDueDate?: boolean;
    id?: number[];
    parentIssueId?: number[];
    keyword?: string;
    [customField_: string]: any;
  }
  enum ParentChildType {
    All = 0,
    NotChild = 1,
    Child = 2,
    NotChildNotParent = 3,
    Parent = 4
  }
  type SortKey = "issueType" | "category" | "version" | "milestone" | "summary" | "status" | "priority" | "attachment" | "sharedFile" | "created" | "createdUser" | "updated" | "updatedUser" | "assignee" | "startDate" | "dueDate" | "estimatedHours" | "actualHours" | "childIssue";
  interface GetIssueCommentsParams {
    minId?: number;
    maxId?: number;
    count?: number;
    order?: Order;
  }
  interface PostIssueCommentsParams {
    content: string;
    notifiedUserId?: number[];
    attachmentId?: number[];
  }
  interface PatchIssueCommentParams {
    content: string;
  }
  interface IssueCommentNotifications {
    notifiedUserId: number[];
  }
  interface LinkIssueSharedFilesParams {
    fileId: number[];
  }
}
declare namespace PullRequest$1 {
  interface GetPullRequestsParams {
    statusId?: number[];
    assigneeId?: number[];
    issueId?: number[];
    createdUserId?: number[];
    offset?: number;
    count?: number;
  }
  interface PostPullRequestParams {
    summary: string;
    description: string;
    base: string;
    branch: string;
    issueId?: number;
    assigneeId?: number;
    notifiedUserId?: number[];
    attachmentId?: number[];
  }
  interface PatchPullRequestParams {
    summary?: string;
    description?: string;
    issueId?: number;
    assigneeId?: number;
    notifiedUserId?: number[];
    comment?: string[];
  }
  interface GetPullRequestCommentsParams {
    minId?: number;
    maxId?: number;
    count?: number;
    order?: Order;
  }
  interface PostPullRequestCommentsParams {
    content: string;
    notifiedUserId?: number[];
  }
  interface PatchPullRequestCommentsParams {
    content: string;
  }
}
declare namespace Wiki$1 {
  interface GetWikiParams {
    projectIdOrKey: string | number;
    keyword?: string;
  }
  interface PostWikiParams {
    projectId: number;
    name: string;
    content: string;
    mailNotify?: boolean;
  }
  interface PatchWikiParams {
    name?: string;
    content?: string;
    mailNotify?: boolean;
  }
  interface GetWikisHistoryParams {
    minId?: number;
    maxId?: number;
    count?: number;
    order?: Order;
  }
}
declare namespace OAuth2$2 {
  interface Credentials {
    clientId: string;
    clientSecret: string;
  }
}
declare namespace entity_d_exports {
  export { Activity, ChangeLog, CommentNotification, DiskUsage, Document, File, Git, Issue, License, Notification, OAuth2$1 as OAuth2, Project, PullRequest, RateLimit, Space, Star, Team, User, WatchingList, Webhook, Wiki };
}
declare namespace File {
  type FileData = NodeFileData | BrowserFileData;
  interface NodeFileData {
    body: PassThrough;
    url: string;
    filename: string;
  }
  interface BrowserFileData {
    body: any;
    url: string;
    blob?: () => Promise<Blob>;
  }
  interface FileInfo {
    id: number;
    name: string;
    size: number;
  }
  interface IssueFileInfo extends FileInfo {
    createdUser: User.User;
    created: string;
  }
  interface WikiFileInfo extends FileInfo {
    createdUser: User.User;
    created: string;
  }
  interface PullRequestFileInfo extends FileInfo {
    createdUser: User.User;
    created: string;
  }
  interface DocumentFileInfo extends FileInfo {
    createdUser: User.User;
    created: string;
  }
}
declare namespace OAuth2$1 {
  interface AccessToken {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
  }
}
declare namespace Space {
  interface Space {
    spaceKey: string;
    name: string;
    ownerId: number;
    lang: string;
    timezone: string;
    reportSendTime: string;
    textFormattingRule: TextFormattingRule;
    created: string;
    updated: string;
  }
  interface Notification {
    content: string;
    updated: string;
  }
}
declare namespace Project {
  interface Project {
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
    textFormattingRule: TextFormattingRule;
    archived: boolean;
    displayOrder: number;
    useDevAttributes: boolean;
  }
  interface RecentlyViewedProject {
    project: Project;
    updated: string;
  }
  interface ProjectStatus {
    id: number;
    projectId: number;
    name: string;
    color: ProjectStatusColor;
    displayOrder: number;
  }
  interface Category {
    id: number;
    projectId: number;
    name: string;
    displayOrder: number;
  }
  interface Version {
    id: number;
    projectId: number;
    name: string;
    description?: string;
    startDate?: string;
    releaseDueDate?: string;
    archived: boolean;
    displayOrder: number;
  }
  interface CustomField {
    id: number;
    projectId: number;
    typeId: CustomFieldType;
    name: string;
    description: string;
    required: boolean;
    applicableIssueTypes: number[];
    [key: string]: any;
  }
  interface SharedFile {
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
declare namespace User {
  interface User {
    id: number;
    userId: string;
    name: string;
    roleType: RoleType;
    lang: Language;
    mailAddress: string;
    lastLoginTime: string;
  }
}
declare namespace Activity {
  interface Activity {
    id: number;
    project: Project.Project;
    type: ActivityType;
    content: any;
    notifications: [];
    createdUser: User.User;
    created: string;
  }
}
declare namespace DiskUsage {
  interface DiskUsage {
    issue: number;
    wiki: number;
    file: number;
    subversion: number;
    git: number;
    gitLFS: number;
  }
  interface ProjectDiskUsage extends DiskUsage {
    projectId: number;
  }
  interface SpaceDiskUsage extends DiskUsage {
    capacity: number;
    details: ProjectDiskUsage[];
  }
}
declare namespace CommentNotification {
  interface CommentNotification {
    id: number;
    alreadyRead: boolean;
    reason: number;
    user: User.User;
    resourceAlreadyRead: boolean;
  }
}
declare namespace Document {
  interface Document {
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
  interface Tag {
    id: number;
    name: string;
  }
  interface ActiveTrashTree {
    id: string;
    children: DocumentTreeNode[];
  }
  interface DocumentTreeNode {
    id: string;
    name?: string;
    children: DocumentTreeNode[];
    statusId?: number;
    emoji?: string;
    emojiType?: string;
    updated?: string;
  }
  interface DocumentTree {
    projectId: string;
    activeTree?: ActiveTrashTree;
    trashTree?: ActiveTrashTree;
  }
}
declare namespace Issue {
  interface IssueType {
    id: number;
    projectId: number;
    name: string;
    color: IssueTypeColor;
    displayOrder: number;
    templateSummary?: string;
    templateDescription?: string;
  }
  interface Priority {
    id: number;
    name: string;
  }
  interface Resolution {
    id: number;
    name: string;
  }
  interface Issue {
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
    customFields: Project.CustomField[];
    attachments: File.IssueFileInfo[];
    sharedFiles: Project.SharedFile[];
    stars: Star.Star[];
  }
  interface RecentlyViewedIssue {
    issue: Issue;
    updated: string;
  }
  interface IssueCount {
    count: number;
  }
  interface IssueCommentCount {
    count: number;
  }
  interface Comment {
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
declare namespace Star {
  interface Star {
    id: number;
    comment?: string;
    url: string;
    title: string;
    presenter: User.User;
    created: string;
  }
  interface StarCount {
    count: number;
  }
}
declare namespace Wiki {
  interface Tag {
    id: number;
    name: string;
  }
  interface History {
    pageId: number;
    version: number;
    name: string;
    content: string;
    createdUser: User.User;
    created: string;
  }
  interface WikiListItem {
    id: number;
    projectId: number;
    name: string;
    tags: Tag[];
    createdUser: User.User;
    created: string;
    updatedUser: User.User;
    updated: string;
  }
  interface Wiki {
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
  interface RecentlyViewedWiki {
    page: WikiListItem;
    updated: string;
  }
  interface WikiCount {
    count: number;
  }
}
declare namespace PullRequest {
  interface Status {
    id: number;
    name: string;
  }
  interface PullRequest {
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
  interface Comment {
    id: number;
    content: string;
    changeLog: ChangeLog.PullRequestChangeLog[];
    createdUser: User.User;
    created: string;
    updated: string;
    stars: Star.Star[];
    notifications: CommentNotification.CommentNotification[];
  }
  interface PullRequestCount {
    count: number;
  }
  interface PullRequestCommentCount {
    count: number;
  }
}
declare namespace ChangeLog {
  interface ChangeLog {
    field: string;
    newValue: string;
    originalValue: string;
  }
  interface AttachmentInfo {
    id: number;
    type: string;
  }
  interface AttributeInfo {
    id: number;
    typeId: number;
  }
  interface NotificationInfo {
    type: string;
  }
  interface IssueChangeLog extends ChangeLog {
    attachmentInfo: AttachmentInfo;
    attributeInfo: AttributeInfo;
    notificationInfo: NotificationInfo;
  }
  type PullRequestChangeLog = ChangeLog;
}
declare namespace Git {
  interface GitRepository {
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
declare namespace WatchingList {
  interface WatchingListItem {
    id: number;
    resourceAlreadyRead: boolean;
    note: string;
    type: string;
    issue: Issue.Issue;
    lastContentUpdated: string;
    created: string;
    updated: string;
  }
  interface WatchingListCount {
    count: number;
  }
}
declare namespace Team {
  interface Team {
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
declare namespace Notification {
  interface Notification {
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
  interface NotificationCount {
    count: number;
  }
}
declare namespace Webhook {
  interface Webhook {
    id: number;
    name: string;
    description: string;
    hookUrl: string;
    allEvent: boolean;
    activityTypeIds: WebhookActivityId[];
    createdUser: User.User;
    created: string;
    updatedUser: User.User;
    updated: string;
  }
}
declare namespace License {
  interface License {
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
declare namespace RateLimit {
  interface RateLimit {
    rateLimit: ApiRateLimits;
  }
  interface ApiRateLimits {
    read: ApiRateLimit;
    update: ApiRateLimit;
    search: ApiRateLimit;
    icon: ApiRateLimit;
  }
  interface ApiRateLimit {
    limit: number;
    remaining: number;
    reset: number;
  }
}
//#endregion
//#region src/request.d.ts
declare class Request {
  private configure;
  private readonly fetch;
  constructor(configure: {
    host: string;
    apiKey?: string;
    accessToken?: string;
    timeout?: number;
    fetch?: Fetch;
  });
  get<T>(path: string, params?: any): Promise<T>;
  post<T>(path: string, params?: any): Promise<T>;
  put<T>(path: string, params: any): Promise<T>;
  patch<T>(path: string, params: any): Promise<T>;
  delete<T>(path: string, params?: any): Promise<T>;
  request(options: {
    method: string;
    path: string;
    params?: Params | FormData;
  }): Promise<Response>;
  checkStatus(response: Response): Promise<Response>;
  parseJSON<T>(response: Response): Promise<T>;
  private toQueryString;
  get webAppBaseURL(): string;
  get restBaseURL(): string;
}
type Params = {
  [index: string]: number | string | number[] | string[];
};
//#endregion
//#region src/backlog.d.ts
declare class Backlog extends Request {
  constructor(configure: {
    host: string;
    apiKey?: string;
    accessToken?: string;
    timeout?: number;
    fetch?: Fetch;
  });
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space/
   */
  getSpace(): Promise<Space.Space>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-recent-updates/
   */
  getSpaceActivities(params: Space$1.GetActivitiesParams): Promise<Activity.Activity[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space-logo/
   */
  getSpaceIcon(): Promise<File.FileData>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space-notification/
   */
  getSpaceNotification(): Promise<Space.Notification>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-space-notification/
   */
  putSpaceNotification(params: Space$1.PutSpaceNotificationParams): Promise<Space.Notification>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space-disk-usage/
   */
  getSpaceDiskUsage(): Promise<DiskUsage.SpaceDiskUsage>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/post-attachment-file/
   */
  postSpaceAttachment(form: FormData): Promise<File.FileInfo>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user-list/
   */
  getUsers(): Promise<User.User[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user/
   */
  getUser(userId: number): Promise<User.User>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-user/
   */
  postUser(params: User$1.PostUserParams): Promise<User.User>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-user/
   */
  patchUser(userId: number, params: User$1.PatchUserParams): Promise<User.User>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-user/
   */
  deleteUser(userId: number): Promise<User.User>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-own-user/
   */
  getMyself(): Promise<User.User>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user-icon/
   */
  getUserIcon(userId: number): Promise<File.FileData>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user-recent-updates/
   */
  getUserActivities(userId: number, params: User$1.GetUserActivitiesParams): Promise<Activity.Activity[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-received-star-list/
   */
  getUserStars(userId: number, params: User$1.GetUserStarsParams): Promise<Star.Star[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-user-received-stars/
   */
  getUserStarsCount(userId: number, params: User$1.GetUserStarsCountParams): Promise<Star.StarCount>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-issues/
   */
  getRecentlyViewedIssues(params: User$1.GetRecentlyViewedParams): Promise<Issue.RecentlyViewedIssue[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-projects/
   */
  getRecentlyViewedProjects(params: User$1.GetRecentlyViewedParams): Promise<Project.RecentlyViewedProject[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-wikis/
   */
  getRecentlyViewedWikis(params: User$1.GetRecentlyViewedParams): Promise<Wiki.RecentlyViewedWiki[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-status-list-of-project/
   */
  getProjectStatuses(projectIdOrKey: string | number): Promise<Project.ProjectStatus[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-resolution-list/
   */
  getResolutions(): Promise<Issue.Resolution[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-priority-list/
   */
  getPriorities(): Promise<Issue.Priority[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-list/
   */
  getProjects(params?: Project$1.GetProjectsParams): Promise<Project.Project[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project/
   */
  postProject(params: Project$1.PostProjectParams): Promise<Project.Project>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project/
   */
  getProject(projectIdOrKey: string | number): Promise<Project.Project>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-project/
   */
  patchProject(projectIdOrKey: string | number, params: Project$1.PatchProjectParams): Promise<Project.Project>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project/
   */
  deleteProject(projectIdOrKey: string | number): Promise<Project.Project>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-icon/
   */
  getProjectIcon(projectIdOrKey: string | number): Promise<File.FileData>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-recent-updates/
   */
  getProjectActivities(projectIdOrKey: string | number, params: Space$1.GetActivitiesParams): Promise<Activity.Activity[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-user/
   */
  postProjectUser(projectIdOrKey: string | number, userId: string): Promise<User.User>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-user-list/
   */
  getProjectUsers(projectIdOrKey: string | number): Promise<User.User[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-user/
   */
  deleteProjectUsers(projectIdOrKey: string | number, params: Project$1.DeleteProjectUsersParams): Promise<User.User>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-administrator/
   */
  postProjectAdministrators(projectIdOrKey: string | number, params: Project$1.PostProjectAdministrators): Promise<User.User>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-project-administrators/
   */
  getProjectAdministrators(projectIdOrKey: string | number): Promise<User.User[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-administrator/
   */
  deleteProjectAdministrators(projectIdOrKey: string | number, params: Project$1.DeleteProjectAdministrators): Promise<User.User>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-status/
   */
  postProjectStatus(projectIdOrKey: string | number, params: Project$1.PostStatusParams): Promise<Project.ProjectStatus>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-status/
   */
  patchProjectStatus(projectIdOrKey: string | number, id: number, params: Project$1.PatchStatusParams): Promise<Project.ProjectStatus>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-status/
   */
  deleteProjectStatus(projectIdOrKey: string | number, id: number, substituteStatusId: number): Promise<Project.ProjectStatus>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-order-of-status/
   */
  patchProjectStatusOrder(projectIdOrKey: string | number, statusId: number[]): Promise<Project.ProjectStatus[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-type-list/
   */
  getIssueTypes(projectIdOrKey: string | number): Promise<Issue.IssueType[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-issue-type/
   */
  postIssueType(projectIdOrKey: string | number, params: Project$1.PostIssueTypeParams): Promise<Issue.IssueType>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-issue-type/
   */
  patchIssueType(projectIdOrKey: string | number, id: number, params: Project$1.PatchIssueTypeParams): Promise<Issue.IssueType>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-issue-type/
   */
  deleteIssueType(projectIdOrKey: string | number, id: number, params: Project$1.DeleteIssueTypeParams): Promise<Issue.IssueType>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-category-list/
   */
  getCategories(projectIdOrKey: string | number): Promise<Project.Category[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-category/
   */
  postCategories(projectIdOrKey: string | number, params: Project$1.PostCategoriesParams): Promise<Project.Category>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-category/
   */
  patchCategories(projectIdOrKey: string | number, id: number, params: Project$1.PatchCategoriesParams): Promise<Project.Category>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-category/
   */
  deleteCategories(projectIdOrKey: string | number, id: number): Promise<Project.Category>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-version-milestone-list/
   */
  getVersions(projectIdOrKey: string | number): Promise<Project.Version[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-version-milestone/
   */
  postVersions(projectIdOrKey: string | number, params: Project$1.PostVersionsParams): Promise<Project.Version>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-version-milestone/
   */
  patchVersions(projectIdOrKey: string | number, id: number, params: Project$1.PatchVersionsParams): Promise<Project.Version>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-version/
   */
  deleteVersions(projectIdOrKey: string | number, id: number): Promise<Project.Version>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-custom-field-list/
   */
  getCustomFields(projectIdOrKey: string | number): Promise<Project.CustomField[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-custom-field/
   */
  postCustomField(projectIdOrKey: string | number, params: Project$1.PostCustomFieldParams | Project$1.PostCustomFieldWithNumericParams | Project$1.PostCustomFieldWithDateParams | Project$1.PostCustomFieldWithListParams): Promise<Project.CustomField>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-custom-field/
   */
  patchCustomField(projectIdOrKey: string | number, id: number, params: Project$1.PatchCustomFieldParams | Project$1.PatchCustomFieldWithNumericParams | Project$1.PatchCustomFieldWithDateParams | Project$1.PatchCustomFieldWithListParams): Promise<Project.CustomField>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-custom-field/
   */
  deleteCustomField(projectIdOrKey: string | number, id: number): Promise<Project.CustomField>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-list-item-for-list-type-custom-field/
   */
  postCustomFieldItem(projectIdOrKey: string | number, id: number, params: Project$1.PostCustomFieldItemParams): Promise<Project.CustomField>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-list-item-for-list-type-custom-field/
   */
  patchCustomFieldItem(projectIdOrKey: string | number, id: number, itemId: number, params: Project$1.PatchCustomFieldItemParams): Promise<Project.CustomField>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-list-item-for-list-type-custom-field/
   */
  deleteCustomFieldItem(projectIdOrKey: string | number, id: number, itemId: number): Promise<Project.CustomField>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files/
   */
  getSharedFiles(projectIdOrKey: string | number, path: string, params: Project$1.GetSharedFilesParams): Promise<Project.SharedFile[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-file/
   */
  getSharedFile(projectIdOrKey: string | number, sharedFileId: number): Promise<File.FileData>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-disk-usage/
   */
  getProjectsDiskUsage(projectIdOrKey: string | number): Promise<DiskUsage.ProjectDiskUsage>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-webhooks/
   */
  getWebhooks(projectIdOrKey: string | number): Promise<Webhook.Webhook[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-webhook/
   */
  postWebhook(projectIdOrKey: string | number, params: Project$1.PostWebhookParams): Promise<Webhook.Webhook>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-webhook/
   */
  getWebhook(projectIdOrKey: string | number, webhookId: string): Promise<Webhook.Webhook>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-webhook/
   */
  patchWebhook(projectIdOrKey: string | number, webhookId: string, params: Project$1.PatchWebhookParams): Promise<Webhook.Webhook>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-webhook/
   */
  deleteWebhook(projectIdOrKey: string | number, webhookId: string): Promise<Webhook.Webhook>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-list/
   */
  getIssues(params?: Issue$1.GetIssuesParams): Promise<Issue.Issue[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-issue/
   */
  getIssuesCount(params?: Issue$1.GetIssuesParams): Promise<Issue.IssueCount>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-issue/
   */
  postIssue(params: Issue$1.PostIssueParams): Promise<Issue.Issue>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-issue/
   */
  patchIssue(issueIdOrKey: string | number, params: Issue$1.PatchIssueParams): Promise<Issue.Issue>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue/
   */
  getIssue(issueIdOrKey: string | number): Promise<Issue.Issue>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-issue/
   */
  deleteIssue(issueIdOrKey: string | number): Promise<Issue.Issue>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-comment-list/
   */
  getIssueComments(issueIdOrKey: string | number, params: Issue$1.GetIssueCommentsParams): Promise<Issue.Comment[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-comment/
   */
  postIssueComments(issueIdOrKey: string | number, params: Issue$1.PostIssueCommentsParams): Promise<Issue.Comment>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-comment/
   */
  getIssueCommentsCount(issueIdOrKey: string | number): Promise<Issue.IssueCommentCount>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-comment/
   */
  getIssueComment(issueIdOrKey: string | number, commentId: number): Promise<Issue.Comment>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-comment/
   */
  deleteIssueComment(issueIdOrKey: string | number, commentId: number): Promise<Issue.Comment>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-comment/
   */
  patchIssueComment(issueIdOrKey: string | number, commentId: number, params: Issue$1.PatchIssueCommentParams): Promise<Issue.Comment>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-comment-notifications/
   */
  getIssueCommentNotifications(issueIdOrKey: string | number, commentId: number): Promise<CommentNotification.CommentNotification[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-comment-notification/
   */
  postIssueCommentNotifications(issueIdOrKey: string | number, commentId: number, prams: Issue$1.IssueCommentNotifications): Promise<Issue.Comment>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-issue-attachments/
   */
  getIssueAttachments(issueIdOrKey: string | number): Promise<File.IssueFileInfo[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-attachment/
   */
  getIssueAttachment(issueIdOrKey: string | number, attachmentId: number): Promise<File.FileData>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-issue-attachment/
   */
  deleteIssueAttachment(issueIdOrKey: string | number, attachmentId: string): Promise<File.IssueFileInfo>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-participant-list/
   */
  getIssueParticipants(issueIdOrKey: string | number): Promise<User.User[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-linked-shared-files/
   */
  getIssueSharedFiles(issueIdOrKey: string | number): Promise<Project.SharedFile[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-issue/
   */
  linkIssueSharedFiles(issueIdOrKey: string | number, params: Issue$1.LinkIssueSharedFilesParams): Promise<Project.SharedFile[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-issue/
   */
  unlinkIssueSharedFile(issueIdOrKey: string | number, id: number): Promise<Project.SharedFile>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-list/
   */
  getWikis(params: Wiki$1.GetWikiParams): Promise<Wiki.WikiListItem[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-wiki-page/
   */
  getWikisCount(projectIdOrKey: string | number): Promise<Wiki.WikiCount>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-tag-list/
   */
  getWikisTags(projectIdOrKey: string | number): Promise<Wiki.Tag[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-wiki-page/
   */
  postWiki(params: Wiki$1.PostWikiParams): Promise<Wiki.Wiki>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page/
   */
  getWiki(wikiId: number): Promise<Wiki.Wiki>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-wiki-page/
   */
  patchWiki(wikiId: number, params: Wiki$1.PatchWikiParams): Promise<Wiki.Wiki>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-wiki-page/
   */
  deleteWiki(wikiId: number, mailNotify: boolean): Promise<Wiki.Wiki>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-wiki-attachments/
   */
  getWikisAttachments(wikiId: number): Promise<File.WikiFileInfo[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/attach-file-to-wiki/
   */
  postWikisAttachments(wikiId: number, attachmentId: number[]): Promise<File.WikiFileInfo[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-attachment/
   */
  getWikiAttachment(wikiId: number, attachmentId: number): Promise<File.FileData>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-wiki-attachment/
   */
  deleteWikisAttachments(wikiId: number, attachmentId: number): Promise<File.WikiFileInfo>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files-on-wiki/
   */
  getWikisSharedFiles(wikiId: number): Promise<Project.SharedFile[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-wiki/
   */
  linkWikisSharedFiles(wikiId: number, fileId: number[]): Promise<Project.SharedFile[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-wiki/
   */
  unlinkWikisSharedFiles(wikiId: number, id: number): Promise<Project.SharedFile>;
  /**
   * https://developer.nulab.com/docs/backlog/api/get-document-list/
   */
  getDocuments(params: Document$1.GetDocumentsParams): Promise<Document.Document[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/get-document-tree/
   */
  getDocumentTree(projectIdOrKey: string | number): Promise<Document.DocumentTree>;
  /**
   * https://developer.nulab.com/docs/backlog/api/get-document/
   */
  getDocument(documentId: string): Promise<Document.Document>;
  /**
   * https://developer.nulab.com/docs/backlog/api/get-document-attachments/
   */
  downloadDocumentAttachment(documentId: string, attachmentId: number): Promise<File.FileData>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-document/
   */
  addDocument(params: Document$1.AddDocumentParams): Promise<Document.Document>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-document/
   */
  deleteDocument(documentId: string): Promise<Document.Document>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-history/
   */
  getWikisHistory(wikiId: number, params: Wiki$1.GetWikisHistoryParams): Promise<Wiki.History[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-star/
   */
  getWikisStars(wikiId: number): Promise<Star.Star[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-star/
   */
  postStar(params: Project$1.PostStarParams): Promise<void>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-star/
   */
  removeStar(starId: number): Promise<void>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-notification/
   */
  getNotifications(params: Notification$1.GetNotificationsParams): Promise<Notification.Notification[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-notification/
   */
  getNotificationsCount(params: Notification$1.GetNotificationsCountParams): Promise<Notification.NotificationCount>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/reset-unread-notification-count/
   */
  resetNotificationsMarkAsRead(): Promise<Notification.NotificationCount>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/read-notification/
   */
  markAsReadNotification(id: number): Promise<void>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-git-repositories/
   */
  getGitRepositories(projectIdOrKey: string | number): Promise<Git.GitRepository[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-git-repository/
   */
  getGitRepository(projectIdOrKey: string | number, repoIdOrName: string): Promise<Git.GitRepository>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-list/
   */
  getPullRequests(projectIdOrKey: string | number, repoIdOrName: string, params: PullRequest$1.GetPullRequestsParams): Promise<PullRequest.PullRequest[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-requests/
   */
  getPullRequestsCount(projectIdOrKey: string | number, repoIdOrName: string, params: PullRequest$1.GetPullRequestsParams): Promise<PullRequest.PullRequestCount>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-pull-request/
   */
  postPullRequest(projectIdOrKey: string | number, repoIdOrName: string, params: PullRequest$1.PostPullRequestParams): Promise<PullRequest.PullRequest>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-pull-request/
   */
  getPullRequest(projectIdOrKey: string | number, repoIdOrName: string, number: number): Promise<PullRequest.PullRequest>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-pull-request/
   */
  patchPullRequest(projectIdOrKey: string | number, repoIdOrName: string, number: number, params: PullRequest$1.PatchPullRequestParams): Promise<PullRequest.PullRequest>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-comment/
   */
  getPullRequestComments(projectIdOrKey: string | number, repoIdOrName: string, number: number, params: PullRequest$1.GetPullRequestCommentsParams): Promise<PullRequest.Comment[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-pull-request-comment/
   */
  postPullRequestComments(projectIdOrKey: string | number, repoIdOrName: string, number: number, params: PullRequest$1.PostPullRequestCommentsParams): Promise<PullRequest.Comment>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-request-comments/
   */
  getPullRequestCommentsCount(projectIdOrKey: string | number, repoIdOrName: string, number: number): Promise<PullRequest.PullRequestCommentCount>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-pull-request-comment-information/
   */
  patchPullRequestComments(projectIdOrKey: string | number, repoIdOrName: string, number: number, commentId: number, params: PullRequest$1.PatchPullRequestCommentsParams): Promise<PullRequest.Comment>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-pull-request-attachment/
   */
  getPullRequestAttachments(projectIdOrKey: string | number, repoIdOrName: string, number: number): Promise<File.PullRequestFileInfo[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/download-pull-request-attachment/
   */
  getPullRequestAttachment(projectIdOrKey: string | number, repoIdOrName: string, number: number, attachmentId: number): Promise<File.FileData>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-pull-request-attachments/
   */
  deletePullRequestAttachment(projectIdOrKey: string | number, repoIdOrName: string, number: number, attachmentId: number): Promise<File.PullRequestFileInfo>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-watching-list
   */
  getWatchingListItems(userId: number, params?: WatchingList$1.GetWatchingListParams): Promise<WatchingList.WatchingListItem[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-watching
   */
  getWatchingListCount(userId: number, params?: WatchingList$1.GetWatchingListCountParams): Promise<WatchingList.WatchingListCount>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-watching
   */
  getWatchingListItem(watchId: number): Promise<WatchingList.WatchingListItem>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-watching
   */
  postWatchingListItem(params: WatchingList$1.PostWatchingListItemParams): Promise<WatchingList.WatchingListItem>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-watching
   */
  patchWatchingListItem(watchId: number, note: string): Promise<WatchingList.WatchingListItem>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-watching
   */
  deletehWatchingListItem(watchId: number): Promise<WatchingList.WatchingListItem>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/mark-watching-as-read
   */
  resetWatchingListItemAsRead(watchId: number): Promise<void>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-licence
   */
  getLicence(): Promise<License.License>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-teams/
   */
  getTeams(params?: Team$1.GetTeamsParams): Promise<Team.Team[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-team/
   */
  postTeam(params: Team$1.PostTeamParams): Promise<Team.Team>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-team/
   */
  getTeam(teamId: number): Promise<Team.Team>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-team/
   */
  patchTeam(teamId: number, params: Team$1.PatchTeamParams): Promise<Team.Team>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-team/
   */
  deleteTeam(teamId: number): Promise<Team.Team>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-team-icon/
   */
  getTeamIcon(teamId: number): Promise<File.FileData>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-team-list/
   */
  getProjectTeams(projectIdOrKey: string | number): Promise<Team.Team[]>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-team/
   */
  postProjectTeam(projectIdOrKey: string | number, teamId: number): Promise<Team.Team>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-team/
   */
  deleteProjectTeam(projectIdOrKey: string | number, teamId: number): Promise<Team.Team>;
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-rate-limit/
   */
  getRateLimit(): Promise<RateLimit.RateLimit>;
  private download;
  private upload;
  private parseFileData;
}
//#endregion
//#region src/oauth2.d.ts
declare class OAuth2 {
  private credentials;
  private timeout?;
  private fetch?;
  constructor(credentials: OAuth2$2.Credentials, timeout?: number, fetch?: Fetch);
  getAuthorizationURL(options: {
    host: string;
    redirectUri?: string;
    state?: string;
  }): string;
  getAccessToken(options: {
    host: string;
    code: string;
    redirectUri?: string;
  }): Promise<OAuth2$1.AccessToken>;
  refreshAccessToken(options: {
    host: string;
    refreshToken: string;
  }): Promise<OAuth2$1.AccessToken>;
}
declare namespace error_d_exports {
  export { BacklogApiError, BacklogAuthError, BacklogError, BacklogErrorMessage, BacklogErrorNameType, UnexpectedError };
}
declare class BacklogError extends Error {
  private _name;
  private _url;
  private _status;
  private _body;
  private _response;
  constructor(name: BacklogErrorNameType, response: Response, body?: {
    errors: BacklogErrorMessage[];
  });
  get name(): BacklogErrorNameType;
  get url(): string;
  get status(): number;
  get body(): {
    errors: BacklogErrorMessage[];
  };
  get response(): Response;
}
declare class BacklogApiError extends BacklogError {
  constructor(response: Response, body?: {
    errors: BacklogErrorMessage[];
  });
}
declare class BacklogAuthError extends BacklogError {
  constructor(response: Response, body?: {
    errors: BacklogErrorMessage[];
  });
}
declare class UnexpectedError extends BacklogError {
  constructor(response: Response);
}
interface BacklogErrorMessage {
  message: string;
  code: number;
  errorInfo: string;
  moreInfo: string;
}
type BacklogErrorNameType = 'BacklogApiError' | 'BacklogAuthError' | 'UnexpectedError';
//#endregion
export { Backlog, entity_d_exports as Entity, error_d_exports as Error, OAuth2, option_d_exports as Option, types_d_exports as Types };