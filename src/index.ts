import isArray from 'isarray';
import FormData from 'form-data';

export interface GetSpaceActivitiesParams {
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

export interface GetProjectsParam {
  archived?: boolean;
  all?: boolean;
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

  public getSpaceActivities(params: GetSpaceActivitiesParams): Promise<any> {
    return this.get('/api/v2/space/activities', params);
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

  public getProjects(params?: GetProjectsParam): Promise<any> {
    return this.get('/api/v2/projects', params);
  }

  public getIssueTypes(projectIdOrKey: string): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/issueTypes`);
  }

  public getPriorities(): Promise<any> {
    return this.get('/api/v2/priorities');
  }

  public getCategories(projectIdOrKey: string): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/categories`);
  }

  public getVersions(projectIdOrKey: string): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/versions`);
  }

  public getUsers(): Promise<any> {
    return this.get(`/api/v2/users`);
  }

  public getUser(userId: number): Promise<any> {
    return this.get(`/api/v2/users/${userId}`);
  }

  public getProjectUsers(projectIdOrKey: string): Promise<any> {
    return this.get(`/api/v2/projects/${projectIdOrKey}/users`);
  }

  public getStatuses(): Promise<any> {
    return this.get(`/api/v2/statuses`);
  }

	private get(endpoint: string, query?: any): Promise<any> {
    return this.request('GET', endpoint, query);
  }

  private post(endpoint: string, body: any): Promise<any> {
    return this.request('POST', endpoint, null, body);
  }

  private patch(endpoint: string, body: any): Promise<any> {
    return this.request('PATCH', endpoint, null, body);
  }

  private delete(endpoint: string, body: any): Promise<any> {
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
