import * as Option from './option';
import * as Entity from './entity';
import Request from './request';

export default class Backlog extends Request {

  constructor(configure: {
    host: string, apiKey?: string, accessToken?: string, timeout?: number
  }) {
    super(configure);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space/
   */
  public getSpace(): Promise<any> {
    return this.get('space');
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-recent-updates/
   */
  public getSpaceActivities(
    params: Option.Space.GetActivitiesParams
  ): Promise<any> {
    return this.get('space/activities', params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space-logo/
   */
  public getSpaceIcon(): Promise<Entity.File.FileData> {
    return this.download('space/image');
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space-notification/
   */
  public getSpaceNotification(): Promise<any> {
    return this.get('space/notification');
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-space-notification/
   */
  public putSpaceNotification(
    params: Option.Space.PutSpaceNotificationParams
  ): Promise<any> {
    return this.put('space/notification', params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space-disk-usage/
   */
  public getSpaceDiskUsage(): Promise<any> {
    return this.get('space/diskUsage');
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/post-attachment-file/
   */
  public postSpaceAttachment(form: FormData) {
    return this.upload("space/attachment", form);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user-list/
   */
  public getUsers(): Promise<any> {
    return this.get(`users`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user/
   */
  public getUser(userId: number): Promise<any> {
    return this.get(`users/${userId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-user/
   */
  public postUser(params: Option.User.PostUserParams): Promise<any> {
    return this.post(`users`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-user/
   */
  public patchUser(
    userId: number, params: Option.User.PatchUserParams
  ): Promise<any> {
    return this.patch(`users/${userId}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-user/
   */
  public deleteUser(userId: number): Promise<any> {
    return this.delete(`users/${userId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-own-user/
   */
  public getMyself(): Promise<any> {
    return this.get('users/myself');
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user-icon/
   */
  public getUserIcon(userId: number): Promise<Entity.File.FileData> {
    return this.download(`users/${userId}/icon`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user-recent-updates/
   */
  public getUserActivities(
    userId: number, params: Option.User.GetUserActivitiesParams
  ): Promise<any> {
    return this.get(`users/${userId}/activities`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-received-star-list/
   */
  public getUserStars(
    userId: number, params: Option.User.GetUserStarsParams
  ): Promise<any> {
    return this.get(`users/${userId}/stars`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-user-received-stars/
   */
  public getUserStarsCount(
    userId: number, params: Option.User.GetUserStarsCountParams
  ): Promise<any> {
    return this.get(`users/${userId}/stars/count`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-issues/
   */
  public getRecentlyViewedIssues(
    params: Option.User.GetRecentlyViewedParams
  ): Promise<any> {
    return this.get('users/myself/recentlyViewedIssues', params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-projects/
   */
  public getRecentlyViewedProjects(
    params: Option.User.GetRecentlyViewedParams
  ): Promise<any> {
    return this.get('users/myself/recentlyViewedProjects', params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-wikis/
   */
  public getRecentlyViewedWikis(
    params: Option.User.GetRecentlyViewedParams
  ): Promise<any> {
    return this.get('users/myself/recentlyViewedWikis', params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-groups/
   * @deprecated
   */
  public getGroups(params: Option.Group.GetGroupsParams): Promise<any> {
    console.warn("Deprecated: Use getTeams instead.");
    return this.get('groups', params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-group/
   * @deprecated
   */
  public postGroups(params: Option.Group.PostGroupsParams): Promise<any> {
    console.warn("Deprecated: Use postTeam instead.");
    return this.post('groups', params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-group/
   * @deprecated
   */
  public getGroup(groupId: number): Promise<any> {
    console.warn("Deprecated: Use getTeam instead.");
    return this.get(`groups/${groupId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-group/
   * @deprecated
   */
  public patchGroup(
    groupId: number, params: Option.Group.PatchGroupParams
  ): Promise<any> {
    console.warn("Deprecated: Use patchTeam instead.");
    return this.patch(`groups/${groupId}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-group/
   * @deprecated
   */
  public deleteGroup(groupId: number): Promise<any> {
    console.warn("Deprecated: Use deleteTeam instead.");
    return this.delete(`groups/${groupId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-status-list/
   * @deprecated
   */
  public getStatuses(): Promise<any> {
    console.warn("Deprecated: Use getProjectStatuses instead.");
    return this.get('statuses');
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-status-list-of-project/
   */
  public getProjectStatuses(projectIdOrKey: string | number): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/statuses`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-resolution-list/
   */
  public getResolutions(): Promise<any> {
    return this.get('resolutions');
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-priority-list/
   */
  public getPriorities(): Promise<any> {
    return this.get('priorities');
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-list/
   */
  public getProjects(params?: Option.Project.GetProjectsParams): Promise<any> {
    return this.get('projects', params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project/
   */
  public postProject(params: Option.Project.PostProjectParams): Promise<any> {
    return this.post('projects', params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project/
   */
  public getProject(projectIdOrKey: string | number): Promise<any> {
    return this.get(`projects/${projectIdOrKey}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-project/
   */
  public patchProject(
    projectIdOrKey: string | number, params: Option.Project.PatchProjectParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project/
   */
  public deleteProject(projectIdOrKey: string | number): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-icon/
   */
  public getProjectIcon(projectIdOrKey: string | number): Promise<Entity.File.FileData> {
    return this.download(`projects/${projectIdOrKey}/image`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-recent-updates/
   */
  public getProjectActivities(
    projectIdOrKey: string | number, params: Option.Space.GetActivitiesParams
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/activities`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-user/
   */
  public postProjectUser(projectIdOrKey: string | number, userId: string): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/users`, { userId });
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-user-list/
   */
  public getProjectUsers(projectIdOrKey: string | number): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/users`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-user/
   */
  public deleteProjectUsers(
    projectIdOrKey: string | number, params: Option.Project.DeleteProjectUsersParams
  ): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/users`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-administrator/
   */
  public postProjectAdministrators(
    projectIdOrKey: string | number, params: Option.Project.PostProjectAdministrators
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/administrators`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-project-administrators/
   */
  public getProjectAdministrators(projectIdOrKey: string | number): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/administrators`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-administrator/
   */
  public deleteProjectAdministrators(
    projectIdOrKey: string | number, params: Option.Project.DeleteProjectAdministrators
  ): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/administrators`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-status/
   */
  public postProjectStatus(
    projectIdOrKey: string | number, params: Option.Project.PostStatusParams,
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/statuses`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-status/
   */
  public patchProjectStatus(
    projectIdOrKey: string | number, id: number, params: Option.Project.PatchStatusParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/statuses/${id}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-status/
   */
  public deleteProjectStatus(
    projectIdOrKey: string | number, id: number, substituteStatusId: number
  ): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/statuses/${id}`, { substituteStatusId });
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-order-of-status/
   */
  public patchProjectStatusOrder(
    projectIdOrKey: string | number, statusId: number[]
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/statuses/updateDisplayOrder`, { statusId });
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-type-list/
   */
  public getIssueTypes(projectIdOrKey: string | number): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/issueTypes`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-issue-type/
   */
  public postIssueType(
    projectIdOrKey: string | number, params: Option.Project.PostIssueTypeParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/issueTypes`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-issue-type/
   */
  public patchIssueType(
    projectIdOrKey: string | number, id: number, params: Option.Project.PatchIssueTypeParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/issueTypes/${id}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-issue-type/
   */
  public deleteIssueType(
    projectIdOrKey: string | number, id: number, params: Option.Project.DeleteIssueTypeParams
  ): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/issueTypes/${id}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-category-list/
   */
  public getCategories(projectIdOrKey: string | number): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/categories`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-category/
   */
  public postCategories(
    projectIdOrKey: string | number, params: Option.Project.PostCategoriesParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/categories`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-category/
   */
  public patchCategories(
    projectIdOrKey: string | number, id: number, params: Option.Project.PatchCategoriesParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/categories/${id}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-category/
   */
  public deleteCategories(projectIdOrKey: string | number, id: number): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/categories/${id}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-version-milestone-list/
   */
  public getVersions(projectIdOrKey: string | number): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/versions`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-version-milestone/
   */
  public postVersions(
    projectIdOrKey: string | number, params: Option.Project.PostVersionsParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/versions`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-version-milestone/
   */
  public patchVersions(
    projectIdOrKey: string | number, id: number, params: Option.Project.PatchVersionsParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/versions/${id}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-version/
   */
  public deleteVersions(projectIdOrKey: string | number, id: number): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/versions/${id}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-custom-field-list/
   */
  public getCustomFields(projectIdOrKey: string | number): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/customFields`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-custom-field/
   */
  public postCustomField(
    projectIdOrKey: string | number,
    params: Option.Project.PostCustomFieldParams
      | Option.Project.PostCustomFieldWithNumericParams
      | Option.Project.PostCustomFieldWithDateParams
      | Option.Project.PostCustomFieldWithListParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/customFields`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-custom-field/
   */
  public patchCustomField(
    projectIdOrKey: string | number,
    id: number,
    params: Option.Project.PatchCustomFieldParams
      | Option.Project.PatchCustomFieldWithNumericParams
      | Option.Project.PatchCustomFieldWithDateParams
      | Option.Project.PatchCustomFieldWithListParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/customFields/${id}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-custom-field/
   */
  public deleteCustomField(projectIdOrKey: string | number, id: number): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/customFields/${id}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-list-item-for-list-type-custom-field/
   */
  public postCustomFieldItem(
    projectIdOrKey: string | number, id: number, params: Option.Project.PostCustomFieldItemParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/customFields/${id}/items`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-list-item-for-list-type-custom-field/
   */
  public patchCustomFieldItem(
    projectIdOrKey: string | number, id: number, itemId: number, params: Option.Project.PatchCustomFieldItemParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/customFields/${id}/items/${itemId}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-list-item-for-list-type-custom-field/
   */
  public deleteCustomFieldItem(
    projectIdOrKey: string | number, id: number, itemId: number
  ): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/customFields/${id}/items/${itemId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files/
   */
  public getSharedFiles(
    projectIdOrKey: string | number, path: string, params: Option.Project.GetSharedFilesParams
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/files/metadata/${path}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-file/
   */
  public getSharedFile(projectIdOrKey: string | number, sharedFileId: number): Promise<Entity.File.FileData> {
    return this.download(`projects/${projectIdOrKey}/files/${sharedFileId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-disk-usage/
   */
  public getProjectsDiskUsage(
    projectIdOrKey: string | number
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/diskUsage`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-webhooks/
   */
  public getWebhooks(
    projectIdOrKey: string | number
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/webhooks`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-webhook/
   */
  public postWebhook(
    projectIdOrKey: string | number, params: Option.Project.PostWebhookParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/webhooks`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-webhook/
   */
  public getWebhook(
    projectIdOrKey: string | number, webhookId: string
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/webhooks/${webhookId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-webhook/
   */
  public patchWebhook(
    projectIdOrKey: string | number, webhookId: string, params: Option.Project.PatchWebhookParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/webhooks/${webhookId}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-webhook/
   */
  public deleteWebhook(
    projectIdOrKey: string | number, webhookId: string
  ): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/webhooks/${webhookId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-list/
   */
  public getIssues(params?: Option.Issue.GetIssuesParams): Promise<any> {
    return this.get('issues', params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-issue/
   */
  public getIssuesCount(params?: Option.Issue.GetIssuesParams): Promise<any> {
    return this.get('issues/count', params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-issue/
   */
  public postIssue(params: Option.Issue.PostIssueParams): Promise<any> {
    return this.post('issues', params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-issue/
   */
  public patchIssue(
    issueIdOrKey: string | number, params: Option.Issue.PatchIssueParams
  ): Promise<any> {
    return this.patch(`issues/${issueIdOrKey}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue/
   */
  public getIssue(issueIdOrKey: string | number): Promise<any> {
    return this.get(`issues/${issueIdOrKey}`);
  }


  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-issue/
   */
  public deleteIssuesCount(issueIdOrKey: string | number): Promise<any> {
    return this.delete(`issues/${issueIdOrKey}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-comment-list/
   */
  public getIssueComments(
    issueIdOrKey: string | number, params: Option.Issue.GetIssueCommentsParams
  ): Promise<any> {
    return this.get(`issues/${issueIdOrKey}/comments`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-comment/
   */
  public postIssueComments(
    issueIdOrKey: string | number, params: Option.Issue.PostIssueCommentsParams
  ): Promise<any> {
    return this.post(`issues/${issueIdOrKey}/comments`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-comment/
   */
  public getIssueCommentsCount(issueIdOrKey: string | number): Promise<any> {
    return this.get(`issues/${issueIdOrKey}/comments/count`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-comment/
   */
  public getIssueComment(issueIdOrKey: string | number, commentId: number): Promise<any> {
    return this.get(`issues/${issueIdOrKey}/comments/${commentId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-comment/
   */
  public deleteIssueComment(issueIdOrKey: string | number, commentId: number): Promise<any> {
    return this.delete(`issues/${issueIdOrKey}/comments/${commentId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-comment/
   */
  public patchIssueComment(
    issueIdOrKey: string | number, commentId: number, params: Option.Issue.PatchIssueCommentParams
  ): Promise<any> {
    return this.patch(`issues/${issueIdOrKey}/comments/${commentId}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-comment-notifications/
   */
  public getIssueCommentNotifications(
    issueIdOrKey: string | number, commentId: number
  ): Promise<any> {
    return this.get(`issues/${issueIdOrKey}/comments/${commentId}/notifications`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-comment-notification/
   */
  public postIssueCommentNotifications(
    issueIdOrKey: string | number, commentId: number, prams: Option.Issue.IssueCommentNotifications
  ): Promise<any> {
    return this.post(`issues/${issueIdOrKey}/comments/${commentId}/notifications`, prams);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-issue-attachments/
   */
  public getIssueAttachments(issueIdOrKey: string | number): Promise<any> {
    return this.get(`issues/${issueIdOrKey}/attachments`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-attachment/
   */
  public getIssueAttachment(issueIdOrKey: string | number, attachmentId: number): Promise<Entity.File.FileData> {
    return this.download(`issues/${issueIdOrKey}/attachments/${attachmentId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-issue-attachment/
   */
  public deleteIssueAttachment(issueIdOrKey: string | number, attachmentId: string): Promise<any> {
    return this.delete(`issues/${issueIdOrKey}/attachments/${attachmentId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-participant-list/
   */
  public getIssueParticipants(issueIdOrKey: string | number): Promise<any> {
    return this.get(`issues/${issueIdOrKey}/participants`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-linked-shared-files/
   */
  public getIssueSharedFiles(issueIdOrKey: string | number): Promise<any> {
    return this.get(`issues/${issueIdOrKey}/sharedFiles`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-issue/
   */
  public linkIssueSharedFiles(
    issueIdOrKey: string | number, params: Option.Issue.LinkIssueSharedFilesParams
  ): Promise<any> {
    return this.post(`issues/${issueIdOrKey}/sharedFiles`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-issue/
   */
  public unlinkIssueSharedFile(issueIdOrKey: string | number, id: number): Promise<any> {
    return this.delete(`issues/${issueIdOrKey}/sharedFiles/${id}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-list/
   */
  public getWikis(params: Option.Wiki.GetWikiParams): Promise<any> {
    return this.get(`wikis`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-wiki-page/
   */
  public getWikisCount(projectIdOrKey: string | number): Promise<any> {
    return this.get(`wikis/count`, { projectIdOrKey });
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-tag-list/
   */
  public getWikisTags(projectIdOrKey: string | number): Promise<any> {
    return this.get(`wikis/tags`, { projectIdOrKey });
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-wiki-page/
   */
  public postWiki(params: Option.Wiki.PostWikiParams): Promise<any> {
    return this.post(`wikis`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page/
   */
  public getWiki(wikiId: number): Promise<any> {
    return this.get(`wikis/${wikiId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-wiki-page/
   */
  public patchWiki(
    wikiId: number, params: Option.Wiki.PatchWikiParams
  ): Promise<any> {
    return this.patch(`wikis/${wikiId}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-wiki-page/
   */
  public deleteWiki(wikiId: number, mailNotify: boolean): Promise<any> {
    return this.delete(`wikis/${wikiId}`, { mailNotify });
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-wiki-attachments/
   */
  public getWikisAttachments(wikiId: number): Promise<any> {
    return this.get(`wikis/${wikiId}/attachments`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/attach-file-to-wiki/
   */
  public postWikisAttachments(wikiId: number, attachmentId: number[]): Promise<any> {
    return this.post(`wikis/${wikiId}/attachments`, { attachmentId });
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-attachment/
   */
  public getWikiAttachment(wikiId: number, attachmentId: number): Promise<Entity.File.FileData> {
    return this.download(`wikis/${wikiId}/attachments/${attachmentId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-wiki-attachment/
   */
  public deleteWikisAttachments(wikiId: number, attachmentId: number): Promise<any> {
    return this.delete(`wikis/${wikiId}/attachments/${attachmentId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files-on-wiki/
   */
  public getWikisSharedFiles(wikiId: number): Promise<any> {
    return this.get(`wikis/${wikiId}/sharedFiles`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-wiki/
   */
  public linkWikisSharedFiles(wikiId: number, fileId: number[]): Promise<any> {
    return this.post(`wikis/${wikiId}/sharedFiles`, { fileId });
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-wiki/
   */
  public unlinkWikisSharedFiles(wikiId: number, id: number): Promise<any> {
    return this.delete(`wikis/${wikiId}/sharedFiles/${id}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-history/
   */
  public getWikisHistory(
    wikiId: number, params: Option.Wiki.GetWikisHistoryParams
  ): Promise<any> {
    return this.get(`wikis/${wikiId}/history`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-star/
   */
  public getWikisStars(wikiId: number): Promise<any> {
    return this.get(`wikis/${wikiId}/stars`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-star/
   */
  public postStar(params: Option.Project.PostStarParams): Promise<any> {
    return this.post('stars', params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-notification/
   */
  public getNotifications(
    params: Option.Notification.GetNotificationsParams
  ): Promise<any> {
    return this.get('notifications', params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-notification/
   */
  public getNotificationsCount(
    params: Option.Notification.GetNotificationsCountParams
  ): Promise<any> {
    return this.get('notifications/count', params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/reset-unread-notification-count/
   */
  public resetNotificationsMarkAsRead(): Promise<any> {
    return this.post('notifications/markAsRead');
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/read-notification/
   */
  public markAsReadNotification(id: number): Promise<any> {
    return this.post(`notifications/${id}/markAsRead`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-git-repositories/
   */
  public getGitRepositories(projectIdOrKey: string | number): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-git-repository/
   */
  public getGitRepository(
    projectIdOrKey: string | number, repoIdOrName: string
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-list/
   */
  public getPullRequests(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    params: Option.PullRequest.GetPullRequestsParams
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-requests/
   */
  public getPullRequestsCount(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    params: Option.PullRequest.GetPullRequestsParams
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/count`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-pull-request/
   */
  public postPullRequest(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    params: Option.PullRequest.PostPullRequestParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-pull-request/
   */
  public getPullRequest(
    projectIdOrKey: string | number, repoIdOrName: string, number: number
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-pull-request/
   */
  public patchPullRequest(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    number: number,
    params: Option.PullRequest.PatchPullRequestParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-comment/
   */
  public getPullRequestComments(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    number: number,
    params: Option.PullRequest.GetPullRequestCommentsParams
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-pull-request-comment/
   */
  public postPullRequestComments(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    number: number,
    params: Option.PullRequest.PostPullRequestCommentsParams
  ): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-request-comments/
   */
  public getPullRequestCommentsCount(
    projectIdOrKey: string | number, repoIdOrName: string, number: number
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments/count`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-pull-request-comment-information/
   */
  public patchPullRequestComments(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    number: number,
    commentId: number,
    params: Option.PullRequest.PatchPullRequestCommentsParams
  ): Promise<any> {
    return this.patch(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments/${commentId}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-pull-request-attachment/
   */
  public getPullRequestAttachments(
    projectIdOrKey: string | number, repoIdOrName: string, number: number
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/download-pull-request-attachment/
   */
  public getPullRequestAttachment(
    projectIdOrKey: string | number, repoIdOrName: string, number: number, attachmentId: number
  ): Promise<Entity.File.FileData> {
    return this.download(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments/${attachmentId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-pull-request-attachments/
   */
  public deletePullRequestAttachment(
    projectIdOrKey: string | number, repoIdOrName: string, number: number, attachmentId: number
  ): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments/${attachmentId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-watching-list
   */
  public getWatchingListItems(userId: number): Promise<any> {
    return this.get(`users/${userId}/watchings`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-watching
   */
  public getWatchingListCount(userId: number): Promise<any> {
    return this.get(`users/${userId}/watchings/count`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-watching
   */
  public getWatchingListItem(watchId: number): Promise<any> {
    return this.get(`watchings/${watchId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-watching
   */
  public postWatchingListItem(params: any): Promise<any> {
    return this.post(`watchings`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-watching
   */
  public patchWatchingListItem(watchId: number, note: string): Promise<any> {
    return this.patch(`watchings/${watchId}`, { note });
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-watching
   */
  public deletehWatchingListItem(watchId: number): Promise<any> {
    return this.delete(`watchings/${watchId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/mark-watching-as-read
   */
  public resetWatchingListItemAsRead(watchId: number): Promise<undefined> {
    return this.post(`watchings/${watchId}/markAsRead`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-group-list
   * @deprecated
   */
  public getProjectGroupList(projectIdOrKey: string | number): Promise<any> {
    console.warn("Deprecated: Use getProjectTeams instead.");
    return this.get(`projects/${projectIdOrKey}/groups`)
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-group
   * @deprecated
   */
  public postProjectGroup(projectIdOrKey: string | number, params: any): Promise<any> {
    console.warn("Deprecated: Use postProjectTeam instead.");
    return this.post(`projects/${projectIdOrKey}/groups`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-group
   * @deprecated
   */
  public deleteProjectGroup(projectIdOrKey: string | number): Promise<any> {
    console.warn("Deprecated: Use deleteProjectTeam instead.");
    return this.delete(`projects/${projectIdOrKey}/groups`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-group-icon
   * @deprecated
   */
  public getGroupIcon(groupId: string): Promise<any> {
    console.warn("Deprecated: Use getTeamIcon instead.");
    return this.download(`groups/${groupId}/icon`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-licence
   */
  public getLicence(): Promise<any> {
    return this.get(`space/licence`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-teams/
   */
  public getTeams(params?: Option.Team.GetTeamsParams): Promise<any> {
    return this.get(`teams`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-team/
   */
  public postTeam(members: number[]): Promise<any> {
    return this.post(`teams`, { members });
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-team/
   */
  public getTeam(teamId: number): Promise<any> {
    return this.get(`teams/${teamId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-team/
   */
  public patchTeam(teamId: number, params: Option.Team.PatchTeamParams): Promise<any> {
    return this.patch(`teams/${teamId}`, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-team/
   */
  public deleteTeam(teamId: number): Promise<any> {
    return this.delete(`teams/${teamId}`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-team-icon/
   */
  public getTeamIcon(teamId: number): Promise<Entity.File.FileData> {
    return this.download(`teams/${teamId}/icon`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-team-list/
   */
  public getProjectTeams(projectIdOrKey: string | number): Promise<any> {
    return this.get(`projects/${projectIdOrKey}/teams`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-team/
   */
  public postProjectTeam(projectIdOrKey: string | number, teamId: number): Promise<any> {
    return this.post(`projects/${projectIdOrKey}/teams`, { teamId });
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-team/
   */
  public deleteProjectTeam(projectIdOrKey: string | number, teamId: number): Promise<any> {
    return this.delete(`projects/${projectIdOrKey}/teams`, { teamId });
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-rate-limit/
   */
  public getRateLimit(): Promise<any> {
    return this.get("rateLimit");
  }

  private download(path: string): Promise<Entity.File.FileData> {
    return this.request({ method: 'GET', path }).then(this.parseFileData);
  }

  private upload(path: string, params: FormData): Promise<any> {
    return this.request({ method: 'POST', path, params }).then(this.parseJSON);
  }

  private parseFileData(response: Response): Promise<Entity.File.FileData> {
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
