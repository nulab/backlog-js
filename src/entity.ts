import { PassThrough } from 'stream';
import * as Types from "./types";

export namespace File {

  export type FileData = NodeFileData | BrowserFileData;

  export interface NodeFileData {
    body: PassThrough,
    url: string,
    filename: string
  }

  export interface BrowserFileData {
    body: any,
    url: string,
    blob?: () => Promise<Blob>
  }

  export interface FileInfo {
    id: number;
    name: string;
    size: number;
  }

  export interface IssueFileInfo extends FileInfo {
    createdUser: User.User;
    created: string;
  }

  export interface WikiFileInfo extends FileInfo {
    createdUser: User.User;
    created: string;
  }

  export interface PullRequestFileInfo extends FileInfo {
    createdUser: User.User;
    created: string;
  }
}

export namespace OAuth2 {

  export interface AccessToken {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
  }
}

export namespace Space {

  export interface Space { 
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
}

export namespace Project {
  export interface Project {
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

  export interface RecentlyViewedProject {
    project: Project;
    updated: string;
  }

  /*
   * @deprecated
   */
  export interface Status {
    id: number;
    name: string;
  }

  export interface ProjectStatus {
    id: number;
    projectId: number;
    name: string;
    color: Types.ProjectStatusColor;
    displayOrder: number;
  }

  export interface Category {
    id: number;
    projectId: number;
    name: string;
    displayOrder: number;
  }

  export interface Version {
    id: number;
    projectId: number;
    name: string;
    description?: string;
    startDate?: string;
    releaseDueDate?: string;
    archived: boolean;
    displayOrder: number; 
  }

  export interface CustomField {
    id: number;
    projectId: number;
    typeId: Types.CustomFieldType;
    name: string;
    description: string;
    required: boolean;
    applicableIssueTypes: number[];

    [key: string]: any; // Depends on `typeId`.
  }

  export interface SharedFile {
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

export namespace User {
  export interface User {
    id: number; 
    userId: string;
    name: string;
    roleType: Types.RoleType;
    lang: Types.Language;
    mailAddress: string;
    lastLoginTime: string;
  }
}

export namespace Activity {
  export interface Activity {
    id: number;
    project: Project.Project;
    type: Types.ActivityType;
    content: any; // Depends on `type`.
    notifications: []; // Always an empty array. https://nulab.com/release-notes/backlog/backlog-will-changes-to-the-get-recent-updates-apis/
    createdUser: User.User;
    created: string;
  }
}

export namespace DiskUsage {
  export interface DiskUsage {
    issue: number; 
    wiki: number;
    file: number;
    subversion: number;
    git: number;
    gitLFS: number;
  }

  export interface ProjectDiskUsage extends DiskUsage {
    projectId: number;
  }

  export interface SpaceDiskUsage extends DiskUsage {
    capacity: number;
    details: ProjectDiskUsage[];
  }
}

export namespace Issue {
  export interface IssueType {
    id: number;
    projectId: number;
    name: string;
    color: Types.IssueTypeColor;
    displayOrder: number;
    templateSummary?: string;
    templateDescription?: string;
  }

  export interface Priority {
    id: number;
    name: string;
  }

  export interface Resolution {
    id: number;
    name: string;
  }

  export interface Issue {
    id: number;
    projectId: number;
    issueKey: string;
    keyId: 1;
    issueType: IssueType;
    summary: string;
    description: string;
    resolution: Resolution;
    priority: Priority;
    status: Project.ProjectStatus;
    assignee: User.User;
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

  export interface RecentlyViewedIssue {
    issue: Issue;
    updated: string;
  }

  export interface IssueCount {
    count: number;
  }
}

export namespace Star {
  export interface Star {
    id: number;
    comment?: string;
    url: string;
    title: string;
    presenter: User.User;
    created: string;
  }

  export interface StarCount {
    count: number;
  }
}

export namespace Wiki {
  export interface Tag {
    id: number;
    name: string;
  }

  export interface History {
    pageId: number;
    version: number;
    name: string;
    content: string;
    createdUser: User.User;
    created: string;
  }

  export interface WikiListItem {
    id: number;
    projectId: number;
    name: string;
    tags: Tag[];
    createdUser: User.User;
    created: string;
    updatedUser: User.User;
    updated: string;
  }

  export interface Wiki {
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

  export interface RecentlyViewedWiki {
    page: WikiListItem;
    updated: string;
  }

  export interface WikiCount {
    count: number;
  }
}