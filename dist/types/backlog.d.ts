import * as Option from './option';
import * as Entity from './entity';
import Request from './request';
export default class Backlog extends Request {
    constructor(configure: {
        host: string;
        apiKey?: string;
        accessToken?: string;
        timeout?: number;
    });
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-space/
     */
    getSpace(): Promise<Entity.Space.Space>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-recent-updates/
     */
    getSpaceActivities(params: Option.Space.GetActivitiesParams): Promise<Entity.Activity.Activity[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-space-logo/
     */
    getSpaceIcon(): Promise<Entity.File.FileData>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-space-notification/
     */
    getSpaceNotification(): Promise<Entity.Space.Notification>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-space-notification/
     */
    putSpaceNotification(params: Option.Space.PutSpaceNotificationParams): Promise<Entity.Space.Notification>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-space-disk-usage/
     */
    getSpaceDiskUsage(): Promise<Entity.DiskUsage.SpaceDiskUsage>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/post-attachment-file/
     */
    postSpaceAttachment(form: FormData): Promise<Entity.File.FileInfo>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-user-list/
     */
    getUsers(): Promise<Entity.User.User[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-user/
     */
    getUser(userId: number): Promise<Entity.User.User>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-user/
     */
    postUser(params: Option.User.PostUserParams): Promise<Entity.User.User>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-user/
     */
    patchUser(userId: number, params: Option.User.PatchUserParams): Promise<Entity.User.User>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-user/
     */
    deleteUser(userId: number): Promise<Entity.User.User>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-own-user/
     */
    getMyself(): Promise<Entity.User.User>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-user-icon/
     */
    getUserIcon(userId: number): Promise<Entity.File.FileData>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-user-recent-updates/
     */
    getUserActivities(userId: number, params: Option.User.GetUserActivitiesParams): Promise<Entity.Activity.Activity[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-received-star-list/
     */
    getUserStars(userId: number, params: Option.User.GetUserStarsParams): Promise<Entity.Star.Star[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/count-user-received-stars/
     */
    getUserStarsCount(userId: number, params: Option.User.GetUserStarsCountParams): Promise<Entity.Star.StarCount>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-issues/
     */
    getRecentlyViewedIssues(params: Option.User.GetRecentlyViewedParams): Promise<Entity.Issue.RecentlyViewedIssue[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-projects/
     */
    getRecentlyViewedProjects(params: Option.User.GetRecentlyViewedParams): Promise<Entity.Project.RecentlyViewedProject[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-wikis/
     */
    getRecentlyViewedWikis(params: Option.User.GetRecentlyViewedParams): Promise<Entity.Wiki.RecentlyViewedWiki[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-groups/
     * @deprecated
     */
    getGroups(params: Option.Group.GetGroupsParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-group/
     * @deprecated
     */
    postGroups(params: Option.Group.PostGroupsParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-group/
     * @deprecated
     */
    getGroup(groupId: number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-group/
     * @deprecated
     */
    patchGroup(groupId: number, params: Option.Group.PatchGroupParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-group/
     * @deprecated
     */
    deleteGroup(groupId: number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-status-list/
     * @deprecated
     */
    getStatuses(): Promise<Entity.Project.Status[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-status-list-of-project/
     */
    getProjectStatuses(projectIdOrKey: string | number): Promise<Entity.Project.ProjectStatus[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-resolution-list/
     */
    getResolutions(): Promise<Entity.Issue.Resolution[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-priority-list/
     */
    getPriorities(): Promise<Entity.Issue.Priority[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project-list/
     */
    getProjects(params?: Option.Project.GetProjectsParams): Promise<Entity.Project.Project[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-project/
     */
    postProject(params: Option.Project.PostProjectParams): Promise<Entity.Project.Project>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project/
     */
    getProject(projectIdOrKey: string | number): Promise<Entity.Project.Project>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-project/
     */
    patchProject(projectIdOrKey: string | number, params: Option.Project.PatchProjectParams): Promise<Entity.Project.Project>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-project/
     */
    deleteProject(projectIdOrKey: string | number): Promise<Entity.Project.Project>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project-icon/
     */
    getProjectIcon(projectIdOrKey: string | number): Promise<Entity.File.FileData>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project-recent-updates/
     */
    getProjectActivities(projectIdOrKey: string | number, params: Option.Space.GetActivitiesParams): Promise<Entity.Activity.Activity[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-project-user/
     */
    postProjectUser(projectIdOrKey: string | number, userId: string): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project-user-list/
     */
    getProjectUsers(projectIdOrKey: string | number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-project-user/
     */
    deleteProjectUsers(projectIdOrKey: string | number, params: Option.Project.DeleteProjectUsersParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-project-administrator/
     */
    postProjectAdministrators(projectIdOrKey: string | number, params: Option.Project.PostProjectAdministrators): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-project-administrators/
     */
    getProjectAdministrators(projectIdOrKey: string | number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-project-administrator/
     */
    deleteProjectAdministrators(projectIdOrKey: string | number, params: Option.Project.DeleteProjectAdministrators): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-status/
     */
    postProjectStatus(projectIdOrKey: string | number, params: Option.Project.PostStatusParams): Promise<Entity.Project.ProjectStatus>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-status/
     */
    patchProjectStatus(projectIdOrKey: string | number, id: number, params: Option.Project.PatchStatusParams): Promise<Entity.Project.ProjectStatus>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-status/
     */
    deleteProjectStatus(projectIdOrKey: string | number, id: number, substituteStatusId: number): Promise<Entity.Project.ProjectStatus>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-order-of-status/
     */
    patchProjectStatusOrder(projectIdOrKey: string | number, statusId: number[]): Promise<Entity.Project.ProjectStatus[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-issue-type-list/
     */
    getIssueTypes(projectIdOrKey: string | number): Promise<Entity.Issue.IssueType[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-issue-type/
     */
    postIssueType(projectIdOrKey: string | number, params: Option.Project.PostIssueTypeParams): Promise<Entity.Issue.IssueType>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-issue-type/
     */
    patchIssueType(projectIdOrKey: string | number, id: number, params: Option.Project.PatchIssueTypeParams): Promise<Entity.Issue.IssueType>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-issue-type/
     */
    deleteIssueType(projectIdOrKey: string | number, id: number, params: Option.Project.DeleteIssueTypeParams): Promise<Entity.Issue.IssueType>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-category-list/
     */
    getCategories(projectIdOrKey: string | number): Promise<Entity.Project.Category[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-category/
     */
    postCategories(projectIdOrKey: string | number, params: Option.Project.PostCategoriesParams): Promise<Entity.Project.Category>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-category/
     */
    patchCategories(projectIdOrKey: string | number, id: number, params: Option.Project.PatchCategoriesParams): Promise<Entity.Project.Category>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-category/
     */
    deleteCategories(projectIdOrKey: string | number, id: number): Promise<Entity.Project.Category>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-version-milestone-list/
     */
    getVersions(projectIdOrKey: string | number): Promise<Entity.Project.Version[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-version-milestone/
     */
    postVersions(projectIdOrKey: string | number, params: Option.Project.PostVersionsParams): Promise<Entity.Project.Version>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-version-milestone/
     */
    patchVersions(projectIdOrKey: string | number, id: number, params: Option.Project.PatchVersionsParams): Promise<Entity.Project.Version>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-version/
     */
    deleteVersions(projectIdOrKey: string | number, id: number): Promise<Entity.Project.Version>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-custom-field-list/
     */
    getCustomFields(projectIdOrKey: string | number): Promise<Entity.Project.CustomField[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-custom-field/
     */
    postCustomField(projectIdOrKey: string | number, params: Option.Project.PostCustomFieldParams | Option.Project.PostCustomFieldWithNumericParams | Option.Project.PostCustomFieldWithDateParams | Option.Project.PostCustomFieldWithListParams): Promise<Entity.Project.CustomField>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-custom-field/
     */
    patchCustomField(projectIdOrKey: string | number, id: number, params: Option.Project.PatchCustomFieldParams | Option.Project.PatchCustomFieldWithNumericParams | Option.Project.PatchCustomFieldWithDateParams | Option.Project.PatchCustomFieldWithListParams): Promise<Entity.Project.CustomField>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-custom-field/
     */
    deleteCustomField(projectIdOrKey: string | number, id: number): Promise<Entity.Project.CustomField>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-list-item-for-list-type-custom-field/
     */
    postCustomFieldItem(projectIdOrKey: string | number, id: number, params: Option.Project.PostCustomFieldItemParams): Promise<Entity.Project.CustomField>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-list-item-for-list-type-custom-field/
     */
    patchCustomFieldItem(projectIdOrKey: string | number, id: number, itemId: number, params: Option.Project.PatchCustomFieldItemParams): Promise<Entity.Project.CustomField>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-list-item-for-list-type-custom-field/
     */
    deleteCustomFieldItem(projectIdOrKey: string | number, id: number, itemId: number): Promise<Entity.Project.CustomField>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files/
     */
    getSharedFiles(projectIdOrKey: string | number, path: string, params: Option.Project.GetSharedFilesParams): Promise<Entity.Project.SharedFile[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-file/
     */
    getSharedFile(projectIdOrKey: string | number, sharedFileId: number): Promise<Entity.File.FileData>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project-disk-usage/
     */
    getProjectsDiskUsage(projectIdOrKey: string | number): Promise<Entity.DiskUsage.ProjectDiskUsage>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-webhooks/
     */
    getWebhooks(projectIdOrKey: string | number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-webhook/
     */
    postWebhook(projectIdOrKey: string | number, params: Option.Project.PostWebhookParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-webhook/
     */
    getWebhook(projectIdOrKey: string | number, webhookId: string): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-webhook/
     */
    patchWebhook(projectIdOrKey: string | number, webhookId: string, params: Option.Project.PatchWebhookParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-webhook/
     */
    deleteWebhook(projectIdOrKey: string | number, webhookId: string): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-issue-list/
     */
    getIssues(params?: Option.Issue.GetIssuesParams): Promise<Entity.Issue.Issue[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/count-issue/
     */
    getIssuesCount(params?: Option.Issue.GetIssuesParams): Promise<Entity.Issue.IssueCount>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-issue/
     */
    postIssue(params: Option.Issue.PostIssueParams): Promise<Entity.Issue.Issue>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-issue/
     */
    patchIssue(issueIdOrKey: string | number, params: Option.Issue.PatchIssueParams): Promise<Entity.Issue.Issue>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-issue/
     */
    getIssue(issueIdOrKey: string | number): Promise<Entity.Issue.Issue>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-issue/
     */
    deleteIssuesCount(issueIdOrKey: string | number): Promise<Entity.Issue.Issue>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-comment-list/
     */
    getIssueComments(issueIdOrKey: string | number, params: Option.Issue.GetIssueCommentsParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-comment/
     */
    postIssueComments(issueIdOrKey: string | number, params: Option.Issue.PostIssueCommentsParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/count-comment/
     */
    getIssueCommentsCount(issueIdOrKey: string | number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-comment/
     */
    getIssueComment(issueIdOrKey: string | number, commentId: number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-comment/
     */
    deleteIssueComment(issueIdOrKey: string | number, commentId: number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-comment/
     */
    patchIssueComment(issueIdOrKey: string | number, commentId: number, params: Option.Issue.PatchIssueCommentParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-comment-notifications/
     */
    getIssueCommentNotifications(issueIdOrKey: string | number, commentId: number): Promise<Entity.Issue.CommentNotification[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-comment-notification/
     */
    postIssueCommentNotifications(issueIdOrKey: string | number, commentId: number, prams: Option.Issue.IssueCommentNotifications): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-issue-attachments/
     */
    getIssueAttachments(issueIdOrKey: string | number): Promise<Entity.File.IssueFileInfo[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-issue-attachment/
     */
    getIssueAttachment(issueIdOrKey: string | number, attachmentId: number): Promise<Entity.File.FileData>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-issue-attachment/
     */
    deleteIssueAttachment(issueIdOrKey: string | number, attachmentId: string): Promise<Entity.File.IssueFileInfo>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-issue-participant-list/
     */
    getIssueParticipants(issueIdOrKey: string | number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-linked-shared-files/
     */
    getIssueSharedFiles(issueIdOrKey: string | number): Promise<Entity.Project.SharedFile[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-issue/
     */
    linkIssueSharedFiles(issueIdOrKey: string | number, params: Option.Issue.LinkIssueSharedFilesParams): Promise<Entity.Project.SharedFile[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-issue/
     */
    unlinkIssueSharedFile(issueIdOrKey: string | number, id: number): Promise<Entity.Project.SharedFile>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-list/
     */
    getWikis(params: Option.Wiki.GetWikiParams): Promise<Entity.Wiki.WikiListItem[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/count-wiki-page/
     */
    getWikisCount(projectIdOrKey: string | number): Promise<Entity.Wiki.WikiCount>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-tag-list/
     */
    getWikisTags(projectIdOrKey: string | number): Promise<Entity.Wiki.Tag[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-wiki-page/
     */
    postWiki(params: Option.Wiki.PostWikiParams): Promise<Entity.Wiki.Wiki>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page/
     */
    getWiki(wikiId: number): Promise<Entity.Wiki.Wiki>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-wiki-page/
     */
    patchWiki(wikiId: number, params: Option.Wiki.PatchWikiParams): Promise<Entity.Wiki.Wiki>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-wiki-page/
     */
    deleteWiki(wikiId: number, mailNotify: boolean): Promise<Entity.Wiki.Wiki>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-wiki-attachments/
     */
    getWikisAttachments(wikiId: number): Promise<Entity.File.WikiFileInfo[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/attach-file-to-wiki/
     */
    postWikisAttachments(wikiId: number, attachmentId: number[]): Promise<Entity.File.WikiFileInfo[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-attachment/
     */
    getWikiAttachment(wikiId: number, attachmentId: number): Promise<Entity.File.FileData>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/remove-wiki-attachment/
     */
    deleteWikisAttachments(wikiId: number, attachmentId: number): Promise<Entity.File.WikiFileInfo>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files-on-wiki/
     */
    getWikisSharedFiles(wikiId: number): Promise<Entity.Project.SharedFile[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-wiki/
     */
    linkWikisSharedFiles(wikiId: number, fileId: number[]): Promise<Entity.Project.SharedFile[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-wiki/
     */
    unlinkWikisSharedFiles(wikiId: number, id: number): Promise<Entity.Project.SharedFile>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-history/
     */
    getWikisHistory(wikiId: number, params: Option.Wiki.GetWikisHistoryParams): Promise<Entity.Wiki.History[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-star/
     */
    getWikisStars(wikiId: number): Promise<Entity.Star.Star[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-star/
     */
    postStar(params: Option.Project.PostStarParams): Promise<void>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-notification/
     */
    getNotifications(params: Option.Notification.GetNotificationsParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/count-notification/
     */
    getNotificationsCount(params: Option.Notification.GetNotificationsCountParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/reset-unread-notification-count/
     */
    resetNotificationsMarkAsRead(): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/read-notification/
     */
    markAsReadNotification(id: number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-git-repositories/
     */
    getGitRepositories(projectIdOrKey: string | number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-git-repository/
     */
    getGitRepository(projectIdOrKey: string | number, repoIdOrName: string): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-list/
     */
    getPullRequests(projectIdOrKey: string | number, repoIdOrName: string, params: Option.PullRequest.GetPullRequestsParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-requests/
     */
    getPullRequestsCount(projectIdOrKey: string | number, repoIdOrName: string, params: Option.PullRequest.GetPullRequestsParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-pull-request/
     */
    postPullRequest(projectIdOrKey: string | number, repoIdOrName: string, params: Option.PullRequest.PostPullRequestParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-pull-request/
     */
    getPullRequest(projectIdOrKey: string | number, repoIdOrName: string, number: number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-pull-request/
     */
    patchPullRequest(projectIdOrKey: string | number, repoIdOrName: string, number: number, params: Option.PullRequest.PatchPullRequestParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-comment/
     */
    getPullRequestComments(projectIdOrKey: string | number, repoIdOrName: string, number: number, params: Option.PullRequest.GetPullRequestCommentsParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-pull-request-comment/
     */
    postPullRequestComments(projectIdOrKey: string | number, repoIdOrName: string, number: number, params: Option.PullRequest.PostPullRequestCommentsParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-request-comments/
     */
    getPullRequestCommentsCount(projectIdOrKey: string | number, repoIdOrName: string, number: number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-pull-request-comment-information/
     */
    patchPullRequestComments(projectIdOrKey: string | number, repoIdOrName: string, number: number, commentId: number, params: Option.PullRequest.PatchPullRequestCommentsParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-pull-request-attachment/
     */
    getPullRequestAttachments(projectIdOrKey: string | number, repoIdOrName: string, number: number): Promise<Entity.File.PullRequestFileInfo[]>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/download-pull-request-attachment/
     */
    getPullRequestAttachment(projectIdOrKey: string | number, repoIdOrName: string, number: number, attachmentId: number): Promise<Entity.File.FileData>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-pull-request-attachments/
     */
    deletePullRequestAttachment(projectIdOrKey: string | number, repoIdOrName: string, number: number, attachmentId: number): Promise<Entity.File.PullRequestFileInfo>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-watching-list
     */
    getWatchingListItems(userId: number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/count-watching
     */
    getWatchingListCount(userId: number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-watching
     */
    getWatchingListItem(watchId: number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-watching
     */
    postWatchingListItem(params: any): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-watching
     */
    patchWatchingListItem(watchId: number, note: string): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-watching
     */
    deletehWatchingListItem(watchId: number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/mark-watching-as-read
     */
    resetWatchingListItemAsRead(watchId: number): Promise<undefined>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project-group-list
     * @deprecated
     */
    getProjectGroupList(projectIdOrKey: string | number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-project-group
     * @deprecated
     */
    postProjectGroup(projectIdOrKey: string | number, params: any): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-project-group
     * @deprecated
     */
    deleteProjectGroup(projectIdOrKey: string | number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-group-icon
     * @deprecated
     */
    getGroupIcon(groupId: string): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-licence
     */
    getLicence(): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-teams/
     */
    getTeams(params?: Option.Team.GetTeamsParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-team/
     */
    postTeam(members: number[]): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-team/
     */
    getTeam(teamId: number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-team/
     */
    patchTeam(teamId: number, params: Option.Team.PatchTeamParams): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-team/
     */
    deleteTeam(teamId: number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-team-icon/
     */
    getTeamIcon(teamId: number): Promise<Entity.File.FileData>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project-team-list/
     */
    getProjectTeams(projectIdOrKey: string | number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-project-team/
     */
    postProjectTeam(projectIdOrKey: string | number, teamId: number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-project-team/
     */
    deleteProjectTeam(projectIdOrKey: string | number, teamId: number): Promise<any>;
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-rate-limit/
     */
    getRateLimit(): Promise<any>;
    private download;
    private upload;
    private parseFileData;
}
