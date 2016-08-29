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


///////////////////////////////////////////////////////////////////////////////////////


// const restify = require("restify");
// const server = restify.createServer({ name: "My cool server", version: "1.0.0" });
//
// // Set the client credentials and the OAuth2 server
// const credentials: Credentials = {
//   clientId: '<client-id>',
//   clientSecret: '<client-secret>',
//   callbackUrl: 'http://localhost:3000/callback'
// };
//
// const oauth2 = new OAuth2(credentials);
//
// server.get('/auth', (req, res, next) => {
//   const host = req.query['host'];
//   const authorization_uri = OAuth2.codeFlowURI({
//     host,
//     state: '<state>'
//   });
//   res.redirect(authorization_uri);
//   return next();
// });
//
// server.get('/callback', (req, res, next) => {
//
//   oauth2.codeFlow({
//     host: '<host>',
//     code: '<code>',
//     redirectUri: 'http://localhost:3000'
//   }).then(token => {
//     const t = token.access_token;
//     res.redirect('/');
//   }).catch(err => {
//     console.log('Access Token Error', err.message);
//     res.redirect('/login');
//   });
//
//   return next();
// });
