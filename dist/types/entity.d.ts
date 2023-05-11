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
