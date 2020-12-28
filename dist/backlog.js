(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Backlog = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
var Backlog = (function (_super) {
    __extends(Backlog, _super);
    function Backlog(configure) {
        return _super.call(this, configure) || this;
    }
    Backlog.prototype.getSpace = function () {
        return this.get('space');
    };
    Backlog.prototype.getSpaceActivities = function (params) {
        return this.get('space/activities', params);
    };
    Backlog.prototype.getSpaceIcon = function () {
        return this.download('space/image');
    };
    Backlog.prototype.getSpaceNotification = function () {
        return this.get('space/notification');
    };
    Backlog.prototype.putSpaceNotification = function (params) {
        return this.put('space/notification', params);
    };
    Backlog.prototype.getSpaceDiskUsage = function () {
        return this.get('space/diskUsage');
    };
    Backlog.prototype.postSpaceAttachment = function (form) {
        return this.upload("space/attachment", form);
    };
    Backlog.prototype.getUsers = function () {
        return this.get("users");
    };
    Backlog.prototype.getUser = function (userId) {
        return this.get("users/" + userId);
    };
    Backlog.prototype.postUser = function (params) {
        return this.post("users", params);
    };
    Backlog.prototype.patchUser = function (userId, params) {
        return this.patch("users/" + userId, params);
    };
    Backlog.prototype.deleteUser = function (userId) {
        return this.delete("users/" + userId);
    };
    Backlog.prototype.getMyself = function () {
        return this.get('users/myself');
    };
    Backlog.prototype.getUserIcon = function (userId) {
        return this.download("users/" + userId + "/icon");
    };
    Backlog.prototype.getUserActivities = function (userId, params) {
        return this.get("users/" + userId + "/activities", params);
    };
    Backlog.prototype.getUserStars = function (userId, params) {
        return this.get("users/" + userId + "/stars", params);
    };
    Backlog.prototype.getUserStarsCount = function (userId, params) {
        return this.get("users/" + userId + "/stars/count", params);
    };
    Backlog.prototype.getRecentlyViewedIssues = function (params) {
        return this.get('users/myself/recentlyViewedIssues', params);
    };
    Backlog.prototype.getRecentlyViewedProjects = function (params) {
        return this.get('users/myself/recentlyViewedProjects', params);
    };
    Backlog.prototype.getRecentlyViewedWikis = function (params) {
        return this.get('users/myself/recentlyViewedWikis', params);
    };
    Backlog.prototype.getGroups = function (params) {
        return this.get('groups', params);
    };
    Backlog.prototype.postGroups = function (params) {
        return this.post('groups', params);
    };
    Backlog.prototype.getGroup = function (groupId) {
        return this.get("groups/" + groupId);
    };
    Backlog.prototype.patchGroup = function (groupId, params) {
        return this.patch("groups/" + groupId, params);
    };
    Backlog.prototype.deleteGroup = function (groupId) {
        return this.delete("groups/" + groupId);
    };
    Backlog.prototype.getStatuses = function () {
        return this.get('statuses');
    };
    Backlog.prototype.getResolutions = function () {
        return this.get('resolutions');
    };
    Backlog.prototype.getPriorities = function () {
        return this.get('priorities');
    };
    Backlog.prototype.getProjects = function (params) {
        return this.get('projects', params);
    };
    Backlog.prototype.postProject = function (params) {
        return this.post('projects', params);
    };
    Backlog.prototype.getProject = function (projectIdOrKey) {
        return this.get("projects/" + projectIdOrKey);
    };
    Backlog.prototype.patchProject = function (projectIdOrKey, params) {
        return this.patch("projects/" + projectIdOrKey, params);
    };
    Backlog.prototype.deleteProject = function (projectIdOrKey) {
        return this.delete("projects/" + projectIdOrKey);
    };
    Backlog.prototype.getProjectIcon = function (projectIdOrKey) {
        return this.download("projects/" + projectIdOrKey + "/image");
    };
    Backlog.prototype.getProjectActivities = function (projectIdOrKey, params) {
        return this.get("projects/" + projectIdOrKey + "/activities", params);
    };
    Backlog.prototype.postProjectUser = function (projectIdOrKey, userId) {
        return this.post("projects/" + projectIdOrKey + "/users", { userId: userId });
    };
    Backlog.prototype.getProjectUsers = function (projectIdOrKey) {
        return this.get("projects/" + projectIdOrKey + "/users");
    };
    Backlog.prototype.deleteProjectUsers = function (projectIdOrKey, params) {
        return this.delete("projects/" + projectIdOrKey + "/users", params);
    };
    Backlog.prototype.postProjectAdministrators = function (projectIdOrKey, params) {
        return this.post("projects/" + projectIdOrKey + "/administrators", params);
    };
    Backlog.prototype.getProjectAdministrators = function (projectIdOrKey) {
        return this.get("projects/" + projectIdOrKey + "/administrators");
    };
    Backlog.prototype.deleteProjectAdministrators = function (projectIdOrKey, params) {
        return this.delete("projects/" + projectIdOrKey + "/administrators", params);
    };
    Backlog.prototype.getIssueTypes = function (projectIdOrKey) {
        return this.get("projects/" + projectIdOrKey + "/issueTypes");
    };
    Backlog.prototype.postIssueType = function (projectIdOrKey, params) {
        return this.post("projects/" + projectIdOrKey + "/issueTypes", params);
    };
    Backlog.prototype.patchIssueType = function (projectIdOrKey, id, params) {
        return this.patch("projects/" + projectIdOrKey + "/issueTypes/" + id, params);
    };
    Backlog.prototype.deleteIssueType = function (projectIdOrKey, id, params) {
        return this.delete("projects/" + projectIdOrKey + "/issueTypes/" + id, params);
    };
    Backlog.prototype.getCategories = function (projectIdOrKey) {
        return this.get("projects/" + projectIdOrKey + "/categories");
    };
    Backlog.prototype.postCategories = function (projectIdOrKey, params) {
        return this.post("projects/" + projectIdOrKey + "/categories", params);
    };
    Backlog.prototype.patchCategories = function (projectIdOrKey, id, params) {
        return this.patch("projects/" + projectIdOrKey + "/categories/" + id, params);
    };
    Backlog.prototype.deleteCategories = function (projectIdOrKey, id) {
        return this.delete("projects/" + projectIdOrKey + "/categories/" + id);
    };
    Backlog.prototype.getVersions = function (projectIdOrKey) {
        return this.get("projects/" + projectIdOrKey + "/versions");
    };
    Backlog.prototype.postVersions = function (projectIdOrKey, params) {
        return this.post("projects/" + projectIdOrKey + "/versions", params);
    };
    Backlog.prototype.patchVersions = function (projectIdOrKey, id, params) {
        return this.patch("projects/" + projectIdOrKey + "/versions/" + id, params);
    };
    Backlog.prototype.deleteVersions = function (projectIdOrKey, id) {
        return this.delete("projects/" + projectIdOrKey + "/versions/" + id);
    };
    Backlog.prototype.getCustomFields = function (projectIdOrKey) {
        return this.get("projects/" + projectIdOrKey + "/customFields");
    };
    Backlog.prototype.postCustomField = function (projectIdOrKey, params) {
        return this.post("projects/" + projectIdOrKey + "/customFields", params);
    };
    Backlog.prototype.patchCustomField = function (projectIdOrKey, id, params) {
        return this.patch("projects/" + projectIdOrKey + "/customFields/" + id, params);
    };
    Backlog.prototype.deleteCustomField = function (projectIdOrKey, id) {
        return this.delete("projects/" + projectIdOrKey + "/customFields/" + id);
    };
    Backlog.prototype.postCustomFieldItem = function (projectIdOrKey, id, params) {
        return this.post("projects/" + projectIdOrKey + "/customFields/" + id + "/items", params);
    };
    Backlog.prototype.patchCustomFieldItem = function (projectIdOrKey, id, itemId, params) {
        return this.patch("projects/" + projectIdOrKey + "/customFields/" + id + "/items/" + itemId, params);
    };
    Backlog.prototype.deleteCustomFieldItem = function (projectIdOrKey, id, itemId) {
        return this.delete("projects/" + projectIdOrKey + "/customFields/" + id + "/items/" + itemId);
    };
    Backlog.prototype.getSharedFiles = function (projectIdOrKey, path, params) {
        return this.get("projects/" + projectIdOrKey + "/files/metadata/" + path, params);
    };
    Backlog.prototype.getSharedFile = function (projectIdOrKey, sharedFileId) {
        return this.download("projects/" + projectIdOrKey + "/files/" + sharedFileId);
    };
    Backlog.prototype.getProjectsDiskUsage = function (projectIdOrKey) {
        return this.get("projects/" + projectIdOrKey + "/diskUsage");
    };
    Backlog.prototype.getWebhooks = function (projectIdOrKey) {
        return this.get("projects/" + projectIdOrKey + "/webhooks");
    };
    Backlog.prototype.postWebhook = function (projectIdOrKey, params) {
        return this.post("projects/" + projectIdOrKey + "/webhooks", params);
    };
    Backlog.prototype.getWebhook = function (projectIdOrKey, webhookId) {
        return this.get("projects/" + projectIdOrKey + "/webhooks/" + webhookId);
    };
    Backlog.prototype.patchWebhook = function (projectIdOrKey, webhookId, params) {
        return this.patch("projects/" + projectIdOrKey + "/webhooks/" + webhookId, params);
    };
    Backlog.prototype.deleteWebhook = function (projectIdOrKey, webhookId) {
        return this.delete("projects/" + projectIdOrKey + "/webhooks/" + webhookId);
    };
    Backlog.prototype.getIssues = function (params) {
        return this.get('issues', params);
    };
    Backlog.prototype.getIssuesCount = function (params) {
        return this.get('issues/count', params);
    };
    Backlog.prototype.postIssue = function (params) {
        return this.post('issues', params);
    };
    Backlog.prototype.patchIssue = function (issueIdOrKey, params) {
        return this.patch("issues/" + issueIdOrKey, params);
    };
    Backlog.prototype.getIssue = function (issueIdOrKey) {
        return this.get("issues/" + issueIdOrKey);
    };
    Backlog.prototype.deleteIssuesCount = function (issueIdOrKey) {
        return this.delete("issues/" + issueIdOrKey);
    };
    Backlog.prototype.getIssueComments = function (issueIdOrKey, params) {
        return this.get("issues/" + issueIdOrKey + "/comments", params);
    };
    Backlog.prototype.postIssueComments = function (issueIdOrKey, params) {
        return this.post("issues/" + issueIdOrKey + "/comments", params);
    };
    Backlog.prototype.getIssueCommentsCount = function (issueIdOrKey) {
        return this.get("issues/" + issueIdOrKey + "/comments/count");
    };
    Backlog.prototype.getIssueComment = function (issueIdOrKey, commentId) {
        return this.get("issues/" + issueIdOrKey + "/comments/" + commentId);
    };
    Backlog.prototype.patchIssueComment = function (issueIdOrKey, commentId, params) {
        return this.patch("issues/" + issueIdOrKey + "/comments/" + commentId, params);
    };
    Backlog.prototype.getIssueCommentNotifications = function (issueIdOrKey, commentId) {
        return this.get("issues/" + issueIdOrKey + "/comments/" + commentId + "/notifications");
    };
    Backlog.prototype.postIssueCommentNotifications = function (issueIdOrKey, commentId, prams) {
        return this.post("issues/" + issueIdOrKey + "/comments/" + commentId + "/notifications", prams);
    };
    Backlog.prototype.getIssueAttachments = function (issueIdOrKey) {
        return this.get("issues/" + issueIdOrKey + "/attachments");
    };
    Backlog.prototype.getIssueAttachment = function (issueIdOrKey, attachmentId) {
        return this.download("issues/" + issueIdOrKey + "/attachments/" + attachmentId);
    };
    Backlog.prototype.deleteIssueAttachment = function (issueIdOrKey, attachmentId) {
        return this.delete("issues/" + issueIdOrKey + "/attachments/" + attachmentId);
    };
    Backlog.prototype.getIssueSharedFiles = function (issueIdOrKey) {
        return this.get("issues/" + issueIdOrKey + "/sharedFiles");
    };
    Backlog.prototype.linkIssueSharedFiles = function (issueIdOrKey, params) {
        return this.post("issues/" + issueIdOrKey + "/sharedFiles", params);
    };
    Backlog.prototype.unlinkIssueSharedFile = function (issueIdOrKey, id) {
        return this.delete("issues/" + issueIdOrKey + "/sharedFiles/" + id);
    };
    Backlog.prototype.getWikis = function (projectIdOrKey) {
        return this.get("wikis", { projectIdOrKey: projectIdOrKey });
    };
    Backlog.prototype.getWikisCount = function (projectIdOrKey) {
        return this.get("wikis/count", { projectIdOrKey: projectIdOrKey });
    };
    Backlog.prototype.getWikisTags = function (projectIdOrKey) {
        return this.get("wikis/tags", { projectIdOrKey: projectIdOrKey });
    };
    Backlog.prototype.postWiki = function (params) {
        return this.post("wikis", params);
    };
    Backlog.prototype.getWiki = function (wikiId) {
        return this.get("wikis/" + wikiId);
    };
    Backlog.prototype.patchWiki = function (wikiId, params) {
        return this.patch("wikis/" + wikiId, params);
    };
    Backlog.prototype.deleteWiki = function (wikiId, mailNotify) {
        return this.delete("wikis/" + wikiId, { mailNotify: mailNotify });
    };
    Backlog.prototype.getWikisAttachments = function (wikiId) {
        return this.get("wikis/" + wikiId + "/attachments");
    };
    Backlog.prototype.postWikisAttachments = function (wikiId, attachmentId) {
        return this.post("wikis/" + wikiId + "/attachments", { attachmentId: attachmentId });
    };
    Backlog.prototype.getWikiAttachment = function (wikiId, attachmentId) {
        return this.download("wikis/" + wikiId + "/attachments/" + attachmentId);
    };
    Backlog.prototype.deleteWikisAttachments = function (wikiId, attachmentId) {
        return this.delete("wikis/" + wikiId + "/attachments/" + attachmentId);
    };
    Backlog.prototype.getWikisSharedFiles = function (wikiId) {
        return this.get("wikis/" + wikiId + "/sharedFiles");
    };
    Backlog.prototype.linkWikisSharedFiles = function (wikiId, fileId) {
        return this.post("wikis/" + wikiId + "/sharedFiles", { fileId: fileId });
    };
    Backlog.prototype.unlinkWikisSharedFiles = function (wikiId, id) {
        return this.delete("wikis/" + wikiId + "/sharedFiles/" + id);
    };
    Backlog.prototype.getWikisHistory = function (wikiId, params) {
        return this.get("wikis/" + wikiId + "/history", params);
    };
    Backlog.prototype.getWikisStars = function (wikiId) {
        return this.get("wikis/" + wikiId + "/stars");
    };
    Backlog.prototype.postStar = function (params) {
        return this.post('stars', params);
    };
    Backlog.prototype.getNotifications = function (params) {
        return this.get('notifications', params);
    };
    Backlog.prototype.getNotificationsCount = function (params) {
        return this.get('notifications/count', params);
    };
    Backlog.prototype.resetNotificationsMarkAsRead = function () {
        return this.post('notifications/markAsRead');
    };
    Backlog.prototype.markAsReadNotification = function (id) {
        return this.post("notifications/" + id + "/markAsRead");
    };
    Backlog.prototype.getGitRepositories = function (projectIdOrKey) {
        return this.get("projects/" + projectIdOrKey + "/git/repositories");
    };
    Backlog.prototype.getGitRepository = function (projectIdOrKey, repoIdOrName) {
        return this.get("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName);
    };
    Backlog.prototype.getPullRequests = function (projectIdOrKey, repoIdOrName, params) {
        return this.get("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests", params);
    };
    Backlog.prototype.getPullRequestsCount = function (projectIdOrKey, repoIdOrName, params) {
        return this.get("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests/count", params);
    };
    Backlog.prototype.postPullRequest = function (projectIdOrKey, repoIdOrName, params) {
        return this.post("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests", params);
    };
    Backlog.prototype.getPullRequest = function (projectIdOrKey, repoIdOrName, number) {
        return this.get("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests/" + number);
    };
    Backlog.prototype.patchPullRequest = function (projectIdOrKey, repoIdOrName, number, params) {
        return this.patch("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests/" + number, params);
    };
    Backlog.prototype.getPullRequestComments = function (projectIdOrKey, repoIdOrName, number, params) {
        return this.get("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests/" + number + "/comments", params);
    };
    Backlog.prototype.postPullRequestComments = function (projectIdOrKey, repoIdOrName, number, params) {
        return this.post("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests/" + number + "/comments", params);
    };
    Backlog.prototype.getPullRequestCommentsCount = function (projectIdOrKey, repoIdOrName, number) {
        return this.get("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests/" + number + "/comments/count");
    };
    Backlog.prototype.patchPullRequestComments = function (projectIdOrKey, repoIdOrName, number, commentId, params) {
        return this.patch("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests/" + number + "/comments/" + commentId, params);
    };
    Backlog.prototype.getPullRequestAttachments = function (projectIdOrKey, repoIdOrName, number) {
        return this.get("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests/" + number + "/attachments");
    };
    Backlog.prototype.getPullRequestAttachment = function (projectIdOrKey, repoIdOrName, number, attachmentId) {
        return this.download("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests/" + number + "/attachments/" + attachmentId);
    };
    Backlog.prototype.deletePullRequestAttachment = function (projectIdOrKey, repoIdOrName, number, attachmentId) {
        return this.get("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests/" + number + "/attachments/" + attachmentId);
    };
    Backlog.prototype.getWatchingListItems = function (userId) {
        return this.get("users/" + userId + "/watchings");
    };
    Backlog.prototype.getWatchingListCount = function (userId) {
        return this.get("users/" + userId + "/watchings/count");
    };
    Backlog.prototype.getWatchingListItem = function (watchId) {
        return this.get("watchings/" + watchId);
    };
    Backlog.prototype.postWatchingListItem = function (params) {
        return this.post("watchings", params);
    };
    Backlog.prototype.patchWatchingListItem = function (watchId, note) {
        return this.patch("watchings/" + watchId, { note: note });
    };
    Backlog.prototype.deletehWatchingListItem = function (watchId) {
        return this.delete("watchings/" + watchId);
    };
    Backlog.prototype.resetWatchingListItemAsRead = function (watchId) {
        return this.post("watchings/" + watchId + "/markAsRead");
    };
    Backlog.prototype.getProjectGroupList = function (projectIdOrKey) {
        return this.get("projects/" + projectIdOrKey + "/groups");
    };
    Backlog.prototype.postProjectGroup = function (projectIdOrKey, params) {
        return this.post("projects/" + projectIdOrKey + "/groups", params);
    };
    Backlog.prototype.deleteProjectGroup = function (projectIdOrKey) {
        return this.delete("projects/" + projectIdOrKey + "/groups");
    };
    Backlog.prototype.getGroupIcon = function (groupId) {
        return this.download("groups/" + groupId + "/icon");
    };
    Backlog.prototype.getLicence = function () {
        return this.get("space/licence");
    };
    Backlog.prototype.download = function (path) {
        return this.request({ method: 'GET', path: path }).then(this.parseFileData);
    };
    Backlog.prototype.upload = function (path, params) {
        return this.request({ method: 'POST', path: path, params: params }).then(this.parseJSON);
    };
    Backlog.prototype.parseFileData = function (response) {
        return new Promise(function (resolve, reject) {
            if (typeof window !== 'undefined') {
                resolve({
                    body: response.body,
                    url: response.url,
                    blob: function () { return response.blob(); },
                });
            }
            else {
                var disposition = response.headers.get("Content-Disposition");
                var filename = disposition
                    ? disposition.substring(disposition.indexOf("''") + 2) : "";
                resolve({
                    body: response.body,
                    url: response.url,
                    filename: filename
                });
            }
        });
    };
    return Backlog;
}(request_1.default));
exports.default = Backlog;

},{"./request":7}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],3:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BacklogError = (function (_super) {
    __extends(BacklogError, _super);
    function BacklogError(name, response, body) {
        var _this = _super.call(this, response.statusText) || this;
        _this._name = name;
        _this._url = response.url;
        _this._status = response.status;
        _this._body = body;
        _this._response = response;
        return _this;
    }
    Object.defineProperty(BacklogError.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BacklogError.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BacklogError.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BacklogError.prototype, "body", {
        get: function () {
            return this._body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BacklogError.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: true,
        configurable: true
    });
    return BacklogError;
}(global.Error));
exports.BacklogError = BacklogError;
var BacklogApiError = (function (_super) {
    __extends(BacklogApiError, _super);
    function BacklogApiError(response, body) {
        return _super.call(this, 'BacklogApiError', response, body) || this;
    }
    return BacklogApiError;
}(BacklogError));
exports.BacklogApiError = BacklogApiError;
var BacklogAuthError = (function (_super) {
    __extends(BacklogAuthError, _super);
    function BacklogAuthError(response, body) {
        return _super.call(this, 'BacklogAuthError', response, body) || this;
    }
    return BacklogAuthError;
}(BacklogError));
exports.BacklogAuthError = BacklogAuthError;
var UnexpectedError = (function (_super) {
    __extends(UnexpectedError, _super);
    function UnexpectedError(response) {
        return _super.call(this, 'UnexpectedError', response) || this;
    }
    return UnexpectedError;
}(BacklogError));
exports.UnexpectedError = UnexpectedError;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var backlog_1 = require("./backlog");
exports.Backlog = backlog_1.default;
var oauth2_1 = require("./oauth2");
exports.OAuth2 = oauth2_1.default;
var Option = require("./option");
exports.Option = Option;
var Entity = require("./entity");
exports.Entity = Entity;
var Error = require("./error");
exports.Error = Error;

},{"./backlog":1,"./entity":2,"./error":3,"./oauth2":5,"./option":6}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
var OAuth2 = (function () {
    function OAuth2(credentials, timeout) {
        this.credentials = credentials;
        this.timeout = timeout;
    }
    OAuth2.prototype.getAuthorizationURL = function (options) {
        var params = {
            client_id: this.credentials.clientId,
            response_type: 'code',
            redirect_uri: options.redirectUri,
            state: options.state
        };
        return "https://" + options.host + "/OAuth2AccessRequest.action?" +
            Object.keys(params)
                .map(function (key) { return params[key] ? key + "=" + params[key] : ''; })
                .filter(function (x) { return x.length > 0; })
                .join('&');
    };
    OAuth2.prototype.getAccessToken = function (options) {
        return new request_1.default({
            host: options.host, timeout: this.timeout
        }).post('oauth2/token', {
            grant_type: 'authorization_code',
            code: options.code,
            client_id: this.credentials.clientId,
            client_secret: this.credentials.clientSecret,
            redirect_uri: options.redirectUri
        });
    };
    OAuth2.prototype.refreshAccessToken = function (options) {
        return new request_1.default({
            host: options.host, timeout: this.timeout
        }).post('oauth2/token', {
            grant_type: "refresh_token",
            client_id: this.credentials.clientId,
            client_secret: this.credentials.clientSecret,
            refresh_token: options.refreshToken
        });
    };
    return OAuth2;
}());
exports.default = OAuth2;

},{"./request":7}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActivityType;
(function (ActivityType) {
    ActivityType[ActivityType["Undefined"] = -1] = "Undefined";
    ActivityType[ActivityType["IssueCreated"] = 1] = "IssueCreated";
    ActivityType[ActivityType["IssueUpdated"] = 2] = "IssueUpdated";
    ActivityType[ActivityType["IssueCommented"] = 3] = "IssueCommented";
    ActivityType[ActivityType["IssueDeleted"] = 4] = "IssueDeleted";
    ActivityType[ActivityType["WikiCreated"] = 5] = "WikiCreated";
    ActivityType[ActivityType["WikiUpdated"] = 6] = "WikiUpdated";
    ActivityType[ActivityType["WikiDeleted"] = 7] = "WikiDeleted";
    ActivityType[ActivityType["FileAdded"] = 8] = "FileAdded";
    ActivityType[ActivityType["FileUpdated"] = 9] = "FileUpdated";
    ActivityType[ActivityType["FileDeleted"] = 10] = "FileDeleted";
    ActivityType[ActivityType["SvnCommitted"] = 11] = "SvnCommitted";
    ActivityType[ActivityType["GitPushed"] = 12] = "GitPushed";
    ActivityType[ActivityType["GitRepositoryCreated"] = 13] = "GitRepositoryCreated";
    ActivityType[ActivityType["IssueMultiUpdated"] = 14] = "IssueMultiUpdated";
    ActivityType[ActivityType["ProjectUserAdded"] = 15] = "ProjectUserAdded";
    ActivityType[ActivityType["ProjectUserRemoved"] = 16] = "ProjectUserRemoved";
    ActivityType[ActivityType["NotifyAdded"] = 17] = "NotifyAdded";
    ActivityType[ActivityType["PullRequestAdded"] = 18] = "PullRequestAdded";
    ActivityType[ActivityType["PullRequestUpdated"] = 19] = "PullRequestUpdated";
    ActivityType[ActivityType["PullRequestCommented"] = 20] = "PullRequestCommented";
    ActivityType[ActivityType["PullRequestMerged"] = 21] = "PullRequestMerged";
})(ActivityType = exports.ActivityType || (exports.ActivityType = {}));
var User;
(function (User) {
    var RoleType;
    (function (RoleType) {
        RoleType[RoleType["Admin"] = 1] = "Admin";
        RoleType[RoleType["User"] = 2] = "User";
        RoleType[RoleType["Reporter"] = 3] = "Reporter";
        RoleType[RoleType["Viewer"] = 4] = "Viewer";
        RoleType[RoleType["GuestReporter"] = 5] = "GuestReporter";
        RoleType[RoleType["GuestViewer"] = 6] = "GuestViewer";
    })(RoleType = User.RoleType || (User.RoleType = {}));
})(User = exports.User || (exports.User = {}));
var Project;
(function (Project) {
    var FieldType;
    (function (FieldType) {
        FieldType[FieldType["Text"] = 1] = "Text";
        FieldType[FieldType["TextArea"] = 2] = "TextArea";
        FieldType[FieldType["Numeric"] = 3] = "Numeric";
        FieldType[FieldType["Date"] = 4] = "Date";
        FieldType[FieldType["SingleList"] = 5] = "SingleList";
        FieldType[FieldType["MultipleList"] = 6] = "MultipleList";
        FieldType[FieldType["CheckBox"] = 7] = "CheckBox";
        FieldType[FieldType["Radio"] = 8] = "Radio";
    })(FieldType = Project.FieldType || (Project.FieldType = {}));
})(Project = exports.Project || (exports.Project = {}));
var Issue;
(function (Issue) {
    var ParentChildType;
    (function (ParentChildType) {
        ParentChildType[ParentChildType["All"] = 0] = "All";
        ParentChildType[ParentChildType["NotChild"] = 1] = "NotChild";
        ParentChildType[ParentChildType["Child"] = 2] = "Child";
        ParentChildType[ParentChildType["NotChildNotParent"] = 3] = "NotChildNotParent";
        ParentChildType[ParentChildType["Parent"] = 4] = "Parent";
    })(ParentChildType = Issue.ParentChildType || (Issue.ParentChildType = {}));
})(Issue = exports.Issue || (exports.Issue = {}));

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Error = require("./error");
var qs = require("qs");
var Request = (function () {
    function Request(configure) {
        this.configure = configure;
    }
    Request.prototype.get = function (path, params) {
        return this.request({ method: 'GET', path: path, params: params }).then(this.parseJSON);
    };
    Request.prototype.post = function (path, params) {
        return this.request({ method: 'POST', path: path, params: params }).then(this.parseJSON);
    };
    Request.prototype.put = function (path, params) {
        return this.request({ method: 'PUT', path: path, params: params }).then(this.parseJSON);
    };
    Request.prototype.patch = function (path, params) {
        return this.request({ method: 'PATCH', path: path, params: params }).then(this.parseJSON);
    };
    Request.prototype.delete = function (path, params) {
        return this.request({ method: 'DELETE', path: path, params: params }).then(this.parseJSON);
    };
    Request.prototype.request = function (options) {
        var method = options.method, path = options.path, _a = options.params, params = _a === void 0 ? {} : _a;
        var _b = this.configure, apiKey = _b.apiKey, accessToken = _b.accessToken, timeout = _b.timeout;
        var query = apiKey ? { apiKey: apiKey } : {};
        var init = { method: method, headers: {} };
        if (timeout) {
            init['timeout'] = timeout;
        }
        if (!apiKey && accessToken) {
            init.headers['Authorization'] = 'Bearer ' + accessToken;
        }
        if (typeof window !== 'undefined') {
            init.mode = 'cors';
        }
        if (method !== 'GET') {
            if (params instanceof FormData) {
                init.body = params;
            }
            else {
                init.headers['Content-type'] = 'application/x-www-form-urlencoded';
                init.body = this.toQueryString(params);
            }
        }
        else {
            Object.keys(params).forEach(function (key) { return query[key] = params[key]; });
        }
        var queryStr = this.toQueryString(query);
        var url = this.restBaseURL + "/" + path + (queryStr.length > 0 ? "?" + queryStr : '');
        return fetch(url, init).then(this.checkStatus);
    };
    Request.prototype.checkStatus = function (response) {
        return new Promise(function (resolve, reject) {
            if (200 <= response.status && response.status < 300) {
                resolve(response);
            }
            else {
                response.json().then(function (data) {
                    if (response.status === 401) {
                        reject(new Error.BacklogAuthError(response, data));
                    }
                    else {
                        reject(new Error.BacklogApiError(response, data));
                    }
                }).catch(function (err) { return reject(new Error.UnexpectedError(response)); });
            }
        });
    };
    Request.prototype.parseJSON = function (response) {
        return response.json();
    };
    Request.prototype.toQueryString = function (params) {
        return qs.stringify(params, { arrayFormat: 'brackets' });
    };
    Object.defineProperty(Request.prototype, "webAppBaseURL", {
        get: function () {
            return "https://" + this.configure.host;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "restBaseURL", {
        get: function () {
            return this.webAppBaseURL + "/api/v2";
        },
        enumerable: true,
        configurable: true
    });
    return Request;
}());
exports.default = Request;

},{"./error":3,"qs":9}],8:[function(require,module,exports){
'use strict';

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

},{}],9:[function(require,module,exports){
'use strict';

var stringify = require('./stringify');
var parse = require('./parse');
var formats = require('./formats');

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"./formats":8,"./parse":10,"./stringify":11}],10:[function(require,module,exports){
'use strict';

var utils = require('./utils');

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};

},{"./utils":12}],11:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var formats = require('./formats');

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};

},{"./formats":8,"./utils":12}],12:[function(require,module,exports){
'use strict';

var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

var encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};

},{}]},{},[4])(4)
});
