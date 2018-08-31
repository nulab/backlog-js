import * as Option from './option';
import * as Entity from './entity';
import * as Error from './error';
import Request from './request';

declare interface IResponse { [name:string]: any; }

export default class Backlog extends Request {

  constructor(configure: {
    host: string, apiKey?: string, accessToken?: string, timeout?: number
  }) {
    super(configure);
  }

  /**
   * 1: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-space/
   */
  public getSpace(): Promise<any> {
    return this.get('space');
  }

  /**
   * 2: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-recent-updates/
   */
  public getSpaceActivities(
    params: Option.Space.GetActivitiesParams
  ): Promise<any> {
    return this.get('space/activities', params);
  }

  /**
   * 4: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-space-notification/
   */
  public getSpaceNotification(): Promise<any> {
    return this.get('space/notification');
  }

  /**
   * 5: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-space-notification/
   */
  public putSpaceNotification(
    params: Option.Space.PutSpaceNotificationParams
  ): Promise<any> {
    return this.put('space/notification', params);
  }

  /**
   * 6: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-space-disk-usage/
   */
  public getSpaceDiskUsage(): Promise<any> {
    return this.get('space/diskUsage');
  }

  /**
   * 3: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-space-logo/
   */
  public getSpaceIcon(): Promise<Entity.File.FileData> {
    return this.download('space/image');
  }

  /**
   * 7: https://developer.nulab-inc.com/ja/docs/backlog/api/2/post-attachment-file/
   */
  public postSpaceAttachment(form: FormData) {
    return this.upload("space/attachment", form);
  }

  /**
   * 8: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-user-list/
   */
  public getUsers(): Promise<any> {
    return this.get(`users`);
  }

  /**
   * 9: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-user/
   */
  public getUser(userId: number): Promise<any> {
    return this.get(`users/${userId}`);
  }

  /**
   * 10: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-user/
   */
  public postUser(params: Option.User.PostUserParams): Promise<any> {
    return this.post(`users`, params);
  }

  /**
   * 11: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-user/
   */
  public patchUser(
    userId: number, params: Option.User.PatchUserParams
  ): Promise<any> {
    return this.patch(`users/${userId}`, params);
  }

  /**
   * 12: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-user/
   */
  public deleteUser(userId: number): Promise<any> {
    return this.delete(`users/${userId}`);
  }

  /**
   * 13: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-own-user/
   */
  public getMyself(): Promise<any> {
    return this.get('users/myself');
  }

  /**
   * 15: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-user-recent-updates/
   */
  public getUserActivities(
    userId: number, params: Option.User.GetUserActivitiesParams
  ): Promise<any> {
    return this.get(`users/${userId}/activities`, params);
  }

  /**
   * 16: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-received-star-list/
   */
  public getUserStars(
    userId: number, params: Option.User.GetUserStarsParams
  ): Promise<any> {
    return this.get(`users/${userId}/stars`, params);
  }

  /**
   * 17: https://developer.nulab-inc.com/ja/docs/backlog/api/2/count-user-received-stars/
   */
  public getUserStarsCount(
    userId: number, params: Option.User.GetUserStarsCountParams
  ): Promise<any> {
    return this.get(`users/${userId}/count`, params);
  }

  /**
   * 18: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-list-of-recently-viewed-issues/
   */
  public getRecentlyViewedIssues(
    params: Option.User.GetRecentlyViewedParams
  ): Promise<any> {
    return this.get('users/myself/recentlyViewedIssues', params);
  }

  /**
   * 19: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-list-of-recently-viewed-projects/
   */
  public getRecentlyViewedProjects(
    params: Option.User.GetRecentlyViewedParams
  ): Promise<any> {
    return this.get('users/myself/recentlyViewedProjects', params);
  }

  /**
   * 20: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-list-of-recently-viewed-wikis/
   */
  public getRecentlyViewedWikis(
    params: Option.User.GetRecentlyViewedParams
  ): Promise<any> {
    return this.get('users/myself/recentlyViewedWikis', params);
  }

  /**
   * 14: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-user-icon/
   */
  public getUserIcon(userId: number): Promise<Entity.File.FileData> {
    return this.download(`users/${userId}/icon`);
  }

  /**
   * 21: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-list-of-groups/
   */
  public getGroups(params: Option.Group.GetGroupsParams): Promise<any> {
    return this.get('groups', params);
  }

  /**
   * 22: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-group/
   */
  public postGroups(params: Option.Group.PostGroupsParams): Promise<any> {
    return this.post('groups', params);
  }

  /**
   * 23: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-group/
   */
  public getGroup(groupId: number): Promise<any> {
    return this.get(`groups/${groupId}`);
  }

  /**
   * 24: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-group/
   */
  public patchGroup(
    groupId: number, params: Option.Group.PatchGroupParams
  ): Promise<any> {
    return this.patch('groups', params);
  }

  /**
   * 25: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-group/
   */
  public deleteGroup(groupId: number): Promise<any> {
    return this.delete(`groups/${groupId}`);
  }

  /**
   * 26: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-status-list/
   */
  public getStatuses(): Promise<any> {
    return this.get('statuses');
  }

  /**
   * 27: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-resolution-list/
   */
  public getResolutions(): Promise<any> {
    return this.get('resolutions');
  }

  /**
   * 28: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-priority-list/
   */
  public getPriorities(): Promise<any> {
    return this.get('priorities');
  }

  /**
   * 30: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-project/
   */
  public postProject(params: Option.Project.PostProjectParams): Promise<any> {
    return this.post('projects', params);
  }

  /**
   * 29: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-project-list/
   */
  public getProjects(params?: Option.Project.GetProjectsParams): Promise<any> {
    return this.get('projects', params);
  }

  /**
   * 31: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-project/
   */
  public getProject(projectIdOrKey: string): Promise<any> {
    return this.get(`projects/${projectIdOrKey}`);
  }

  /**
   * 32: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-project/
   */
  public patchProject(
    projectIdOrKey: string, params: Option.Project.PatchProjectParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}`, params);
  }

  /**
   * 33: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-project/
   */
  public deleteProject(projectIdOrKey: string): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}`);
  }

  /**
   * 35: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-project-recent-updates/
   */
  public getProjectActivities(
    projectIdOrKey: string, params: Option.Space.GetActivitiesParams
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/activities`, params);
  }

  /**
   * 36: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-project-user/
   */
  public postProjectUser(projectIdOrKey: string|number, userId: string): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/users`, { userId });
  }

  /**
   * 37: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-project-user-list/
   */
  public getProjectUsers(projectIdOrKey: string): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/users`);
  }

  /**
   * 38: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-project-user/
   */
  public deleteProjectUsers(
    projectIdOrKey: string, params: Option.Project.DeleteProjectUsersParams
  ): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/users`, params);
  }

  /**
   * 39: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-project-administrator/
   */
  public postProjectAdministrators(
    projectIdOrKey: string, params: Option.Project.PostProjectAdministrators
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/administrators`, params);
  }

  /**
   * 40: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-list-of-project-administrators/
   */
  public getProjectAdministrators(projectIdOrKey: string): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/administrators`);
  }

  /**
   * 41: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-project-administrator/
   */
  public deleteProjectAdministrators(
    projectIdOrKey: string, params: Option.Project.DeleteProjectAdministrators
  ): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/administrators`, params);
  }

  /**
   * 42: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-issue-type-list/
   */
  public getIssueTypes(projectIdOrKey: string): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/issueTypes`);
  }

  /**
   * 43: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-issue-type/
   */
  public postIssueType(
    projectIdOrKey: string, params: Option.Project.PostIssueTypeParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/issueTypes`, params);
  }

  /**
   * 44: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-issue-type/
   */
  public patchIssueType(
    projectIdOrKey: string, id: number, params: Option.Project.PatchIssueTypeParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/issueTypes/${id}`, params);
  }

  /**
   * 45: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-issue-type/
   */
  public deleteIssueType(
    projectIdOrKey: string, id: number, params: Option.Project.DeleteIssueTypeParams
  ): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/issueTypes/${id}`, params);
  }

  /**
   * 46: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-category-list/
   */
  public getCategories(projectIdOrKey: string): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/categories`);
  }

  /**
   * 47: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-category/
   */
  public postCategories(
    projectIdOrKey: string, params: Option.Project.PostCategoriesParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/categories`, params);
  }

  /**
   * 48: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-category/
   */
  public patchCategories(
    projectIdOrKey: string, id: number, params: Option.Project.PatchCategoriesParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/categories/${id}`, params);
  }

  /**
   * 49: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-category/
   */
  public deleteCategories(projectIdOrKey: string, id: number): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/categories/${id}`);
  }

  /**
   * 50: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-version-milestone-list/
   */
  public getVersions(projectIdOrKey: string): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/versions`);
  }

  /**
   * 51: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-version-milestone/
   */
  public postVersions(
    projectIdOrKey: string, params: Option.Project.PostVersionsParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/versions`, params);
  }

  /**
   * 52: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-version-milestone/
   */
  public patchVersions(
    projectIdOrKey: string, id: number, params: Option.Project.PatchVersionsParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/versions/${id}`, params);
  }

  /**
   * 53: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-version/
   */
  public deleteVersions(projectIdOrKey: string, id: number): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/versions/${id}`);
  }

  /**
   * 54: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-custom-field-list/
   */
  public getCustomFields(projectIdOrKey: string): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/customFields`);
  }

  /**
   * 55: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-custom-field/
   */
  public postCustomField(
    projectIdOrKey: string,
    params: Option.Project.PostCustomFieldParams
      | Option.Project.PostCustomFieldWithNumericParams
      | Option.Project.PostCustomFieldWithDateParams
      | Option.Project.PostCustomFieldWithListParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/customFields`, params);
  }

  /**
   * 56: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-custom-field/
   */
  public patchCustomField(
    projectIdOrKey: string,
    id: number,
    params: Option.Project.PatchCustomFieldParams
      | Option.Project.PatchCustomFieldWithNumericParams
      | Option.Project.PatchCustomFieldWithDateParams
      | Option.Project.PatchCustomFieldWithListParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/customFields/${id}`, params);
  }

  /**
   * 57: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-custom-field/
   */
  public deleteCustomField(projectIdOrKey: string, id: number): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/customFields/${id}`);
  }

  /**
   * 58: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-list-item-for-list-type-custom-field/
   */
  public postCustomFieldItem(
    projectIdOrKey: string, id: number, params: Option.Project.PostCustomFieldItemParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/customFields/${id}/items`, params);
  }

  /**
   * 59: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-list-item-for-list-type-custom-field/
   */
  public patchCustomFieldItem(
    projectIdOrKey: string, id: number, itemId: number, params: Option.Project.PatchCustomFieldItemParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/customFields/${id}/items/${itemId}`, params);
  }

  /**
   * 60: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-list-item-for-list-type-custom-field/
   */
  public deleteCustomFieldItem(
    projectIdOrKey: string, id: number, params: Option.Project.PostCustomFieldItemParams
  ): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/customFields/${id}/items`);
  }

  /**
   * 61: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-list-of-shared-files/
   */
  public getSharedFiles(
    projectIdOrKey: string, path: string, params: Option.Project.GetSharedFilesParams
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/files/metadata/${path}`);
  }

  /**
   * 63: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-project-disk-usage/
   */
  public getProjectsDiskUsage(
    projectIdOrKey: string
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/diskUsage`);
  }

  /**
   * 64: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-list-of-webhooks/
   */
  public getWebhooks(
    projectIdOrKey: string
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/webhooks`);
  }

  /**
   * 65: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-webhook/
   */
  public postWebhook(
    projectIdOrKey: string, params: Option.Project.PostWebhookParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/webhooks`, params);
  }

  /**
   * 66: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-webhook/
   */
  public getWebhook(
    projectIdOrKey: string, webhookId: string
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/webhooks/${webhookId}`);
  }

  /**
   * 67: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-webhook/
   */
  public patchWebhook(
    projectIdOrKey: string, webhookId: string, params: Option.Project.PatchWebhookParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/webhooks/${webhookId}`, params);
  }

  /**
   * 68: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-webhook/
   */
  public deleteWebhook(
    projectIdOrKey: string, webhookId: string
  ): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/webhooks/${webhookId}`);
  }

  /**
   * 71: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-issue/
   */
  public postIssue(params: Option.Issue.PostIssueParams): Promise<any> {
    return this.post('issues', params);
  }

  /**
   * 73: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-issue/
   */
  public patchIssue(
    issueIdOrKey: string, params: Option.Issue.PatchIssueParams
  ): Promise<any> {
    return this.patch(`issues/${issueIdOrKey}`, params);
  }

  /**
   * 69: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-issue-list/
   */
  public getIssues(params?: Option.Issue.GetIssuesParams): Promise<any> {
    return this.get('issues', params);
  }

  /**
   * 72: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-issue/
   */
  public getIssue(issueIdOrKey: string): Promise<any> {
    return this.get(`issues/${issueIdOrKey}`);
  }

  /**
   * 70: https://developer.nulab-inc.com/ja/docs/backlog/api/2/count-issue/
   */
  public getIssuesCount(params?: Option.Issue.GetIssuesParams): Promise<any> {
    return this.get('issues/count', params);
  }

  /**
   * 74: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-issue/
   */
  public deleteIssuesCount(issueIdOrKey: string): Promise<any> {
    return this.delete(`issues/${issueIdOrKey}`);
  }

  /**
   * 75: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-comment-list/
   */
  public getIssueComments(
    issueIdOrKey: string, params: Option.Issue.GetIssueCommentsParams
  ): Promise<any> {
    return this.get(`issues/${issueIdOrKey}/comments`, params);
  }

  /**
   * 76: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-comment/
   */
  public postIssueComments(
    issueIdOrKey: string, params: Option.Issue.PostIssueCommentsParams
  ): Promise<any> {
    return this.post(`issues/${issueIdOrKey}/comments`, params);
  }

  /**
   * 77: https://developer.nulab-inc.com/ja/docs/backlog/api/2/count-comment/
   */
  public getIssueCommentsCount(issueIdOrKey: string): Promise<any> {
    return this.get(`issues/${issueIdOrKey}/comments/count`);
  }

  /**
   * 78: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-comment/
   */
  public getIssueComment(issueIdOrKey: string, commentId: number): Promise<any> {
    return this.get(`issues/${issueIdOrKey}/comments/${commentId}`);
  }

  /**
   * 79: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-comment/
   */
  public patchIssueComment(
    issueIdOrKey: string, commentId: number, params: Option.Issue.PatchIssueCommentParams
  ): Promise<any> {
    return this.patch(`issues/${issueIdOrKey}/comments/${commentId}`, params);
  }

  /**
   * 80: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-list-of-comment-notifications/
   */
  public getIssueCommentNotifications(
    issueIdOrKey: string, commentId: number
  ): Promise<any> {
    return this.get(`issues/${issueIdOrKey}/comments/${commentId}/notifications`);
  }

  /**
   * 81: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-comment-notification/
   */
  public postIssueCommentNotifications(
    issueIdOrKey: string, commentId: number, prams: Option.Issue.IssueCommentNotifications
  ): Promise<any> {
    return this.post(`issues/${issueIdOrKey}/comments/${commentId}/notifications`, prams);
  }

  /**
   * 82: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-list-of-issue-attachments/
   */
  public getIssueAttachments(issueIdOrKey: string): Promise<any> {
    return this.get(`issues/${issueIdOrKey}/attachments`);
  }

  /**
   * 84: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-issue-attachment/
   */
  public deleteIssueAttachment(issueIdOrKey: string, attachmentId: string): Promise<any> {
    return this.delete(`issues/${issueIdOrKey}/attachments/${attachmentId}`);
  }

  /**
   * 85: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-list-of-linked-shared-files/
   */
  public getIssueSharedFiles(issueIdOrKey: string): Promise<any> {
    return this.get(`issues/${issueIdOrKey}/sharedFiles`);
  }

  /**
   * 86: https://developer.nulab-inc.com/ja/docs/backlog/api/2/link-shared-files-to-issue/
   */
  public linkIssueSharedFiles(
    issueIdOrKey: string, params: Option.Issue.LinkIssueSharedFilesParams
  ): Promise<any> {
    return this.post(`issues/${issueIdOrKey}/sharedFiles`, params);
  }

  /**
   * 87: https://developer.nulab-inc.com/ja/docs/backlog/api/2/remove-link-to-shared-file-from-issue/
   */
  public unlinkIssueSharedFile(issueIdOrKey: string, id: number): Promise<any> {
    return this.delete(`issues/${issueIdOrKey}/sharedFiles/${id}`);
  }

  /**
   * 88: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-wiki-page-list/
   */
  public getWikis(projectIdOrKey: number): Promise<any> {
    return this.get(`wikis`, { projectIdOrKey });
  }

  /**
   * 89: https://developer.nulab-inc.com/ja/docs/backlog/api/2/count-wiki-page/
   */
  public getWikisCount(projectIdOrKey: number): Promise<any> {
    return this.get(`wikis/count`, { projectIdOrKey });
  }

  /**
   * 90: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-wiki-page-tag-list/
   */
  public getWikisTags(projectIdOrKey: number): Promise<any> {
    return this.get(`wikis/tags`, { projectIdOrKey });
  }

  /**
   * 91: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-wiki-page/
   */
  public postWiki(params: Option.Wiki.PostWikiParams): Promise<any> {
    return this.post(`wikis`, params);
  }

  /**
   * 92: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-wiki-page/
   */
  public getWiki(wikiId: number): Promise<any> {
    return this.get(`wikis/${wikiId}`);
  }

  /**
   * 93: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-wiki-page/
   */
  public patchWiki(
    wikiId: number, params: Option.Wiki.PatchWikiParams
  ): Promise<any> {
    return this.patch(`wikis/${wikiId}`, params);
  }

  /**
   * 94: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-wiki-page/
   */
  public deleteWiki(wikiId: number, mailNotify: boolean): Promise<any> {
    return this.delete(`wikis/${wikiId}`, { mailNotify });
  }

  /**
   * 95: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-list-of-wiki-attachments/
   */
  public getWikisAttachments(wikiId: number): Promise<any> {
    return this.get(`wikis/${wikiId}/attachments`);
  }

  /**
   * 96: https://developer.nulab-inc.com/ja/docs/backlog/api/2/attach-file-to-wiki/
   */
  public postWikisAttachments(wikiId: number, attachmentId: number[]): Promise<any> {
    return this.post(`wikis/${wikiId}/attachments`, { attachmentId });
  }

  /**
   * 98: https://developer.nulab-inc.com/ja/docs/backlog/api/2/remove-wiki-attachment/
   */
  public deleteWikisAttachments(wikiId: number, attachmentId: number): Promise<any> {
    return this.delete(`wikis/${wikiId}/attachments/${attachmentId}`);
  }

  /**
   * 99: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-list-of-shared-files-on-wiki/
   */
  public getWikisSharedFiles(wikiId: number): Promise<any> {
    return this.get(`wikis/${wikiId}/sharedFiles`);
  }

  /**
   * 100: https://developer.nulab-inc.com/ja/docs/backlog/api/2/link-shared-files-to-wiki/
   */
  public linkWikisSharedFiles(wikiId: number, fileId: number[]): Promise<any> {
    return this.post(`wikis/${wikiId}/sharedFiles`, { fileId });
  }

  /**
   * 101: https://developer.nulab-inc.com/ja/docs/backlog/api/2/remove-link-to-shared-file-from-wiki/
   */
  public unlinkWikisSharedFiles(wikiId: number, id: number): Promise<any> {
    return this.delete(`wikis/${wikiId}/sharedFiles/${id}`);
  }

  /**
   * 102: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-wiki-page-history/
   */
  public getWikisHistory(
    wikiId: number, params: Option.Wiki.GetWikisHistoryParams
  ): Promise<any> {
    return this.get(`wikis/${wikiId}/history`, params);
  }

  /**
   * 103: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-wiki-page-star/
   */
  public getWikisStars(wikiId: number): Promise<any> {
    return this.get(`wikis/${wikiId}/stars`);
  }

  /**
   * 104: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-star/
   */
  public postStar(params: Option.Project.PostStarParams): Promise<any> {
    return this.post('stars', params);
  }

  /**
   * 105: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-notification/
   */
  public getNotifications(
    params: Option.Notification.GetNotificationsParams
  ): Promise<any> {
    return this.get('notifications', params);
  }

  /**
   * 106: https://developer.nulab-inc.com/ja/docs/backlog/api/2/count-notification/
   */
  public getNotificationsCount(
    params: Option.Notification.GetNotificationsCountParams
  ): Promise<any> {
    return this.get('notifications/count', params);
  }

  /**
   * 107: https://developer.nulab-inc.com/ja/docs/backlog/api/2/reset-unread-notification-count/
   */
  public resetNotificationsMarkAsRead(): Promise<any> {
    return this.post('notifications/markAsRead');
  }

  /**
   * 108: https://developer.nulab-inc.com/ja/docs/backlog/api/2/read-notification/
   */
  public markAsReadNotification(id: number): Promise<any> {
    return this.post(`notifications/${id}/markAsRead`);
  }

  /**
   * 109: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-list-of-git-repositories/
   */
  public getGitRepositories(projectIdOrKey: string): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories`);
  }

  /**
   * 110: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-git-repository/
   */
  public getGitRepository(
    projectIdOrKey: string, repoIdOrName: string
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}`);
  }

  /**
   * 111: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-pull-request-list/
   */
  public getPullRequests(
    projectIdOrKey: string,
    repoIdOrName: string,
    params: Option.PullRequest.GetPullRequestsParams
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests`, params);
  }

  /**
   * 112: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-number-of-pull-requests/
   */
  public getPullRequestsCount(
    projectIdOrKey: string,
    repoIdOrName: string,
    params: Option.PullRequest.GetPullRequestsParams
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/count`, params);
  }

  /**
   * 113: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-pull-request/
   */
  public postPullRequest(
    projectIdOrKey: string,
    repoIdOrName: string,
    params: Option.PullRequest.PostPullRequestParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests`, params);
  }

  /**
   * 114: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-pull-request/
   */
  public getPullRequest(
    projectIdOrKey: string, repoIdOrName: string, number: number
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}`);
  }

  /**
   * 115: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-pull-request/
   */
  public patchPullRequest(
    projectIdOrKey: string,
    repoIdOrName: string,
    number: number,
    params: Option.PullRequest.PatchPullRequestParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}`, params);
  }

  /**
   * 116: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-pull-request-comment/
   */
  public getPullRequestComments(
    projectIdOrKey: string,
    repoIdOrName: string,
    number: number,
    params: Option.PullRequest.GetPullRequestCommentsParams
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments`, params);
  }

  /**
   * 117: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-pull-request-comment/
   */
  public postPullRequestComments(
    projectIdOrKey: string,
    repoIdOrName: string,
    number: number,
    params: Option.PullRequest.PostPullRequestCommentsParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments`, params);
  }

  /**
   * 118: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-number-of-pull-request-comments/
   */
  public getPullRequestCommentsCount(
    projectIdOrKey: string, repoIdOrName: string, number: number
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments/count`);
  }

  /**
   * 119: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-pull-request-comment-information/
   */
  public patchPullRequestComments(
    projectIdOrKey: string,
    repoIdOrName: string,
    number: number,
    commentId: number,
    params: Option.PullRequest.PatchPullRequestCommentsParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/${commentId}`, params);
  }

  /**
   * 120: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-list-of-pull-request-attachment/
   */
  public getPullRequestAttachments(
    projectIdOrKey: string, repoIdOrName: string, number: number
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments`);
  }

  /**
   * 122: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-pull-request-attachments/
   */
  public deletePullRequestAttachment(
    projectIdOrKey: string, repoIdOrName: string, number: number, attachmentId: number
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments/${attachmentId}`);
  }

  /**
   * 34: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-project-icon/
   */
  public getProjectIcon(projectIdOrKey: string): Promise<Entity.File.FileData> {
    return this.download(`projects/${projectIdOrKey}/image`);
  }

  /**
   * 62: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-file/
   */
  public getSharedFile(projectIdOrKey: string, sharedFileId: number): Promise<Entity.File.FileData> {
    return this.download(`projects/${projectIdOrKey}/files/${sharedFileId}`);
  }

  /**
   * 83: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-issue-attachment/
   */
  public getIssueAttachment(issueIdOrKey: string, attachmentId: number): Promise<Entity.File.FileData> {
    return this.download(`issues/${issueIdOrKey}/attachments/${attachmentId}`);
  }

  /**
   * 97: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-wiki-page-attachment/
   */
  public getWikiAttachment(wikiId: number, attachmentId: number): Promise<Entity.File.FileData> {
    return this.download(`wikis/${wikiId}/attachments/${attachmentId}`);
  }

  /**
   * 121: https://developer.nulab-inc.com/ja/docs/backlog/api/2/download-pull-request-attachment/
   */
  public getPullRequestAttachment(
    projectIdOrKey: string, repoIdOrName: string, number: number, attachmentId: number
  ): Promise<Entity.File.FileData> {
    return this.download(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments/${attachmentId}`);
  }

  /**
   * 123: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-watching-list
   */
  public getWatchingListItems(userId: number): Promise<any> {
    return this.get(`users/${userId}/watchings`);
  }

  /**
   * 124: https://developer.nulab-inc.com/ja/docs/backlog/api/2/count-watching
   */
  public getWatchingListCount(userId: number): Promise<any> {
    return this.get(`users/${userId}/watchings/count`);
  }

  /**
   * 125: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-watching
   */
  public getWatchingListItem(watchId: number): Promise<any> {
    return this.get(`watchings/${watchId}`);
  }

  /**
   * 126: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-watching
   */
  public postWatchingListItem(params: any) {
    return this.post(`watchings`, params);
  }

  /**
   * 127: https://developer.nulab-inc.com/ja/docs/backlog/api/2/update-watching
   */
  public patchWatchingListItem(watchId: number, note: string): Promise<any> {
    return this.patch(`watchings/${watchId}`, { note });
  }

  /**
   * 128: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-watching
   */
  public deletehWatchingListItem(watchId: number) {
    return this.delete(`watchings/${watchId}`);
  }

  /**
   * 129: https://developer.nulab-inc.com/ja/docs/backlog/api/2/mark-watching-as-read
   */
  public resetWatchingListItemAsRead(watchId: number): Promise<undefined> {
    return this.post(`watchings/${watchId}/markAsRead`);
  }

  /**
   * 130: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-project-group-list
   */
  public getProjectGroupList(projectIdOrKey: string|number) {
    return this.get(`projects/${projectIdOrKey}/groups`)
  }

  /**
   * 131: https://developer.nulab-inc.com/ja/docs/backlog/api/2/add-project-group
   */
  public postProjectGroup(projectIdOrKey: string|number, params: any) {
    return this.post(`projects/${projectIdOrKey}/groups`, params);
  }
  
  /**
   * 132: https://developer.nulab-inc.com/ja/docs/backlog/api/2/delete-project-group
   */
  public deleteProjectGroup(projectIdOrKey: string|number) {
    return this.delete(`projects/${projectIdOrKey}/groups`);
  }

  /**
   * 133: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-group-icon
   */
  public getGroupIcon(groupId: string): Promise<any> {
    return this.download(`groups/${groupId}/icon`);
  }

  /**
   * 134: https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-licence
   */
  public getLicence(): Promise<any> {
    return this.get(`space/licence`);
  }


  private download(path: string): Promise<Entity.File.FileData> {
    return this.request({ method: 'GET', path }).then(this.parseFileData);
  }

  private upload(path: string, params: FormData): Promise<IResponse> {
    return this.request({ method: 'POST', path, params }).then(this.parseJSON);
  }

  private parseFileData(response: IResponse): Promise<Entity.File.FileData> {
    return new Promise((resolve, reject) => {
      if (typeof window !== 'undefined') {
        resolve({
          body: (<any>response).body,
          url: response.url,
          blob: () => response.blob(),
        });
      } else {
        const disposition = response.headers.get("Content-Disposition");
        const filename = disposition
          ? disposition.substring(disposition.indexOf("''") + 2) : "";
        resolve({
          body: (<any>response).body,
          url: response.url,
          filename: filename
        });
      }
    });
  }

}
