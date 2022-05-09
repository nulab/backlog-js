(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Backlog = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
var Backlog = /** @class */ (function (_super) {
    __extends(Backlog, _super);
    function Backlog(configure) {
        return _super.call(this, configure) || this;
    }
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-space/
     */
    Backlog.prototype.getSpace = function () {
        return this.get('space');
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-recent-updates/
     */
    Backlog.prototype.getSpaceActivities = function (params) {
        return this.get('space/activities', params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-space-logo/
     */
    Backlog.prototype.getSpaceIcon = function () {
        return this.download('space/image');
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-space-notification/
     */
    Backlog.prototype.getSpaceNotification = function () {
        return this.get('space/notification');
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-space-notification/
     */
    Backlog.prototype.putSpaceNotification = function (params) {
        return this.put('space/notification', params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-space-disk-usage/
     */
    Backlog.prototype.getSpaceDiskUsage = function () {
        return this.get('space/diskUsage');
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/post-attachment-file/
     */
    Backlog.prototype.postSpaceAttachment = function (form) {
        return this.upload("space/attachment", form);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-user-list/
     */
    Backlog.prototype.getUsers = function () {
        return this.get("users");
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-user/
     */
    Backlog.prototype.getUser = function (userId) {
        return this.get("users/".concat(userId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-user/
     */
    Backlog.prototype.postUser = function (params) {
        return this.post("users", params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-user/
     */
    Backlog.prototype.patchUser = function (userId, params) {
        return this.patch("users/".concat(userId), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-user/
     */
    Backlog.prototype.deleteUser = function (userId) {
        return this.delete("users/".concat(userId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-own-user/
     */
    Backlog.prototype.getMyself = function () {
        return this.get('users/myself');
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-user-icon/
     */
    Backlog.prototype.getUserIcon = function (userId) {
        return this.download("users/".concat(userId, "/icon"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-user-recent-updates/
     */
    Backlog.prototype.getUserActivities = function (userId, params) {
        return this.get("users/".concat(userId, "/activities"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-received-star-list/
     */
    Backlog.prototype.getUserStars = function (userId, params) {
        return this.get("users/".concat(userId, "/stars"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/count-user-received-stars/
     */
    Backlog.prototype.getUserStarsCount = function (userId, params) {
        return this.get("users/".concat(userId, "/stars/count"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-issues/
     */
    Backlog.prototype.getRecentlyViewedIssues = function (params) {
        return this.get('users/myself/recentlyViewedIssues', params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-projects/
     */
    Backlog.prototype.getRecentlyViewedProjects = function (params) {
        return this.get('users/myself/recentlyViewedProjects', params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-recently-viewed-wikis/
     */
    Backlog.prototype.getRecentlyViewedWikis = function (params) {
        return this.get('users/myself/recentlyViewedWikis', params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-groups/
     * @deprecated
     */
    Backlog.prototype.getGroups = function (params) {
        console.warn("Deprecated: Use getTeams instead.");
        return this.get('groups', params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-group/
     * @deprecated
     */
    Backlog.prototype.postGroups = function (params) {
        console.warn("Deprecated: Use postTeam instead.");
        return this.post('groups', params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-group/
     * @deprecated
     */
    Backlog.prototype.getGroup = function (groupId) {
        console.warn("Deprecated: Use getTeam instead.");
        return this.get("groups/".concat(groupId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-group/
     * @deprecated
     */
    Backlog.prototype.patchGroup = function (groupId, params) {
        console.warn("Deprecated: Use patchTeam instead.");
        return this.patch("groups/".concat(groupId), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-group/
     * @deprecated
     */
    Backlog.prototype.deleteGroup = function (groupId) {
        console.warn("Deprecated: Use deleteTeam instead.");
        return this.delete("groups/".concat(groupId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-status-list/
     * @deprecated
     */
    Backlog.prototype.getStatuses = function () {
        console.warn("Deprecated: Use getProjectStatuses instead.");
        return this.get('statuses');
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-status-list-of-project/
     */
    Backlog.prototype.getProjectStatuses = function (projectIdOrKey) {
        return this.get("projects/".concat(projectIdOrKey, "/statuses"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-resolution-list/
     */
    Backlog.prototype.getResolutions = function () {
        return this.get('resolutions');
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-priority-list/
     */
    Backlog.prototype.getPriorities = function () {
        return this.get('priorities');
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project-list/
     */
    Backlog.prototype.getProjects = function (params) {
        return this.get('projects', params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-project/
     */
    Backlog.prototype.postProject = function (params) {
        return this.post('projects', params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project/
     */
    Backlog.prototype.getProject = function (projectIdOrKey) {
        return this.get("projects/".concat(projectIdOrKey));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-project/
     */
    Backlog.prototype.patchProject = function (projectIdOrKey, params) {
        return this.patch("projects/".concat(projectIdOrKey), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-project/
     */
    Backlog.prototype.deleteProject = function (projectIdOrKey) {
        return this.delete("projects/".concat(projectIdOrKey));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project-icon/
     */
    Backlog.prototype.getProjectIcon = function (projectIdOrKey) {
        return this.download("projects/".concat(projectIdOrKey, "/image"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project-recent-updates/
     */
    Backlog.prototype.getProjectActivities = function (projectIdOrKey, params) {
        return this.get("projects/".concat(projectIdOrKey, "/activities"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-project-user/
     */
    Backlog.prototype.postProjectUser = function (projectIdOrKey, userId) {
        return this.post("projects/".concat(projectIdOrKey, "/users"), { userId: userId });
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project-user-list/
     */
    Backlog.prototype.getProjectUsers = function (projectIdOrKey) {
        return this.get("projects/".concat(projectIdOrKey, "/users"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-project-user/
     */
    Backlog.prototype.deleteProjectUsers = function (projectIdOrKey, params) {
        return this.delete("projects/".concat(projectIdOrKey, "/users"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-project-administrator/
     */
    Backlog.prototype.postProjectAdministrators = function (projectIdOrKey, params) {
        return this.post("projects/".concat(projectIdOrKey, "/administrators"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-project-administrators/
     */
    Backlog.prototype.getProjectAdministrators = function (projectIdOrKey) {
        return this.get("projects/".concat(projectIdOrKey, "/administrators"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-project-administrator/
     */
    Backlog.prototype.deleteProjectAdministrators = function (projectIdOrKey, params) {
        return this.delete("projects/".concat(projectIdOrKey, "/administrators"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-status/
     */
    Backlog.prototype.postProjectStatus = function (projectIdOrKey, params) {
        return this.post("projects/".concat(projectIdOrKey, "/statuses"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-status/
     */
    Backlog.prototype.patchProjectStatus = function (projectIdOrKey, id, params) {
        return this.patch("projects/".concat(projectIdOrKey, "/statuses/").concat(id), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-status/
     */
    Backlog.prototype.deleteProjectStatus = function (projectIdOrKey, id, substituteStatusId) {
        return this.delete("projects/".concat(projectIdOrKey, "/statuses/").concat(id), { substituteStatusId: substituteStatusId });
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-order-of-status/
     */
    Backlog.prototype.patchProjectStatusOrder = function (projectIdOrKey, statusId) {
        return this.patch("projects/".concat(projectIdOrKey, "/statuses/updateDisplayOrder"), { statusId: statusId });
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-issue-type-list/
     */
    Backlog.prototype.getIssueTypes = function (projectIdOrKey) {
        return this.get("projects/".concat(projectIdOrKey, "/issueTypes"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-issue-type/
     */
    Backlog.prototype.postIssueType = function (projectIdOrKey, params) {
        return this.post("projects/".concat(projectIdOrKey, "/issueTypes"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-issue-type/
     */
    Backlog.prototype.patchIssueType = function (projectIdOrKey, id, params) {
        return this.patch("projects/".concat(projectIdOrKey, "/issueTypes/").concat(id), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-issue-type/
     */
    Backlog.prototype.deleteIssueType = function (projectIdOrKey, id, params) {
        return this.delete("projects/".concat(projectIdOrKey, "/issueTypes/").concat(id), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-category-list/
     */
    Backlog.prototype.getCategories = function (projectIdOrKey) {
        return this.get("projects/".concat(projectIdOrKey, "/categories"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-category/
     */
    Backlog.prototype.postCategories = function (projectIdOrKey, params) {
        return this.post("projects/".concat(projectIdOrKey, "/categories"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-category/
     */
    Backlog.prototype.patchCategories = function (projectIdOrKey, id, params) {
        return this.patch("projects/".concat(projectIdOrKey, "/categories/").concat(id), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-category/
     */
    Backlog.prototype.deleteCategories = function (projectIdOrKey, id) {
        return this.delete("projects/".concat(projectIdOrKey, "/categories/").concat(id));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-version-milestone-list/
     */
    Backlog.prototype.getVersions = function (projectIdOrKey) {
        return this.get("projects/".concat(projectIdOrKey, "/versions"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-version-milestone/
     */
    Backlog.prototype.postVersions = function (projectIdOrKey, params) {
        return this.post("projects/".concat(projectIdOrKey, "/versions"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-version-milestone/
     */
    Backlog.prototype.patchVersions = function (projectIdOrKey, id, params) {
        return this.patch("projects/".concat(projectIdOrKey, "/versions/").concat(id), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-version/
     */
    Backlog.prototype.deleteVersions = function (projectIdOrKey, id) {
        return this.delete("projects/".concat(projectIdOrKey, "/versions/").concat(id));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-custom-field-list/
     */
    Backlog.prototype.getCustomFields = function (projectIdOrKey) {
        return this.get("projects/".concat(projectIdOrKey, "/customFields"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-custom-field/
     */
    Backlog.prototype.postCustomField = function (projectIdOrKey, params) {
        return this.post("projects/".concat(projectIdOrKey, "/customFields"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-custom-field/
     */
    Backlog.prototype.patchCustomField = function (projectIdOrKey, id, params) {
        return this.patch("projects/".concat(projectIdOrKey, "/customFields/").concat(id), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-custom-field/
     */
    Backlog.prototype.deleteCustomField = function (projectIdOrKey, id) {
        return this.delete("projects/".concat(projectIdOrKey, "/customFields/").concat(id));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-list-item-for-list-type-custom-field/
     */
    Backlog.prototype.postCustomFieldItem = function (projectIdOrKey, id, params) {
        return this.post("projects/".concat(projectIdOrKey, "/customFields/").concat(id, "/items"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-list-item-for-list-type-custom-field/
     */
    Backlog.prototype.patchCustomFieldItem = function (projectIdOrKey, id, itemId, params) {
        return this.patch("projects/".concat(projectIdOrKey, "/customFields/").concat(id, "/items/").concat(itemId), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-list-item-for-list-type-custom-field/
     */
    Backlog.prototype.deleteCustomFieldItem = function (projectIdOrKey, id, itemId) {
        return this.delete("projects/".concat(projectIdOrKey, "/customFields/").concat(id, "/items/").concat(itemId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files/
     */
    Backlog.prototype.getSharedFiles = function (projectIdOrKey, path, params) {
        return this.get("projects/".concat(projectIdOrKey, "/files/metadata/").concat(path), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-file/
     */
    Backlog.prototype.getSharedFile = function (projectIdOrKey, sharedFileId) {
        return this.download("projects/".concat(projectIdOrKey, "/files/").concat(sharedFileId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project-disk-usage/
     */
    Backlog.prototype.getProjectsDiskUsage = function (projectIdOrKey) {
        return this.get("projects/".concat(projectIdOrKey, "/diskUsage"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-webhooks/
     */
    Backlog.prototype.getWebhooks = function (projectIdOrKey) {
        return this.get("projects/".concat(projectIdOrKey, "/webhooks"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-webhook/
     */
    Backlog.prototype.postWebhook = function (projectIdOrKey, params) {
        return this.post("projects/".concat(projectIdOrKey, "/webhooks"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-webhook/
     */
    Backlog.prototype.getWebhook = function (projectIdOrKey, webhookId) {
        return this.get("projects/".concat(projectIdOrKey, "/webhooks/").concat(webhookId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-webhook/
     */
    Backlog.prototype.patchWebhook = function (projectIdOrKey, webhookId, params) {
        return this.patch("projects/".concat(projectIdOrKey, "/webhooks/").concat(webhookId), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-webhook/
     */
    Backlog.prototype.deleteWebhook = function (projectIdOrKey, webhookId) {
        return this.delete("projects/".concat(projectIdOrKey, "/webhooks/").concat(webhookId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-issue-list/
     */
    Backlog.prototype.getIssues = function (params) {
        return this.get('issues', params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/count-issue/
     */
    Backlog.prototype.getIssuesCount = function (params) {
        return this.get('issues/count', params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-issue/
     */
    Backlog.prototype.postIssue = function (params) {
        return this.post('issues', params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-issue/
     */
    Backlog.prototype.patchIssue = function (issueIdOrKey, params) {
        return this.patch("issues/".concat(issueIdOrKey), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-issue/
     */
    Backlog.prototype.getIssue = function (issueIdOrKey) {
        return this.get("issues/".concat(issueIdOrKey));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-issue/
     */
    Backlog.prototype.deleteIssuesCount = function (issueIdOrKey) {
        return this.delete("issues/".concat(issueIdOrKey));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-comment-list/
     */
    Backlog.prototype.getIssueComments = function (issueIdOrKey, params) {
        return this.get("issues/".concat(issueIdOrKey, "/comments"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-comment/
     */
    Backlog.prototype.postIssueComments = function (issueIdOrKey, params) {
        return this.post("issues/".concat(issueIdOrKey, "/comments"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/count-comment/
     */
    Backlog.prototype.getIssueCommentsCount = function (issueIdOrKey) {
        return this.get("issues/".concat(issueIdOrKey, "/comments/count"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-comment/
     */
    Backlog.prototype.getIssueComment = function (issueIdOrKey, commentId) {
        return this.get("issues/".concat(issueIdOrKey, "/comments/").concat(commentId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-comment/
     */
    Backlog.prototype.deleteIssueComment = function (issueIdOrKey, commentId) {
        return this.delete("issues/".concat(issueIdOrKey, "/comments/").concat(commentId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-comment/
     */
    Backlog.prototype.patchIssueComment = function (issueIdOrKey, commentId, params) {
        return this.patch("issues/".concat(issueIdOrKey, "/comments/").concat(commentId), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-comment-notifications/
     */
    Backlog.prototype.getIssueCommentNotifications = function (issueIdOrKey, commentId) {
        return this.get("issues/".concat(issueIdOrKey, "/comments/").concat(commentId, "/notifications"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-comment-notification/
     */
    Backlog.prototype.postIssueCommentNotifications = function (issueIdOrKey, commentId, prams) {
        return this.post("issues/".concat(issueIdOrKey, "/comments/").concat(commentId, "/notifications"), prams);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-issue-attachments/
     */
    Backlog.prototype.getIssueAttachments = function (issueIdOrKey) {
        return this.get("issues/".concat(issueIdOrKey, "/attachments"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-issue-attachment/
     */
    Backlog.prototype.getIssueAttachment = function (issueIdOrKey, attachmentId) {
        return this.download("issues/".concat(issueIdOrKey, "/attachments/").concat(attachmentId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-issue-attachment/
     */
    Backlog.prototype.deleteIssueAttachment = function (issueIdOrKey, attachmentId) {
        return this.delete("issues/".concat(issueIdOrKey, "/attachments/").concat(attachmentId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-issue-participant-list/
     */
    Backlog.prototype.getIssueParticipants = function (issueIdOrKey) {
        return this.get("issues/".concat(issueIdOrKey, "/participants"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-linked-shared-files/
     */
    Backlog.prototype.getIssueSharedFiles = function (issueIdOrKey) {
        return this.get("issues/".concat(issueIdOrKey, "/sharedFiles"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-issue/
     */
    Backlog.prototype.linkIssueSharedFiles = function (issueIdOrKey, params) {
        return this.post("issues/".concat(issueIdOrKey, "/sharedFiles"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-issue/
     */
    Backlog.prototype.unlinkIssueSharedFile = function (issueIdOrKey, id) {
        return this.delete("issues/".concat(issueIdOrKey, "/sharedFiles/").concat(id));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-list/
     */
    Backlog.prototype.getWikis = function (params) {
        return this.get("wikis", params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/count-wiki-page/
     */
    Backlog.prototype.getWikisCount = function (projectIdOrKey) {
        return this.get("wikis/count", { projectIdOrKey: projectIdOrKey });
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-tag-list/
     */
    Backlog.prototype.getWikisTags = function (projectIdOrKey) {
        return this.get("wikis/tags", { projectIdOrKey: projectIdOrKey });
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-wiki-page/
     */
    Backlog.prototype.postWiki = function (params) {
        return this.post("wikis", params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page/
     */
    Backlog.prototype.getWiki = function (wikiId) {
        return this.get("wikis/".concat(wikiId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-wiki-page/
     */
    Backlog.prototype.patchWiki = function (wikiId, params) {
        return this.patch("wikis/".concat(wikiId), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-wiki-page/
     */
    Backlog.prototype.deleteWiki = function (wikiId, mailNotify) {
        return this.delete("wikis/".concat(wikiId), { mailNotify: mailNotify });
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-wiki-attachments/
     */
    Backlog.prototype.getWikisAttachments = function (wikiId) {
        return this.get("wikis/".concat(wikiId, "/attachments"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/attach-file-to-wiki/
     */
    Backlog.prototype.postWikisAttachments = function (wikiId, attachmentId) {
        return this.post("wikis/".concat(wikiId, "/attachments"), { attachmentId: attachmentId });
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-attachment/
     */
    Backlog.prototype.getWikiAttachment = function (wikiId, attachmentId) {
        return this.download("wikis/".concat(wikiId, "/attachments/").concat(attachmentId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/remove-wiki-attachment/
     */
    Backlog.prototype.deleteWikisAttachments = function (wikiId, attachmentId) {
        return this.delete("wikis/".concat(wikiId, "/attachments/").concat(attachmentId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-shared-files-on-wiki/
     */
    Backlog.prototype.getWikisSharedFiles = function (wikiId) {
        return this.get("wikis/".concat(wikiId, "/sharedFiles"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/link-shared-files-to-wiki/
     */
    Backlog.prototype.linkWikisSharedFiles = function (wikiId, fileId) {
        return this.post("wikis/".concat(wikiId, "/sharedFiles"), { fileId: fileId });
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/remove-link-to-shared-file-from-wiki/
     */
    Backlog.prototype.unlinkWikisSharedFiles = function (wikiId, id) {
        return this.delete("wikis/".concat(wikiId, "/sharedFiles/").concat(id));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-history/
     */
    Backlog.prototype.getWikisHistory = function (wikiId, params) {
        return this.get("wikis/".concat(wikiId, "/history"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-wiki-page-star/
     */
    Backlog.prototype.getWikisStars = function (wikiId) {
        return this.get("wikis/".concat(wikiId, "/stars"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-star/
     */
    Backlog.prototype.postStar = function (params) {
        return this.post('stars', params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-notification/
     */
    Backlog.prototype.getNotifications = function (params) {
        return this.get('notifications', params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/count-notification/
     */
    Backlog.prototype.getNotificationsCount = function (params) {
        return this.get('notifications/count', params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/reset-unread-notification-count/
     */
    Backlog.prototype.resetNotificationsMarkAsRead = function () {
        return this.post('notifications/markAsRead');
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/read-notification/
     */
    Backlog.prototype.markAsReadNotification = function (id) {
        return this.post("notifications/".concat(id, "/markAsRead"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-git-repositories/
     */
    Backlog.prototype.getGitRepositories = function (projectIdOrKey) {
        return this.get("projects/".concat(projectIdOrKey, "/git/repositories"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-git-repository/
     */
    Backlog.prototype.getGitRepository = function (projectIdOrKey, repoIdOrName) {
        return this.get("projects/".concat(projectIdOrKey, "/git/repositories/").concat(repoIdOrName));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-list/
     */
    Backlog.prototype.getPullRequests = function (projectIdOrKey, repoIdOrName, params) {
        return this.get("projects/".concat(projectIdOrKey, "/git/repositories/").concat(repoIdOrName, "/pullRequests"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-requests/
     */
    Backlog.prototype.getPullRequestsCount = function (projectIdOrKey, repoIdOrName, params) {
        return this.get("projects/".concat(projectIdOrKey, "/git/repositories/").concat(repoIdOrName, "/pullRequests/count"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-pull-request/
     */
    Backlog.prototype.postPullRequest = function (projectIdOrKey, repoIdOrName, params) {
        return this.post("projects/".concat(projectIdOrKey, "/git/repositories/").concat(repoIdOrName, "/pullRequests"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-pull-request/
     */
    Backlog.prototype.getPullRequest = function (projectIdOrKey, repoIdOrName, number) {
        return this.get("projects/".concat(projectIdOrKey, "/git/repositories/").concat(repoIdOrName, "/pullRequests/").concat(number));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-pull-request/
     */
    Backlog.prototype.patchPullRequest = function (projectIdOrKey, repoIdOrName, number, params) {
        return this.patch("projects/".concat(projectIdOrKey, "/git/repositories/").concat(repoIdOrName, "/pullRequests/").concat(number), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-pull-request-comment/
     */
    Backlog.prototype.getPullRequestComments = function (projectIdOrKey, repoIdOrName, number, params) {
        return this.get("projects/".concat(projectIdOrKey, "/git/repositories/").concat(repoIdOrName, "/pullRequests/").concat(number, "/comments"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-pull-request-comment/
     */
    Backlog.prototype.postPullRequestComments = function (projectIdOrKey, repoIdOrName, number, params) {
        return this.post("projects/".concat(projectIdOrKey, "/git/repositories/").concat(repoIdOrName, "/pullRequests/").concat(number, "/comments"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-number-of-pull-request-comments/
     */
    Backlog.prototype.getPullRequestCommentsCount = function (projectIdOrKey, repoIdOrName, number) {
        return this.get("projects/".concat(projectIdOrKey, "/git/repositories/").concat(repoIdOrName, "/pullRequests/").concat(number, "/comments/count"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-pull-request-comment-information/
     */
    Backlog.prototype.patchPullRequestComments = function (projectIdOrKey, repoIdOrName, number, commentId, params) {
        return this.patch("projects/".concat(projectIdOrKey, "/git/repositories/").concat(repoIdOrName, "/pullRequests/").concat(number, "/comments/").concat(commentId), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-pull-request-attachment/
     */
    Backlog.prototype.getPullRequestAttachments = function (projectIdOrKey, repoIdOrName, number) {
        return this.get("projects/".concat(projectIdOrKey, "/git/repositories/").concat(repoIdOrName, "/pullRequests/").concat(number, "/attachments"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/download-pull-request-attachment/
     */
    Backlog.prototype.getPullRequestAttachment = function (projectIdOrKey, repoIdOrName, number, attachmentId) {
        return this.download("projects/".concat(projectIdOrKey, "/git/repositories/").concat(repoIdOrName, "/pullRequests/").concat(number, "/attachments/").concat(attachmentId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-pull-request-attachments/
     */
    Backlog.prototype.deletePullRequestAttachment = function (projectIdOrKey, repoIdOrName, number, attachmentId) {
        return this.get("projects/".concat(projectIdOrKey, "/git/repositories/").concat(repoIdOrName, "/pullRequests/").concat(number, "/attachments/").concat(attachmentId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-watching-list
     */
    Backlog.prototype.getWatchingListItems = function (userId) {
        return this.get("users/".concat(userId, "/watchings"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/count-watching
     */
    Backlog.prototype.getWatchingListCount = function (userId) {
        return this.get("users/".concat(userId, "/watchings/count"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-watching
     */
    Backlog.prototype.getWatchingListItem = function (watchId) {
        return this.get("watchings/".concat(watchId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-watching
     */
    Backlog.prototype.postWatchingListItem = function (params) {
        return this.post("watchings", params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-watching
     */
    Backlog.prototype.patchWatchingListItem = function (watchId, note) {
        return this.patch("watchings/".concat(watchId), { note: note });
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-watching
     */
    Backlog.prototype.deletehWatchingListItem = function (watchId) {
        return this.delete("watchings/".concat(watchId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/mark-watching-as-read
     */
    Backlog.prototype.resetWatchingListItemAsRead = function (watchId) {
        return this.post("watchings/".concat(watchId, "/markAsRead"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project-group-list
     * @deprecated
     */
    Backlog.prototype.getProjectGroupList = function (projectIdOrKey) {
        console.warn("Deprecated: Use getProjectTeams instead.");
        return this.get("projects/".concat(projectIdOrKey, "/groups"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-project-group
     * @deprecated
     */
    Backlog.prototype.postProjectGroup = function (projectIdOrKey, params) {
        console.warn("Deprecated: Use postProjectTeam instead.");
        return this.post("projects/".concat(projectIdOrKey, "/groups"), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-project-group
     * @deprecated
     */
    Backlog.prototype.deleteProjectGroup = function (projectIdOrKey) {
        console.warn("Deprecated: Use deleteProjectTeam instead.");
        return this.delete("projects/".concat(projectIdOrKey, "/groups"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-group-icon
     * @deprecated
     */
    Backlog.prototype.getGroupIcon = function (groupId) {
        console.warn("Deprecated: Use getTeamIcon instead.");
        return this.download("groups/".concat(groupId, "/icon"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-licence
     */
    Backlog.prototype.getLicence = function () {
        return this.get("space/licence");
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-list-of-teams/
     */
    Backlog.prototype.getTeams = function (params) {
        return this.get("teams", params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-team/
     */
    Backlog.prototype.postTeam = function (members) {
        return this.post("teams", { members: members });
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-team/
     */
    Backlog.prototype.getTeam = function (teamId) {
        return this.get("teams/".concat(teamId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/update-team/
     */
    Backlog.prototype.patchTeam = function (teamId, params) {
        return this.patch("teams/".concat(teamId), params);
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-team/
     */
    Backlog.prototype.deleteTeam = function (teamId) {
        return this.delete("teams/".concat(teamId));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-team-icon/
     */
    Backlog.prototype.getTeamIcon = function (teamId) {
        return this.download("teams/".concat(teamId, "/icon"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-project-team-list/
     */
    Backlog.prototype.getProjectTeams = function (projectIdOrKey) {
        return this.get("projects/".concat(projectIdOrKey, "/teams"));
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/add-project-team/
     */
    Backlog.prototype.postProjectTeam = function (projectIdOrKey, teamId) {
        return this.post("projects/".concat(projectIdOrKey, "/teams"), { teamId: teamId });
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/delete-project-team/
     */
    Backlog.prototype.deleteProjectTeam = function (projectIdOrKey, teamId) {
        return this.delete("projects/".concat(projectIdOrKey, "/teams"), { teamId: teamId });
    };
    /**
     * https://developer.nulab.com/docs/backlog/api/2/get-rate-limit/
     */
    Backlog.prototype.getRateLimit = function () {
        return this.get("rateLimit");
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
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnexpectedError = exports.BacklogAuthError = exports.BacklogApiError = exports.BacklogError = void 0;
var BacklogError = /** @class */ (function (_super) {
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BacklogError.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BacklogError.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BacklogError.prototype, "body", {
        get: function () {
            return this._body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BacklogError.prototype, "response", {
        get: function () {
            return this._response;
        },
        enumerable: false,
        configurable: true
    });
    return BacklogError;
}(Error));
exports.BacklogError = BacklogError;
var BacklogApiError = /** @class */ (function (_super) {
    __extends(BacklogApiError, _super);
    function BacklogApiError(response, body) {
        return _super.call(this, 'BacklogApiError', response, body) || this;
    }
    return BacklogApiError;
}(BacklogError));
exports.BacklogApiError = BacklogApiError;
var BacklogAuthError = /** @class */ (function (_super) {
    __extends(BacklogAuthError, _super);
    function BacklogAuthError(response, body) {
        return _super.call(this, 'BacklogAuthError', response, body) || this;
    }
    return BacklogAuthError;
}(BacklogError));
exports.BacklogAuthError = BacklogAuthError;
var UnexpectedError = /** @class */ (function (_super) {
    __extends(UnexpectedError, _super);
    function UnexpectedError(response) {
        return _super.call(this, 'UnexpectedError', response) || this;
    }
    return UnexpectedError;
}(BacklogError));
exports.UnexpectedError = UnexpectedError;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.Entity = exports.Option = exports.OAuth2 = exports.Backlog = void 0;
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
var OAuth2 = /** @class */ (function () {
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
        return "https://".concat(options.host, "/OAuth2AccessRequest.action?") +
            Object.keys(params)
                .map(function (key) { return params[key] ? "".concat(key, "=").concat(params[key]) : ''; })
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
exports.Issue = exports.Project = exports.User = exports.ActivityType = void 0;
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
var Request = /** @class */ (function () {
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
        var url = "".concat(this.restBaseURL, "/").concat(path) + (queryStr.length > 0 ? "?".concat(queryStr) : '');
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
            return "https://".concat(this.configure.host);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "restBaseURL", {
        get: function () {
            return "".concat(this.webAppBaseURL, "/api/v2");
        },
        enumerable: false,
        configurable: true
    });
    return Request;
}());
exports.default = Request;

},{"./error":3,"qs":19}],8:[function(require,module,exports){

},{}],9:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var callBind = require('./');

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

},{"./":10,"get-intrinsic":13}],10:[function(require,module,exports){
'use strict';

var bind = require('function-bind');
var GetIntrinsic = require('get-intrinsic');

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}

},{"function-bind":12,"get-intrinsic":13}],11:[function(require,module,exports){
'use strict';

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

},{}],12:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = Function.prototype.bind || implementation;

},{"./implementation":11}],13:[function(require,module,exports){
'use strict';

var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = require('has-symbols')();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = require('function-bind');
var hasOwn = require('has');
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

},{"function-bind":12,"has":16,"has-symbols":14}],14:[function(require,module,exports){
'use strict';

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = require('./shams');

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

},{"./shams":15}],15:[function(require,module,exports){
'use strict';

/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

},{}],16:[function(require,module,exports){
'use strict';

var bind = require('function-bind');

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"function-bind":12}],17:[function(require,module,exports){
var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' ? Symbol.prototype.toString : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var inspectCustom = require('./util.inspect').custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean') {
        throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') {
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + keys.join(', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = symToString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        if (ys.length === 0) { return '{}'; }
        if (indent) {
            return '{' + indentedJoin(ys, indent) + '}';
        }
        return '{ ' + ys.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]'; }
function isDate(obj) { return toStr(obj) === '[object Date]'; }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]'; }
function isError(obj) { return toStr(obj) === '[object Error]'; }
function isSymbol(obj) { return toStr(obj) === '[object Symbol]'; }
function isString(obj) { return toStr(obj) === '[object String]'; }
function isNumber(obj) { return toStr(obj) === '[object Number]'; }
function isBigInt(obj) { return toStr(obj) === '[object BigInt]'; }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]'; }

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16).toUpperCase();
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = Array(opts.indent + 1).join(' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: Array(depth + 1).join(baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + xs.join(',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        var syms = gOPS(obj);
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}

},{"./util.inspect":8}],18:[function(require,module,exports){
'use strict';

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};

},{}],19:[function(require,module,exports){
'use strict';

var stringify = require('./stringify');
var parse = require('./parse');
var formats = require('./formats');

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"./formats":18,"./parse":20,"./stringify":21}],20:[function(require,module,exports){
'use strict';

var utils = require('./utils');

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
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

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};

},{"./utils":22}],21:[function(require,module,exports){
'use strict';

var getSideChannel = require('side-channel');
var utils = require('./utils');
var formats = require('./formats');
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
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
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};

},{"./formats":18,"./utils":22,"side-channel":23}],22:[function(require,module,exports){
'use strict';

var formats = require('./formats');

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
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
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
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

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

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
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
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
        /* eslint operator-linebreak: [2, "before"] */
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

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

},{"./formats":18}],23:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bind/callBound');
var inspect = require('object-inspect');

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};

},{"call-bind/callBound":9,"get-intrinsic":13,"object-inspect":17}]},{},[4])(4)
});
