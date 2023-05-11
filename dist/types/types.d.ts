export declare type TextFormattingRule = "backlog" | "markdown";
export declare enum ClassicRoleType {
    Admin = 1,
    User = 2,
    Reporter = 3,
    Viewer = 4,
    GuestReporter = 5,
    GuestViewer = 6
}
export declare enum NormalRoleType {
    Admin = 1,
    MemberOrGuest = 2,
    MemberOrGuestForAddIssues = 3,
    MemberOrGuestForViewIssues = 4
}
export declare type RoleType = ClassicRoleType | NormalRoleType;
export declare type Language = "en" | "ja" | null;
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
    PullRequestMerged = 21,
    MilestoneCreated = 22,
    MilestoneUpdated = 23,
    MilestoneDeleted = 24,
    ProjectGroupAdded = 25,
    ProjectGroupDeleted = 26
}
