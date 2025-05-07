import * as assert from 'power-assert';
import * as dotenv from 'dotenv';
import * as backlogjs from '../src/index';
import * as Fixtures from './fixtures/index';
import { mockRequest, mockPrepare, mockCleanup } from './mock';
import 'isomorphic-form-data';
import 'isomorphic-fetch';
import { before, after } from 'mocha';

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
  let oauth2 = new backlogjs.OAuth2(credentials);

  before(() => {
    mockPrepare(`https://${host}`);
  });

  after(() => {
    mockCleanup();
  })

  it('should get web app base url.', done => {
    const expected = `https://${host}/OAuth2AccessRequest.action?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&state=${state}`;
    assert(expected === oauth2.getAuthorizationURL({ host, redirectUri, state }));
    done();
  });

  it('should get access token.', done => {
    mockRequest({
      method: "POST",
      path: "/api/v2/oauth2/token",
      body: body => {
        debugger;
        return JSON.stringify(body) === JSON.stringify({
          grant_type: 'authorization_code',
          code: code,
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: redirectUri
        });
      },
      status: 200,
      data: Fixtures.access_token,
      times: 1,
    });
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
    mockRequest({
      method: "POST",
      path: "/api/v2/oauth2/token",
      body: body => JSON.stringify(body) === JSON.stringify({
        grant_type: 'refresh_token',
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken
      }),
      status: 200,
      data: Fixtures.access_token,
      times: 1,
    });
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
  let backlog = new backlogjs.Backlog(configure);

  before(() => {
    mockPrepare(`https://${host}`);
  });

  after(() => {
    mockCleanup();
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
      roleType: backlogjs.Types.NormalRoleType.Admin
    });
    assert('userId=test01&password=pazzword&name=testuser&mailAddress=testuser%40example.com&roleType=1' === query);
    done();
  });

  it('should convert object(array) to query string.', (done) => {
    const query = (<any>backlog).toQueryString({
      activityTypeId: [
        backlogjs.Types.ActivityType.IssueCreated,
        backlogjs.Types.ActivityType.IssueUpdated,
        backlogjs.Types.ActivityType.IssueCommented
      ],
      minId: 1,
      maxId: 2,
      count: 3,
      order: 'asc'
    });
    assert('activityTypeId%5B%5D=1&activityTypeId%5B%5D=2&activityTypeId%5B%5D=3&minId=1&maxId=2&count=3&order=asc' === query);
    done();
  });

  it('should get space.', (done) => {
    mockRequest({
      method: "GET",
      path: "/api/v2/space",
      query: { apiKey },
      status: 200,
      data: Fixtures.space,
      times: 1,
    });
    backlog.getSpace().then(data => {
      assert.deepEqual(data, Fixtures.space);
      done();
    }).catch(err => {
      throw err
    });
  });

  it('should get projects.', (done) => {
    mockRequest({
      method: "GET",
      path: "/api/v2/projects",
      query: { apiKey },
      status: 200,
      data: Fixtures.projects,
      times: 1,
    });
    backlog.getProjects().then(data => {
      assert.deepEqual(data, Fixtures.projects);
      done();
    }).catch((err) => {
      throw err;
    });
  });

  it('should get space activities.', (done) => {
    const query: backlogjs.Option.Space.GetActivitiesParams & { apiKey: string } = {
      apiKey,
      activityTypeId: [
        backlogjs.Types.ActivityType.IssueCreated,
        backlogjs.Types.ActivityType.IssueUpdated,
        backlogjs.Types.ActivityType.IssueCommented
      ],
      minId: 1,
      maxId: 10,
      count: 5,
      order: "desc",
    };
    mockRequest({
      method: "GET",
      path: "/api/v2/space/activities",
      query,
      status: 200,
      data: [],
      times: 1,
    });
    backlog.getSpaceActivities(query).then(data => {
      done();
    }).catch(err => {
      throw err;
    });
  });
  it('should mark notification as read (204 No Content)', done => {
    const notificationId = 1234;
  
    mockRequest({
      method: "POST",
      path: `/api/v2/notifications/${notificationId}/markAsRead`,
      query: { apiKey },
      status: 204, // No Content
      data: [],
      times: 1,
    });
  
    backlog.markAsReadNotification(notificationId).then(data => {
      // Should resolve without error and without any value
      assert(data === undefined); 
      done();
    }).catch(err => {
      throw err;
    });
  });
});
