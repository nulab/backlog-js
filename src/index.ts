import isArray from 'isarray';
import FormData from 'form-data';

export interface GetActivitiesParams {
  activityTypeId?: ActivityType[];
  minId?: number;
  maxId?: number;
  count?: number;
  order?: Order;
}

export enum ActivityType {
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
    PullRequestMerged = 21
}

export interface PutSpaceNotificationParams {
  content: string;
}

export interface PostUserParams {
  userId: string;
  password: string;
  name: string;
  mailAddress: string;
  roleType: RoleType;
}

export interface PatchUserParams {
  password?: string;
  name?: string;
  mailAddress?: string;
  roleType?: RoleType;
}

export enum RoleType {
  Admin = 1,
  User = 2,
  Reporter = 3,
  Viewer = 4,
  GuestReporter = 5,
  GuestViewer = 6
}

export interface GetUserActivitiesParams {
  activityTypeId?: ActivityType[];
  minId?: number;
  maxId?: number;
  count?: number;
  order?: Order;
}

export interface GetUserStarsParams {
  minId?: number;
  maxId?: number;
  count?: number;
  order?: Order;
}

export interface GetUserStarsCountParams {
  since?: string;
  until?: string;
}

export interface GetRecentlyViewedParams {
  order?: Order;
  offset?: number;
  count?: number;
}

export interface GetGroupsParams {
  order?: Order;
  offset?: number;
  count?: number;
}

export interface PostGroupsParams {
  name: string;
  members?: string[];
}

export interface PatchGroupParams {
  name?: string;
  members?: string[];
}

export interface PostProjectParams {
  name: string;
  key: string;
  chartEnabled: boolean;
  projectLeaderCanEditProjectLeader?: boolean;
  subtaskingEnabled: boolean;
  textFormattingRule: TextFormattingRule;
}

export type TextFormattingRule = "backlog" | "markdown";

export interface PatchProjectParams {
  name?: string;
  key?: string;
  chartEnabled?: boolean;
  subtaskingEnabled?: boolean;
  projectLeaderCanEditProjectLeader?: boolean;
  textFormattingRule?: TextFormattingRule;
  archived?: boolean;
}

export interface PostIssueTypeParams {
  name: string;
  color: IssueTypeColor;
}

export interface PatchIssueTypeParams {
  name?: string;
  color?: IssueTypeColor;
}

type IssueTypeColor =
  "#e30000" |
  "#990000" |
  "#934981" |
  "#814fbc" |
  "#2779ca" |
  "#007e9a" |
  "#7ea800" |
  "#ff9200" |
  "#ff3265" |
  "#666665";

export interface PostIssueParams {
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
  [customField_:string]: any;
}

export interface PatchIssueParams {
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
  [customField_:string]: any;
}

export interface GetIssuesParams {
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
  id?: number[];
  parentIssueId?: number[];
  keyword: string;
  [customField_: string]: any;
}

export enum ParentChildType {
  All = 0, NotChild = 1, Child = 2, NotChildNotParent = 3, Parent = 4
}

// TODO add customField_${id}
export type SortKey =
  "issueType" |
  "category" |
  "version" |
  "milestone" |
  "summary" |
  "status" |
  "priority" |
  "attachment" |
  "sharedFile" |
  "created" |
  "createdUser" |
  "updated" |
  "updatedUser" |
  "assignee" |
  "startDate" |
  "dueDate" |
  "estimatedHours" |
  "actualHours" |
  "childIssue";

export type Order = "asc" | "desc";

export interface GetProjectsParams {
  archived?: boolean;
  all?: boolean;
}

export interface GetPullRequestsParams {
  statusId?: number[];
  assigneeId?: number[];
  issueId?: number[];
  createdUserId?: number[];
  offset?: number;
  count?: number;
}

export interface PostPullRequestParams {
  summary: string;
  description: string;
  base: string;
  branch: string;
  issueId?: number;
  assigneeId?: number;
  notifiedUserId?: number[];
  attachmentId?: number[];
}

export interface PatchPullRequestParams {
  summary?: string;
  description?: string;
  issueId?: number;
  assigneeId?: number;
  notifiedUserId?: number[];
  comment?: string[];
}

export interface GetPullRequestCommentsParams {
  minId?: number;
  maxId?: number;
  count?: number;
  order?: Order;
}

export interface PostPullRequestCommentsParams {
  content: string;
  notifiedUserId?: number[];
}

export interface PatchPullRequestCommentsParams {
  content: string;
}

export interface DeleteProjectUsersParams {
  userId: number;
}

export interface PostProjectAdministrators {
  userId: number;
}

export interface DeleteProjectAdministrators {
  userId: number;
}

export interface DeleteIssueTypeParams {
  substituteIssueTypeId: number;
}

export interface PostCategoriesParams {
  name: string;
}

export interface PatchCategoriesParams {
  name: string;
}

export interface PostVersionsParams {
  name: string;
  description: string;
  startDate: string;
  releaseDueDate: string;
}

export interface PatchVersionsParams {
  name: string;
  description?: string;
  startDate?: string;
  releaseDueDate?: string;
  archived?: boolean;
}

export interface PostCustomFieldParams {
  typeId: FieldType;
  name: string;
  applicableIssueTypes?: number[];
  description?: string;
  required?: boolean;
}

export interface PostCustomFieldWithNumericParams extends PostCustomFieldParams {
  min?: number;
  max?: number;
  initialValue?: number;
  unit?: string;
}

export interface PostCustomFieldWithDateParams extends PostCustomFieldParams {
  min?: string;
  max?: string;
  initialValueType?: number;
  initialDate?: string;
  initialShift?: number;
}

export interface PostCustomFieldWithListParams extends PostCustomFieldParams {
  items?: string[];
  allowInput?: boolean;
  allowAddItem?: boolean;
}

export interface PatchCustomFieldParams {
  name?: string;
  applicableIssueTypes?: number[];
  description?: string;
  required?: boolean;
}

export interface PatchCustomFieldWithNumericParams extends PatchCustomFieldParams {
  min?: number;
  max?: number;
  initialValue?: number;
  unit?: string;
}

export interface PatchCustomFieldWithDateParams extends PatchCustomFieldParams {
  min?: string;
  max?: string;
  initialValueType?: number;
  initialDate?: string;
  initialShift?: number;
}

export interface PatchCustomFieldWithListParams extends PatchCustomFieldParams {
  items?: string[];
  allowInput?: boolean;
  allowAddItem?: boolean;
}

// TODO 必須? https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-customfield-item
export interface PostCustomFieldItemParams {
  name: string;
}

export interface PatchCustomFieldItemParams {
  name: string;
}

export interface GetSharedFilesParams {
  order?: Order;
  offset?: number;
  count?:	number;
}

// TODO 必須? https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-webhook
export interface PostWebhookParams {
  name?: string;
  description?: string;
  hookUrl?: string;
  allEvent?:  boolean;
  activityTypeIds?: number[];
}

export interface PatchWebhookParams {
  name?: string;
  description?: string;
  hookUrl?: string;
  allEvent?: boolean;
  activityTypeIds?: number[];
}

export enum FieldType {
    Text = 1,
    TextArea = 2,
    Numeric = 3,
    Date = 4,
    SingleList = 5,
    MultipleList = 6,
    CheckBox = 7,
    Radio = 8
}

export interface GetIssueCommentsParams {
  minId?: number;
  maxId?: number;
  count?: number;
  order?: Order;
}

export interface PostIssueCommentsParams {
  content: string;
  notifiedUserId?: number[];
  attachmentId?: number[];
}

export default class Backlog {

  private spaceId: string;
  private apiKey: string;

  constructor(option: { spaceId: string, apiKey: string }) {
    this.spaceId = option.spaceId;
    this.apiKey = option.apiKey;
  }

  public getSpace(): Promise<any> {
    return this.get('/api/v2/space');
  }

  public getSpaceActivities(params: GetActivitiesParams): Promise<any> {
    return this.get('/api/v2/space/activities', params);
  }

  public getSpaceNotification(): Promise<any> {
    return this.get('/api/v2/space/notification');
  }

  public putSpaceNotification(params: PutSpaceNotificationParams): Promise<any> {
    return this.put('/api/v2/space/notification', params);
  }

  public getSpaceDiskUsage(): Promise<any> {
    return this.get('/api/v2/space/diskUsage');
  }

  public getUsers(): Promise<any> {
    return this.get(`/api/v2/users`);
  }

  public getUser(userId: number): Promise<any> {
    return this.get(`/api/v2/users/${userId}`);
  }

  public postUser(params: PostUserParams): Promise<any> {
    return this.post(`/api/v2/users`, params);
  }

  public patchUser(userId: number, params: PatchUserParams): Promise<any> {
    return this.patch(`/api/v2/users/${userId}`, params);
  }

  public deleteUser(userId: number): Promise<any> {
    return this.delete(`/api/v2/users/${userId}`);
  }

  public getMyself(): Promise<any> {
    return this.get('/api/v2/users/myself');
  }

  public getUserActivities(userId: number, params: GetUserActivitiesParams): Promise<any> {
    return this.get(`/api/v2/users/${userId}/activities`, params);
  }

  public getUserStars(userId: number, params: GetUserStarsParams): Promise<any> {
    return this.get(`/api/v2/users/${userId}/stars`, params);
  }

  public getUserStarsCount(userId: number, params: GetUserStarsCountParams): Promise<any> {
    return this.get(`/api/v2/users/${userId}/count`, params);
  }

  public getRecentlyViewedIssues(params: GetRecentlyViewedParams): Promise<any> {
    return this.get('/api/v2/users/myself/recentlyViewedIssues', params);
  }

  public getRecentlyViewedProjects(params: GetRecentlyViewedParams): Promise<any> {
    return this.get('/api/v2/users/myself/recentlyViewedProjects', params);
  }

  public getRecentlyViewedWikis(params: GetRecentlyViewedParams): Promise<any> {
    return this.get('/api/v2/users/myself/recentlyViewedWikis', params);
  }

  public getGroups(params: GetGroupsParams): Promise<any> {
    return this.get('/api/v2/groups', params);
  }

  public postGroups(params: PostGroupsParams): Promise<any> {
    return this.post('/api/v2/groups', params);
  }

  public getGroup(groupId: number): Promise<any> {
    return this.get(`/api/v2/groups/${groupId}`);
  }

  public patchGroup(groupId:number, params: PatchGroupParams): Promise<any> {
    return this.patch('/api/v2/groups', params);
  }

  public deleteGroup(groupId: number): Promise<any> {
    return this.delete(`/api/v2/groups/${groupId}`);
  }

  public getResolutions(): Promise<any> {
    return this.get('/api/v2/resolutions');
  }

  public postProject(params: PostProjectParams): Promise<any> {
    return this.post('/api/v2/projects', params);
  }

  public getProjects(params?: GetProjectsParams): Promise<any> {
    return this.get('/api/v2/projects', params);
  }

  public getProject(projectIdOrKey: string): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}`);
  }

  public patchProject(projectIdOrKey: string, params: PatchProjectParams): Promise<any> {
    return this.patch(`/api/v2/projects/${projectIdOrKey}`, params);
  }

  public deleteProject(projectIdOrKey: string): Promise<any> {
    return this.delete(`/api/v2/projects/${projectIdOrKey}`);
  }

  public getProjectActivities(projectIdOrKey: string, params: GetActivitiesParams): Promise<any> {
    return this.delete(`/api/v2/projects/${projectIdOrKey}/activities`, params);
  }

  public getProjectUsers(projectIdOrKey: string): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/users`);
  }

  public deleteProjectUsers(projectIdOrKey: string, params: DeleteProjectUsersParams): Promise<any> {
    return this.delete(`/api/v2/projects/${projectIdOrKey}/users`, params);
  }

  public postProjectAdministrators(projectIdOrKey: string, params: PostProjectAdministrators): Promise<any> {
    return this.post(`/api/v2/projects/${projectIdOrKey}/administrators`, params);
  }

  public getProjectAdministrators(projectIdOrKey: string): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/administrators`);
  }

  public deleteProjectAdministrators(projectIdOrKey: string, params: DeleteProjectAdministrators): Promise<any> {
    return this.delete(`/api/v2/projects/${projectIdOrKey}/administrators`, params);
  }

  public getIssueTypes(projectIdOrKey: string): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/issueTypes`);
  }

  public postIssueType(projectIdOrKey: string, params: PostIssueTypeParams): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/issueTypes`, params);
  }

  public patchIssueType(projectIdOrKey: string, id: number, params: PostIssueTypeParams): Promise<any> {
    return this.patch(`/api/v2/projects/${projectIdOrKey}/issueTypes/${id}`, params);
  }

  public deleteIssueType(projectIdOrKey: string, id: number, params: DeleteIssueTypeParams): Promise<any> {
    return this.delete(`/api/v2/projects/${projectIdOrKey}/issueTypes/${id}`, params);
  }

  public getCategories(projectIdOrKey: string): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/categories`);
  }

  public postCategories(projectIdOrKey: string, params: PostCategoriesParams): Promise<any> {
    return this.post(`/api/v2/projects/${projectIdOrKey}/categories`, params);
  }

  public patchCategories(projectIdOrKey: string, id: number, params: PatchCategoriesParams): Promise<any> {
    return this.patch(`/api/v2/projects/${projectIdOrKey}/categories/${id}`, params);
  }

  public deleteCategories(projectIdOrKey: string, id: number): Promise<any> {
    return this.delete(`/api/v2/projects/${projectIdOrKey}/categories/${id}`);
  }

  public getVersions(projectIdOrKey: string): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/versions`);
  }

  public postVersions(projectIdOrKey: string, params: PostVersionsParams): Promise<any> {
    return this.post(`/api/v2/projects/${projectIdOrKey}/versions`, params);
  }

  public patchVersions(projectIdOrKey: string, id: number, params: PatchVersionsParams): Promise<any> {
    return this.patch(`/api/v2/projects/${projectIdOrKey}/versions/${id}`, params);
  }

  public deleteVersions(projectIdOrKey: string, id: number): Promise<any> {
    return this.delete(`/api/v2/projects/${projectIdOrKey}/versions/${id}`);
  }

  public getCustomFields(projectIdOrKey: string): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/customFields`);
  }

  public postCustomField(
    projectIdOrKey: string,
    params: PostCustomFieldParams |
            PostCustomFieldWithNumericParams |
            PostCustomFieldWithDateParams |
            PostCustomFieldWithListParams
  ): Promise<any> {
    return this.post(`/api/v2/projects/${projectIdOrKey}/customFields`, params);
  }

  public patchCustomField(
    projectIdOrKey: string,
    id: number,
    params: PatchCustomFieldParams |
            PatchCustomFieldWithNumericParams |
            PatchCustomFieldWithDateParams |
            PatchCustomFieldWithListParams
  ): Promise<any> {
    return this.patch(`/api/v2/projects/${projectIdOrKey}/customFields/${id}`, params);
  }

  public deleteCustomField(projectIdOrKey: string, id: number): Promise<any> {
    return this.delete(`/api/v2/projects/${projectIdOrKey}/customFields/${id}`);
  }

  public postCustomFieldItem(
    projectIdOrKey: string,
    id: number,
    params: PostCustomFieldItemParams
  ): Promise<any> {
    return this.post(`/api/v2/projects/${projectIdOrKey}/customFields/${id}/items`, params);
  }

  public patchCustomFieldItem(
    projectIdOrKey: string,
    id: number,
    itemId: number,
    params: PatchCustomFieldItemParams
  ): Promise<any> {
    return this.patch(`/api/v2/projects/${projectIdOrKey}/customFields/${id}/items/${itemId}`, params);
  }

  public deleteCustomFieldItem(
    projectIdOrKey: string,
    id: number,
    params: PostCustomFieldItemParams
  ): Promise<any> {
    return this.delete(`/api/v2/projects/${projectIdOrKey}/customFields/${id}/items`);
  }

  public getSharedFiles(
    projectIdOrKey: string,
    path: string, params:
    GetSharedFilesParams
  ): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/files/metadata/${path}`);
  }

  public getProjectsDiskUsage(
    projectIdOrKey: string
  ): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/diskUsage`);
  }

  public getWebhooks(
    projectIdOrKey: string
  ): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/webhooks`);
  }

  public postWebhook(
    projectIdOrKey: string,
    params: PostWebhookParams
  ): Promise<any> {
    return this.post(`/api/v2/projects/${projectIdOrKey}/webhooks`, params);
  }

  public getWebhook(
    projectIdOrKey: string,
    webhookId: string
  ): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/webhooks/${webhookId}`);
  }

  public patchWebhook(
    projectIdOrKey: string,
    webhookId: string,
    params: PatchWebhookParams
  ): Promise<any> {
    return this.patch(`/api/v2/projects/${projectIdOrKey}/webhooks/${webhookId}`, params);
  }

  public deleteWebhook(
    projectIdOrKey: string,
    webhookId: string
  ): Promise<any> {
    return this.delete(`/api/v2/projects/${projectIdOrKey}/webhooks/${webhookId}`);
  }

  public postIssue(params: PostIssueParams): Promise<any> {
    return this.post('/api/v2/issues', params);
  }

  public patchIssue(issueIdOrKey: string, params: PatchIssueParams): Promise<any> {
    return this.patch(`/api/v2/issues/${issueIdOrKey}`, params);
  }

  public getIssues(params?: GetIssuesParams): Promise<any> {
    return this.get('/api/v2/issues', params);
  }

  public getIssue(issueIdOrKey: string): Promise<any> {
    return this.get(`/api/v2/issues/${issueIdOrKey}`);
  }

  public getIssuesCount(params?: GetIssuesParams): Promise<any> {
    return this.get('/api/v2/issues/count', params);
  }

  public deleteIssuesCount(issueIdOrKey: string): Promise<any> {
    return this.delete(`/api/v2/issues/${issueIdOrKey}`);
  }

  public getIssueComments(issueIdOrKey: string, params: GetIssueCommentsParams): Promise<any> {
    return this.get(`/api/v2/issues/${issueIdOrKey}/comments`, params);
  }

  public postIssueComments(issueIdOrKey: string, params: PostIssueCommentsParams): Promise<any> {
    return this.post(`/api/v2/issues/${issueIdOrKey}/comments`, params);
  }

  public getIssueCommentsCount(issueIdOrKey: string): Promise<any> {
    return this.get(`/api/v2/issues/${issueIdOrKey}/comments/count`);
  }

  public getIssueComment(issueIdOrKey: string, commentId: number): Promise<any> {
    return this.get(`/api/v2/issues/${issueIdOrKey}/comments/${commentId}`);
  }










  public getPriorities(): Promise<any> {
    return this.get('/api/v2/priorities');
  }

  public getStatuses(): Promise<any> {
    return this.get('/api/v2/statuses');
  }











// =============================================================



  public getGitRepositories(projectIdOrKey: string): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/git/repositories`);
  }

  public getGitRepository(
    projectIdOrKey: string,
    repoIdOrName: string
  ): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/git/repositories/${repoIdOrName}`);
  }

  public getPullRequests(
    projectIdOrKey: string,
    repoIdOrName: string,
    params: GetPullRequestsParams
  ): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests`, params);
  }

  public getPullRequestsCount(
    projectIdOrKey: string,
    repoIdOrName: string,
    params: GetPullRequestsParams
  ): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/count`, params);
  }

  public postPullRequest(
    projectIdOrKey: string,
    repoIdOrName: string,
    params: PostPullRequestParams
  ): Promise<any> {
    return this.post(`/api/v2/projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests`, params);
  }

  public getPullRequest(
    projectIdOrKey: string,
    repoIdOrName: string,
    number: number
  ): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}`);
  }

  public patchPullRequest(
    projectIdOrKey: string,
    repoIdOrName: string,
    number: number,
    params: PatchPullRequestParams
  ): Promise<any> {
    return this.patch(`/api/v2/projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}`, params);
  }

  public getPullRequestComments(
    projectIdOrKey: string,
    repoIdOrName: string,
    number: number,
    params: GetPullRequestCommentsParams
  ): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments`, params);
  }

  public postPullRequestComments(
    projectIdOrKey: string,
    repoIdOrName: string,
    number: number,
    params: PostPullRequestCommentsParams
  ): Promise<any> {
    return this.post(`/api/v2/projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments`, params);
  }

  public getPullRequestCommentsCount(
    projectIdOrKey: string,
    repoIdOrName: string,
    number: number
  ): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments/count`);
  }

  public patchPullRequestComments(
    projectIdOrKey: string,
    repoIdOrName: string,
    number: number,
    commentId: number,
    params: PatchPullRequestCommentsParams
  ): Promise<any> {
    return this.patch(`/api/v2/projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/${commentId}`, params);
  }

  public getPullRequestAttachments(
    projectIdOrKey: string,
    repoIdOrName: string,
    number: number
  ): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments`);
  }

  public deletePullRequestAttachment(
    projectIdOrKey: string,
    repoIdOrName: string,
    number: number,
    attachmentId: number
  ): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments/${attachmentId}`);
  }

	private get(endpoint: string, query?: any): Promise<any> {
    return this.request('GET', endpoint, query);
  }

  private post(endpoint: string, body: any): Promise<any> {
    return this.request('POST', endpoint, null, body);
  }

  private put(endpoint: string, body: any): Promise<any> {
    return this.request('PUT', endpoint, null, body);
  }

  private patch(endpoint: string, body: any): Promise<any> {
    return this.request('PATCH', endpoint, null, body);
  }

  private delete(endpoint: string, body?: any): Promise<any> {
    return this.request('DELETE', endpoint, null, body);
  }

  private request (
    method: string,
    endpoint: string,
    query = new Map<string, any>(),
    body = new Map<string, any>()
  ): Promise<any> {
    query.set('apiKey', this.apiKey);
    const url = `https://${this.spaceId}.backlog.jp${endpoint}?${this.toQueryString(query)}`;
    const init: RequestInit = {};
    init.method = method;
    if (method != 'GET') {
      const form = this.toFormData(body);
      init.headers = <{ [index: string]: string; }> form.getHeaders();
      init.body = form;
    }
    init.headers['Accept'] = 'application/json';
    return fetch(url, init).then(this.checkStatus).then(this.parseJSON);
  }

  private checkStatus(response: IResponse): Promise<IResponse> {
    return new Promise((resolve, reject) => {
      if (200 <= response.status && response.status < 300) {
        return response;
      } else {
        throw new Error(response.statusText);
      }
    });
  }

  private parseJSON(response: IResponse): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(response.json());
    });
  }

  private toFormData(obj: any): FormData {
    return Object.keys(obj).reduce((result, key) => {
      const value = obj[key];
      if (!value) {
        return result;
      }
      if (isArray(value)) {
        value.forEach(v => result.append(`${key}[]`, v));
      } else {
        result.append(key, value);
      }
      return result;
    }, new FormData());
  }

  private toQueryString(obj: any): string {
    return Object.keys(obj).reduce((result, key) => {
      const value = obj[key];
      if (!value) {
        return result;
      }
      if (isArray(value)) {
        value.forEach(v => result.push(`${key}[]=${v}`));
      } else {
        result.push(`${key}=${obj[key]}`);
      }
      return result;
    }, []).join('&');
  }

}
