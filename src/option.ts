
  export type Order = "asc" | "desc";

  export enum ActivityType {
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

  export namespace Notification {

    export interface GetNotificationsParams {
      minId?: number;
      maxId?: number;
      count?: number;
      order?: Order;
    }

    export interface GetNotificationsCountParams {
      alreadyRead: boolean;
      resourceAlreadyRead: boolean;
    }

  }

  export namespace Space {

    export interface GetActivitiesParams {
      activityTypeId?: ActivityType[];
      minId?: number;
      maxId?: number;
      count?: number;
      order?: Order;
    }

    export interface PutSpaceNotificationParams {
      content: string;
    }

  }

  export namespace User {

    export interface PostUserParams {
      userId: string;
      password: string;
      name: string;
      mailAddress: string;
      roleType: RoleType;
    }

    export interface PatchUserParams {
      password?: string;
      name?: string;
      mailAddress?: string;
      roleType?: RoleType;
    }

    export enum RoleType {
      Admin = 1,
      User = 2,
      Reporter = 3,
      Viewer = 4,
      GuestReporter = 5,
      GuestViewer = 6
    }

    export interface GetUserActivitiesParams {
      activityTypeId?: ActivityType[];
      minId?: number;
      maxId?: number;
      count?: number;
      order?: Order;
    }

    export interface GetUserStarsParams {
      minId?: number;
      maxId?: number;
      count?: number;
      order?: Order;
    }

    export interface GetUserStarsCountParams {
      since?: string;
      until?: string;
    }

    export interface GetRecentlyViewedParams {
      order?: Order;
      offset?: number;
      count?: number;
    }

  }

  export namespace Group {

    export interface GetGroupsParams {
      order?: Order;
      offset?: number;
      count?: number;
    }

    export interface PostGroupsParams {
      name: string;
      members?: string[];
    }

    export interface PatchGroupParams {
      name?: string;
      members?: string[];
    }

  }

  export namespace Team {

    export interface GetTeamsParams {
      order?: Order;
      offset?: number;
      count?: number;
    }

    export interface PatchTeamParams {
      name?: string;
      members?: number[];
    }

  }

  export namespace Project {

    export type TextFormattingRule = "backlog" | "markdown";

    export interface PostProjectParams {
      name: string;
      key: string;
      chartEnabled: boolean;
      projectLeaderCanEditProjectLeader?: boolean;
      subtaskingEnabled: boolean;
      textFormattingRule: TextFormattingRule;
    }

    export interface PatchProjectParams {
      name?: string;
      key?: string;
      chartEnabled?: boolean;
      subtaskingEnabled?: boolean;
      projectLeaderCanEditProjectLeader?: boolean;
      textFormattingRule?: TextFormattingRule;
      archived?: boolean;
    }

    export interface GetProjectsParams {
      archived?: boolean;
      all?: boolean;
    }

    export interface DeleteProjectUsersParams {
      userId: number;
    }

    export interface PostProjectAdministrators {
      userId: number;
    }

    export interface DeleteProjectAdministrators {
      userId: number;
    }

    export type IssueTypeColor =
      "#e30000" |
      "#990000" |
      "#934981" |
      "#814fbc" |
      "#2779ca" |
      "#007e9a" |
      "#7ea800" |
      "#ff9200" |
      "#ff3265" |
      "#666665";

    export interface PostIssueTypeParams {
      name: string;
      color: IssueTypeColor;
    }

    export interface PatchIssueTypeParams {
      name?: string;
      color?: IssueTypeColor;
    }

    export interface DeleteIssueTypeParams {
      substituteIssueTypeId: number;
    }

    export interface PostCategoriesParams {
      name: string;
    }

    export interface PatchCategoriesParams {
      name: string;
    }

    export interface PostVersionsParams {
      name: string;
      description: string;
      startDate: string;
      releaseDueDate: string;
    }

    export interface PatchVersionsParams {
      name: string;
      description?: string;
      startDate?: string;
      releaseDueDate?: string;
      archived?: boolean;
    }

    export interface PostCustomFieldParams {
      typeId: FieldType;
      name: string;
      applicableIssueTypes?: number[];
      description?: string;
      required?: boolean;
    }

    export interface PostCustomFieldWithNumericParams extends PostCustomFieldParams {
      min?: number;
      max?: number;
      initialValue?: number;
      unit?: string;
    }

    export interface PostCustomFieldWithDateParams extends PostCustomFieldParams {
      min?: string;
      max?: string;
      initialValueType?: number;
      initialDate?: string;
      initialShift?: number;
    }

    export interface PostCustomFieldWithListParams extends PostCustomFieldParams {
      items?: string[];
      allowInput?: boolean;
      allowAddItem?: boolean;
    }

    export interface PatchCustomFieldParams {
      name?: string;
      applicableIssueTypes?: number[];
      description?: string;
      required?: boolean;
    }

    export interface PatchCustomFieldWithNumericParams extends PatchCustomFieldParams {
      min?: number;
      max?: number;
      initialValue?: number;
      unit?: string;
    }

    export interface PatchCustomFieldWithDateParams extends PatchCustomFieldParams {
      min?: string;
      max?: string;
      initialValueType?: number;
      initialDate?: string;
      initialShift?: number;
    }

    export interface PatchCustomFieldWithListParams extends PatchCustomFieldParams {
      items?: string[];
      allowInput?: boolean;
      allowAddItem?: boolean;
    }

    export interface PostCustomFieldItemParams {
      name: string;
    }

    export interface PatchCustomFieldItemParams {
      name: string;
    }

    export interface GetSharedFilesParams {
      order?: Order;
      offset?: number;
      count?: number;
    }

    export interface PostWebhookParams {
      name?: string;
      description?: string;
      hookUrl?: string;
      allEvent?: boolean;
      activityTypeIds?: number[];
    }

    export interface PatchWebhookParams {
      name?: string;
      description?: string;
      hookUrl?: string;
      allEvent?: boolean;
      activityTypeIds?: number[];
    }

    export enum FieldType {
      Text = 1,
      TextArea = 2,
      Numeric = 3,
      Date = 4,
      SingleList = 5,
      MultipleList = 6,
      CheckBox = 7,
      Radio = 8
    }

    export interface PostStarParams {
      issueId?: number;
      commentId?: number;
      wikiId?: number;
      pullRequestId?: number;
      pullRequestCommentId?: number;
    }

    export type ProjectStatusColor = "#ea2c00" | "#e87758" | "#e07b9a" | "#868cb7" |
      "#3b9dbd" | "#4caf93" | "#b0be3c" | "#eda62a" | "#f42858" | "#393939";

    export interface PostStatusParams {
      name: string;
      color: ProjectStatusColor;
    }

    export interface PatchStatusParams {
      name?: string;
      color?: ProjectStatusColor;
    }

  }

  export namespace Issue {

    export interface PostIssueParams {
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

    export interface PatchIssueParams {
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

    export interface GetIssuesParams {
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

    export enum ParentChildType {
      All = 0, NotChild = 1, Child = 2, NotChildNotParent = 3, Parent = 4
    }

    export type SortKey =
      "issueType" |
      "category" |
      "version" |
      "milestone" |
      "summary" |
      "status" |
      "priority" |
      "attachment" |
      "sharedFile" |
      "created" |
      "createdUser" |
      "updated" |
      "updatedUser" |
      "assignee" |
      "startDate" |
      "dueDate" |
      "estimatedHours" |
      "actualHours" |
      "childIssue";

    export interface GetIssueCommentsParams {
      minId?: number;
      maxId?: number;
      count?: number;
      order?: Order;
    }

    export interface PostIssueCommentsParams {
      content: string;
      notifiedUserId?: number[];
      attachmentId?: number[];
    }

    export interface PatchIssueCommentParams {
      content: string;
    }

    export interface IssueCommentNotifications {
      notifiedUserId: number[];
    }

    export interface LinkIssueSharedFilesParams {
      fileId: number[];
    }

  }

  export namespace PullRequest {

    export interface GetPullRequestsParams {
      statusId?: number[];
      assigneeId?: number[];
      issueId?: number[];
      createdUserId?: number[];
      offset?: number;
      count?: number;
    }

    export interface PostPullRequestParams {
      summary: string;
      description: string;
      base: string;
      branch: string;
      issueId?: number;
      assigneeId?: number;
      notifiedUserId?: number[];
      attachmentId?: number[];
    }

    export interface PatchPullRequestParams {
      summary?: string;
      description?: string;
      issueId?: number;
      assigneeId?: number;
      notifiedUserId?: number[];
      comment?: string[];
    }

    export interface GetPullRequestCommentsParams {
      minId?: number;
      maxId?: number;
      count?: number;
      order?: Order;
    }

    export interface PostPullRequestCommentsParams {
      content: string;
      notifiedUserId?: number[];
    }

    export interface PatchPullRequestCommentsParams {
      content: string;
    }

  }

  export namespace Wiki {

    export interface GetWikiParams {
      projectIdOrKey: string | number;
      keyword?: string;
    }

    export interface PostWikiParams {
      projectId: number;
      name: string;
      content: string;
      mailNotify?: boolean;
    }

    export interface PatchWikiParams {
      name?: string;
      content?: string;
      mailNotify?: boolean;
    }

    export interface GetWikisHistoryParams {
      minId?: number;
      maxId?: number;
      count?: number;
      order?: Order;
    }

  }

  export namespace OAuth2 {

    export interface Credentials {
      clientId: string;
      clientSecret: string;
    }

  }
