import * as S from "qs";
class a extends Error {
  constructor(t, e, r) {
    super(e.statusText), this._name = t, this._url = e.url, this._status = e.status, this._body = r, this._response = e;
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
}
class p extends a {
  constructor(t, e) {
    super("BacklogApiError", t, e);
  }
}
class $ extends a {
  constructor(t, e) {
    super("BacklogAuthError", t, e);
  }
}
class j extends a {
  constructor(t) {
    super("UnexpectedError", t);
  }
}
const b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BacklogApiError: p,
  BacklogAuthError: $,
  BacklogError: a,
  UnexpectedError: j
}, Symbol.toStringTag, { value: "Module" }));
class h {
  constructor(t) {
    this.configure = t;
  }
  get(t, e) {
    return this.request({ method: "GET", path: t, params: e }).then(this.parseJSON);
  }
  post(t, e) {
    return this.request({ method: "POST", path: t, params: e }).then(this.parseJSON);
  }
  put(t, e) {
    return this.request({ method: "PUT", path: t, params: e }).then(this.parseJSON);
  }
  patch(t, e) {
    return this.request({ method: "PATCH", path: t, params: e }).then(this.parseJSON);
  }
  delete(t, e) {
    return this.request({ method: "DELETE", path: t, params: e }).then(this.parseJSON);
  }
  request(t) {
    const { method: e, path: r, params: i = {} } = t, { apiKey: o, accessToken: n, timeout: d } = this.configure, g = o ? { apiKey: o } : {}, u = { method: e, headers: {} };
    d && (u.timeout = d), !o && n && (u.headers.Authorization = "Bearer " + n), typeof window < "u" && (u.mode = "cors"), e !== "GET" ? i instanceof FormData ? u.body = i : (u.headers["Content-type"] = "application/x-www-form-urlencoded", u.body = this.toQueryString(i)) : Object.keys(i).forEach((m) => g[m] = i[m]);
    const l = this.toQueryString(g), I = `${this.restBaseURL}/${r}` + (l.length > 0 ? `?${l}` : "");
    return fetch(I, u).then(this.checkStatus);
  }
  checkStatus(t) {
    return new Promise((e, r) => {
      200 <= t.status && t.status < 300 ? e(t) : t.json().then((i) => {
        t.status === 401 ? r(new $(t, i)) : r(new p(t, i));
      }).catch((i) => r(new j(t)));
    });
  }
  parseJSON(t) {
    return t.status === 204 || t.headers.get("Content-Length") === "0" ? Promise.resolve(void 0) : t.json();
  }
  toQueryString(t) {
    const e = {};
    return Object.keys(t).forEach((r) => {
      const i = t[r];
      r.startsWith("customField_") && Array.isArray(i) ? i.forEach((o, n) => {
        e[`${r}[${n}]`] = o;
      }) : e[r] = i;
    }), S.stringify(e, { arrayFormat: "brackets" });
  }
  get webAppBaseURL() {
    return `https://${this.configure.host}`;
  }
  get restBaseURL() {
    return `${this.webAppBaseURL}/api/v2`;
  }
}
class U extends h {
  constructor(t) {
    super(t);
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
  getSpaceActivities(t) {
    return this.get("space/activities", t);
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
  putSpaceNotification(t) {
    return this.put("space/notification", t);
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
  postSpaceAttachment(t) {
    return this.upload("space/attachment", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user-list/
   */
  getUsers() {
    return this.get("users");
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user/
   */
  getUser(t) {
    return this.get(`users/${t}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-user/
   */
  postUser(t) {
    return this.post("users", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-user/
   */
  patchUser(t, e) {
    return this.patch(`users/${t}`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-user/
   */
  deleteUser(t) {
    return this.delete(`users/${t}`);
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
  getUserIcon(t) {
    return this.download(`users/${t}/icon`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-user-recent-updates/
   */
  getUserActivities(t, e) {
    return this.get(`users/${t}/activities`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-received-star-list/
   */
  getUserStars(t, e) {
    return this.get(`users/${t}/stars`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-user-received-stars/
   */
  getUserStarsCount(t, e) {
    return this.get(`users/${t}/stars/count`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-issues/
   */
  getRecentlyViewedIssues(t) {
    return this.get("users/myself/recentlyViewedIssues", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-projects/
   */
  getRecentlyViewedProjects(t) {
    return this.get("users/myself/recentlyViewedProjects", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-wikis/
   */
  getRecentlyViewedWikis(t) {
    return this.get("users/myself/recentlyViewedWikis", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-status-list-of-project/
   */
  getProjectStatuses(t) {
    return this.get(`projects/${t}/statuses`);
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
  getProjects(t) {
    return this.get("projects", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project/
   */
  postProject(t) {
    return this.post("projects", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project/
   */
  getProject(t) {
    return this.get(`projects/${t}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-project/
   */
  patchProject(t, e) {
    return this.patch(`projects/${t}`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project/
   */
  deleteProject(t) {
    return this.delete(`projects/${t}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-icon/
   */
  getProjectIcon(t) {
    return this.download(`projects/${t}/image`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-recent-updates/
   */
  getProjectActivities(t, e) {
    return this.get(`projects/${t}/activities`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-user/
   */
  postProjectUser(t, e) {
    return this.post(`projects/${t}/users`, { userId: e });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-user-list/
   */
  getProjectUsers(t) {
    return this.get(`projects/${t}/users`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-user/
   */
  deleteProjectUsers(t, e) {
    return this.delete(`projects/${t}/users`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-administrator/
   */
  postProjectAdministrators(t, e) {
    return this.post(`projects/${t}/administrators`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-project-administrators/
   */
  getProjectAdministrators(t) {
    return this.get(`projects/${t}/administrators`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-administrator/
   */
  deleteProjectAdministrators(t, e) {
    return this.delete(`projects/${t}/administrators`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-status/
   */
  postProjectStatus(t, e) {
    return this.post(`projects/${t}/statuses`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-status/
   */
  patchProjectStatus(t, e, r) {
    return this.patch(`projects/${t}/statuses/${e}`, r);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-status/
   */
  deleteProjectStatus(t, e, r) {
    return this.delete(`projects/${t}/statuses/${e}`, { substituteStatusId: r });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-order-of-status/
   */
  patchProjectStatusOrder(t, e) {
    return this.patch(`projects/${t}/statuses/updateDisplayOrder`, { statusId: e });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-type-list/
   */
  getIssueTypes(t) {
    return this.get(`projects/${t}/issueTypes`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-issue-type/
   */
  postIssueType(t, e) {
    return this.post(`projects/${t}/issueTypes`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-issue-type/
   */
  patchIssueType(t, e, r) {
    return this.patch(`projects/${t}/issueTypes/${e}`, r);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-issue-type/
   */
  deleteIssueType(t, e, r) {
    return this.delete(`projects/${t}/issueTypes/${e}`, r);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-category-list/
   */
  getCategories(t) {
    return this.get(`projects/${t}/categories`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-category/
   */
  postCategories(t, e) {
    return this.post(`projects/${t}/categories`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-category/
   */
  patchCategories(t, e, r) {
    return this.patch(`projects/${t}/categories/${e}`, r);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-category/
   */
  deleteCategories(t, e) {
    return this.delete(`projects/${t}/categories/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-version-milestone-list/
   */
  getVersions(t) {
    return this.get(`projects/${t}/versions`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-version-milestone/
   */
  postVersions(t, e) {
    return this.post(`projects/${t}/versions`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-version-milestone/
   */
  patchVersions(t, e, r) {
    return this.patch(`projects/${t}/versions/${e}`, r);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-version/
   */
  deleteVersions(t, e) {
    return this.delete(`projects/${t}/versions/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-custom-field-list/
   */
  getCustomFields(t) {
    return this.get(`projects/${t}/customFields`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-custom-field/
   */
  postCustomField(t, e) {
    return this.post(`projects/${t}/customFields`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-custom-field/
   */
  patchCustomField(t, e, r) {
    return this.patch(`projects/${t}/customFields/${e}`, r);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-custom-field/
   */
  deleteCustomField(t, e) {
    return this.delete(`projects/${t}/customFields/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-list-item-for-list-type-custom-field/
   */
  postCustomFieldItem(t, e, r) {
    return this.post(`projects/${t}/customFields/${e}/items`, r);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-list-item-for-list-type-custom-field/
   */
  patchCustomFieldItem(t, e, r, i) {
    return this.patch(`projects/${t}/customFields/${e}/items/${r}`, i);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-list-item-for-list-type-custom-field/
   */
  deleteCustomFieldItem(t, e, r) {
    return this.delete(`projects/${t}/customFields/${e}/items/${r}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files/
   */
  getSharedFiles(t, e, r) {
    return this.get(`projects/${t}/files/metadata/${e}`, r);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-file/
   */
  getSharedFile(t, e) {
    return this.download(`projects/${t}/files/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-disk-usage/
   */
  getProjectsDiskUsage(t) {
    return this.get(`projects/${t}/diskUsage`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-webhooks/
   */
  getWebhooks(t) {
    return this.get(`projects/${t}/webhooks`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-webhook/
   */
  postWebhook(t, e) {
    return this.post(`projects/${t}/webhooks`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-webhook/
   */
  getWebhook(t, e) {
    return this.get(`projects/${t}/webhooks/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-webhook/
   */
  patchWebhook(t, e, r) {
    return this.patch(`projects/${t}/webhooks/${e}`, r);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-webhook/
   */
  deleteWebhook(t, e) {
    return this.delete(`projects/${t}/webhooks/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-list/
   */
  getIssues(t) {
    return this.get("issues", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-issue/
   */
  getIssuesCount(t) {
    return this.get("issues/count", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-issue/
   */
  postIssue(t) {
    return this.post("issues", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-issue/
   */
  patchIssue(t, e) {
    return this.patch(`issues/${t}`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue/
   */
  getIssue(t) {
    return this.get(`issues/${t}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-issue/
   */
  deleteIssue(t) {
    return this.delete(`issues/${t}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-comment-list/
   */
  getIssueComments(t, e) {
    return this.get(`issues/${t}/comments`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-comment/
   */
  postIssueComments(t, e) {
    return this.post(`issues/${t}/comments`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-comment/
   */
  getIssueCommentsCount(t) {
    return this.get(`issues/${t}/comments/count`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-comment/
   */
  getIssueComment(t, e) {
    return this.get(`issues/${t}/comments/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-comment/
   */
  deleteIssueComment(t, e) {
    return this.delete(`issues/${t}/comments/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-comment/
   */
  patchIssueComment(t, e, r) {
    return this.patch(`issues/${t}/comments/${e}`, r);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-comment-notifications/
   */
  getIssueCommentNotifications(t, e) {
    return this.get(`issues/${t}/comments/${e}/notifications`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-comment-notification/
   */
  postIssueCommentNotifications(t, e, r) {
    return this.post(`issues/${t}/comments/${e}/notifications`, r);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-issue-attachments/
   */
  getIssueAttachments(t) {
    return this.get(`issues/${t}/attachments`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-attachment/
   */
  getIssueAttachment(t, e) {
    return this.download(`issues/${t}/attachments/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-issue-attachment/
   */
  deleteIssueAttachment(t, e) {
    return this.delete(`issues/${t}/attachments/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-issue-participant-list/
   */
  getIssueParticipants(t) {
    return this.get(`issues/${t}/participants`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-linked-shared-files/
   */
  getIssueSharedFiles(t) {
    return this.get(`issues/${t}/sharedFiles`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-issue/
   */
  linkIssueSharedFiles(t, e) {
    return this.post(`issues/${t}/sharedFiles`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-issue/
   */
  unlinkIssueSharedFile(t, e) {
    return this.delete(`issues/${t}/sharedFiles/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-list/
   */
  getWikis(t) {
    return this.get("wikis", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-wiki-page/
   */
  getWikisCount(t) {
    return this.get("wikis/count", { projectIdOrKey: t });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-tag-list/
   */
  getWikisTags(t) {
    return this.get("wikis/tags", { projectIdOrKey: t });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-wiki-page/
   */
  postWiki(t) {
    return this.post("wikis", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page/
   */
  getWiki(t) {
    return this.get(`wikis/${t}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-wiki-page/
   */
  patchWiki(t, e) {
    return this.patch(`wikis/${t}`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-wiki-page/
   */
  deleteWiki(t, e) {
    return this.delete(`wikis/${t}`, { mailNotify: e });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-wiki-attachments/
   */
  getWikisAttachments(t) {
    return this.get(`wikis/${t}/attachments`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/attach-file-to-wiki/
   */
  postWikisAttachments(t, e) {
    return this.post(`wikis/${t}/attachments`, { attachmentId: e });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-attachment/
   */
  getWikiAttachment(t, e) {
    return this.download(`wikis/${t}/attachments/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-wiki-attachment/
   */
  deleteWikisAttachments(t, e) {
    return this.delete(`wikis/${t}/attachments/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files-on-wiki/
   */
  getWikisSharedFiles(t) {
    return this.get(`wikis/${t}/sharedFiles`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-wiki/
   */
  linkWikisSharedFiles(t, e) {
    return this.post(`wikis/${t}/sharedFiles`, { fileId: e });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-wiki/
   */
  unlinkWikisSharedFiles(t, e) {
    return this.delete(`wikis/${t}/sharedFiles/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/get-document-list/
   */
  getDocuments(t) {
    return this.get("documents", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/get-document-tree/
   */
  getDocumentTree(t) {
    return this.get("documents/tree", { projectIdOrKey: t });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/get-document/
   */
  getDocument(t) {
    return this.get(`documents/${t}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/get-document-attachments/
   */
  downloadDocumentAttachment(t, e) {
    return this.download(`documents/${t}/attachments/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-document/
   */
  addDocument(t) {
    return this.post("documents", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-document/
   */
  deleteDocument(t) {
    return this.delete(`documents/${t}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-history/
   */
  getWikisHistory(t, e) {
    return this.get(`wikis/${t}/history`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-star/
   */
  getWikisStars(t) {
    return this.get(`wikis/${t}/stars`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-star/
   */
  postStar(t) {
    return this.post("stars", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/remove-star/
   */
  removeStar(t) {
    const e = `stars/${t}`;
    return this.delete(e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-notification/
   */
  getNotifications(t) {
    return this.get("notifications", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-notification/
   */
  getNotificationsCount(t) {
    return this.get("notifications/count", t);
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
  markAsReadNotification(t) {
    return this.post(`notifications/${t}/markAsRead`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-git-repositories/
   */
  getGitRepositories(t) {
    return this.get(`projects/${t}/git/repositories`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-git-repository/
   */
  getGitRepository(t, e) {
    return this.get(`projects/${t}/git/repositories/${e}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-list/
   */
  getPullRequests(t, e, r) {
    return this.get(`projects/${t}/git/repositories/${e}/pullRequests`, r);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-requests/
   */
  getPullRequestsCount(t, e, r) {
    return this.get(`projects/${t}/git/repositories/${e}/pullRequests/count`, r);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-pull-request/
   */
  postPullRequest(t, e, r) {
    return this.post(`projects/${t}/git/repositories/${e}/pullRequests`, r);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-pull-request/
   */
  getPullRequest(t, e, r) {
    return this.get(`projects/${t}/git/repositories/${e}/pullRequests/${r}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-pull-request/
   */
  patchPullRequest(t, e, r, i) {
    return this.patch(`projects/${t}/git/repositories/${e}/pullRequests/${r}`, i);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-comment/
   */
  getPullRequestComments(t, e, r, i) {
    return this.get(`projects/${t}/git/repositories/${e}/pullRequests/${r}/comments`, i);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-pull-request-comment/
   */
  postPullRequestComments(t, e, r, i) {
    return this.post(`projects/${t}/git/repositories/${e}/pullRequests/${r}/comments`, i);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-request-comments/
   */
  getPullRequestCommentsCount(t, e, r) {
    return this.get(`projects/${t}/git/repositories/${e}/pullRequests/${r}/comments/count`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-pull-request-comment-information/
   */
  patchPullRequestComments(t, e, r, i, o) {
    return this.patch(`projects/${t}/git/repositories/${e}/pullRequests/${r}/comments/${i}`, o);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-pull-request-attachment/
   */
  getPullRequestAttachments(t, e, r) {
    return this.get(`projects/${t}/git/repositories/${e}/pullRequests/${r}/attachments`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/download-pull-request-attachment/
   */
  getPullRequestAttachment(t, e, r, i) {
    return this.download(`projects/${t}/git/repositories/${e}/pullRequests/${r}/attachments/${i}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-pull-request-attachments/
   */
  deletePullRequestAttachment(t, e, r, i) {
    return this.get(`projects/${t}/git/repositories/${e}/pullRequests/${r}/attachments/${i}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-watching-list
   */
  getWatchingListItems(t, e) {
    return this.get(`users/${t}/watchings`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/count-watching
   */
  getWatchingListCount(t, e) {
    return this.get(`users/${t}/watchings/count`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-watching
   */
  getWatchingListItem(t) {
    return this.get(`watchings/${t}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-watching
   */
  postWatchingListItem(t) {
    return this.post("watchings", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-watching
   */
  patchWatchingListItem(t, e) {
    return this.patch(`watchings/${t}`, { note: e });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-watching
   */
  deletehWatchingListItem(t) {
    return this.delete(`watchings/${t}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/mark-watching-as-read
   */
  resetWatchingListItemAsRead(t) {
    return this.post(`watchings/${t}/markAsRead`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-licence
   */
  getLicence() {
    return this.get("space/licence");
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-list-of-teams/
   */
  getTeams(t) {
    return this.get("teams", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-team/
   */
  postTeam(t) {
    return this.post("teams", t);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-team/
   */
  getTeam(t) {
    return this.get(`teams/${t}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/update-team/
   */
  patchTeam(t, e) {
    return this.patch(`teams/${t}`, e);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-team/
   */
  deleteTeam(t) {
    return this.delete(`teams/${t}`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-team-icon/
   */
  getTeamIcon(t) {
    return this.download(`teams/${t}/icon`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-project-team-list/
   */
  getProjectTeams(t) {
    return this.get(`projects/${t}/teams`);
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/add-project-team/
   */
  postProjectTeam(t, e) {
    return this.post(`projects/${t}/teams`, { teamId: e });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/delete-project-team/
   */
  deleteProjectTeam(t, e) {
    return this.delete(`projects/${t}/teams`, { teamId: e });
  }
  /**
   * https://developer.nulab.com/docs/backlog/api/2/get-rate-limit/
   */
  getRateLimit() {
    return this.get("rateLimit");
  }
  download(t) {
    return this.request({ method: "GET", path: t }).then(this.parseFileData);
  }
  upload(t, e) {
    return this.request({ method: "POST", path: t, params: e }).then(this.parseJSON);
  }
  parseFileData(t) {
    return new Promise((e, r) => {
      if (typeof window < "u")
        e({
          body: t.body,
          url: t.url,
          blob: () => t.blob()
        });
      else {
        const i = t.headers.get("Content-Disposition"), o = i ? i.substring(i.indexOf("''") + 2) : "";
        e({
          body: t.body,
          url: t.url,
          filename: o
        });
      }
    });
  }
}
class q {
  constructor(t, e) {
    this.credentials = t, this.timeout = e;
  }
  getAuthorizationURL(t) {
    const e = {
      client_id: this.credentials.clientId,
      response_type: "code",
      redirect_uri: t.redirectUri,
      state: t.state
    };
    return `https://${t.host}/OAuth2AccessRequest.action?` + Object.keys(e).map((r) => e[r] ? `${r}=${e[r]}` : "").filter((r) => r.length > 0).join("&");
  }
  getAccessToken(t) {
    return new h({
      host: t.host,
      timeout: this.timeout
    }).post("oauth2/token", {
      grant_type: "authorization_code",
      code: t.code,
      client_id: this.credentials.clientId,
      client_secret: this.credentials.clientSecret,
      redirect_uri: t.redirectUri
    });
  }
  refreshAccessToken(t) {
    return new h({
      host: t.host,
      timeout: this.timeout
    }).post("oauth2/token", {
      grant_type: "refresh_token",
      client_id: this.credentials.clientId,
      client_secret: this.credentials.clientSecret,
      refresh_token: t.refreshToken
    });
  }
}
var c;
((s) => {
  ((t) => {
    t[t.All = 0] = "All", t[t.NotChild = 1] = "NotChild", t[t.Child = 2] = "Child", t[t.NotChildNotParent = 3] = "NotChildNotParent", t[t.Parent = 4] = "Parent";
  })(s.ParentChildType || (s.ParentChildType = {}));
})(c || (c = {}));
const R = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get Issue() {
    return c;
  }
}, Symbol.toStringTag, { value: "Module" })), _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var k = /* @__PURE__ */ ((s) => (s[s.Admin = 1] = "Admin", s[s.User = 2] = "User", s[s.Reporter = 3] = "Reporter", s[s.Viewer = 4] = "Viewer", s[s.GuestReporter = 5] = "GuestReporter", s[s.GuestViewer = 6] = "GuestViewer", s))(k || {}), f = /* @__PURE__ */ ((s) => (s[s.Admin = 1] = "Admin", s[s.MemberOrGuest = 2] = "MemberOrGuest", s[s.MemberOrGuestForAddIssues = 3] = "MemberOrGuestForAddIssues", s[s.MemberOrGuestForViewIssues = 4] = "MemberOrGuestForViewIssues", s))(f || {}), w = /* @__PURE__ */ ((s) => (s[s.Undefined = -1] = "Undefined", s[s.IssueCreated = 1] = "IssueCreated", s[s.IssueUpdated = 2] = "IssueUpdated", s[s.IssueCommented = 3] = "IssueCommented", s[s.IssueDeleted = 4] = "IssueDeleted", s[s.WikiCreated = 5] = "WikiCreated", s[s.WikiUpdated = 6] = "WikiUpdated", s[s.WikiDeleted = 7] = "WikiDeleted", s[s.FileAdded = 8] = "FileAdded", s[s.FileUpdated = 9] = "FileUpdated", s[s.FileDeleted = 10] = "FileDeleted", s[s.SvnCommitted = 11] = "SvnCommitted", s[s.GitPushed = 12] = "GitPushed", s[s.GitRepositoryCreated = 13] = "GitRepositoryCreated", s[s.IssueMultiUpdated = 14] = "IssueMultiUpdated", s[s.ProjectUserAdded = 15] = "ProjectUserAdded", s[s.ProjectUserRemoved = 16] = "ProjectUserRemoved", s[s.NotifyAdded = 17] = "NotifyAdded", s[s.PullRequestAdded = 18] = "PullRequestAdded", s[s.PullRequestUpdated = 19] = "PullRequestUpdated", s[s.PullRequestCommented = 20] = "PullRequestCommented", s[s.PullRequestMerged = 21] = "PullRequestMerged", s[s.MilestoneCreated = 22] = "MilestoneCreated", s[s.MilestoneUpdated = 23] = "MilestoneUpdated", s[s.MilestoneDeleted = 24] = "MilestoneDeleted", s[s.ProjectGroupAdded = 25] = "ProjectGroupAdded", s[s.ProjectGroupDeleted = 26] = "ProjectGroupDeleted", s))(w || {}), P = /* @__PURE__ */ ((s) => (s[s.Text = 1] = "Text", s[s.TextArea = 2] = "TextArea", s[s.Numeric = 3] = "Numeric", s[s.Date = 4] = "Date", s[s.SingleList = 5] = "SingleList", s[s.MultipleList = 6] = "MultipleList", s[s.CheckBox = 7] = "CheckBox", s[s.Radio = 8] = "Radio", s))(P || {});
const W = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActivityType: w,
  ClassicRoleType: k,
  CustomFieldType: P,
  NormalRoleType: f
}, Symbol.toStringTag, { value: "Module" }));
export {
  U as Backlog,
  _ as Entity,
  b as Error,
  q as OAuth2,
  R as Option,
  W as Types
};
