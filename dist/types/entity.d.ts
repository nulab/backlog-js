/// <reference types="node" />
import { PassThrough } from 'stream';
import * as Types from "./types";
export declare namespace File {
    type FileData = NodeFileData | BrowserFileData;
    interface NodeFileData {
        body: PassThrough;
        url: string;
        filename: string;
    }
    interface BrowserFileData {
        body: any;
        url: string;
        blob?: () => Promise<Blob>;
    }
    interface FileInfo {
        id: number;
        name: string;
        size: number;
    }
    interface IssueFileInfo extends FileInfo {
        createdUser: User.User;
        created: string;
    }
    interface WikiFileInfo extends FileInfo {
        createdUser: User.User;
        created: string;
    }
    interface PullRequestFileInfo extends FileInfo {
        createdUser: User.User;
        created: string;
    }
}
export declare namespace OAuth2 {
    interface AccessToken {
        access_token: string;
        token_type: string;
        expires_in: number;
        refresh_token: string;
    }
}
export declare namespace Space {
    interface Space {
        spaceKey: string;
        name: string;
        ownerId: number;
        lang: string;
        timezone: string;
        reportSendTime: string;
        textFormattingRule: Types.TextFormattingRule;
        created: string;
        updated: string;
    }
    interface Notification {
        content: string;
        updated: string;
    }
}
export declare namespace Project {
    interface Project {
        id: number;
        projectKey: string;
        name: string;
        chartEnabled: boolean;
        useResolvedForChart: boolean;
        subtaskingEnabled: boolean;
        projectLeaderCanEditProjectLeader: boolean;
        useWiki: boolean;
        useFileSharing: boolean;
        useWikiTreeView: boolean;
        useOriginalImageSizeAtWiki: boolean;
        useSubversion: boolean;
        useGit: boolean;
        textFormattingRule: Types.TextFormattingRule;
        archived: boolean;
        displayOrder: number;
        useDevAttributes: boolean;
    }
    interface RecentlyViewedProject {
        project: Project;
        updated: string;
    }
    /**
     * @deprecated
     */
    interface Status {
        id: number;
        name: string;
    }
    interface ProjectStatus {
        id: number;
        projectId: number;
        name: string;
        color: Types.ProjectStatusColor;
        displayOrder: number;
    }
    interface Category {
        id: number;
        projectId: number;
        name: string;
        displayOrder: number;
    }
    interface Version {
        id: number;
        projectId: number;
        name: string;
        description?: string;
        startDate?: string;
        releaseDueDate?: string;
        archived: boolean;
        displayOrder: number;
    }
    interface CustomField {
        id: number;
        projectId: number;
        typeId: Types.CustomFieldType;
        name: string;
        description: string;
        required: boolean;
        applicableIssueTypes: number[];
        [key: string]: any;
    }
    interface SharedFile {
        id: number;
        projectId: number;
        type: string;
        dir: string;
        name: string;
        size: number;
        createdUser: User.User;
        created: string;
        updatedUser: User.User;
        updated: string;
    }
}
export declare namespace User {
    interface User {
        id: number;
        userId: string;
        name: string;
        roleType: Types.RoleType;
        lang: Types.Language;
        mailAddress: string;
        lastLoginTime: string;
    }
}
export declare namespace Activity {
    interface Activity {
        id: number;
        project: Project.Project;
        type: Types.ActivityType;
        content: any;
        notifications: [];
        createdUser: User.User;
        created: string;
    }
}
export declare namespace DiskUsage {
    interface DiskUsage {
        issue: number;
        wiki: number;
        file: number;
        subversion: number;
        git: number;
        gitLFS: number;
    }
    interface ProjectDiskUsage extends DiskUsage {
        projectId: number;
    }
    interface SpaceDiskUsage extends DiskUsage {
        capacity: number;
        details: ProjectDiskUsage[];
    }
}
export declare namespace CommentNotification {
    interface CommentNotification {
        id: number;
        alreadyRead: boolean;
        reason: number;
        user: User.User;
        resourceAlreadyRead: boolean;
    }
}
export declare namespace Issue {
    interface IssueType {
        id: number;
        projectId: number;
        name: string;
        color: Types.IssueTypeColor;
        displayOrder: number;
        templateSummary?: string;
        templateDescription?: string;
    }
    interface Priority {
        id: number;
        name: string;
    }
    interface Resolution {
        id: number;
        name: string;
    }
    interface Issue {
        id: number;
        projectId: number;
        issueKey: string;
        keyId: number;
        issueType: IssueType;
        summary: string;
        description: string;
        resolution?: Resolution;
        priority: Priority;
        status: Project.ProjectStatus;
        assignee?: User.User;
        category: Project.Category[];
        versions: Project.Version[];
        milestone: Project.Version[];
        startDate?: string;
        dueDate?: string;
        estimatedHours?: number;
        actualHours?: number;
        parentIssueId?: number;
        createdUser: User.User;
        created: string;
        updatedUser: User.User;
        updated: string;
        customFields: Project.CustomField[];
        attachments: File.IssueFileInfo[];
        sharedFiles: Project.SharedFile[];
        stars: Star.Star[];
    }
    interface RecentlyViewedIssue {
        issue: Issue;
        updated: string;
    }
    interface IssueCount {
        count: number;
    }
    interface IssueCommentCount {
        count: number;
    }
    interface Comment {
        id: number;
        projectId: number;
        issueId: number;
        content: string;
        changeLog: ChangeLog.IssueChangeLog[];
        createdUser: User.User;
        created: string;
        updated: string;
        stars: Star.Star[];
        notifications: CommentNotification.CommentNotification[];
    }
}
export declare namespace Star {
    interface Star {
        id: number;
        comment?: string;
        url: string;
        title: string;
        presenter: User.User;
        created: string;
    }
    interface StarCount {
        count: number;
    }
}
export declare namespace Wiki {
    interface Tag {
        id: number;
        name: string;
    }
    interface History {
        pageId: number;
        version: number;
        name: string;
        content: string;
        createdUser: User.User;
        created: string;
    }
    interface WikiListItem {
        id: number;
        projectId: number;
        name: string;
        tags: Tag[];
        createdUser: User.User;
        created: string;
        updatedUser: User.User;
        updated: string;
    }
    interface Wiki {
        id: number;
        projectId: number;
        name: string;
        content: string;
        tags: Tag[];
        attachments: File.WikiFileInfo[];
        sharedFiles: Project.SharedFile[];
        stars: Star.Star[];
        createdUser: User.User;
        created: string;
        updatedUser: User.User;
        updated: string;
    }
    interface RecentlyViewedWiki {
        page: WikiListItem;
        updated: string;
    }
    interface WikiCount {
        count: number;
    }
}
export declare namespace PullRequest {
    interface Status {
        id: number;
        name: string;
    }
    interface PullRequest {
        id: number;
        projectId: number;
        repositoryId: number;
        number: number;
        summary: string;
        description: string;
        base: string;
        branch: string;
        status: Status;
        assignee?: User.User;
        issue: Issue.Issue;
        baseCommit?: string;
        branchCommit?: string;
        mergeCommit?: string;
        closeAt?: string;
        mergeAt?: string;
        createdUser: User.User;
        created: string;
        updatedUser: User.User;
        updated: string;
        attachments: File.PullRequestFileInfo[];
        stars: Star.Star[];
    }
    interface Comment {
        id: number;
        content: string;
        changeLog: ChangeLog.PullRequestChangeLog[];
        createdUser: User.User;
        created: string;
        updated: string;
        stars: Star.Star[];
        notifications: CommentNotification.CommentNotification[];
    }
    interface PullRequestCount {
        count: number;
    }
    interface PullRequestCommentCount {
        count: number;
    }
}
export declare namespace ChangeLog {
    interface ChangeLog {
        field: string;
        newValue: string;
        originalValue: string;
    }
    interface AttachmentInfo {
        id: number;
        type: string;
    }
    interface AttributeInfo {
        id: number;
        typeId: number;
    }
    interface NotificationInfo {
        type: string;
    }
    interface IssueChangeLog extends ChangeLog {
        attachmentInfo: AttachmentInfo;
        attributeInfo: AttributeInfo;
        notificationInfo: NotificationInfo;
    }
    type PullRequestChangeLog = ChangeLog;
}
export declare namespace Git {
    interface GitRepository {
        id: number;
        projectId: number;
        name: string;
        description: string;
        hookUrl?: string;
        httpUrl: string;
        sshUrl: string;
        displayOrder: number;
        pushedAt?: string;
        createdUser: User.User;
        created: string;
        updatedUser: User.User;
        updated: string;
    }
}
export declare namespace WatchingList {
    interface WatchingListItem {
        id: number;
        resourceAlreadyRead: boolean;
        note: string;
        type: string;
        issue: Issue.Issue;
        lastContentUpdated: string;
        created: string;
        updated: string;
    }
    interface WatchingListCount {
        count: number;
    }
}
/**
 * @deprecated
 */
export declare namespace Group {
    /**
     * @deprecated
     */
    type Group = Team.Team;
}
export declare namespace Team {
    interface Team {
        id: number;
        name: string;
        members: User.User[];
        displayOrder?: number;
        createdUser: User.User;
        created: string;
        updatedUser: User.User;
        updated: string;
    }
}
export declare namespace Notification {
    interface Notification {
        id: number;
        alreadyRead: boolean;
        reason: number;
        resourceAlreadyRead: boolean;
        project: Project.Project;
        issue?: Issue.Issue;
        comment?: Issue.Comment;
        pullRequest?: PullRequest.PullRequest;
        pullRequestComment?: PullRequest.Comment;
        sender: User.User;
        created: string;
    }
    interface NotificationCount {
        count: number;
    }
}
export declare namespace Webhook {
    interface Webhook {
        id: number;
        name: string;
        description: string;
        hookUrl: string;
        allEvent: boolean;
        activityTypeIds: Types.WebhookActivityId[];
        createdUser: User.User;
        created: string;
        updatedUser: User.User;
        updated: string;
    }
}
export declare namespace License {
    interface License {
        active: boolean;
        attachmentLimit: number;
        attachmentLimitPerFile: number;
        attachmentNumLimit: number;
        attribute: boolean;
        attributeLimit: number;
        burndown: boolean;
        commentLimit: number;
        componentLimit: number;
        fileSharing: boolean;
        gantt: boolean;
        git: boolean;
        issueLimit: number;
        licenceTypeId: number;
        limitDate: string;
        nulabAccount: boolean;
        parentChildIssue: boolean;
        postIssueByMail: boolean;
        projectLimit: number;
        pullRequestAttachmentLimitPerFile: number;
        pullRequestAttachmentNumLimit: number;
        remoteAddress: boolean;
        remoteAddressLimit: number;
        startedOn: string;
        storageLimit: number;
        subversion: boolean;
        subversionExternal: boolean;
        userLimit: number;
        versionLimit: number;
        wikiAttachment: boolean;
        wikiAttachmentLimitPerFile: number;
        wikiAttachmentNumLimit: number;
    }
}
export declare namespace RateLimit {
    interface RateLimit {
        rateLimit: ApiRateLimits;
    }
    interface ApiRateLimits {
        read: ApiRateLimit;
        update: ApiRateLimit;
        search: ApiRateLimit;
        icon: ApiRateLimit;
    }
    interface ApiRateLimit {
        limit: number;
        remaining: number;
        reset: number;
    }
}
