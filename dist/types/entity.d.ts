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
    interface DocumentFileInfo extends FileInfo {
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
    interface CustomFieldItem {
        id: number;
        name: string;
        displayOrder: number;
    }
    interface CustomFieldInitialDate {
        id: number;
        shift?: number;
        date?: string;
    }
    interface CustomField {
        id: number;
        projectId: number;
        typeId: Types.CustomFieldType;
        name: string;
        description: string;
        required: boolean;
        useIssueType: boolean;
        applicableIssueTypes: number[];
        displayOrder: number;
        version: number;
        min?: number | string | null;
        max?: number | string | null;
        initialValue?: number | null;
        unit?: string | null;
        initialDate?: CustomFieldInitialDate | null;
        items?: CustomFieldItem[];
        allowAddItem?: boolean;
        allowInput?: boolean;
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
    interface ActivityChange {
        field: string;
        field_text: string;
        new_value: string;
        old_value: string;
        type: string;
    }
    interface ActivityAttachment {
        id: number;
        name: string;
        size: number;
    }
    interface ActivitySharedFile {
        id: number;
        dir: string;
        name: string;
        size: number;
    }
    interface ActivityExternalFileLink {
        name: string;
        url: string;
    }
    interface ActivityComment {
        id: number;
        content: string;
    }
    interface IssueCreatedContent {
        id: number;
        key_id: number;
        summary: string;
        description: string;
    }
    interface IssueContent {
        id: number;
        key_id: number;
        summary: string;
        description: string;
        comment: ActivityComment;
        changes: ActivityChange[];
        attachments: ActivityAttachment[];
        shared_files: ActivitySharedFile[];
        external_file_links: ActivityExternalFileLink[];
    }
    interface IssueDeletedContent {
        id: number;
        key_id: number;
    }
    interface MultiUpdateLink {
        id: number;
        key_id: number;
        title: string;
        comment: ActivityComment;
    }
    interface MultiUpdateChange {
        field: string;
        new_value: string;
        type: string;
    }
    interface IssueMultiUpdateContent {
        tx_id: number;
        comment: {
            content: string;
        };
        link: MultiUpdateLink[];
        changes: MultiUpdateChange[];
    }
    interface IssueMultiCreatedLink {
        id: number;
        key_id: number;
        title: string;
    }
    interface IssueMultiCreatedContent {
        link: IssueMultiCreatedLink[];
    }
    interface WikiAttachment {
        id: number;
        name: string;
        size: number;
    }
    interface WikiContent {
        id: number;
        name: string;
        content: string;
        diff: string;
        version: number;
        attachments: WikiAttachment[];
        shared_files: ActivitySharedFile[];
    }
    interface FileContent {
        id: number;
        dir: string;
        name: string;
        size: number;
    }
    interface SvnContent {
        rev: string;
        comment: string;
    }
    interface GitRevision {
        rev: string;
        comment: string;
    }
    interface GitRepository {
        id: number;
        name: string;
        description: string;
    }
    interface GitPushedContent {
        repository: GitRepository;
        change_type: string;
        revision_type: string;
        ref: string;
        revision_count: number;
        revisions: GitRevision[];
    }
    interface GitRepositoryCreatedContent {
        repository: GitRepository;
    }
    interface ProjectMemberUpdatedContent {
        users: User.User[];
        group_project_activities: {
            id: number;
            type: number;
        }[];
        comment: string;
    }
    interface PullRequestChange {
        field: string;
        new_value: string;
        old_value: string;
    }
    interface PullRequestIssue {
        id: number;
        key_id: number;
        issue_key?: string;
        summary: string;
        description: string;
    }
    interface PullRequestContent {
        id: number;
        number: number;
        summary: string;
        description: string;
        comment: ActivityComment | null;
        changes: PullRequestChange[];
        issue: PullRequestIssue | null;
        repository: GitRepository;
    }
    interface VersionContent {
        id: number;
        name: string;
        start_date: string;
        reference_date: string;
        description: string;
    }
    interface VersionChange {
        field: string;
        new_value: string;
        old_value: string;
    }
    interface VersionUpdatedContent {
        id: number;
        name: string;
        changes: VersionChange[];
    }
    interface TeamSnapshot {
        id: number;
        name: string;
    }
    interface ProjectTeamContent {
        parties: TeamSnapshot[];
    }
    interface StatusDeletedContent {
        deletedStatus: {
            name: string;
        };
        link: IssueMultiCreatedLink[];
        change: MultiUpdateChange | null;
    }
    interface DocumentContent {
        id: string;
        title: string;
    }
    interface DocumentMultiContent {
        documents: DocumentContent[];
    }
    type ActivityContent = IssueCreatedContent | IssueContent | IssueDeletedContent | IssueMultiUpdateContent | IssueMultiCreatedContent | WikiContent | FileContent | SvnContent | GitPushedContent | GitRepositoryCreatedContent | ProjectMemberUpdatedContent | PullRequestContent | VersionContent | VersionUpdatedContent | ProjectTeamContent | StatusDeletedContent | DocumentContent | DocumentMultiContent;
    interface Activity {
        id: number;
        project: Project.Project;
        type: Types.ActivityType;
        content: ActivityContent;
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
export declare namespace Document {
    interface Document {
        id: string;
        projectId: number;
        title: string;
        plain: string;
        json: string;
        statusId: number;
        emoji: string | null;
        attachments: File.DocumentFileInfo[];
        tags: Tag[];
        createdUser: User.User;
        created: string;
        updatedUser: User.User;
        updated: string;
    }
    interface Tag {
        id: number;
        name: string;
    }
    interface ActiveTrashTree {
        id: string;
        children: DocumentTreeNode[];
    }
    interface DocumentTreeNode {
        id: string;
        name?: string;
        children: DocumentTreeNode[];
        statusId?: number;
        emoji?: string;
        emojiType?: string;
        updated?: string;
    }
    interface DocumentTree {
        projectId: string;
        activeTree?: ActiveTrashTree;
        trashTree?: ActiveTrashTree;
    }
}
export declare namespace CustomFieldValue {
    interface CustomFieldValueItem {
        id: number;
        name: string;
        displayOrder: number;
    }
    interface TextCustomFieldValue {
        id: number;
        fieldTypeId: Types.CustomFieldType.Text | Types.CustomFieldType.TextArea;
        name: string;
        value: string | null;
    }
    interface NumericCustomFieldValue {
        id: number;
        fieldTypeId: Types.CustomFieldType.Numeric;
        name: string;
        value: number | null;
    }
    interface DateCustomFieldValue {
        id: number;
        fieldTypeId: Types.CustomFieldType.Date;
        name: string;
        value: string | null;
    }
    interface SingleListCustomFieldValue {
        id: number;
        fieldTypeId: Types.CustomFieldType.SingleList;
        name: string;
        value: CustomFieldValueItem | null;
    }
    interface MultipleListCustomFieldValue {
        id: number;
        fieldTypeId: Types.CustomFieldType.MultipleList;
        name: string;
        value: CustomFieldValueItem[];
    }
    interface CheckBoxCustomFieldValue {
        id: number;
        fieldTypeId: Types.CustomFieldType.CheckBox;
        name: string;
        value: CustomFieldValueItem[];
        otherValue: string | null;
    }
    interface RadioCustomFieldValue {
        id: number;
        fieldTypeId: Types.CustomFieldType.Radio;
        name: string;
        value: CustomFieldValueItem | null;
        otherValue: string | null;
    }
    type CustomFieldValue = TextCustomFieldValue | NumericCustomFieldValue | DateCustomFieldValue | SingleListCustomFieldValue | MultipleListCustomFieldValue | CheckBoxCustomFieldValue | RadioCustomFieldValue;
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
        customFields: CustomFieldValue.CustomFieldValue[];
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
