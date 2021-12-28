import Request from './request';
import * as Option from './option';
import * as Entity from './entity';

export default class OAuth2 {

  public constructor(
    private credentials: Option.OAuth2.Credentials,
    private timeout?: number
  ) { }

  public getAuthorizationURL(options: {
    host: string, redirectUri?: string, state?: string
  }): string {
    const params = {
      client_id: this.credentials.clientId,
      response_type: 'code',
      redirect_uri: options.redirectUri,
      state: options.state
    };
    return `https://${options.host}/OAuth2AccessRequest.action?` +
      Object.keys(params)
        .map(key => params[key] ? `${key}=${params[key]}` : '' )
        .filter(x => x.length > 0)
        .join('&');
  }

  public getAccessToken(options: {
    host: string, code: string, redirectUri?: string
  }): Promise<Entity.OAuth2.AccessToken> {
    return new Request({
      host: options.host, timeout: this.timeout
    }).post<Entity.OAuth2.AccessToken>('oauth2/token', {
      grant_type: 'authorization_code',
      code: options.code,
      client_id: this.credentials.clientId,
      client_secret: this.credentials.clientSecret,
      redirect_uri: options.redirectUri
    });
  }

  public refreshAccessToken(options: {
    host: string, refreshToken: string
  }): Promise<Entity.OAuth2.AccessToken> {
    return new Request({
      host: options.host, timeout: this.timeout
    }).post<Entity.OAuth2.AccessToken>('oauth2/token', {
        grant_type: "refresh_token",
        client_id: this.credentials.clientId,
        client_secret: this.credentials.clientSecret,
        refresh_token: options.refreshToken
    });
  }

}
