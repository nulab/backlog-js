import * as Option from './option';
import * as Entity from './entity';
import type { Fetch } from './types';
export default class OAuth2 {
    private credentials;
    private timeout?;
    private fetch?;
    constructor(credentials: Option.OAuth2.Credentials, timeout?: number, fetch?: Fetch);
    getAuthorizationURL(options: {
        host: string;
        redirectUri?: string;
        state?: string;
    }): string;
    getAccessToken(options: {
        host: string;
        code: string;
        redirectUri?: string;
    }): Promise<Entity.OAuth2.AccessToken>;
    refreshAccessToken(options: {
        host: string;
        refreshToken: string;
    }): Promise<Entity.OAuth2.AccessToken>;
}
