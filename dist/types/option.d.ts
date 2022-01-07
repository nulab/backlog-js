export declare type Order = "asc" | "desc";
export declare enum ActivityType {
    Undefined = -1,
    IssueCreated = 1,
    IssueUpdated = 2,
    IssueCommented = 3,
    IssueDeleted = 4,
    WikiCreated = 5,
    WikiUpdated = 6,
    WikiDeleted = 7,
    FileAdded = 8,
    FileUpdated = 9,
    FileDeleted = 10,
    SvnCommitted = 11,
    GitPushed = 12,
    GitRepositoryCreated = 13,
    IssueMultiUpdated = 14,
    ProjectUserAdded = 15,
    ProjectUserRemoved = 16,
    NotifyAdded = 17,
    PullRequestAdded = 18,
    PullRequestUpdated = 19,
    PullRequestCommented = 20,
    PullRequestMerged = 21
}
export declare namespace Notification {
    interface GetNotificationsParams {
        minId?: number;
        maxId?: number;
        count?: number;
        order?: Order;
    }
    interface GetNotificationsCountParams {
        alreadyRead: boolean;
        resourceAlreadyRead: boolean;
    }
}
export declare namespace Space {
    interface GetActivitiesParams {
        activityTypeId?: ActivityType[];
        minId?: number;
        maxId?: number;
        count?: number;
        order?: Order;
    }
    interface PutSpaceNotificationParams {
        content: string;
    }
}
export declare namespace User {
    interface PostUserParams {
        userId: string;
        password: string;
        name: string;
        mailAddress: string;
        roleType: RoleType;
    }
    interface PatchUserParams {
        password?: string;
        name?: string;
        mailAddress?: string;
        roleType?: RoleType;
    }
    enum RoleType {
        Admin = 1,
        User = 2,
        Reporter = 3,
        Viewer = 4,
        GuestReporter = 5,
        GuestViewer = 6
    }
    interface GetUserActivitiesParams {
        activityTypeId?: ActivityType[];
        minId?: number;
        maxId?: number;
        count?: number;
        order?: Order;
    }
    interface GetUserStarsParams {
        minId?: number;
        maxId?: number;
        count?: number;
        order?: Order;
    }
    interface GetUserStarsCountParams {
        since?: string;
        until?: string;
    }
    interface GetRecentlyViewedParams {
        order?: Order;
        offset?: number;
        count?: number;
    }
}
export declare namespace Group {
    interface GetGroupsParams {
        order?: Order;
        offset?: number;
        count?: number;
    }
    interface PostGroupsParams {
        name: string;
        members?: string[];
    }
    interface PatchGroupParams {
        name?: string;
        members?: string[];
    }
}
export declare namespace Team {
    interface GetTeamsParams {
        order?: Order;
        offset?: number;
        count?: number;
    }
    interface PatchTeamParams {
        name?: string;
        members?: number[];
    }
}
export declare namespace Project {
    type TextFormattingRule = "backlog" | "markdown";
    interface PostProjectParams {
        name: string;
        key: string;
        chartEnabled: boolean;
        projectLeaderCanEditProjectLeader?: boolean;
        subtaskingEnabled: boolean;
        textFormattingRule: TextFormattingRule;
    }
    interface PatchProjectParams {
        name?: string;
        key?: string;
        chartEnabled?: boolean;
        subtaskingEnabled?: boolean;
        projectLeaderCanEditProjectLeader?: boolean;
        textFormattingRule?: TextFormattingRule;
        archived?: boolean;
    }
    interface GetProjectsParams {
        archived?: boolean;
        all?: boolean;
    }
    interface DeleteProjectUsersParams {
        userId: number;
    }
    interface PostProjectAdministrators {
        userId: number;
    }
    interface DeleteProjectAdministrators {
        userId: number;
    }
    type IssueTypeColor = "#e30000" | "#990000" | "#934981" | "#814fbc" | "#2779ca" | "#007e9a" | "#7ea800" | "#ff9200" | "#ff3265" | "#666665";
    interface PostIssueTypeParams {
        name: string;
        color: IssueTypeColor;
    }
    interface PatchIssueTypeParams {
        name?: string;
        color?: IssueTypeColor;
    }
    interface DeleteIssueTypeParams {
        substituteIssueTypeId: number;
    }
    interface PostCategoriesParams {
        name: string;
    }
    interface PatchCategoriesParams {
        name: string;
    }
    interface PostVersionsParams {
        name: string;
        description: string;
        startDate: string;
        releaseDueDate: string;
    }
    interface PatchVersionsParams {
        name: string;
        description?: string;
        startDate?: string;
        releaseDueDate?: string;
        archived?: boolean;
    }
    interface PostCustomFieldParams {
        typeId: FieldType;
        name: string;
        applicableIssueTypes?: number[];
        description?: string;
        required?: boolean;
    }
    interface PostCustomFieldWithNumericParams extends PostCustomFieldParams {
        min?: number;
        max?: number;
        initialValue?: number;
        unit?: string;
    }
    interface PostCustomFieldWithDateParams extends PostCustomFieldParams {
        min?: string;
        max?: string;
        initialValueType?: number;
        initialDate?: string;
        initialShift?: number;
    }
    interface PostCustomFieldWithListParams extends PostCustomFieldParams {
        items?: string[];
        allowInput?: boolean;
        allowAddItem?: boolean;
    }
    interface PatchCustomFieldParams {
        name?: string;
        applicableIssueTypes?: number[];
        description?: string;
        required?: boolean;
    }
    interface PatchCustomFieldWithNumericParams extends PatchCustomFieldParams {
        min?: number;
        max?: number;
        initialValue?: number;
        unit?: string;
    }
    interface PatchCustomFieldWithDateParams extends PatchCustomFieldParams {
        min?: string;
        max?: string;
        initialValueType?: number;
        initialDate?: string;
        initialShift?: number;
    }
    interface PatchCustomFieldWithListParams extends PatchCustomFieldParams {
        items?: string[];
        allowInput?: boolean;
        allowAddItem?: boolean;
    }
    interface PostCustomFieldItemParams {
        name: string;
    }
    interface PatchCustomFieldItemParams {
        name: string;
    }
    interface GetSharedFilesParams {
        order?: Order;
        offset?: number;
        count?: number;
    }
    interface PostWebhookParams {
        name?: string;
        description?: string;
        hookUrl?: string;
        allEvent?: boolean;
        activityTypeIds?: number[];
    }
    interface PatchWebhookParams {
        name?: string;
        description?: string;
        hookUrl?: string;
        allEvent?: boolean;
        activityTypeIds?: number[];
    }
    enum FieldType {
        Text = 1,
        TextArea = 2,
        Numeric = 3,
        Date = 4,
        SingleList = 5,
        MultipleList = 6,
        CheckBox = 7,
        Radio = 8
    }
    interface PostStarParams {
        issueId?: number;
        commentId?: number;
        wikiId?: number;
        pullRequestId?: number;
        pullRequestCommentId?: number;
    }
    type ProjectStatusColor = "#ea2c00" | "#e87758" | "#e07b9a" | "#868cb7" | "#3b9dbd" | "#4caf93" | "#b0be3c" | "#eda62a" | "#f42858" | "#393939";
    interface PostStatusParams {
        name: string;
        color: ProjectStatusColor;
    }
    interface PatchStatusParams {
        name?: string;
        color?: ProjectStatusColor;
    }
}
export declare namespace Issue {
    interface PostIssueParams {
        projectId: number;
        summary: string;
        priorityId: number;
        issueTypeId: number;
        parentIssueId?: number;
        description?: string;
        startDate?: string;
        dueDate?: string;
        estimatedHours?: number;
        actualHours?: number;
        categoryId?: number[];
        versionId?: number[];
        milestoneId?: number[];
        assigneeId?: number;
        notifiedUserId?: number[];
        attachmentId?: number[];
        [customField_: string]: any;
    }
    interface PatchIssueParams {
        summary?: string;
        parentIssueId?: number;
        description?: string;
        statusId?: number;
        resolutionId?: number;
        startDate?: string;
        dueDate?: string;
        estimatedHours?: number;
        actualHours?: number;
        issueTypeId?: number;
        categoryId?: number[];
        versionId?: number[];
        milestoneId?: number[];
        priorityId?: number;
        assigneeId?: number;
        notifiedUserId?: number[];
        attachmentId?: number[];
        comment?: string;
        [customField_: string]: any;
    }
    interface GetIssuesParams {
        projectId?: number[];
        issueTypeId?: number[];
        categoryId?: number[];
        versionId?: number[];
        milestoneId?: number[];
        statusId?: number[];
        priorityId?: number[];
        assigneeId?: number[];
        createdUserId?: number[];
        resolutionId?: number[];
        parentChild?: ParentChildType;
        attachment?: boolean;
        sharedFile?: boolean;
        sort?: SortKey;
        order?: Order;
        offset?: number;
        count?: number;
        createdSince?: string;
        createdUntil?: string;
        updatedSince?: string;
        updatedUntil?: string;
        startDateSince?: string;
        startDateUntil?: string;
        dueDateSince?: string;
        dueDateUntil?: string;
        id?: number[];
        parentIssueId?: number[];
        keyword?: string;
        [customField_: string]: any;
    }
    enum ParentChildType {
        All = 0,
        NotChild = 1,
        Child = 2,
        NotChildNotParent = 3,
        Parent = 4
    }
    type SortKey = "issueType" | "category" | "version" | "milestone" | "summary" | "status" | "priority" | "attachment" | "sharedFile" | "created" | "createdUser" | "updated" | "updatedUser" | "assignee" | "startDate" | "dueDate" | "estimatedHours" | "actualHours" | "childIssue";
    interface GetIssueCommentsParams {
        minId?: number;
        maxId?: number;
        count?: number;
        order?: Order;
    }
    interface PostIssueCommentsParams {
        content: string;
        notifiedUserId?: number[];
        attachmentId?: number[];
    }
    interface PatchIssueCommentParams {
        content: string;
    }
    interface IssueCommentNotifications {
        notifiedUserId: number[];
    }
    interface LinkIssueSharedFilesParams {
        fileId: number[];
    }
}
export declare namespace PullRequest {
    interface GetPullRequestsParams {
        statusId?: number[];
        assigneeId?: number[];
        issueId?: number[];
        createdUserId?: number[];
        offset?: number;
        count?: number;
    }
    interface PostPullRequestParams {
        summary: string;
        description: string;
        base: string;
        branch: string;
        issueId?: number;
        assigneeId?: number;
        notifiedUserId?: number[];
        attachmentId?: number[];
    }
    interface PatchPullRequestParams {
        summary?: string;
        description?: string;
        issueId?: number;
        assigneeId?: number;
        notifiedUserId?: number[];
        comment?: string[];
    }
    interface GetPullRequestCommentsParams {
        minId?: number;
        maxId?: number;
        count?: number;
        order?: Order;
    }
    interface PostPullRequestCommentsParams {
        content: string;
        notifiedUserId?: number[];
    }
    interface PatchPullRequestCommentsParams {
        content: string;
    }
}
export declare namespace Wiki {
    interface GetWikiParams {
        projectIdOrKey: string | number;
        keyword?: string;
    }
    interface PostWikiParams {
        projectId: number;
        name: string;
        content: string;
        mailNotify?: boolean;
    }
    interface PatchWikiParams {
        name?: string;
        content?: string;
        mailNotify?: boolean;
    }
    interface GetWikisHistoryParams {
        minId?: number;
        maxId?: number;
        count?: number;
        order?: Order;
    }
}
export declare namespace OAuth2 {
    interface Credentials {
        clientId: string;
        clientSecret: string;
    }
}