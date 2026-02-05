  import * as Types from "./types";

  export type Order = "asc" | "desc";

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

  export declare namespace Document {
    interface GetDocumentsParams {
      projectId?: number[];
      keyword?: string;
      sort?: "created" | "updated";
      order?: Order;
      offset: number;
      count?: number;
    }

    interface AddDocumentParams {
      projectId: number;
      title?: string;
      content?: string;
      emoji?: string;
      parentId?: string;
      addLast?: boolean;
    }
  }

  export namespace Space {

    export interface GetActivitiesParams {
      activityTypeId?: Types.ActivityType[];
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
      roleType: Types.RoleType;
    }

    export interface PatchUserParams {
      password?: string;
      name?: string;
      mailAddress?: string;
      roleType?: Types.RoleType;
    }

    export interface GetUserActivitiesParams {
      activityTypeId?: Types.ActivityType[];
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

  export namespace WatchingList {

    export interface GetWatchingListParams {
      order?: Order;
      sort?: "created" | "updated" | "issueUpdated";
      count?: number;
      offset?: number;
      resourceAlreadyRead?: boolean;
      issueId?: number[];
    }

    export interface GetWatchingListCountParams {
      resourceAlreadyRead?: boolean;
      alreadyRead?: boolean;
    }

    export interface PostWatchingListItemParams {
      issueIdOrKey: string | number;
      note: string;
    }
  }

  export namespace Team {

    export interface GetTeamsParams {
      order?: Order;
      offset?: number;
      count?: number;
    }

    export interface PostTeamParams {
      name: string;
      members?: number[];
    }

    export interface PatchTeamParams {
      name?: string;
      members?: number[];
    }

  }

  export namespace Project {

    export interface PostProjectParams {
      name: string;
      key: string;
      chartEnabled: boolean;
      projectLeaderCanEditProjectLeader?: boolean;
      subtaskingEnabled: boolean;
      textFormattingRule: Types.TextFormattingRule;
    }

    export interface PatchProjectParams {
      name?: string;
      key?: string;
      chartEnabled?: boolean;
      subtaskingEnabled?: boolean;
      projectLeaderCanEditProjectLeader?: boolean;
      textFormattingRule?: Types.TextFormattingRule;
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

    export interface PostIssueTypeParams {
      name: string;
      color: Types.IssueTypeColor;
    }

    export interface PatchIssueTypeParams {
      name?: string;
      color?: Types.IssueTypeColor;
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
      description?: string;
      startDate?: string;
      releaseDueDate?: string;
    }

    export interface PatchVersionsParams {
      name: string;
      description?: string;
      startDate?: string;
      releaseDueDate?: string;
      archived?: boolean;
    }

    export interface PostCustomFieldParams {
      typeId: Types.CustomFieldType;
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
      activityTypeIds?: Types.WebhookActivityId[];
    }

    export interface PatchWebhookParams {
      name?: string;
      description?: string;
      hookUrl?: string;
      allEvent?: boolean;
      activityTypeIds?: number[];
    }

    export interface PostStarParams {
      issueId?: number;
      commentId?: number;
      wikiId?: number;
      pullRequestId?: number;
      pullRequestCommentId?: number;
    }

    export interface PostStatusParams {
      name: string;
      color: Types.ProjectStatusColor;
    }

    export interface PatchStatusParams {
      name?: string;
      color?: Types.ProjectStatusColor;
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
      hasDueDate?: boolean;
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
