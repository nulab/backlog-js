import * as Option from "./option";
import * as Entity from "./entity";
import Request, { type ClientConfigure } from "./request";
import * as Api from "./api";

export default class Backlog extends Request {
  constructor(configure: ClientConfigure) {
    super(configure);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space/
   */
  public getSpace(): Promise<Entity.Space.Space> {
    return Api.getSpace(this);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-recent-updates/
   */
  public getSpaceActivities(
    params: Option.Space.GetActivitiesParams,
  ): Promise<Entity.Activity.Activity[]> {
    return Api.getSpaceActivities(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space-logo/
   */
  public getSpaceIcon(): Promise<Entity.File.FileData> {
    return Api.getSpaceIcon(this);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space-notification/
   */
  public getSpaceNotification(): Promise<Entity.Space.Notification> {
    return Api.getSpaceNotification(this);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-space-notification/
   */
  public putSpaceNotification(
    params: Option.Space.PutSpaceNotificationParams,
  ): Promise<Entity.Space.Notification> {
    return Api.putSpaceNotification(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space-disk-usage/
   */
  public getSpaceDiskUsage(): Promise<Entity.DiskUsage.SpaceDiskUsage> {
    return Api.getSpaceDiskUsage(this);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/post-attachment-file/
   */
  public postSpaceAttachment(form: FormData): Promise<Entity.File.FileInfo> {
    return Api.postSpaceAttachment(this, form);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user-list/
   */
  public getUsers(): Promise<Entity.User.User[]> {
    return Api.getUsers(this);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user/
   */
  public getUser(userId: number): Promise<Entity.User.User> {
    return Api.getUser(this, userId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-user/
   */
  public postUser(params: Option.User.PostUserParams): Promise<Entity.User.User> {
    return Api.postUser(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-user/
   */
  public patchUser(userId: number, params: Option.User.PatchUserParams): Promise<Entity.User.User> {
    return Api.patchUser(this, userId, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-user/
   */
  public deleteUser(userId: number): Promise<Entity.User.User> {
    return Api.deleteUser(this, userId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-own-user/
   */
  public getMyself(): Promise<Entity.User.User> {
    return Api.getMyself(this);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user-icon/
   */
  public getUserIcon(userId: number): Promise<Entity.File.FileData> {
    return Api.getUserIcon(this, userId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user-recent-updates/
   */
  public getUserActivities(
    userId: number,
    params: Option.User.GetUserActivitiesParams,
  ): Promise<Entity.Activity.Activity[]> {
    return Api.getUserActivities(this, userId, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-received-star-list/
   */
  public getUserStars(
    userId: number,
    params: Option.User.GetUserStarsParams,
  ): Promise<Entity.Star.Star[]> {
    return Api.getUserStars(this, userId, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-user-received-stars/
   */
  public getUserStarsCount(
    userId: number,
    params: Option.User.GetUserStarsCountParams,
  ): Promise<Entity.Star.StarCount> {
    return Api.getUserStarsCount(this, userId, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-issues/
   */
  public getRecentlyViewedIssues(
    params: Option.User.GetRecentlyViewedParams,
  ): Promise<Entity.Issue.RecentlyViewedIssue[]> {
    return Api.getRecentlyViewedIssues(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-projects/
   */
  public getRecentlyViewedProjects(
    params: Option.User.GetRecentlyViewedParams,
  ): Promise<Entity.Project.RecentlyViewedProject[]> {
    return Api.getRecentlyViewedProjects(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-wikis/
   */
  public getRecentlyViewedWikis(
    params: Option.User.GetRecentlyViewedParams,
  ): Promise<Entity.Wiki.RecentlyViewedWiki[]> {
    return Api.getRecentlyViewedWikis(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-status-list-of-project/
   */
  public getProjectStatuses(
    projectIdOrKey: string | number,
  ): Promise<Entity.Project.ProjectStatus[]> {
    return Api.getProjectStatuses(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-resolution-list/
   */
  public getResolutions(): Promise<Entity.Issue.Resolution[]> {
    return Api.getResolutions(this);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-priority-list/
   */
  public getPriorities(): Promise<Entity.Issue.Priority[]> {
    return Api.getPriorities(this);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-list/
   */
  public getProjects(params?: Option.Project.GetProjectsParams): Promise<Entity.Project.Project[]> {
    return Api.getProjects(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project/
   */
  public postProject(params: Option.Project.PostProjectParams): Promise<Entity.Project.Project> {
    return Api.postProject(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project/
   */
  public getProject(projectIdOrKey: string | number): Promise<Entity.Project.Project> {
    return Api.getProject(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-project/
   */
  public patchProject(
    projectIdOrKey: string | number,
    params: Option.Project.PatchProjectParams,
  ): Promise<Entity.Project.Project> {
    return Api.patchProject(this, projectIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project/
   */
  public deleteProject(projectIdOrKey: string | number): Promise<Entity.Project.Project> {
    return Api.deleteProject(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-icon/
   */
  public getProjectIcon(projectIdOrKey: string | number): Promise<Entity.File.FileData> {
    return Api.getProjectIcon(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-recent-updates/
   */
  public getProjectActivities(
    projectIdOrKey: string | number,
    params: Option.Space.GetActivitiesParams,
  ): Promise<Entity.Activity.Activity[]> {
    return Api.getProjectActivities(this, projectIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-user/
   */
  public postProjectUser(
    projectIdOrKey: string | number,
    userId: string,
  ): Promise<Entity.User.User> {
    return Api.postProjectUser(this, projectIdOrKey, userId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-user-list/
   */
  public getProjectUsers(projectIdOrKey: string | number): Promise<Entity.User.User[]> {
    return Api.getProjectUsers(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-user/
   */
  public deleteProjectUsers(
    projectIdOrKey: string | number,
    params: Option.Project.DeleteProjectUsersParams,
  ): Promise<Entity.User.User> {
    return Api.deleteProjectUsers(this, projectIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-administrator/
   */
  public postProjectAdministrators(
    projectIdOrKey: string | number,
    params: Option.Project.PostProjectAdministrators,
  ): Promise<Entity.User.User> {
    return Api.postProjectAdministrators(this, projectIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-project-administrators/
   */
  public getProjectAdministrators(projectIdOrKey: string | number): Promise<Entity.User.User[]> {
    return Api.getProjectAdministrators(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-administrator/
   */
  public deleteProjectAdministrators(
    projectIdOrKey: string | number,
    params: Option.Project.DeleteProjectAdministrators,
  ): Promise<Entity.User.User> {
    return Api.deleteProjectAdministrators(this, projectIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-status/
   */
  public postProjectStatus(
    projectIdOrKey: string | number,
    params: Option.Project.PostStatusParams,
  ): Promise<Entity.Project.ProjectStatus> {
    return Api.postProjectStatus(this, projectIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-status/
   */
  public patchProjectStatus(
    projectIdOrKey: string | number,
    id: number,
    params: Option.Project.PatchStatusParams,
  ): Promise<Entity.Project.ProjectStatus> {
    return Api.patchProjectStatus(this, projectIdOrKey, id, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-status/
   */
  public deleteProjectStatus(
    projectIdOrKey: string | number,
    id: number,
    substituteStatusId: number,
  ): Promise<Entity.Project.ProjectStatus> {
    return Api.deleteProjectStatus(this, projectIdOrKey, id, substituteStatusId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-order-of-status/
   */
  public patchProjectStatusOrder(
    projectIdOrKey: string | number,
    statusId: number[],
  ): Promise<Entity.Project.ProjectStatus[]> {
    return Api.patchProjectStatusOrder(this, projectIdOrKey, statusId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-type-list/
   */
  public getIssueTypes(projectIdOrKey: string | number): Promise<Entity.Issue.IssueType[]> {
    return Api.getIssueTypes(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-issue-type/
   */
  public postIssueType(
    projectIdOrKey: string | number,
    params: Option.Project.PostIssueTypeParams,
  ): Promise<Entity.Issue.IssueType> {
    return Api.postIssueType(this, projectIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-issue-type/
   */
  public patchIssueType(
    projectIdOrKey: string | number,
    id: number,
    params: Option.Project.PatchIssueTypeParams,
  ): Promise<Entity.Issue.IssueType> {
    return Api.patchIssueType(this, projectIdOrKey, id, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-issue-type/
   */
  public deleteIssueType(
    projectIdOrKey: string | number,
    id: number,
    params: Option.Project.DeleteIssueTypeParams,
  ): Promise<Entity.Issue.IssueType> {
    return Api.deleteIssueType(this, projectIdOrKey, id, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-category-list/
   */
  public getCategories(projectIdOrKey: string | number): Promise<Entity.Project.Category[]> {
    return Api.getCategories(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-category/
   */
  public postCategories(
    projectIdOrKey: string | number,
    params: Option.Project.PostCategoriesParams,
  ): Promise<Entity.Project.Category> {
    return Api.postCategories(this, projectIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-category/
   */
  public patchCategories(
    projectIdOrKey: string | number,
    id: number,
    params: Option.Project.PatchCategoriesParams,
  ): Promise<Entity.Project.Category> {
    return Api.patchCategories(this, projectIdOrKey, id, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-category/
   */
  public deleteCategories(
    projectIdOrKey: string | number,
    id: number,
  ): Promise<Entity.Project.Category> {
    return Api.deleteCategories(this, projectIdOrKey, id);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-version-milestone-list/
   */
  public getVersions(projectIdOrKey: string | number): Promise<Entity.Project.Version[]> {
    return Api.getVersions(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-version-milestone/
   */
  public postVersions(
    projectIdOrKey: string | number,
    params: Option.Project.PostVersionsParams,
  ): Promise<Entity.Project.Version> {
    return Api.postVersions(this, projectIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-version-milestone/
   */
  public patchVersions(
    projectIdOrKey: string | number,
    id: number,
    params: Option.Project.PatchVersionsParams,
  ): Promise<Entity.Project.Version> {
    return Api.patchVersions(this, projectIdOrKey, id, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-version/
   */
  public deleteVersions(
    projectIdOrKey: string | number,
    id: number,
  ): Promise<Entity.Project.Version> {
    return Api.deleteVersions(this, projectIdOrKey, id);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-custom-field-list/
   */
  public getCustomFields(projectIdOrKey: string | number): Promise<Entity.Project.CustomField[]> {
    return Api.getCustomFields(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-custom-field/
   */
  public postCustomField(
    projectIdOrKey: string | number,
    params:
      | Option.Project.PostCustomFieldParams
      | Option.Project.PostCustomFieldWithNumericParams
      | Option.Project.PostCustomFieldWithDateParams
      | Option.Project.PostCustomFieldWithListParams,
  ): Promise<Entity.Project.CustomField> {
    return Api.postCustomField(this, projectIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-custom-field/
   */
  public patchCustomField(
    projectIdOrKey: string | number,
    id: number,
    params:
      | Option.Project.PatchCustomFieldParams
      | Option.Project.PatchCustomFieldWithNumericParams
      | Option.Project.PatchCustomFieldWithDateParams
      | Option.Project.PatchCustomFieldWithListParams,
  ): Promise<Entity.Project.CustomField> {
    return Api.patchCustomField(this, projectIdOrKey, id, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-custom-field/
   */
  public deleteCustomField(
    projectIdOrKey: string | number,
    id: number,
  ): Promise<Entity.Project.CustomField> {
    return Api.deleteCustomField(this, projectIdOrKey, id);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-list-item-for-list-type-custom-field/
   */
  public postCustomFieldItem(
    projectIdOrKey: string | number,
    id: number,
    params: Option.Project.PostCustomFieldItemParams,
  ): Promise<Entity.Project.CustomField> {
    return Api.postCustomFieldItem(this, projectIdOrKey, id, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-list-item-for-list-type-custom-field/
   */
  public patchCustomFieldItem(
    projectIdOrKey: string | number,
    id: number,
    itemId: number,
    params: Option.Project.PatchCustomFieldItemParams,
  ): Promise<Entity.Project.CustomField> {
    return Api.patchCustomFieldItem(this, projectIdOrKey, id, itemId, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-list-item-for-list-type-custom-field/
   */
  public deleteCustomFieldItem(
    projectIdOrKey: string | number,
    id: number,
    itemId: number,
  ): Promise<Entity.Project.CustomField> {
    return Api.deleteCustomFieldItem(this, projectIdOrKey, id, itemId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files/
   */
  public getSharedFiles(
    projectIdOrKey: string | number,
    path: string,
    params: Option.Project.GetSharedFilesParams,
  ): Promise<Entity.Project.SharedFile[]> {
    return Api.getSharedFiles(this, projectIdOrKey, path, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-file/
   */
  public getSharedFile(
    projectIdOrKey: string | number,
    sharedFileId: number,
  ): Promise<Entity.File.FileData> {
    return Api.getSharedFile(this, projectIdOrKey, sharedFileId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-disk-usage/
   */
  public getProjectsDiskUsage(
    projectIdOrKey: string | number,
  ): Promise<Entity.DiskUsage.ProjectDiskUsage> {
    return Api.getProjectsDiskUsage(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-webhooks/
   */
  public getWebhooks(projectIdOrKey: string | number): Promise<Entity.Webhook.Webhook[]> {
    return Api.getWebhooks(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-webhook/
   */
  public postWebhook(
    projectIdOrKey: string | number,
    params: Option.Project.PostWebhookParams,
  ): Promise<Entity.Webhook.Webhook> {
    return Api.postWebhook(this, projectIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-webhook/
   */
  public getWebhook(
    projectIdOrKey: string | number,
    webhookId: string,
  ): Promise<Entity.Webhook.Webhook> {
    return Api.getWebhook(this, projectIdOrKey, webhookId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-webhook/
   */
  public patchWebhook(
    projectIdOrKey: string | number,
    webhookId: string,
    params: Option.Project.PatchWebhookParams,
  ): Promise<Entity.Webhook.Webhook> {
    return Api.patchWebhook(this, projectIdOrKey, webhookId, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-webhook/
   */
  public deleteWebhook(
    projectIdOrKey: string | number,
    webhookId: string,
  ): Promise<Entity.Webhook.Webhook> {
    return Api.deleteWebhook(this, projectIdOrKey, webhookId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-list/
   */
  public getIssues(params?: Option.Issue.GetIssuesParams): Promise<Entity.Issue.Issue[]> {
    return Api.getIssues(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-issue/
   */
  public getIssuesCount(params?: Option.Issue.GetIssuesParams): Promise<Entity.Issue.IssueCount> {
    return Api.getIssuesCount(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-issue/
   */
  public postIssue(params: Option.Issue.PostIssueParams): Promise<Entity.Issue.Issue> {
    return Api.postIssue(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-issue/
   */
  public patchIssue(
    issueIdOrKey: string | number,
    params: Option.Issue.PatchIssueParams,
  ): Promise<Entity.Issue.Issue> {
    return Api.patchIssue(this, issueIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue/
   */
  public getIssue(
    issueIdOrKey: string | number,
    params?: Option.Issue.GetIssueParams,
  ): Promise<Entity.Issue.Issue> {
    return Api.getIssue(this, issueIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-issue/
   */
  public deleteIssue(issueIdOrKey: string | number): Promise<Entity.Issue.Issue> {
    return Api.deleteIssue(this, issueIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-comment-list/
   */
  public getIssueComments(
    issueIdOrKey: string | number,
    params: Option.Issue.GetIssueCommentsParams,
  ): Promise<Entity.Issue.Comment[]> {
    return Api.getIssueComments(this, issueIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-comment/
   */
  public postIssueComments(
    issueIdOrKey: string | number,
    params: Option.Issue.PostIssueCommentsParams,
  ): Promise<Entity.Issue.Comment> {
    return Api.postIssueComments(this, issueIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-comment/
   */
  public getIssueCommentsCount(
    issueIdOrKey: string | number,
  ): Promise<Entity.Issue.IssueCommentCount> {
    return Api.getIssueCommentsCount(this, issueIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-comment/
   */
  public getIssueComment(
    issueIdOrKey: string | number,
    commentId: number,
  ): Promise<Entity.Issue.Comment> {
    return Api.getIssueComment(this, issueIdOrKey, commentId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-comment/
   */
  public deleteIssueComment(
    issueIdOrKey: string | number,
    commentId: number,
  ): Promise<Entity.Issue.Comment> {
    return Api.deleteIssueComment(this, issueIdOrKey, commentId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-comment/
   */
  public patchIssueComment(
    issueIdOrKey: string | number,
    commentId: number,
    params: Option.Issue.PatchIssueCommentParams,
  ): Promise<Entity.Issue.Comment> {
    return Api.patchIssueComment(this, issueIdOrKey, commentId, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-comment-notifications/
   */
  public getIssueCommentNotifications(
    issueIdOrKey: string | number,
    commentId: number,
  ): Promise<Entity.CommentNotification.CommentNotification[]> {
    return Api.getIssueCommentNotifications(this, issueIdOrKey, commentId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-comment-notification/
   */
  public postIssueCommentNotifications(
    issueIdOrKey: string | number,
    commentId: number,
    prams: Option.Issue.IssueCommentNotifications,
  ): Promise<Entity.Issue.Comment> {
    return Api.postIssueCommentNotifications(this, issueIdOrKey, commentId, prams);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-issue-attachments/
   */
  public getIssueAttachments(issueIdOrKey: string | number): Promise<Entity.File.IssueFileInfo[]> {
    return Api.getIssueAttachments(this, issueIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-attachment/
   */
  public getIssueAttachment(
    issueIdOrKey: string | number,
    attachmentId: number,
  ): Promise<Entity.File.FileData> {
    return Api.getIssueAttachment(this, issueIdOrKey, attachmentId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-issue-attachment/
   */
  public deleteIssueAttachment(
    issueIdOrKey: string | number,
    attachmentId: string,
  ): Promise<Entity.File.IssueFileInfo> {
    return Api.deleteIssueAttachment(this, issueIdOrKey, attachmentId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-participant-list/
   */
  public getIssueParticipants(issueIdOrKey: string | number): Promise<Entity.User.User[]> {
    return Api.getIssueParticipants(this, issueIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-linked-shared-files/
   */
  public getIssueSharedFiles(issueIdOrKey: string | number): Promise<Entity.Project.SharedFile[]> {
    return Api.getIssueSharedFiles(this, issueIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-issue/
   */
  public linkIssueSharedFiles(
    issueIdOrKey: string | number,
    params: Option.Issue.LinkIssueSharedFilesParams,
  ): Promise<Entity.Project.SharedFile[]> {
    return Api.linkIssueSharedFiles(this, issueIdOrKey, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-issue/
   */
  public unlinkIssueSharedFile(
    issueIdOrKey: string | number,
    id: number,
  ): Promise<Entity.Project.SharedFile> {
    return Api.unlinkIssueSharedFile(this, issueIdOrKey, id);
  }

  /**
   * Get the list of issues related to the specified issue.
   *
   * GET /api/v2/issues/:issueIdOrKey/relatedIssues
   */
  public getRelatedIssues(issueIdOrKey: string | number): Promise<Entity.Issue.RelatedIssue[]> {
    return Api.getRelatedIssues(this, issueIdOrKey);
  }

  /**
   * Add a related issue to the specified issue.
   *
   * POST /api/v2/issues/:issueIdOrKey/relatedIssues
   */
  public addRelatedIssue(
    issueIdOrKey: string | number,
    params: Option.Issue.AddRelatedIssueParams,
  ): Promise<Entity.Issue.RelatedIssue> {
    return Api.addRelatedIssue(this, issueIdOrKey, params);
  }

  /**
   * Remove a related issue from the specified issue.
   *
   * DELETE /api/v2/issues/:issueIdOrKey/relatedIssues/:relatedIssueId
   */
  public removeRelatedIssue(
    issueIdOrKey: string | number,
    relatedIssueId: number,
  ): Promise<Entity.Issue.RelatedIssue> {
    return Api.removeRelatedIssue(this, issueIdOrKey, relatedIssueId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-list/
   */
  public getWikis(params: Option.Wiki.GetWikiParams): Promise<Entity.Wiki.WikiListItem[]> {
    return Api.getWikis(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-wiki-page/
   */
  public getWikisCount(projectIdOrKey: string | number): Promise<Entity.Wiki.WikiCount> {
    return Api.getWikisCount(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-tag-list/
   */
  public getWikisTags(projectIdOrKey: string | number): Promise<Entity.Wiki.Tag[]> {
    return Api.getWikisTags(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-wiki-page/
   */
  public postWiki(params: Option.Wiki.PostWikiParams): Promise<Entity.Wiki.Wiki> {
    return Api.postWiki(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page/
   */
  public getWiki(wikiId: number): Promise<Entity.Wiki.Wiki> {
    return Api.getWiki(this, wikiId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-wiki-page/
   */
  public patchWiki(wikiId: number, params: Option.Wiki.PatchWikiParams): Promise<Entity.Wiki.Wiki> {
    return Api.patchWiki(this, wikiId, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-wiki-page/
   */
  public deleteWiki(wikiId: number, mailNotify: boolean): Promise<Entity.Wiki.Wiki> {
    return Api.deleteWiki(this, wikiId, mailNotify);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-wiki-attachments/
   */
  public getWikisAttachments(wikiId: number): Promise<Entity.File.WikiFileInfo[]> {
    return Api.getWikisAttachments(this, wikiId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/attach-file-to-wiki/
   */
  public postWikisAttachments(
    wikiId: number,
    attachmentId: number[],
  ): Promise<Entity.File.WikiFileInfo[]> {
    return Api.postWikisAttachments(this, wikiId, attachmentId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-attachment/
   */
  public getWikiAttachment(wikiId: number, attachmentId: number): Promise<Entity.File.FileData> {
    return Api.getWikiAttachment(this, wikiId, attachmentId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-wiki-attachment/
   */
  public deleteWikisAttachments(
    wikiId: number,
    attachmentId: number,
  ): Promise<Entity.File.WikiFileInfo> {
    return Api.deleteWikisAttachments(this, wikiId, attachmentId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files-on-wiki/
   */
  public getWikisSharedFiles(wikiId: number): Promise<Entity.Project.SharedFile[]> {
    return Api.getWikisSharedFiles(this, wikiId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-wiki/
   */
  public linkWikisSharedFiles(
    wikiId: number,
    fileId: number[],
  ): Promise<Entity.Project.SharedFile[]> {
    return Api.linkWikisSharedFiles(this, wikiId, fileId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-wiki/
   */
  public unlinkWikisSharedFiles(wikiId: number, id: number): Promise<Entity.Project.SharedFile> {
    return Api.unlinkWikisSharedFiles(this, wikiId, id);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/get-document-list/
   */
  public getDocuments(
    params: Option.Document.GetDocumentsParams,
  ): Promise<Entity.Document.Document[]> {
    return Api.getDocuments(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/get-document-tree/
   */
  public getDocumentTree(projectIdOrKey: string | number): Promise<Entity.Document.DocumentTree> {
    return Api.getDocumentTree(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/get-document/
   */
  public getDocument(documentId: string): Promise<Entity.Document.Document> {
    return Api.getDocument(this, documentId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-document-comment/
   */
  public getDocumentComments(documentId: string): Promise<Entity.Document.DocumentComment[]> {
    return this.get(`documents/${documentId}/comments`);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/get-document-attachments/
   */
  public downloadDocumentAttachment(
    documentId: string,
    attachmentId: number,
  ): Promise<Entity.File.FileData> {
    return Api.downloadDocumentAttachment(this, documentId, attachmentId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-document/
   */
  public addDocument(params: Option.Document.AddDocumentParams): Promise<Entity.Document.Document> {
    return Api.addDocument(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-document/
   */
  public deleteDocument(documentId: string): Promise<Entity.Document.Document> {
    return Api.deleteDocument(this, documentId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-history/
   */
  public getWikisHistory(
    wikiId: number,
    params: Option.Wiki.GetWikisHistoryParams,
  ): Promise<Entity.Wiki.History[]> {
    return Api.getWikisHistory(this, wikiId, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-star/
   */
  public getWikisStars(wikiId: number): Promise<Entity.Star.Star[]> {
    return Api.getWikisStars(this, wikiId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-star/
   */
  public postStar(params: Option.Project.PostStarParams): Promise<void> {
    return Api.postStar(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-star/
   */
  public removeStar(starId: number): Promise<void> {
    return Api.removeStar(this, starId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-notification/
   */
  public getNotifications(
    params: Option.Notification.GetNotificationsParams,
  ): Promise<Entity.Notification.Notification[]> {
    return Api.getNotifications(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-notification/
   */
  public getNotificationsCount(
    params: Option.Notification.GetNotificationsCountParams,
  ): Promise<Entity.Notification.NotificationCount> {
    return Api.getNotificationsCount(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/reset-unread-notification-count/
   */
  public resetNotificationsMarkAsRead(): Promise<Entity.Notification.NotificationCount> {
    return Api.resetNotificationsMarkAsRead(this);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/read-notification/
   */
  public markAsReadNotification(id: number): Promise<void> {
    return Api.markAsReadNotification(this, id);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-git-repositories/
   */
  public getGitRepositories(projectIdOrKey: string | number): Promise<Entity.Git.GitRepository[]> {
    return Api.getGitRepositories(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-git-repository/
   */
  public getGitRepository(
    projectIdOrKey: string | number,
    repoIdOrName: string,
  ): Promise<Entity.Git.GitRepository> {
    return Api.getGitRepository(this, projectIdOrKey, repoIdOrName);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-list/
   */
  public getPullRequests(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    params: Option.PullRequest.GetPullRequestsParams,
  ): Promise<Entity.PullRequest.PullRequest[]> {
    return Api.getPullRequests(this, projectIdOrKey, repoIdOrName, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-requests/
   */
  public getPullRequestsCount(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    params: Option.PullRequest.GetPullRequestsParams,
  ): Promise<Entity.PullRequest.PullRequestCount> {
    return Api.getPullRequestsCount(this, projectIdOrKey, repoIdOrName, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-pull-request/
   */
  public postPullRequest(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    params: Option.PullRequest.PostPullRequestParams,
  ): Promise<Entity.PullRequest.PullRequest> {
    return Api.postPullRequest(this, projectIdOrKey, repoIdOrName, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-pull-request/
   */
  public getPullRequest(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    number: number,
  ): Promise<Entity.PullRequest.PullRequest> {
    return Api.getPullRequest(this, projectIdOrKey, repoIdOrName, number);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-pull-request/
   */
  public patchPullRequest(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    number: number,
    params: Option.PullRequest.PatchPullRequestParams,
  ): Promise<Entity.PullRequest.PullRequest> {
    return Api.patchPullRequest(this, projectIdOrKey, repoIdOrName, number, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-comment/
   */
  public getPullRequestComments(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    number: number,
    params: Option.PullRequest.GetPullRequestCommentsParams,
  ): Promise<Entity.PullRequest.Comment[]> {
    return Api.getPullRequestComments(this, projectIdOrKey, repoIdOrName, number, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-pull-request-comment/
   */
  public postPullRequestComments(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    number: number,
    params: Option.PullRequest.PostPullRequestCommentsParams,
  ): Promise<Entity.PullRequest.Comment> {
    return Api.postPullRequestComments(this, projectIdOrKey, repoIdOrName, number, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-request-comments/
   */
  public getPullRequestCommentsCount(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    number: number,
  ): Promise<Entity.PullRequest.PullRequestCommentCount> {
    return Api.getPullRequestCommentsCount(this, projectIdOrKey, repoIdOrName, number);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-pull-request-comment-information/
   */
  public patchPullRequestComments(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    number: number,
    commentId: number,
    params: Option.PullRequest.PatchPullRequestCommentsParams,
  ): Promise<Entity.PullRequest.Comment> {
    return Api.patchPullRequestComments(
      this,
      projectIdOrKey,
      repoIdOrName,
      number,
      commentId,
      params,
    );
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-pull-request-attachment/
   */
  public getPullRequestAttachments(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    number: number,
  ): Promise<Entity.File.PullRequestFileInfo[]> {
    return Api.getPullRequestAttachments(this, projectIdOrKey, repoIdOrName, number);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/download-pull-request-attachment/
   */
  public getPullRequestAttachment(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    number: number,
    attachmentId: number,
  ): Promise<Entity.File.FileData> {
    return Api.getPullRequestAttachment(this, projectIdOrKey, repoIdOrName, number, attachmentId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-pull-request-attachments/
   */
  public deletePullRequestAttachment(
    projectIdOrKey: string | number,
    repoIdOrName: string,
    number: number,
    attachmentId: number,
  ): Promise<Entity.File.PullRequestFileInfo> {
    return Api.deletePullRequestAttachment(
      this,
      projectIdOrKey,
      repoIdOrName,
      number,
      attachmentId,
    );
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-watching-list
   */
  public getWatchingListItems(
    userId: number,
    params?: Option.WatchingList.GetWatchingListParams,
  ): Promise<Entity.WatchingList.WatchingListItem[]> {
    return Api.getWatchingListItems(this, userId, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-watching
   */
  public getWatchingListCount(
    userId: number,
    params?: Option.WatchingList.GetWatchingListCountParams,
  ): Promise<Entity.WatchingList.WatchingListCount> {
    return Api.getWatchingListCount(this, userId, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-watching
   */
  public getWatchingListItem(watchId: number): Promise<Entity.WatchingList.WatchingListItem> {
    return Api.getWatchingListItem(this, watchId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-watching
   */
  public postWatchingListItem(
    params: Option.WatchingList.PostWatchingListItemParams,
  ): Promise<Entity.WatchingList.WatchingListItem> {
    return Api.postWatchingListItem(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-watching
   */
  public patchWatchingListItem(
    watchId: number,
    note: string,
  ): Promise<Entity.WatchingList.WatchingListItem> {
    return Api.patchWatchingListItem(this, watchId, note);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-watching
   */
  public deletehWatchingListItem(watchId: number): Promise<Entity.WatchingList.WatchingListItem> {
    return Api.deletehWatchingListItem(this, watchId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/mark-watching-as-read
   */
  public resetWatchingListItemAsRead(watchId: number): Promise<void> {
    return Api.resetWatchingListItemAsRead(this, watchId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-licence
   */
  public getLicence(): Promise<Entity.License.License> {
    return Api.getLicence(this);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-teams/
   */
  public getTeams(params?: Option.Team.GetTeamsParams): Promise<Entity.Team.Team[]> {
    return Api.getTeams(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-team/
   */
  public postTeam(params: Option.Team.PostTeamParams): Promise<Entity.Team.Team> {
    return Api.postTeam(this, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-team/
   */
  public getTeam(teamId: number): Promise<Entity.Team.Team> {
    return Api.getTeam(this, teamId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-team/
   */
  public patchTeam(teamId: number, params: Option.Team.PatchTeamParams): Promise<Entity.Team.Team> {
    return Api.patchTeam(this, teamId, params);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-team/
   */
  public deleteTeam(teamId: number): Promise<Entity.Team.Team> {
    return Api.deleteTeam(this, teamId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-team-icon/
   */
  public getTeamIcon(teamId: number): Promise<Entity.File.FileData> {
    return Api.getTeamIcon(this, teamId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-team-list/
   */
  public getProjectTeams(projectIdOrKey: string | number): Promise<Entity.Team.Team[]> {
    return Api.getProjectTeams(this, projectIdOrKey);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-team/
   */
  public postProjectTeam(
    projectIdOrKey: string | number,
    teamId: number,
  ): Promise<Entity.Team.Team> {
    return Api.postProjectTeam(this, projectIdOrKey, teamId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-team/
   */
  public deleteProjectTeam(
    projectIdOrKey: string | number,
    teamId: number,
  ): Promise<Entity.Team.Team> {
    return Api.deleteProjectTeam(this, projectIdOrKey, teamId);
  }

  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-rate-limit/
   */
  public getRateLimit(): Promise<Entity.RateLimit.RateLimit> {
    return Api.getRateLimit(this);
  }
}
