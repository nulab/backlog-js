import { describe, it, beforeEach, afterEach, expect } from 'vitest';
import * as backlogjs from '../src/index';
import * as Fixtures from './fixtures/index';
import { mockRequest, mockPrepare, mockCleanup } from './mock';

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

  beforeEach(() => {
    mockPrepare(`https://${host}`);
  });

  afterEach(() => {
    mockCleanup();
  })

  it('should get web app base url.', () => {
    const expected = `https://${host}/OAuth2AccessRequest.action?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&state=${state}`;
    expect(oauth2.getAuthorizationURL({ host, redirectUri, state })).toBe(expected);
  });

  it('should get access token.', async () => {
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
    const data = await oauth2.getAccessToken({
      host, code, redirectUri
    });
    expect(data).toEqual(Fixtures.access_token);
  });

  it('should refresh access token.', async () => {
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
    const data = await oauth2.refreshAccessToken({
      host, refreshToken
    });
    expect(data).toEqual(Fixtures.access_token);
  });
});

describe("Backlog API", () => {
  let backlog = new backlogjs.Backlog(configure);

  beforeEach(() => {
    mockPrepare(`https://${host}`);
  });

  afterEach(() => {
    mockCleanup();
  })

  it('should get web app base url.', () => {
    expect(backlog.webAppBaseURL).toBe(`https://${configure.host}`);
  });

  it('should get rest base url.', () => {
    expect(backlog.restBaseURL).toBe(`https://${configure.host}/api/v2`);
  });

  it('should convert object to query string.', () => {
    const query = (backlog as any).toQueryString({
      userId: 'test01',
      password: 'pazzword',
      name: 'testuser',
      mailAddress: 'testuser@example.com',
      roleType: backlogjs.Types.NormalRoleType.Admin
    });
    expect(query).toBe('userId=test01&password=pazzword&name=testuser&mailAddress=testuser%40example.com&roleType=1');
  });

  it('should convert object(array) to query string.', () => {
    const query = (backlog as any).toQueryString({
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
    expect(query).toBe('activityTypeId%5B%5D=1&activityTypeId%5B%5D=2&activityTypeId%5B%5D=3&minId=1&maxId=2&count=3&order=asc');
  });

  it('should convert custom field arrays to indexed query string.', () => {
    const query = (backlog as any).toQueryString({
      customField_123: ['value1', 'value2', 'value3'],
      customField_456: ['option1', 'option2'],
      customField_456_otherValue: 'option1',
      normalField: 'normalValue',
      customField_789: 'singleValue',
      // The following arrays should remain in default bracket format
      activityTypeId: [1, 2, 3],
      statusId: ['open', 'in-progress'],
      categoryId: [100, 200],
      assigneeId: [5, 10],
      // Close-but-not-quite prefixes must also use the default behavior
      customFields: ['should', 'use', 'brackets'],
      custom_field_999: ['not', 'indexed'],
      customfield_lower: ['also', 'brackets']
    });

    // CustomField-prefixed arrays should use numbered indices; everything else keeps bracket format
    const expected = 'customField_123%5B0%5D=value1&customField_123%5B1%5D=value2&customField_123%5B2%5D=value3&customField_456%5B0%5D=option1&customField_456%5B1%5D=option2&customField_456_otherValue=option1&normalField=normalValue&customField_789=singleValue&activityTypeId%5B%5D=1&activityTypeId%5B%5D=2&activityTypeId%5B%5D=3&statusId%5B%5D=open&statusId%5B%5D=in-progress&categoryId%5B%5D=100&categoryId%5B%5D=200&assigneeId%5B%5D=5&assigneeId%5B%5D=10&customFields%5B%5D=should&customFields%5B%5D=use&customFields%5B%5D=brackets&custom_field_999%5B%5D=not&custom_field_999%5B%5D=indexed&customfield_lower%5B%5D=also&customfield_lower%5B%5D=brackets';
    expect(query).toBe(expected);
  });

  it('should get space.', async () => {
    mockRequest({
      method: "GET",
      path: "/api/v2/space",
      query: { apiKey },
      status: 200,
      data: Fixtures.space,
      times: 1,
    });
    const data = await backlog.getSpace();
    expect(data).toEqual(Fixtures.space);
  });

  it('should get projects.', async () => {
    mockRequest({
      method: "GET",
      path: "/api/v2/projects",
      query: { apiKey },
      status: 200,
      data: Fixtures.projects,
      times: 1,
    });
    const data = await backlog.getProjects();
    expect(data).toEqual(Fixtures.projects);
  });

  it('should get space activities.', async () => {
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
    await backlog.getSpaceActivities(query);
  });

  it('should mark notification as read (204 No Content)', async () => {
    const notificationId = 1234;

    mockRequest({
      method: "POST",
      path: `/api/v2/notifications/${notificationId}/markAsRead`,
      query: { apiKey },
      status: 204, // No Content
      data: [],
      times: 1,
    });

    const data = await backlog.markAsReadNotification(notificationId);
    // Should resolve without error and without any value
    expect(data).toBeUndefined();
  });

  it('should get documents.', async () => {
    mockRequest({
      method: "GET",
      path: "/api/v2/documents",
      query: { apiKey, offset: 0 },
      status: 200,
      data: Fixtures.documents,
      times: 1,
    });
    const data = await backlog.getDocuments({ offset: 0 });
    expect(data).toEqual(Fixtures.documents);
  });

  it('should get document tree.', async () => {
    const projectIdOrKey = '1';
    mockRequest({
      method: "GET",
      path: `/api/v2/documents/tree`,
      query: { apiKey, projectIdOrKey },
      status: 200,
      data: Fixtures.documentTree,
      times: 1,
    });
    const data = await backlog.getDocumentTree(projectIdOrKey);
    expect(data).toEqual(Fixtures.documentTree);
  });

  it('should get a document.', async () => {
    const documentId = '01939983409c79d5a06a49859789e38f';
    mockRequest({
      method: "GET",
      path: `/api/v2/documents/${documentId}`,
      query: { apiKey },
      status: 200,
      data: Fixtures.document,
      times: 1,
    });
    const data = await backlog.getDocument(documentId);
    expect(data).toEqual(Fixtures.document);
  });

  it('should download a document attachment.', async () => {
    const documentId = '01939983409c79d5a06a49859789e38f';
    const attachmentId = 22067;
    mockRequest({
      method: "GET",
      path: `/api/v2/documents/${documentId}/attachments/${attachmentId}`,
      query: { apiKey },
      status: 200,
      data: "dummy",
      headers: {
        "Content-Disposition": "attachment; filename*=UTF-8''test.png"
      },
      times: 1,
    });
    const data = await backlog.downloadDocumentAttachment(documentId, attachmentId);
    if ('filename' in data) {
      expect(data.filename).toBe("test.png");
    }
  });

  it('should add a document.', async () => {
    mockRequest({
      method: "POST",
      path: "/api/v2/documents",
      query: { apiKey },
      status: 200,
      data: Fixtures.document,
      times: 1,
    });
    const data = await backlog.addDocument({
      projectId: 1,
      title: "ドキュメント機能へようこそ",
      content: "hello"
    });
    expect(data).toEqual(Fixtures.document);
  });

  it('should delete a document.', async () => {
    const documentId = '01939983409c79d5a06a49859789e38f';
    mockRequest({
      method: "DELETE",
      path: `/api/v2/documents/${documentId}`,
      query: { apiKey },
      status: 200,
      data: Fixtures.document,
      times: 1,
    });
    const data = await backlog.deleteDocument(documentId);
    expect(data).toEqual(Fixtures.document);
  });

  it('should remove star.', async () => {
    const starId = 123;
    mockRequest({
      method: "DELETE",
      path: `/api/v2/stars/${starId}`,
      query: { apiKey },
      status: 204,
      data: [],
      times: 1,
    });
    const data = await backlog.removeStar(starId);
    // Should resolve without error and without any value
    expect(data).toBeUndefined();
  });
});
