import { PassThrough } from 'stream';

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
}

export namespace OAuth2 {

  export interface AccessToken {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
  }
}
