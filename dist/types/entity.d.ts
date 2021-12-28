/// <reference types="node" />
import { PassThrough } from 'stream';
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
