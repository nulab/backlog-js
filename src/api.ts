import * as Option from "./option";
import * as Entity from "./entity";
import Request, { type ClientConfigure } from "./request";

/**
 * Extracts the filename from a `Content-Disposition` header, or `""` when it
 * carries none.
 *
 * Per RFC 6266 the `filename*` extended notation wins over plain `filename`;
 * its `<charset>'<language>'` prefix is dropped and the rest percent-decoded.
 * The value is the server's, so sanitise it before using it as a path.
 */
const parseContentDispositionFilename = (disposition: string | null): string => {
  if (!disposition) {
    return "";
  }

  const extended = /(?:^|;)\s*filename\*\s*=\s*([^;]+)/i.exec(disposition);
  if (extended) {
    // Servers send a quoted ext-value even though RFC 5987 forbids it.
    const value = extended[1].trim().replace(/^"(.*)"$/, "$1");
    const encoded = /^[^']*'[^']*'(.*)$/.exec(value);
    if (encoded) {
      try {
        return decodeURIComponent(encoded[1]);
      } catch {
        return encoded[1];
      }
    }
  }

  // Before the unquoted form: a quoted value may contain the `;` that ends one.
  const quoted = /(?:^|;)\s*filename\s*=\s*"((?:[^"\\]|\\.)*)"/i.exec(disposition);
  if (quoted) {
    return quoted[1].replace(/\\(.)/g, "$1");
  }

  const plain = /(?:^|;)\s*filename\s*=\s*([^;]*)/i.exec(disposition);
  return plain ? plain[1].trim() : "";
};

const download = (client: Client, path: string): Promise<Entity.File.FileData> =>
  client.request({ method: "GET", path }).then(parseFileData);

const upload = (client: Client, path: string, params: FormData): Promise<any> =>
  client.request({ method: "POST", path, params }).then(client.parseJSON);

const parseFileData = (response: Response): Promise<Entity.File.FileData> => {
  return new Promise((resolve) => {
    const contentType = response.headers.get("Content-Type") ?? "";
    if (typeof window !== "undefined") {
      resolve({
        body: (<any>response).body,
        url: response.url,
        blob: () => response.blob(),
        contentType,
      });
    } else {
      resolve({
        body: (<any>response).body,
        url: response.url,
        filename: parseContentDispositionFilename(response.headers.get("Content-Disposition")),
        contentType,
      });
    }
  });
};

/**
 * A client to pass as the first argument of the API functions.
 */
export type Client = Request;

export type { ClientConfigure };

/**
 * Creates a client for the API functions.
 *
 *     const client = createClient({ host, apiKey });
 *     const issue = await getIssue(client, "PROJ-1");
 */
export function createClient(configure: ClientConfigure): Client {
  return new Request(configure);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-space/
 */
export function getSpace(client: Client): Promise<Entity.Space.Space> {
  return client.get("space");
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-recent-updates/
 */
export function getSpaceActivities(
  client: Client,
  params: Option.Space.GetActivitiesParams,
): Promise<Entity.Activity.Activity[]> {
  return client.get("space/activities", params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-space-logo/
 */
export function getSpaceIcon(client: Client): Promise<Entity.File.FileData> {
  return download(client, "space/image");
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-space-notification/
 */
export function getSpaceNotification(client: Client): Promise<Entity.Space.Notification> {
  return client.get("space/notification");
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-space-notification/
 */
export function putSpaceNotification(
  client: Client,
  params: Option.Space.PutSpaceNotificationParams,
): Promise<Entity.Space.Notification> {
  return client.put("space/notification", params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-space-disk-usage/
 */
export function getSpaceDiskUsage(client: Client): Promise<Entity.DiskUsage.SpaceDiskUsage> {
  return client.get("space/diskUsage");
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/post-attachment-file/
 */
export function postSpaceAttachment(client: Client, form: FormData): Promise<Entity.File.FileInfo> {
  return upload(client, "space/attachment", form);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-user-list/
 */
export function getUsers(client: Client): Promise<Entity.User.User[]> {
  return client.get(`users`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-user/
 */
export function getUser(client: Client, userId: number): Promise<Entity.User.User> {
  return client.get(`users/${userId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-user/
 */
export function postUser(
  client: Client,
  params: Option.User.PostUserParams,
): Promise<Entity.User.User> {
  return client.post(`users`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-user/
 */
export function patchUser(
  client: Client,
  userId: number,
  params: Option.User.PatchUserParams,
): Promise<Entity.User.User> {
  return client.patch(`users/${userId}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-user/
 */
export function deleteUser(client: Client, userId: number): Promise<Entity.User.User> {
  return client.delete(`users/${userId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-own-user/
 */
export function getMyself(client: Client): Promise<Entity.User.User> {
  return client.get("users/myself");
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-user-icon/
 */
export function getUserIcon(client: Client, userId: number): Promise<Entity.File.FileData> {
  return download(client, `users/${userId}/icon`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-user-recent-updates/
 */
export function getUserActivities(
  client: Client,
  userId: number,
  params: Option.User.GetUserActivitiesParams,
): Promise<Entity.Activity.Activity[]> {
  return client.get(`users/${userId}/activities`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-received-star-list/
 */
export function getUserStars(
  client: Client,
  userId: number,
  params: Option.User.GetUserStarsParams,
): Promise<Entity.Star.Star[]> {
  return client.get(`users/${userId}/stars`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/count-user-received-stars/
 */
export function getUserStarsCount(
  client: Client,
  userId: number,
  params: Option.User.GetUserStarsCountParams,
): Promise<Entity.Star.StarCount> {
  return client.get(`users/${userId}/stars/count`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-issues/
 */
export function getRecentlyViewedIssues(
  client: Client,
  params: Option.User.GetRecentlyViewedParams,
): Promise<Entity.Issue.RecentlyViewedIssue[]> {
  return client.get("users/myself/recentlyViewedIssues", params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-projects/
 */
export function getRecentlyViewedProjects(
  client: Client,
  params: Option.User.GetRecentlyViewedParams,
): Promise<Entity.Project.RecentlyViewedProject[]> {
  return client.get("users/myself/recentlyViewedProjects", params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-wikis/
 */
export function getRecentlyViewedWikis(
  client: Client,
  params: Option.User.GetRecentlyViewedParams,
): Promise<Entity.Wiki.RecentlyViewedWiki[]> {
  return client.get("users/myself/recentlyViewedWikis", params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-status-list-of-project/
 */
export function getProjectStatuses(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.Project.ProjectStatus[]> {
  return client.get(`projects/${projectIdOrKey}/statuses`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-resolution-list/
 */
export function getResolutions(client: Client): Promise<Entity.Issue.Resolution[]> {
  return client.get("resolutions");
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-priority-list/
 */
export function getPriorities(client: Client): Promise<Entity.Issue.Priority[]> {
  return client.get("priorities");
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-project-list/
 */
export function getProjects(
  client: Client,
  params?: Option.Project.GetProjectsParams,
): Promise<Entity.Project.Project[]> {
  return client.get("projects", params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-project/
 */
export function postProject(
  client: Client,
  params: Option.Project.PostProjectParams,
): Promise<Entity.Project.Project> {
  return client.post("projects", params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-project/
 */
export function getProject(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.Project.Project> {
  return client.get(`projects/${projectIdOrKey}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-project/
 */
export function patchProject(
  client: Client,
  projectIdOrKey: string | number,
  params: Option.Project.PatchProjectParams,
): Promise<Entity.Project.Project> {
  return client.patch(`projects/${projectIdOrKey}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-project/
 */
export function deleteProject(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.Project.Project> {
  return client.delete(`projects/${projectIdOrKey}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-project-icon/
 */
export function getProjectIcon(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.File.FileData> {
  return download(client, `projects/${projectIdOrKey}/image`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-project-recent-updates/
 */
export function getProjectActivities(
  client: Client,
  projectIdOrKey: string | number,
  params: Option.Space.GetActivitiesParams,
): Promise<Entity.Activity.Activity[]> {
  return client.get(`projects/${projectIdOrKey}/activities`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-project-user/
 */
export function postProjectUser(
  client: Client,
  projectIdOrKey: string | number,
  userId: string,
): Promise<Entity.User.User> {
  return client.post(`projects/${projectIdOrKey}/users`, { userId });
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-project-user-list/
 */
export function getProjectUsers(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.User.User[]> {
  return client.get(`projects/${projectIdOrKey}/users`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-project-user/
 */
export function deleteProjectUsers(
  client: Client,
  projectIdOrKey: string | number,
  params: Option.Project.DeleteProjectUsersParams,
): Promise<Entity.User.User> {
  return client.delete(`projects/${projectIdOrKey}/users`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-project-administrator/
 */
export function postProjectAdministrators(
  client: Client,
  projectIdOrKey: string | number,
  params: Option.Project.PostProjectAdministrators,
): Promise<Entity.User.User> {
  return client.post(`projects/${projectIdOrKey}/administrators`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-list-of-project-administrators/
 */
export function getProjectAdministrators(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.User.User[]> {
  return client.get(`projects/${projectIdOrKey}/administrators`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-project-administrator/
 */
export function deleteProjectAdministrators(
  client: Client,
  projectIdOrKey: string | number,
  params: Option.Project.DeleteProjectAdministrators,
): Promise<Entity.User.User> {
  return client.delete(`projects/${projectIdOrKey}/administrators`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-status/
 */
export function postProjectStatus(
  client: Client,
  projectIdOrKey: string | number,
  params: Option.Project.PostStatusParams,
): Promise<Entity.Project.ProjectStatus> {
  return client.post(`projects/${projectIdOrKey}/statuses`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-status/
 */
export function patchProjectStatus(
  client: Client,
  projectIdOrKey: string | number,
  id: number,
  params: Option.Project.PatchStatusParams,
): Promise<Entity.Project.ProjectStatus> {
  return client.patch(`projects/${projectIdOrKey}/statuses/${id}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-status/
 */
export function deleteProjectStatus(
  client: Client,
  projectIdOrKey: string | number,
  id: number,
  substituteStatusId: number,
): Promise<Entity.Project.ProjectStatus> {
  return client.delete(`projects/${projectIdOrKey}/statuses/${id}`, { substituteStatusId });
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-order-of-status/
 */
export function patchProjectStatusOrder(
  client: Client,
  projectIdOrKey: string | number,
  statusId: number[],
): Promise<Entity.Project.ProjectStatus[]> {
  return client.patch(`projects/${projectIdOrKey}/statuses/updateDisplayOrder`, { statusId });
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-issue-type-list/
 */
export function getIssueTypes(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.Issue.IssueType[]> {
  return client.get(`projects/${projectIdOrKey}/issueTypes`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-issue-type/
 */
export function postIssueType(
  client: Client,
  projectIdOrKey: string | number,
  params: Option.Project.PostIssueTypeParams,
): Promise<Entity.Issue.IssueType> {
  return client.post(`projects/${projectIdOrKey}/issueTypes`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-issue-type/
 */
export function patchIssueType(
  client: Client,
  projectIdOrKey: string | number,
  id: number,
  params: Option.Project.PatchIssueTypeParams,
): Promise<Entity.Issue.IssueType> {
  return client.patch(`projects/${projectIdOrKey}/issueTypes/${id}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-issue-type/
 */
export function deleteIssueType(
  client: Client,
  projectIdOrKey: string | number,
  id: number,
  params: Option.Project.DeleteIssueTypeParams,
): Promise<Entity.Issue.IssueType> {
  return client.delete(`projects/${projectIdOrKey}/issueTypes/${id}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-category-list/
 */
export function getCategories(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.Project.Category[]> {
  return client.get(`projects/${projectIdOrKey}/categories`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-category/
 */
export function postCategories(
  client: Client,
  projectIdOrKey: string | number,
  params: Option.Project.PostCategoriesParams,
): Promise<Entity.Project.Category> {
  return client.post(`projects/${projectIdOrKey}/categories`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-category/
 */
export function patchCategories(
  client: Client,
  projectIdOrKey: string | number,
  id: number,
  params: Option.Project.PatchCategoriesParams,
): Promise<Entity.Project.Category> {
  return client.patch(`projects/${projectIdOrKey}/categories/${id}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-category/
 */
export function deleteCategories(
  client: Client,
  projectIdOrKey: string | number,
  id: number,
): Promise<Entity.Project.Category> {
  return client.delete(`projects/${projectIdOrKey}/categories/${id}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-version-milestone-list/
 */
export function getVersions(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.Project.Version[]> {
  return client.get(`projects/${projectIdOrKey}/versions`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-version-milestone/
 */
export function postVersions(
  client: Client,
  projectIdOrKey: string | number,
  params: Option.Project.PostVersionsParams,
): Promise<Entity.Project.Version> {
  return client.post(`projects/${projectIdOrKey}/versions`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-version-milestone/
 */
export function patchVersions(
  client: Client,
  projectIdOrKey: string | number,
  id: number,
  params: Option.Project.PatchVersionsParams,
): Promise<Entity.Project.Version> {
  return client.patch(`projects/${projectIdOrKey}/versions/${id}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-version/
 */
export function deleteVersions(
  client: Client,
  projectIdOrKey: string | number,
  id: number,
): Promise<Entity.Project.Version> {
  return client.delete(`projects/${projectIdOrKey}/versions/${id}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-custom-field-list/
 */
export function getCustomFields(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.Project.CustomField[]> {
  return client.get(`projects/${projectIdOrKey}/customFields`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-custom-field/
 */
export function postCustomField(
  client: Client,
  projectIdOrKey: string | number,
  params:
    | Option.Project.PostCustomFieldParams
    | Option.Project.PostCustomFieldWithNumericParams
    | Option.Project.PostCustomFieldWithDateParams
    | Option.Project.PostCustomFieldWithListParams,
): Promise<Entity.Project.CustomField> {
  return client.post(`projects/${projectIdOrKey}/customFields`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-custom-field/
 */
export function patchCustomField(
  client: Client,
  projectIdOrKey: string | number,
  id: number,
  params:
    | Option.Project.PatchCustomFieldParams
    | Option.Project.PatchCustomFieldWithNumericParams
    | Option.Project.PatchCustomFieldWithDateParams
    | Option.Project.PatchCustomFieldWithListParams,
): Promise<Entity.Project.CustomField> {
  return client.patch(`projects/${projectIdOrKey}/customFields/${id}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-custom-field/
 */
export function deleteCustomField(
  client: Client,
  projectIdOrKey: string | number,
  id: number,
): Promise<Entity.Project.CustomField> {
  return client.delete(`projects/${projectIdOrKey}/customFields/${id}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-list-item-for-list-type-custom-field/
 */
export function postCustomFieldItem(
  client: Client,
  projectIdOrKey: string | number,
  id: number,
  params: Option.Project.PostCustomFieldItemParams,
): Promise<Entity.Project.CustomField> {
  return client.post(`projects/${projectIdOrKey}/customFields/${id}/items`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-list-item-for-list-type-custom-field/
 */
export function patchCustomFieldItem(
  client: Client,
  projectIdOrKey: string | number,
  id: number,
  itemId: number,
  params: Option.Project.PatchCustomFieldItemParams,
): Promise<Entity.Project.CustomField> {
  return client.patch(`projects/${projectIdOrKey}/customFields/${id}/items/${itemId}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-list-item-for-list-type-custom-field/
 */
export function deleteCustomFieldItem(
  client: Client,
  projectIdOrKey: string | number,
  id: number,
  itemId: number,
): Promise<Entity.Project.CustomField> {
  return client.delete(`projects/${projectIdOrKey}/customFields/${id}/items/${itemId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files/
 */
export function getSharedFiles(
  client: Client,
  projectIdOrKey: string | number,
  path: string,
  params: Option.Project.GetSharedFilesParams,
): Promise<Entity.Project.SharedFile[]> {
  return client.get(`projects/${projectIdOrKey}/files/metadata/${path}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-file/
 */
export function getSharedFile(
  client: Client,
  projectIdOrKey: string | number,
  sharedFileId: number,
): Promise<Entity.File.FileData> {
  return download(client, `projects/${projectIdOrKey}/files/${sharedFileId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-project-disk-usage/
 */
export function getProjectsDiskUsage(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.DiskUsage.ProjectDiskUsage> {
  return client.get(`projects/${projectIdOrKey}/diskUsage`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-list-of-webhooks/
 */
export function getWebhooks(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.Webhook.Webhook[]> {
  return client.get(`projects/${projectIdOrKey}/webhooks`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-webhook/
 */
export function postWebhook(
  client: Client,
  projectIdOrKey: string | number,
  params: Option.Project.PostWebhookParams,
): Promise<Entity.Webhook.Webhook> {
  return client.post(`projects/${projectIdOrKey}/webhooks`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-webhook/
 */
export function getWebhook(
  client: Client,
  projectIdOrKey: string | number,
  webhookId: string,
): Promise<Entity.Webhook.Webhook> {
  return client.get(`projects/${projectIdOrKey}/webhooks/${webhookId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-webhook/
 */
export function patchWebhook(
  client: Client,
  projectIdOrKey: string | number,
  webhookId: string,
  params: Option.Project.PatchWebhookParams,
): Promise<Entity.Webhook.Webhook> {
  return client.patch(`projects/${projectIdOrKey}/webhooks/${webhookId}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-webhook/
 */
export function deleteWebhook(
  client: Client,
  projectIdOrKey: string | number,
  webhookId: string,
): Promise<Entity.Webhook.Webhook> {
  return client.delete(`projects/${projectIdOrKey}/webhooks/${webhookId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-issue-list/
 */
export function getIssues(
  client: Client,
  params?: Option.Issue.GetIssuesParams,
): Promise<Entity.Issue.Issue[]> {
  return client.get("issues", params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/count-issue/
 */
export function getIssuesCount(
  client: Client,
  params?: Option.Issue.GetIssuesParams,
): Promise<Entity.Issue.IssueCount> {
  return client.get("issues/count", params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-issue/
 */
export function postIssue(
  client: Client,
  params: Option.Issue.PostIssueParams,
): Promise<Entity.Issue.Issue> {
  return client.post("issues", params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-issue/
 */
export function patchIssue(
  client: Client,
  issueIdOrKey: string | number,
  params: Option.Issue.PatchIssueParams,
): Promise<Entity.Issue.Issue> {
  return client.patch(`issues/${issueIdOrKey}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-issue/
 */
export function getIssue(
  client: Client,
  issueIdOrKey: string | number,
  params?: Option.Issue.GetIssueParams,
): Promise<Entity.Issue.Issue> {
  return client.get(`issues/${issueIdOrKey}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-issue/
 */
export function deleteIssue(
  client: Client,
  issueIdOrKey: string | number,
): Promise<Entity.Issue.Issue> {
  return client.delete(`issues/${issueIdOrKey}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-comment-list/
 */
export function getIssueComments(
  client: Client,
  issueIdOrKey: string | number,
  params: Option.Issue.GetIssueCommentsParams,
): Promise<Entity.Issue.Comment[]> {
  return client.get(`issues/${issueIdOrKey}/comments`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-comment/
 */
export function postIssueComments(
  client: Client,
  issueIdOrKey: string | number,
  params: Option.Issue.PostIssueCommentsParams,
): Promise<Entity.Issue.Comment> {
  return client.post(`issues/${issueIdOrKey}/comments`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/count-comment/
 */
export function getIssueCommentsCount(
  client: Client,
  issueIdOrKey: string | number,
): Promise<Entity.Issue.IssueCommentCount> {
  return client.get(`issues/${issueIdOrKey}/comments/count`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-comment/
 */
export function getIssueComment(
  client: Client,
  issueIdOrKey: string | number,
  commentId: number,
): Promise<Entity.Issue.Comment> {
  return client.get(`issues/${issueIdOrKey}/comments/${commentId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-comment/
 */
export function deleteIssueComment(
  client: Client,
  issueIdOrKey: string | number,
  commentId: number,
): Promise<Entity.Issue.Comment> {
  return client.delete(`issues/${issueIdOrKey}/comments/${commentId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-comment/
 */
export function patchIssueComment(
  client: Client,
  issueIdOrKey: string | number,
  commentId: number,
  params: Option.Issue.PatchIssueCommentParams,
): Promise<Entity.Issue.Comment> {
  return client.patch(`issues/${issueIdOrKey}/comments/${commentId}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-list-of-comment-notifications/
 */
export function getIssueCommentNotifications(
  client: Client,
  issueIdOrKey: string | number,
  commentId: number,
): Promise<Entity.CommentNotification.CommentNotification[]> {
  return client.get(`issues/${issueIdOrKey}/comments/${commentId}/notifications`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-comment-notification/
 */
export function postIssueCommentNotifications(
  client: Client,
  issueIdOrKey: string | number,
  commentId: number,
  prams: Option.Issue.IssueCommentNotifications,
): Promise<Entity.Issue.Comment> {
  return client.post(`issues/${issueIdOrKey}/comments/${commentId}/notifications`, prams);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-list-of-issue-attachments/
 */
export function getIssueAttachments(
  client: Client,
  issueIdOrKey: string | number,
): Promise<Entity.File.IssueFileInfo[]> {
  return client.get(`issues/${issueIdOrKey}/attachments`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-issue-attachment/
 */
export function getIssueAttachment(
  client: Client,
  issueIdOrKey: string | number,
  attachmentId: number,
): Promise<Entity.File.FileData> {
  return download(client, `issues/${issueIdOrKey}/attachments/${attachmentId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-issue-attachment/
 */
export function deleteIssueAttachment(
  client: Client,
  issueIdOrKey: string | number,
  attachmentId: string,
): Promise<Entity.File.IssueFileInfo> {
  return client.delete(`issues/${issueIdOrKey}/attachments/${attachmentId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-issue-participant-list/
 */
export function getIssueParticipants(
  client: Client,
  issueIdOrKey: string | number,
): Promise<Entity.User.User[]> {
  return client.get(`issues/${issueIdOrKey}/participants`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-list-of-linked-shared-files/
 */
export function getIssueSharedFiles(
  client: Client,
  issueIdOrKey: string | number,
): Promise<Entity.Project.SharedFile[]> {
  return client.get(`issues/${issueIdOrKey}/sharedFiles`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-issue/
 */
export function linkIssueSharedFiles(
  client: Client,
  issueIdOrKey: string | number,
  params: Option.Issue.LinkIssueSharedFilesParams,
): Promise<Entity.Project.SharedFile[]> {
  return client.post(`issues/${issueIdOrKey}/sharedFiles`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-issue/
 */
export function unlinkIssueSharedFile(
  client: Client,
  issueIdOrKey: string | number,
  id: number,
): Promise<Entity.Project.SharedFile> {
  return client.delete(`issues/${issueIdOrKey}/sharedFiles/${id}`);
}

/**
 * Get the list of issues related to the specified issue.
 *
 * GET /api/v2/issues/:issueIdOrKey/relatedIssues
 */
export function getRelatedIssues(
  client: Client,
  issueIdOrKey: string | number,
): Promise<Entity.Issue.RelatedIssue[]> {
  return client.get(`issues/${issueIdOrKey}/relatedIssues`);
}

/**
 * Add a related issue to the specified issue.
 *
 * POST /api/v2/issues/:issueIdOrKey/relatedIssues
 */
export function addRelatedIssue(
  client: Client,
  issueIdOrKey: string | number,
  params: Option.Issue.AddRelatedIssueParams,
): Promise<Entity.Issue.RelatedIssue> {
  return client.post(`issues/${issueIdOrKey}/relatedIssues`, params);
}

/**
 * Remove a related issue from the specified issue.
 *
 * DELETE /api/v2/issues/:issueIdOrKey/relatedIssues/:relatedIssueId
 */
export function removeRelatedIssue(
  client: Client,
  issueIdOrKey: string | number,
  relatedIssueId: number,
): Promise<Entity.Issue.RelatedIssue> {
  return client.delete(`issues/${issueIdOrKey}/relatedIssues/${relatedIssueId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-list/
 */
export function getWikis(
  client: Client,
  params: Option.Wiki.GetWikiParams,
): Promise<Entity.Wiki.WikiListItem[]> {
  return client.get(`wikis`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/count-wiki-page/
 */
export function getWikisCount(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.Wiki.WikiCount> {
  return client.get(`wikis/count`, { projectIdOrKey });
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-tag-list/
 */
export function getWikisTags(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.Wiki.Tag[]> {
  return client.get(`wikis/tags`, { projectIdOrKey });
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-wiki-page/
 */
export function postWiki(
  client: Client,
  params: Option.Wiki.PostWikiParams,
): Promise<Entity.Wiki.Wiki> {
  return client.post(`wikis`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page/
 */
export function getWiki(client: Client, wikiId: number): Promise<Entity.Wiki.Wiki> {
  return client.get(`wikis/${wikiId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-wiki-page/
 */
export function patchWiki(
  client: Client,
  wikiId: number,
  params: Option.Wiki.PatchWikiParams,
): Promise<Entity.Wiki.Wiki> {
  return client.patch(`wikis/${wikiId}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-wiki-page/
 */
export function deleteWiki(
  client: Client,
  wikiId: number,
  mailNotify: boolean,
): Promise<Entity.Wiki.Wiki> {
  return client.delete(`wikis/${wikiId}`, { mailNotify });
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-list-of-wiki-attachments/
 */
export function getWikisAttachments(
  client: Client,
  wikiId: number,
): Promise<Entity.File.WikiFileInfo[]> {
  return client.get(`wikis/${wikiId}/attachments`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/attach-file-to-wiki/
 */
export function postWikisAttachments(
  client: Client,
  wikiId: number,
  attachmentId: number[],
): Promise<Entity.File.WikiFileInfo[]> {
  return client.post(`wikis/${wikiId}/attachments`, { attachmentId });
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-attachment/
 */
export function getWikiAttachment(
  client: Client,
  wikiId: number,
  attachmentId: number,
): Promise<Entity.File.FileData> {
  return download(client, `wikis/${wikiId}/attachments/${attachmentId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/remove-wiki-attachment/
 */
export function deleteWikisAttachments(
  client: Client,
  wikiId: number,
  attachmentId: number,
): Promise<Entity.File.WikiFileInfo> {
  return client.delete(`wikis/${wikiId}/attachments/${attachmentId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files-on-wiki/
 */
export function getWikisSharedFiles(
  client: Client,
  wikiId: number,
): Promise<Entity.Project.SharedFile[]> {
  return client.get(`wikis/${wikiId}/sharedFiles`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-wiki/
 */
export function linkWikisSharedFiles(
  client: Client,
  wikiId: number,
  fileId: number[],
): Promise<Entity.Project.SharedFile[]> {
  return client.post(`wikis/${wikiId}/sharedFiles`, { fileId });
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-wiki/
 */
export function unlinkWikisSharedFiles(
  client: Client,
  wikiId: number,
  id: number,
): Promise<Entity.Project.SharedFile> {
  return client.delete(`wikis/${wikiId}/sharedFiles/${id}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/get-document-list/
 */
export function getDocuments(
  client: Client,
  params: Option.Document.GetDocumentsParams,
): Promise<Entity.Document.Document[]> {
  return client.get("documents", params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/get-document-tree/
 */
export function getDocumentTree(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.Document.DocumentTree> {
  return client.get(`documents/tree`, { projectIdOrKey });
}

/**
 * https://developer.nulab.com/docs/backlog/api/get-document/
 */
export function getDocument(client: Client, documentId: string): Promise<Entity.Document.Document> {
  return client.get(`documents/${documentId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/get-document-attachments/
 */
export function downloadDocumentAttachment(
  client: Client,
  documentId: string,
  attachmentId: number,
): Promise<Entity.File.FileData> {
  return download(client, `documents/${documentId}/attachments/${attachmentId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-document/
 */
export function addDocument(
  client: Client,
  params: Option.Document.AddDocumentParams,
): Promise<Entity.Document.Document> {
  return client.post("documents", params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-document/
 */
export function deleteDocument(
  client: Client,
  documentId: string,
): Promise<Entity.Document.Document> {
  return client.delete(`documents/${documentId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-history/
 */
export function getWikisHistory(
  client: Client,
  wikiId: number,
  params: Option.Wiki.GetWikisHistoryParams,
): Promise<Entity.Wiki.History[]> {
  return client.get(`wikis/${wikiId}/history`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-star/
 */
export function getWikisStars(client: Client, wikiId: number): Promise<Entity.Star.Star[]> {
  return client.get(`wikis/${wikiId}/stars`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-star/
 */
export function postStar(client: Client, params: Option.Project.PostStarParams): Promise<void> {
  return client.post("stars", params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/remove-star/
 */
export function removeStar(client: Client, starId: number): Promise<void> {
  const endpoint = `stars/${starId}`;
  return client.delete(endpoint);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-notification/
 */
export function getNotifications(
  client: Client,
  params: Option.Notification.GetNotificationsParams,
): Promise<Entity.Notification.Notification[]> {
  return client.get("notifications", params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/count-notification/
 */
export function getNotificationsCount(
  client: Client,
  params: Option.Notification.GetNotificationsCountParams,
): Promise<Entity.Notification.NotificationCount> {
  return client.get("notifications/count", params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/reset-unread-notification-count/
 */
export function resetNotificationsMarkAsRead(
  client: Client,
): Promise<Entity.Notification.NotificationCount> {
  return client.post("notifications/markAsRead");
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/read-notification/
 */
export function markAsReadNotification(client: Client, id: number): Promise<void> {
  return client.post(`notifications/${id}/markAsRead`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-list-of-git-repositories/
 */
export function getGitRepositories(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.Git.GitRepository[]> {
  return client.get(`projects/${projectIdOrKey}/git/repositories`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-git-repository/
 */
export function getGitRepository(
  client: Client,
  projectIdOrKey: string | number,
  repoIdOrName: string,
): Promise<Entity.Git.GitRepository> {
  return client.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-list/
 */
export function getPullRequests(
  client: Client,
  projectIdOrKey: string | number,
  repoIdOrName: string,
  params: Option.PullRequest.GetPullRequestsParams,
): Promise<Entity.PullRequest.PullRequest[]> {
  return client.get(
    `projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests`,
    params,
  );
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-requests/
 */
export function getPullRequestsCount(
  client: Client,
  projectIdOrKey: string | number,
  repoIdOrName: string,
  params: Option.PullRequest.GetPullRequestsParams,
): Promise<Entity.PullRequest.PullRequestCount> {
  return client.get(
    `projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/count`,
    params,
  );
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-pull-request/
 */
export function postPullRequest(
  client: Client,
  projectIdOrKey: string | number,
  repoIdOrName: string,
  params: Option.PullRequest.PostPullRequestParams,
): Promise<Entity.PullRequest.PullRequest> {
  return client.post(
    `projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests`,
    params,
  );
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-pull-request/
 */
export function getPullRequest(
  client: Client,
  projectIdOrKey: string | number,
  repoIdOrName: string,
  number: number,
): Promise<Entity.PullRequest.PullRequest> {
  return client.get(
    `projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}`,
  );
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-pull-request/
 */
export function patchPullRequest(
  client: Client,
  projectIdOrKey: string | number,
  repoIdOrName: string,
  number: number,
  params: Option.PullRequest.PatchPullRequestParams,
): Promise<Entity.PullRequest.PullRequest> {
  return client.patch(
    `projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}`,
    params,
  );
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-comment/
 */
export function getPullRequestComments(
  client: Client,
  projectIdOrKey: string | number,
  repoIdOrName: string,
  number: number,
  params: Option.PullRequest.GetPullRequestCommentsParams,
): Promise<Entity.PullRequest.Comment[]> {
  return client.get(
    `projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments`,
    params,
  );
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-pull-request-comment/
 */
export function postPullRequestComments(
  client: Client,
  projectIdOrKey: string | number,
  repoIdOrName: string,
  number: number,
  params: Option.PullRequest.PostPullRequestCommentsParams,
): Promise<Entity.PullRequest.Comment> {
  return client.post(
    `projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments`,
    params,
  );
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-request-comments/
 */
export function getPullRequestCommentsCount(
  client: Client,
  projectIdOrKey: string | number,
  repoIdOrName: string,
  number: number,
): Promise<Entity.PullRequest.PullRequestCommentCount> {
  return client.get(
    `projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments/count`,
  );
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-pull-request-comment-information/
 */
export function patchPullRequestComments(
  client: Client,
  projectIdOrKey: string | number,
  repoIdOrName: string,
  number: number,
  commentId: number,
  params: Option.PullRequest.PatchPullRequestCommentsParams,
): Promise<Entity.PullRequest.Comment> {
  return client.patch(
    `projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments/${commentId}`,
    params,
  );
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-list-of-pull-request-attachment/
 */
export function getPullRequestAttachments(
  client: Client,
  projectIdOrKey: string | number,
  repoIdOrName: string,
  number: number,
): Promise<Entity.File.PullRequestFileInfo[]> {
  return client.get(
    `projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments`,
  );
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/download-pull-request-attachment/
 */
export function getPullRequestAttachment(
  client: Client,
  projectIdOrKey: string | number,
  repoIdOrName: string,
  number: number,
  attachmentId: number,
): Promise<Entity.File.FileData> {
  return download(
    client,
    `projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments/${attachmentId}`,
  );
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-pull-request-attachments/
 */
export function deletePullRequestAttachment(
  client: Client,
  projectIdOrKey: string | number,
  repoIdOrName: string,
  number: number,
  attachmentId: number,
): Promise<Entity.File.PullRequestFileInfo> {
  return client.get(
    `projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments/${attachmentId}`,
  );
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-watching-list
 */
export function getWatchingListItems(
  client: Client,
  userId: number,
  params?: Option.WatchingList.GetWatchingListParams,
): Promise<Entity.WatchingList.WatchingListItem[]> {
  return client.get(`users/${userId}/watchings`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/count-watching
 */
export function getWatchingListCount(
  client: Client,
  userId: number,
  params?: Option.WatchingList.GetWatchingListCountParams,
): Promise<Entity.WatchingList.WatchingListCount> {
  return client.get(`users/${userId}/watchings/count`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-watching
 */
export function getWatchingListItem(
  client: Client,
  watchId: number,
): Promise<Entity.WatchingList.WatchingListItem> {
  return client.get(`watchings/${watchId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-watching
 */
export function postWatchingListItem(
  client: Client,
  params: Option.WatchingList.PostWatchingListItemParams,
): Promise<Entity.WatchingList.WatchingListItem> {
  return client.post(`watchings`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-watching
 */
export function patchWatchingListItem(
  client: Client,
  watchId: number,
  note: string,
): Promise<Entity.WatchingList.WatchingListItem> {
  return client.patch(`watchings/${watchId}`, { note });
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-watching
 */
export function deletehWatchingListItem(
  client: Client,
  watchId: number,
): Promise<Entity.WatchingList.WatchingListItem> {
  return client.delete(`watchings/${watchId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/mark-watching-as-read
 */
export function resetWatchingListItemAsRead(client: Client, watchId: number): Promise<void> {
  return client.post(`watchings/${watchId}/markAsRead`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-licence
 */
export function getLicence(client: Client): Promise<Entity.License.License> {
  return client.get(`space/licence`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-list-of-teams/
 */
export function getTeams(
  client: Client,
  params?: Option.Team.GetTeamsParams,
): Promise<Entity.Team.Team[]> {
  return client.get(`teams`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-team/
 */
export function postTeam(
  client: Client,
  params: Option.Team.PostTeamParams,
): Promise<Entity.Team.Team> {
  return client.post(`teams`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-team/
 */
export function getTeam(client: Client, teamId: number): Promise<Entity.Team.Team> {
  return client.get(`teams/${teamId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/update-team/
 */
export function patchTeam(
  client: Client,
  teamId: number,
  params: Option.Team.PatchTeamParams,
): Promise<Entity.Team.Team> {
  return client.patch(`teams/${teamId}`, params);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-team/
 */
export function deleteTeam(client: Client, teamId: number): Promise<Entity.Team.Team> {
  return client.delete(`teams/${teamId}`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-team-icon/
 */
export function getTeamIcon(client: Client, teamId: number): Promise<Entity.File.FileData> {
  return download(client, `teams/${teamId}/icon`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-project-team-list/
 */
export function getProjectTeams(
  client: Client,
  projectIdOrKey: string | number,
): Promise<Entity.Team.Team[]> {
  return client.get(`projects/${projectIdOrKey}/teams`);
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/add-project-team/
 */
export function postProjectTeam(
  client: Client,
  projectIdOrKey: string | number,
  teamId: number,
): Promise<Entity.Team.Team> {
  return client.post(`projects/${projectIdOrKey}/teams`, { teamId });
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/delete-project-team/
 */
export function deleteProjectTeam(
  client: Client,
  projectIdOrKey: string | number,
  teamId: number,
): Promise<Entity.Team.Team> {
  return client.delete(`projects/${projectIdOrKey}/teams`, { teamId });
}

/**
 * https://developer.nulab.com/docs/backlog/api/2/get-rate-limit/
 */
export function getRateLimit(client: Client): Promise<Entity.RateLimit.RateLimit> {
  return client.get("rateLimit");
}
