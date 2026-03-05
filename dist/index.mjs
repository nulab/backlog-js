var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/error.ts
var error_exports = {};
__export(error_exports, {
  BacklogApiError: () => BacklogApiError,
  BacklogAuthError: () => BacklogAuthError,
  BacklogError: () => BacklogError,
  UnexpectedError: () => UnexpectedError
});
var BacklogError = class extends Error {
  _name;
  _url;
  _status;
  _body;
  _response;
  constructor(name, response, body) {
    super(response.statusText);
    this._name = name;
    this._url = response.url;
    this._status = response.status;
    this._body = body;
    this._response = response;
  }
  get name() {
    return this._name;
  }
  get url() {
    return this._url;
  }
  get status() {
    return this._status;
  }
  get body() {
    return this._body;
  }
  get response() {
    return this._response;
  }
};
var BacklogApiError = class extends BacklogError {
  constructor(response, body) {
    super("BacklogApiError", response, body);
  }
};
var BacklogAuthError = class extends BacklogError {
  constructor(response, body) {
    super("BacklogAuthError", response, body);
  }
};
var UnexpectedError = class extends BacklogError {
  constructor(response) {
    super("UnexpectedError", response);
  }
};

// src/request.ts
import * as qs from "qs";
var Request = class {
  constructor(configure) {
    this.configure = configure;
  }
  get(path, params) {
    return this.request({ method: "GET", path, params }).then(this.parseJSON);
  }
  post(path, params) {
    return this.request({ method: "POST", path, params }).then(this.parseJSON);
  }
  put(path, params) {
    return this.request({ method: "PUT", path, params }).then(this.parseJSON);
  }
  patch(path, params) {
    return this.request({ method: "PATCH", path, params }).then(this.parseJSON);
  }
  delete(path, params) {
    return this.request({ method: "DELETE", path, params }).then(this.parseJSON);
  }
  request(options) {
    const { method, path, params = {} } = options;
    const { apiKey, accessToken, timeout } = this.configure;
    const query = apiKey ? { apiKey } : {};
    const init = { method, headers: {} };
    if (timeout) {
      init["timeout"] = timeout;
    }
    if (!apiKey && accessToken) {
      init.headers["Authorization"] = "Bearer " + accessToken;
    }
    if (typeof window !== "undefined") {
      init.mode = "cors";
    }
    if (method !== "GET") {
      if (params instanceof FormData) {
        init.body = params;
      } else {
        init.headers["Content-type"] = "application/x-www-form-urlencoded";
        init.body = this.toQueryString(params);
      }
    } else {
      Object.keys(params).forEach((key) => query[key] = params[key]);
    }
    const queryStr = this.toQueryString(query);
    const url = `${this.restBaseURL}/${path}` + (queryStr.length > 0 ? `?${queryStr}` : "");
    return fetch(url, init).then(this.checkStatus);
  }
  checkStatus(response) {
    return new Promise((resolve, reject) => {
      if (200 <= response.status && response.status < 300) {
        resolve(response);
      } else {
        response.json().then((data) => {
          if (response.status === 401) {
            reject(new BacklogAuthError(response, data));
          } else {
            reject(new BacklogApiError(response, data));
          }
        }).catch((err) => reject(new UnexpectedError(response)));
      }
    });
  }
  parseJSON(response) {
    if (response.status === 204 || response.headers.get("Content-Length") === "0") {
      return Promise.resolve(void 0);
    }
    return response.json();
  }
  toQueryString(params) {
    const formatted = {};
    Object.keys(params).forEach((key) => {
      const value = params[key];
      if (key.startsWith("customField_") && Array.isArray(value)) {
        value.forEach((v, i) => {
          formatted[`${key}[${i}]`] = v;
        });
      } else {
        formatted[key] = value;
      }
    });
    return qs.stringify(formatted, { arrayFormat: "brackets" });
  }
  get webAppBaseURL() {
    return `https://${this.configure.host}`;
  }
  get restBaseURL() {
    return `${this.webAppBaseURL}/api/v2`;
  }
};

// src/backlog.ts
var Backlog = class extends Request {
  constructor(configure) {
    super(configure);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space/
   */
  getSpace() {
    return this.get("space");
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-recent-updates/
   */
  getSpaceActivities(params) {
    return this.get("space/activities", params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space-logo/
   */
  getSpaceIcon() {
    return this.download("space/image");
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space-notification/
   */
  getSpaceNotification() {
    return this.get("space/notification");
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-space-notification/
   */
  putSpaceNotification(params) {
    return this.put("space/notification", params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-space-disk-usage/
   */
  getSpaceDiskUsage() {
    return this.get("space/diskUsage");
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/post-attachment-file/
   */
  postSpaceAttachment(form) {
    return this.upload("space/attachment", form);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user-list/
   */
  getUsers() {
    return this.get(`users`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user/
   */
  getUser(userId) {
    return this.get(`users/${userId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-user/
   */
  postUser(params) {
    return this.post(`users`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-user/
   */
  patchUser(userId, params) {
    return this.patch(`users/${userId}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-user/
   */
  deleteUser(userId) {
    return this.delete(`users/${userId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-own-user/
   */
  getMyself() {
    return this.get("users/myself");
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user-icon/
   */
  getUserIcon(userId) {
    return this.download(`users/${userId}/icon`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user-recent-updates/
   */
  getUserActivities(userId, params) {
    return this.get(`users/${userId}/activities`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-received-star-list/
   */
  getUserStars(userId, params) {
    return this.get(`users/${userId}/stars`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-user-received-stars/
   */
  getUserStarsCount(userId, params) {
    return this.get(`users/${userId}/stars/count`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-issues/
   */
  getRecentlyViewedIssues(params) {
    return this.get("users/myself/recentlyViewedIssues", params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-projects/
   */
  getRecentlyViewedProjects(params) {
    return this.get("users/myself/recentlyViewedProjects", params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-wikis/
   */
  getRecentlyViewedWikis(params) {
    return this.get("users/myself/recentlyViewedWikis", params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-status-list-of-project/
   */
  getProjectStatuses(projectIdOrKey) {
    return this.get(`projects/${projectIdOrKey}/statuses`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-resolution-list/
   */
  getResolutions() {
    return this.get("resolutions");
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-priority-list/
   */
  getPriorities() {
    return this.get("priorities");
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-list/
   */
  getProjects(params) {
    return this.get("projects", params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project/
   */
  postProject(params) {
    return this.post("projects", params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project/
   */
  getProject(projectIdOrKey) {
    return this.get(`projects/${projectIdOrKey}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-project/
   */
  patchProject(projectIdOrKey, params) {
    return this.patch(`projects/${projectIdOrKey}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project/
   */
  deleteProject(projectIdOrKey) {
    return this.delete(`projects/${projectIdOrKey}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-icon/
   */
  getProjectIcon(projectIdOrKey) {
    return this.download(`projects/${projectIdOrKey}/image`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-recent-updates/
   */
  getProjectActivities(projectIdOrKey, params) {
    return this.get(`projects/${projectIdOrKey}/activities`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-user/
   */
  postProjectUser(projectIdOrKey, userId) {
    return this.post(`projects/${projectIdOrKey}/users`, { userId });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-user-list/
   */
  getProjectUsers(projectIdOrKey) {
    return this.get(`projects/${projectIdOrKey}/users`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-user/
   */
  deleteProjectUsers(projectIdOrKey, params) {
    return this.delete(`projects/${projectIdOrKey}/users`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-administrator/
   */
  postProjectAdministrators(projectIdOrKey, params) {
    return this.post(`projects/${projectIdOrKey}/administrators`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-project-administrators/
   */
  getProjectAdministrators(projectIdOrKey) {
    return this.get(`projects/${projectIdOrKey}/administrators`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-administrator/
   */
  deleteProjectAdministrators(projectIdOrKey, params) {
    return this.delete(`projects/${projectIdOrKey}/administrators`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-status/
   */
  postProjectStatus(projectIdOrKey, params) {
    return this.post(`projects/${projectIdOrKey}/statuses`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-status/
   */
  patchProjectStatus(projectIdOrKey, id, params) {
    return this.patch(`projects/${projectIdOrKey}/statuses/${id}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-status/
   */
  deleteProjectStatus(projectIdOrKey, id, substituteStatusId) {
    return this.delete(`projects/${projectIdOrKey}/statuses/${id}`, { substituteStatusId });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-order-of-status/
   */
  patchProjectStatusOrder(projectIdOrKey, statusId) {
    return this.patch(`projects/${projectIdOrKey}/statuses/updateDisplayOrder`, { statusId });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-type-list/
   */
  getIssueTypes(projectIdOrKey) {
    return this.get(`projects/${projectIdOrKey}/issueTypes`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-issue-type/
   */
  postIssueType(projectIdOrKey, params) {
    return this.post(`projects/${projectIdOrKey}/issueTypes`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-issue-type/
   */
  patchIssueType(projectIdOrKey, id, params) {
    return this.patch(`projects/${projectIdOrKey}/issueTypes/${id}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-issue-type/
   */
  deleteIssueType(projectIdOrKey, id, params) {
    return this.delete(`projects/${projectIdOrKey}/issueTypes/${id}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-category-list/
   */
  getCategories(projectIdOrKey) {
    return this.get(`projects/${projectIdOrKey}/categories`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-category/
   */
  postCategories(projectIdOrKey, params) {
    return this.post(`projects/${projectIdOrKey}/categories`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-category/
   */
  patchCategories(projectIdOrKey, id, params) {
    return this.patch(`projects/${projectIdOrKey}/categories/${id}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-category/
   */
  deleteCategories(projectIdOrKey, id) {
    return this.delete(`projects/${projectIdOrKey}/categories/${id}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-version-milestone-list/
   */
  getVersions(projectIdOrKey) {
    return this.get(`projects/${projectIdOrKey}/versions`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-version-milestone/
   */
  postVersions(projectIdOrKey, params) {
    return this.post(`projects/${projectIdOrKey}/versions`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-version-milestone/
   */
  patchVersions(projectIdOrKey, id, params) {
    return this.patch(`projects/${projectIdOrKey}/versions/${id}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-version/
   */
  deleteVersions(projectIdOrKey, id) {
    return this.delete(`projects/${projectIdOrKey}/versions/${id}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-custom-field-list/
   */
  getCustomFields(projectIdOrKey) {
    return this.get(`projects/${projectIdOrKey}/customFields`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-custom-field/
   */
  postCustomField(projectIdOrKey, params) {
    return this.post(`projects/${projectIdOrKey}/customFields`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-custom-field/
   */
  patchCustomField(projectIdOrKey, id, params) {
    return this.patch(`projects/${projectIdOrKey}/customFields/${id}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-custom-field/
   */
  deleteCustomField(projectIdOrKey, id) {
    return this.delete(`projects/${projectIdOrKey}/customFields/${id}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-list-item-for-list-type-custom-field/
   */
  postCustomFieldItem(projectIdOrKey, id, params) {
    return this.post(`projects/${projectIdOrKey}/customFields/${id}/items`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-list-item-for-list-type-custom-field/
   */
  patchCustomFieldItem(projectIdOrKey, id, itemId, params) {
    return this.patch(`projects/${projectIdOrKey}/customFields/${id}/items/${itemId}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-list-item-for-list-type-custom-field/
   */
  deleteCustomFieldItem(projectIdOrKey, id, itemId) {
    return this.delete(`projects/${projectIdOrKey}/customFields/${id}/items/${itemId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files/
   */
  getSharedFiles(projectIdOrKey, path, params) {
    return this.get(`projects/${projectIdOrKey}/files/metadata/${path}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-file/
   */
  getSharedFile(projectIdOrKey, sharedFileId) {
    return this.download(`projects/${projectIdOrKey}/files/${sharedFileId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-disk-usage/
   */
  getProjectsDiskUsage(projectIdOrKey) {
    return this.get(`projects/${projectIdOrKey}/diskUsage`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-webhooks/
   */
  getWebhooks(projectIdOrKey) {
    return this.get(`projects/${projectIdOrKey}/webhooks`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-webhook/
   */
  postWebhook(projectIdOrKey, params) {
    return this.post(`projects/${projectIdOrKey}/webhooks`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-webhook/
   */
  getWebhook(projectIdOrKey, webhookId) {
    return this.get(`projects/${projectIdOrKey}/webhooks/${webhookId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-webhook/
   */
  patchWebhook(projectIdOrKey, webhookId, params) {
    return this.patch(`projects/${projectIdOrKey}/webhooks/${webhookId}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-webhook/
   */
  deleteWebhook(projectIdOrKey, webhookId) {
    return this.delete(`projects/${projectIdOrKey}/webhooks/${webhookId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-list/
   */
  getIssues(params) {
    return this.get("issues", params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-issue/
   */
  getIssuesCount(params) {
    return this.get("issues/count", params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-issue/
   */
  postIssue(params) {
    return this.post("issues", params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-issue/
   */
  patchIssue(issueIdOrKey, params) {
    return this.patch(`issues/${issueIdOrKey}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue/
   */
  getIssue(issueIdOrKey) {
    return this.get(`issues/${issueIdOrKey}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-issue/
   */
  deleteIssue(issueIdOrKey) {
    return this.delete(`issues/${issueIdOrKey}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-comment-list/
   */
  getIssueComments(issueIdOrKey, params) {
    return this.get(`issues/${issueIdOrKey}/comments`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-comment/
   */
  postIssueComments(issueIdOrKey, params) {
    return this.post(`issues/${issueIdOrKey}/comments`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-comment/
   */
  getIssueCommentsCount(issueIdOrKey) {
    return this.get(`issues/${issueIdOrKey}/comments/count`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-comment/
   */
  getIssueComment(issueIdOrKey, commentId) {
    return this.get(`issues/${issueIdOrKey}/comments/${commentId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-comment/
   */
  deleteIssueComment(issueIdOrKey, commentId) {
    return this.delete(`issues/${issueIdOrKey}/comments/${commentId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-comment/
   */
  patchIssueComment(issueIdOrKey, commentId, params) {
    return this.patch(`issues/${issueIdOrKey}/comments/${commentId}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-comment-notifications/
   */
  getIssueCommentNotifications(issueIdOrKey, commentId) {
    return this.get(`issues/${issueIdOrKey}/comments/${commentId}/notifications`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-comment-notification/
   */
  postIssueCommentNotifications(issueIdOrKey, commentId, prams) {
    return this.post(`issues/${issueIdOrKey}/comments/${commentId}/notifications`, prams);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-issue-attachments/
   */
  getIssueAttachments(issueIdOrKey) {
    return this.get(`issues/${issueIdOrKey}/attachments`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-attachment/
   */
  getIssueAttachment(issueIdOrKey, attachmentId) {
    return this.download(`issues/${issueIdOrKey}/attachments/${attachmentId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-issue-attachment/
   */
  deleteIssueAttachment(issueIdOrKey, attachmentId) {
    return this.delete(`issues/${issueIdOrKey}/attachments/${attachmentId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-participant-list/
   */
  getIssueParticipants(issueIdOrKey) {
    return this.get(`issues/${issueIdOrKey}/participants`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-linked-shared-files/
   */
  getIssueSharedFiles(issueIdOrKey) {
    return this.get(`issues/${issueIdOrKey}/sharedFiles`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-issue/
   */
  linkIssueSharedFiles(issueIdOrKey, params) {
    return this.post(`issues/${issueIdOrKey}/sharedFiles`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-issue/
   */
  unlinkIssueSharedFile(issueIdOrKey, id) {
    return this.delete(`issues/${issueIdOrKey}/sharedFiles/${id}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-list/
   */
  getWikis(params) {
    return this.get(`wikis`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-wiki-page/
   */
  getWikisCount(projectIdOrKey) {
    return this.get(`wikis/count`, { projectIdOrKey });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-tag-list/
   */
  getWikisTags(projectIdOrKey) {
    return this.get(`wikis/tags`, { projectIdOrKey });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-wiki-page/
   */
  postWiki(params) {
    return this.post(`wikis`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page/
   */
  getWiki(wikiId) {
    return this.get(`wikis/${wikiId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-wiki-page/
   */
  patchWiki(wikiId, params) {
    return this.patch(`wikis/${wikiId}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-wiki-page/
   */
  deleteWiki(wikiId, mailNotify) {
    return this.delete(`wikis/${wikiId}`, { mailNotify });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-wiki-attachments/
   */
  getWikisAttachments(wikiId) {
    return this.get(`wikis/${wikiId}/attachments`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/attach-file-to-wiki/
   */
  postWikisAttachments(wikiId, attachmentId) {
    return this.post(`wikis/${wikiId}/attachments`, { attachmentId });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-attachment/
   */
  getWikiAttachment(wikiId, attachmentId) {
    return this.download(`wikis/${wikiId}/attachments/${attachmentId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-wiki-attachment/
   */
  deleteWikisAttachments(wikiId, attachmentId) {
    return this.delete(`wikis/${wikiId}/attachments/${attachmentId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files-on-wiki/
   */
  getWikisSharedFiles(wikiId) {
    return this.get(`wikis/${wikiId}/sharedFiles`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-wiki/
   */
  linkWikisSharedFiles(wikiId, fileId) {
    return this.post(`wikis/${wikiId}/sharedFiles`, { fileId });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-wiki/
   */
  unlinkWikisSharedFiles(wikiId, id) {
    return this.delete(`wikis/${wikiId}/sharedFiles/${id}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/get-document-list/
   */
  getDocuments(params) {
    return this.get("documents", params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/get-document-tree/
   */
  getDocumentTree(projectIdOrKey) {
    return this.get(`documents/tree`, { projectIdOrKey });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/get-document/
   */
  getDocument(documentId) {
    return this.get(`documents/${documentId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/get-document-attachments/
   */
  downloadDocumentAttachment(documentId, attachmentId) {
    return this.download(`documents/${documentId}/attachments/${attachmentId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-document/
   */
  addDocument(params) {
    return this.post("documents", params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-document/
   */
  deleteDocument(documentId) {
    return this.delete(`documents/${documentId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-history/
   */
  getWikisHistory(wikiId, params) {
    return this.get(`wikis/${wikiId}/history`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-star/
   */
  getWikisStars(wikiId) {
    return this.get(`wikis/${wikiId}/stars`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-star/
   */
  postStar(params) {
    return this.post("stars", params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-star/
   */
  removeStar(starId) {
    const endpoint = `stars/${starId}`;
    return this.delete(endpoint);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-notification/
   */
  getNotifications(params) {
    return this.get("notifications", params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-notification/
   */
  getNotificationsCount(params) {
    return this.get("notifications/count", params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/reset-unread-notification-count/
   */
  resetNotificationsMarkAsRead() {
    return this.post("notifications/markAsRead");
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/read-notification/
   */
  markAsReadNotification(id) {
    return this.post(`notifications/${id}/markAsRead`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-git-repositories/
   */
  getGitRepositories(projectIdOrKey) {
    return this.get(`projects/${projectIdOrKey}/git/repositories`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-git-repository/
   */
  getGitRepository(projectIdOrKey, repoIdOrName) {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-list/
   */
  getPullRequests(projectIdOrKey, repoIdOrName, params) {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-requests/
   */
  getPullRequestsCount(projectIdOrKey, repoIdOrName, params) {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/count`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-pull-request/
   */
  postPullRequest(projectIdOrKey, repoIdOrName, params) {
    return this.post(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-pull-request/
   */
  getPullRequest(projectIdOrKey, repoIdOrName, number) {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-pull-request/
   */
  patchPullRequest(projectIdOrKey, repoIdOrName, number, params) {
    return this.patch(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-comment/
   */
  getPullRequestComments(projectIdOrKey, repoIdOrName, number, params) {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-pull-request-comment/
   */
  postPullRequestComments(projectIdOrKey, repoIdOrName, number, params) {
    return this.post(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-request-comments/
   */
  getPullRequestCommentsCount(projectIdOrKey, repoIdOrName, number) {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments/count`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-pull-request-comment-information/
   */
  patchPullRequestComments(projectIdOrKey, repoIdOrName, number, commentId, params) {
    return this.patch(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/comments/${commentId}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-pull-request-attachment/
   */
  getPullRequestAttachments(projectIdOrKey, repoIdOrName, number) {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/download-pull-request-attachment/
   */
  getPullRequestAttachment(projectIdOrKey, repoIdOrName, number, attachmentId) {
    return this.download(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments/${attachmentId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-pull-request-attachments/
   */
  deletePullRequestAttachment(projectIdOrKey, repoIdOrName, number, attachmentId) {
    return this.get(`projects/${projectIdOrKey}/git/repositories/${repoIdOrName}/pullRequests/${number}/attachments/${attachmentId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-watching-list
   */
  getWatchingListItems(userId, params) {
    return this.get(`users/${userId}/watchings`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-watching
   */
  getWatchingListCount(userId, params) {
    return this.get(`users/${userId}/watchings/count`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-watching
   */
  getWatchingListItem(watchId) {
    return this.get(`watchings/${watchId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-watching
   */
  postWatchingListItem(params) {
    return this.post(`watchings`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-watching
   */
  patchWatchingListItem(watchId, note) {
    return this.patch(`watchings/${watchId}`, { note });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-watching
   */
  deletehWatchingListItem(watchId) {
    return this.delete(`watchings/${watchId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/mark-watching-as-read
   */
  resetWatchingListItemAsRead(watchId) {
    return this.post(`watchings/${watchId}/markAsRead`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-licence
   */
  getLicence() {
    return this.get(`space/licence`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-teams/
   */
  getTeams(params) {
    return this.get(`teams`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-team/
   */
  postTeam(params) {
    return this.post(`teams`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-team/
   */
  getTeam(teamId) {
    return this.get(`teams/${teamId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-team/
   */
  patchTeam(teamId, params) {
    return this.patch(`teams/${teamId}`, params);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-team/
   */
  deleteTeam(teamId) {
    return this.delete(`teams/${teamId}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-team-icon/
   */
  getTeamIcon(teamId) {
    return this.download(`teams/${teamId}/icon`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-team-list/
   */
  getProjectTeams(projectIdOrKey) {
    return this.get(`projects/${projectIdOrKey}/teams`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-team/
   */
  postProjectTeam(projectIdOrKey, teamId) {
    return this.post(`projects/${projectIdOrKey}/teams`, { teamId });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-team/
   */
  deleteProjectTeam(projectIdOrKey, teamId) {
    return this.delete(`projects/${projectIdOrKey}/teams`, { teamId });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-rate-limit/
   */
  getRateLimit() {
    return this.get("rateLimit");
  }
  download(path) {
    return this.request({ method: "GET", path }).then(this.parseFileData);
  }
  upload(path, params) {
    return this.request({ method: "POST", path, params }).then(this.parseJSON);
  }
  parseFileData(response) {
    return new Promise((resolve, reject) => {
      if (typeof window !== "undefined") {
        resolve({
          body: response.body,
          url: response.url,
          blob: () => response.blob()
        });
      } else {
        const disposition = response.headers.get("Content-Disposition");
        const filename = disposition ? disposition.substring(disposition.indexOf("''") + 2) : "";
        resolve({
          body: response.body,
          url: response.url,
          filename
        });
      }
    });
  }
};

// src/oauth2.ts
var OAuth2 = class {
  constructor(credentials, timeout) {
    this.credentials = credentials;
    this.timeout = timeout;
  }
  getAuthorizationURL(options) {
    const params = {
      client_id: this.credentials.clientId,
      response_type: "code",
      redirect_uri: options.redirectUri,
      state: options.state
    };
    return `https://${options.host}/OAuth2AccessRequest.action?` + Object.keys(params).map((key) => params[key] ? `${key}=${params[key]}` : "").filter((x) => x.length > 0).join("&");
  }
  getAccessToken(options) {
    return new Request({
      host: options.host,
      timeout: this.timeout
    }).post("oauth2/token", {
      grant_type: "authorization_code",
      code: options.code,
      client_id: this.credentials.clientId,
      client_secret: this.credentials.clientSecret,
      redirect_uri: options.redirectUri
    });
  }
  refreshAccessToken(options) {
    return new Request({
      host: options.host,
      timeout: this.timeout
    }).post("oauth2/token", {
      grant_type: "refresh_token",
      client_id: this.credentials.clientId,
      client_secret: this.credentials.clientSecret,
      refresh_token: options.refreshToken
    });
  }
};

// src/option.ts
var option_exports = {};
__export(option_exports, {
  Issue: () => Issue
});
var Issue;
((Issue2) => {
  let ParentChildType;
  ((ParentChildType2) => {
    ParentChildType2[ParentChildType2["All"] = 0] = "All";
    ParentChildType2[ParentChildType2["NotChild"] = 1] = "NotChild";
    ParentChildType2[ParentChildType2["Child"] = 2] = "Child";
    ParentChildType2[ParentChildType2["NotChildNotParent"] = 3] = "NotChildNotParent";
    ParentChildType2[ParentChildType2["Parent"] = 4] = "Parent";
  })(ParentChildType = Issue2.ParentChildType || (Issue2.ParentChildType = {}));
})(Issue || (Issue = {}));

// src/entity.ts
var entity_exports = {};

// src/types.ts
var types_exports = {};
__export(types_exports, {
  ActivityType: () => ActivityType,
  ClassicRoleType: () => ClassicRoleType,
  CustomFieldType: () => CustomFieldType,
  NormalRoleType: () => NormalRoleType
});
var ClassicRoleType = /* @__PURE__ */ ((ClassicRoleType2) => {
  ClassicRoleType2[ClassicRoleType2["Admin"] = 1] = "Admin";
  ClassicRoleType2[ClassicRoleType2["User"] = 2] = "User";
  ClassicRoleType2[ClassicRoleType2["Reporter"] = 3] = "Reporter";
  ClassicRoleType2[ClassicRoleType2["Viewer"] = 4] = "Viewer";
  ClassicRoleType2[ClassicRoleType2["GuestReporter"] = 5] = "GuestReporter";
  ClassicRoleType2[ClassicRoleType2["GuestViewer"] = 6] = "GuestViewer";
  return ClassicRoleType2;
})(ClassicRoleType || {});
var NormalRoleType = /* @__PURE__ */ ((NormalRoleType2) => {
  NormalRoleType2[NormalRoleType2["Admin"] = 1] = "Admin";
  NormalRoleType2[NormalRoleType2["MemberOrGuest"] = 2] = "MemberOrGuest";
  NormalRoleType2[NormalRoleType2["MemberOrGuestForAddIssues"] = 3] = "MemberOrGuestForAddIssues";
  NormalRoleType2[NormalRoleType2["MemberOrGuestForViewIssues"] = 4] = "MemberOrGuestForViewIssues";
  return NormalRoleType2;
})(NormalRoleType || {});
var ActivityType = /* @__PURE__ */ ((ActivityType2) => {
  ActivityType2[ActivityType2["Undefined"] = -1] = "Undefined";
  ActivityType2[ActivityType2["IssueCreated"] = 1] = "IssueCreated";
  ActivityType2[ActivityType2["IssueUpdated"] = 2] = "IssueUpdated";
  ActivityType2[ActivityType2["IssueCommented"] = 3] = "IssueCommented";
  ActivityType2[ActivityType2["IssueDeleted"] = 4] = "IssueDeleted";
  ActivityType2[ActivityType2["WikiCreated"] = 5] = "WikiCreated";
  ActivityType2[ActivityType2["WikiUpdated"] = 6] = "WikiUpdated";
  ActivityType2[ActivityType2["WikiDeleted"] = 7] = "WikiDeleted";
  ActivityType2[ActivityType2["FileAdded"] = 8] = "FileAdded";
  ActivityType2[ActivityType2["FileUpdated"] = 9] = "FileUpdated";
  ActivityType2[ActivityType2["FileDeleted"] = 10] = "FileDeleted";
  ActivityType2[ActivityType2["SvnCommitted"] = 11] = "SvnCommitted";
  ActivityType2[ActivityType2["GitPushed"] = 12] = "GitPushed";
  ActivityType2[ActivityType2["GitRepositoryCreated"] = 13] = "GitRepositoryCreated";
  ActivityType2[ActivityType2["IssueMultiUpdated"] = 14] = "IssueMultiUpdated";
  ActivityType2[ActivityType2["ProjectUserAdded"] = 15] = "ProjectUserAdded";
  ActivityType2[ActivityType2["ProjectUserRemoved"] = 16] = "ProjectUserRemoved";
  ActivityType2[ActivityType2["NotifyAdded"] = 17] = "NotifyAdded";
  ActivityType2[ActivityType2["PullRequestAdded"] = 18] = "PullRequestAdded";
  ActivityType2[ActivityType2["PullRequestUpdated"] = 19] = "PullRequestUpdated";
  ActivityType2[ActivityType2["PullRequestCommented"] = 20] = "PullRequestCommented";
  ActivityType2[ActivityType2["PullRequestMerged"] = 21] = "PullRequestMerged";
  ActivityType2[ActivityType2["MilestoneCreated"] = 22] = "MilestoneCreated";
  ActivityType2[ActivityType2["MilestoneUpdated"] = 23] = "MilestoneUpdated";
  ActivityType2[ActivityType2["MilestoneDeleted"] = 24] = "MilestoneDeleted";
  ActivityType2[ActivityType2["ProjectGroupAdded"] = 25] = "ProjectGroupAdded";
  ActivityType2[ActivityType2["ProjectGroupDeleted"] = 26] = "ProjectGroupDeleted";
  return ActivityType2;
})(ActivityType || {});
var CustomFieldType = /* @__PURE__ */ ((CustomFieldType2) => {
  CustomFieldType2[CustomFieldType2["Text"] = 1] = "Text";
  CustomFieldType2[CustomFieldType2["TextArea"] = 2] = "TextArea";
  CustomFieldType2[CustomFieldType2["Numeric"] = 3] = "Numeric";
  CustomFieldType2[CustomFieldType2["Date"] = 4] = "Date";
  CustomFieldType2[CustomFieldType2["SingleList"] = 5] = "SingleList";
  CustomFieldType2[CustomFieldType2["MultipleList"] = 6] = "MultipleList";
  CustomFieldType2[CustomFieldType2["CheckBox"] = 7] = "CheckBox";
  CustomFieldType2[CustomFieldType2["Radio"] = 8] = "Radio";
  return CustomFieldType2;
})(CustomFieldType || {});
export {
  Backlog,
  entity_exports as Entity,
  error_exports as Error,
  OAuth2,
  option_exports as Option,
  types_exports as Types
};
