import * as assert from 'power-assert';
import * as nock from 'nock';
import * as fs from 'fs';
import * as qs from 'qs';
import * as stream from 'stream';
import * as dotenv from 'dotenv';
import * as backlogjs from '../src/index';
import * as Fixtures from './fixtures/index';
import 'isomorphic-form-data';
import 'isomorphic-fetch';

require('es6-promise').polyfill();
dotenv.config();

const host = process.env.BACKLOG_HOST || 'example.backlog.jp';
const apiKey = process.env.BACKLOG_API_KEY || 'apiKey';
const clientId = process.env.BACKLOG_CLIENT_ID || 'clientId';
const clientSecret = process.env.BACKLOG_CLIENT_SECRET || 'clientSecret';
const redirectUri = process.env.BACKLOG_REDIRECT_URI || 'redirectUri';
const state = process.env.BACKLOG_STATE || 'state';
const code = process.env.BACKLOG_CODE || 'code';
const refreshToken = process.env.BACKLOG_REFRESH_TOKEN || 'refreshToken';
const accessToken = process.env.BACKLOG_ACCESS_TOKEN || 'accessToken';

const configure = { host, apiKey }
const credentials = { clientId, clientSecret }

describe("OAuth2 API", () => {

  let oauth2: backlogjs.OAuth2;
  beforeEach(() => {
    oauth2 = new backlogjs.OAuth2(credentials);
  });

  afterEach(() => {
    oauth2 = null;
    nock.cleanAll();
  })

  it('should get web app base url.', done => {
    const expected = `https://${host}/OAuth2AccessRequest.action?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&state=${state}`;
    assert(expected === oauth2.getAuthorizationURL({ host, redirectUri, state }));
    done();
  });

  it('should get access token.', done => {
    nock(`https://${host}`)
      .post("/api/v2/oauth2/token", body => {
        return JSON.stringify(body.toString()
          .split("\r\n")
          .reduce((previous, current, index, array) => {
            const matched = current.match(/^.*name=\"(.*)\"$/);
            if (matched) previous[`${matched[1]}`] = array[index + 2];
            return previous;
          }, {})) === JSON.stringify({
            grant_type: 'authorization_code',
            code: code,
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri: redirectUri
          })
      })
      .once()
      .reply(200, Fixtures.access_token);
    oauth2.getAccessToken({
      host, code, redirectUri
    }).then(data => {
      assert.deepEqual(data, Fixtures.access_token);
      done();
    }).catch(err => {
      throw err;
    });
  });

  it('should refresh access token.', done => {
    nock(`https://${host}`)
      .post("/api/v2/oauth2/token", body => {
        return JSON.stringify(body.toString()
          .split("\r\n")
          .reduce((previous, current, index, array) => {
            const matched = current.match(/^.*name=\"(.*)\"$/);
            if (matched) previous[`${matched[1]}`] = array[index + 2];
            return previous;
          }, {})) === JSON.stringify({
            grant_type: 'refresh_token',
            client_id: clientId,
            client_secret: clientSecret,
            refresh_token: refreshToken
          })
      })
      .once()
      .reply(200, Fixtures.access_token);
    oauth2.refreshAccessToken({
      host, refreshToken
    }).then(data => {
      assert.deepEqual(data, Fixtures.access_token);
      done();
    }).catch(err => {
      throw err;
    });
  });
});

describe("Backlog API", () => {

  let backlog: backlogjs.Backlog;

  beforeEach(() => {
    backlog = new backlogjs.Backlog(configure);
  });

  afterEach(() => {
    backlog = null;
    nock.cleanAll();
  })

  it('should get web app base url.', (done) => {
    assert(`https://${configure.host}` === (<any>backlog).webAppBaseURL);
    done();
  });

  it('should get rest base url.', (done) => {
    assert(`https://${configure.host}/api/v2` === (<any>backlog).restBaseURL);
    done();
  });

  it('should convert object to query string.', (done) => {
    const query = (<any>backlog).toQueryString({
      userId: 'test01',
      password: 'pazzword',
      name: 'testuser',
      mailAddress: 'testuser@example.com',
      roleType: backlogjs.Option.User.RoleType.Admin
    });
    assert('userId=test01&password=pazzword&name=testuser&mailAddress=testuser@example.com&roleType=1' === query);
    done();
  });

  it('should convert object(array) to query string.', (done) => {
    const query = (<any>backlog).toQueryString({
      activityTypeId: [
        backlogjs.Option.ActivityType.IssueCreated,
        backlogjs.Option.ActivityType.IssueUpdated,
        backlogjs.Option.ActivityType.IssueCommented
      ],
      minId: 1,
      maxId: 2,
      count: 3,
      order: 'asc'
    });
    assert('activityTypeId[]=1&activityTypeId[]=2&activityTypeId[]=3&minId=1&maxId=2&count=3&order=asc' === query);
    done();
  });

  it('should get space.', (done) => {
    nock(`https://${host}`)
      .get("/api/v2/space")
      .query({ apiKey })
      .once()
      .reply(200, Fixtures.space);
    backlog.getSpace().then(data => {
      assert.deepEqual(data, Fixtures.space);
      done();
    }).catch(err => {
      throw err
    });
  });

  it('should get projects.', (done) => {
    nock(`https://${host}`)
      .get("/api/v2/projects")
      .query({ apiKey })
      .once()
      .reply(200, Fixtures.projects);
    backlog.getProjects().then(data => {
      assert.deepEqual(data, Fixtures.projects);
      done();
    }).catch((err) => {
      throw err;
    });
  });

  it('should get space activities.', (done) => {
    const query: backlogjs.Option.Space.GetActivitiesParams = {
      activityTypeId: [
        backlogjs.Option.ActivityType.IssueCreated,
        backlogjs.Option.ActivityType.IssueUpdated,
        backlogjs.Option.ActivityType.IssueCommented
      ],
      minId: 1,
      maxId: 10,
      count: 5,
      order: "desc"
    };
    query['apiKey'] = apiKey;
    nock(`https://${host}`)
      .get("/api/v2/space/activities")
      .query(query)
      .once()
      .reply(200, []);
    backlog.getSpaceActivities(query).then(data => {
      done();
    }).catch(err => {
      throw err;
    });
  });

});
