import isArray from 'isarray';
import FormData from 'form-data';

export declare interface PostIssueParam {
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
  customFields?: { [key:string]: any; };
  customFieldOtherValues?: { [key:string]: any; };
}

export declare interface PatchIssueParam {
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
  customFields?: { [key:string]: any; };
  customFieldOtherValues?: { [key:string]: any; };
}

export default class Backlog {

  private spaceId: string;
  private apiKey: string;

  constructor(option: { spaceId: string, apiKey: string }) {
    this.spaceId = option.spaceId;
    this.apiKey = option.apiKey;
  }

  public postIssue(param: PostIssueParam): Promise<any> {
    return this.post('/api/v2/issues', param);
  }

  public patchIssue(
    issueIdOrKey: string,
    param: PatchIssueParam
  ): Promise<any> {
    return this.patch(`/api/v2/issues/${issueIdOrKey}`, param);
  }

  public getIssues(param): Promise<any> {
    return this.get('/api/v2/issues', param);
  }

  public getIssue(issueIdOrKey: string): Promise<any> {
    return this.get(`/api/v2/issues/${issueIdOrKey}`);
  }

  getProjects(param?: { archived?: boolean, all?: boolean }): Promise<any> {
    return this.get('/api/v2/projects', param)
  }

  getIssueTypes(data) {
    return this.get(`/api/v2/projects/${data.projectIdOrKey}/issueTypes`, {})
  }

  getPriorities() {
    return this.get('/api/v2/priorities', {})
  }

  getCategories(data) {
    return this.get(`/api/v2/projects/${data.projectIdOrKey}/categories`, {})
  }

  getVersions(data) {
    return this.get(`/api/v2/projects/${data.projectIdOrKey}/versions`, {})
  }

  getUsers() {
    return this.get(`/api/v2/users`, {})
  }

  getUser(userId) {
    return this.get(`/api/v2/users/${userId}`, {})
  }

  getProjectUsers(data) {
    return this.get(`/api/v2/projects/${data.projectIdOrKey}/users`, {})
  }

  getStatuses() {
    return this.get(`/api/v2/statuses`, {})
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
