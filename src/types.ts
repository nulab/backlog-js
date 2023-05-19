export type TextFormattingRule = "backlog" | "markdown";

export enum ClassicRoleType {
  Admin = 1,
  User = 2,
  Reporter = 3,
  Viewer = 4,
  GuestReporter = 5,
  GuestViewer = 6
}

export enum NormalRoleType {
  Admin = 1,
  MemberOrGuest = 2,
  MemberOrGuestForAddIssues = 3,
  MemberOrGuestForViewIssues = 4,
}

export type RoleType = ClassicRoleType | NormalRoleType;

export type Language = "en" | "ja" | null;

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
  PullRequestMerged = 21,
  MilestoneCreated = 22,
  MilestoneUpdated = 23,
  MilestoneDeleted = 24,
  ProjectGroupAdded = 25,
  ProjectGroupDeleted = 26,
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

export type ProjectStatusColor =
  "#ea2c00" |
  "#e87758" |
  "#e07b9a" |
  "#868cb7" |
  "#3b9dbd" |
  "#4caf93" |
  "#b0be3c" |
  "#eda62a" |
  "#f42858" |
  "#393939";

export enum CustomFieldType {
  Text = 1,
  TextArea = 2,
  Numeric = 3,
  Date = 4,
  SingleList = 5,
  MultipleList = 6,
  CheckBox = 7,
  Radio = 8
}
