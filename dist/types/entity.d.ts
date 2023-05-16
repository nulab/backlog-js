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
