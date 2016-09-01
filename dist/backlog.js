(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Backlog = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var request_1 = require('./request');
var Backlog = (function (_super) {
    __extends(Backlog, _super);
    function Backlog(configure) {
        _super.call(this, configure);
    }
    Backlog.prototype.getSpace = function () {
        return this.get('space');
    };
    Backlog.prototype.getSpaceActivities = function (params) {
        return this.get('space/activities', params);
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
    Backlog.prototype.getSpaceIcon = function () {
        return this.download('space/image');
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
    Backlog.prototype.getUserActivities = function (userId, params) {
        return this.get("users/" + userId + "/activities", params);
    };
    Backlog.prototype.getUserStars = function (userId, params) {
        return this.get("users/" + userId + "/stars", params);
    };
    Backlog.prototype.getUserStarsCount = function (userId, params) {
        return this.get("users/" + userId + "/count", params);
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
    Backlog.prototype.getUserIcon = function (userId) {
        return this.download("users/" + userId + "/icon");
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
        return this.patch('groups', params);
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
    Backlog.prototype.postProject = function (params) {
        return this.post('projects', params);
    };
    Backlog.prototype.getProjects = function (params) {
        return this.get('projects', params);
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
    Backlog.prototype.getProjectActivities = function (projectIdOrKey, params) {
        return this.delete("projects/" + projectIdOrKey + "/activities", params);
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
        return this.get("projects/" + projectIdOrKey + "/issueTypes", params);
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
    Backlog.prototype.deleteCustomFieldItem = function (projectIdOrKey, id, params) {
        return this.delete("projects/" + projectIdOrKey + "/customFields/" + id + "/items");
    };
    Backlog.prototype.getSharedFiles = function (projectIdOrKey, path, params) {
        return this.get("projects/" + projectIdOrKey + "/files/metadata/" + path);
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
    Backlog.prototype.postIssue = function (params) {
        return this.post('issues', params);
    };
    Backlog.prototype.patchIssue = function (issueIdOrKey, params) {
        return this.patch("issues/" + issueIdOrKey, params);
    };
    Backlog.prototype.getIssues = function (params) {
        return this.get('issues', params);
    };
    Backlog.prototype.getIssue = function (issueIdOrKey) {
        return this.get("issues/" + issueIdOrKey);
    };
    Backlog.prototype.getIssuesCount = function (params) {
        return this.get('issues/count', params);
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
        return this.patch("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests/" + number + "/" + commentId, params);
    };
    Backlog.prototype.getPullRequestAttachments = function (projectIdOrKey, repoIdOrName, number) {
        return this.get("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests/" + number + "/attachments");
    };
    Backlog.prototype.deletePullRequestAttachment = function (projectIdOrKey, repoIdOrName, number, attachmentId) {
        return this.get("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests/" + number + "/attachments/" + attachmentId);
    };
    Backlog.prototype.getProjectIcon = function (projectIdOrKey) {
        return this.download("projects/" + projectIdOrKey + "/image");
    };
    Backlog.prototype.getSharedFile = function (projectIdOrKey, sharedFileId) {
        return this.download("projects/" + projectIdOrKey + "/files/" + sharedFileId);
    };
    Backlog.prototype.getIssueAttachment = function (issueIdOrKey, attachmentId) {
        return this.download("issues/" + issueIdOrKey + "/attachments/" + attachmentId);
    };
    Backlog.prototype.getWikiAttachment = function (wikiId, attachmentId) {
        return this.download("wikis/" + wikiId + "/attachments/" + attachmentId);
    };
    Backlog.prototype.getPullRequestAttachment = function (projectIdOrKey, repoIdOrName, number, attachmentId) {
        return this.download("projects/" + projectIdOrKey + "/git/repositories/" + repoIdOrName + "/pullRequests/" + number + "/attachments/" + attachmentId);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Backlog;

},{"./request":7}],2:[function(require,module,exports){
"use strict";

},{}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BacklogError = (function (_super) {
    __extends(BacklogError, _super);
    function BacklogError(name, response, body) {
        _super.call(this, response.statusText);
        this._name = name;
        this._url = response.url;
        this._status = response.status;
        this._body = body;
        this._response = response;
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
}(Error));
exports.BacklogError = BacklogError;
var BacklogApiError = (function (_super) {
    __extends(BacklogApiError, _super);
    function BacklogApiError(response, body) {
        _super.call(this, 'BacklogApiError', response, body);
    }
    return BacklogApiError;
}(BacklogError));
exports.BacklogApiError = BacklogApiError;
var BacklogAuthError = (function (_super) {
    __extends(BacklogAuthError, _super);
    function BacklogAuthError(response, body) {
        _super.call(this, 'BacklogAuthError', response, body);
    }
    return BacklogAuthError;
}(BacklogError));
exports.BacklogAuthError = BacklogAuthError;
var UnexpectedError = (function (_super) {
    __extends(UnexpectedError, _super);
    function UnexpectedError(response) {
        _super.call(this, 'UnexpectedError', response);
    }
    return UnexpectedError;
}(BacklogError));
exports.UnexpectedError = UnexpectedError;

},{}],4:[function(require,module,exports){
"use strict";
var backlog_1 = require('./backlog');
exports.Backlog = backlog_1.default;
var oauth2_1 = require('./oauth2');
exports.OAuth2 = oauth2_1.default;
var Option = require('./option');
exports.Option = Option;
var Entity = require('./entity');
exports.Entity = Entity;
var Error = require('./error');
exports.Error = Error;

},{"./backlog":1,"./entity":2,"./error":3,"./oauth2":5,"./option":6}],5:[function(require,module,exports){
"use strict";
var request_1 = require('./request');
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
        return ("https://" + options.host + "/OAuth2AccessRequest.action?") +
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OAuth2;

},{"./request":7}],6:[function(require,module,exports){
"use strict";
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
})(exports.ActivityType || (exports.ActivityType = {}));
var ActivityType = exports.ActivityType;
var User;
(function (User) {
    (function (RoleType) {
        RoleType[RoleType["Admin"] = 1] = "Admin";
        RoleType[RoleType["User"] = 2] = "User";
        RoleType[RoleType["Reporter"] = 3] = "Reporter";
        RoleType[RoleType["Viewer"] = 4] = "Viewer";
        RoleType[RoleType["GuestReporter"] = 5] = "GuestReporter";
        RoleType[RoleType["GuestViewer"] = 6] = "GuestViewer";
    })(User.RoleType || (User.RoleType = {}));
    var RoleType = User.RoleType;
})(User = exports.User || (exports.User = {}));
var Project;
(function (Project) {
    (function (FieldType) {
        FieldType[FieldType["Text"] = 1] = "Text";
        FieldType[FieldType["TextArea"] = 2] = "TextArea";
        FieldType[FieldType["Numeric"] = 3] = "Numeric";
        FieldType[FieldType["Date"] = 4] = "Date";
        FieldType[FieldType["SingleList"] = 5] = "SingleList";
        FieldType[FieldType["MultipleList"] = 6] = "MultipleList";
        FieldType[FieldType["CheckBox"] = 7] = "CheckBox";
        FieldType[FieldType["Radio"] = 8] = "Radio";
    })(Project.FieldType || (Project.FieldType = {}));
    var FieldType = Project.FieldType;
})(Project = exports.Project || (exports.Project = {}));
var Issue;
(function (Issue) {
    (function (ParentChildType) {
        ParentChildType[ParentChildType["All"] = 0] = "All";
        ParentChildType[ParentChildType["NotChild"] = 1] = "NotChild";
        ParentChildType[ParentChildType["Child"] = 2] = "Child";
        ParentChildType[ParentChildType["NotChildNotParent"] = 3] = "NotChildNotParent";
        ParentChildType[ParentChildType["Parent"] = 4] = "Parent";
    })(Issue.ParentChildType || (Issue.ParentChildType = {}));
    var ParentChildType = Issue.ParentChildType;
})(Issue = exports.Issue || (exports.Issue = {}));

},{}],7:[function(require,module,exports){
"use strict";
var Error = require('./error');
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
            init.body = params instanceof FormData ? params : this.toFormData(params);
        }
        else {
            Object.keys(params).forEach(function (key) { return query[key] = params[key]; });
        }
        var qs = this.toQueryString(query);
        var url = (this.restBaseURL + "/" + path) + (qs.length > 0 ? "?" + qs : '');
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
    Request.prototype.toFormData = function (params) {
        return Object.keys(params).reduce(function (result, key) {
            var value = params[key];
            if (!value) {
                return result;
            }
            if (Array.isArray(value)) {
                value.forEach(function (v) { return result.append(key + "[]", v); });
            }
            else {
                result.append(key, value);
            }
            return result;
        }, new FormData());
    };
    Request.prototype.toQueryString = function (params) {
        return Object.keys(params).reduce(function (result, key) {
            var value = params[key];
            if (!value) {
                return result;
            }
            if (Array.isArray(value)) {
                value.forEach(function (v) { return result.push(key + "[]=" + v); });
            }
            else {
                result.push(key + "=" + value);
            }
            return result;
        }, []).join('&');
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Request;

},{"./error":3}]},{},[4])(4)
});