import { describe, expect, it } from "vitest";
import * as api from "../src/index";

const base = "https://example.backlog.com/api/v2/";

function capture() {
  const requests: { method: string; url: string; authorization: string | null }[] = [];
  const client = api.createClient({
    host: "example.backlog.com",
    accessToken: "synthetic-token",
    fetch: async (input, init) => {
      const request = new Request(input, init);
      requests.push({
        method: request.method,
        url: request.url,
        authorization: request.headers.get("Authorization"),
      });
      return Response.json({});
    },
  });
  return { client, requests };
}

const cases = [
  {
    name: "delete issue",
    method: "DELETE",
    path: "issues/..%2Fprojects%2FAUDIT",
    call: (c: api.Client, v: string) => api.deleteIssue(c, v),
  },
  {
    name: "project",
    method: "GET",
    path: "projects/..%2Fprojects%2FAUDIT",
    call: (c: api.Client, v: string) => api.getProject(c, v),
  },
  {
    name: "repository",
    method: "GET",
    path: "projects/PROJ/git/repositories/..%2Fprojects%2FAUDIT",
    call: (c: api.Client, v: string) => api.getGitRepository(c, "PROJ", v),
  },
  {
    name: "document",
    method: "DELETE",
    path: "documents/..%2Fprojects%2FAUDIT",
    call: (c: api.Client, v: string) => api.deleteDocument(c, v),
  },
  {
    name: "comment",
    method: "POST",
    path: "issues/..%2Fprojects%2FAUDIT/comments",
    call: (c: api.Client, v: string) => api.postIssueComments(c, v, { content: "test" }),
  },
  {
    name: "update issue",
    method: "PATCH",
    path: "issues/..%2Fprojects%2FAUDIT",
    call: (c: api.Client, v: string) => api.patchIssue(c, v, { summary: "test" }),
  },
  {
    name: "download",
    method: "GET",
    path: "documents/..%2Fprojects%2FAUDIT/attachments/123",
    call: (c: api.Client, v: string) => api.downloadDocumentAttachment(c, v, 123),
  },
  {
    name: "upload",
    method: "POST",
    path: "documents/..%2Fprojects%2FAUDIT/attachments",
    call: (c: api.Client, v: string) => api.addDocumentAttachment(c, v, new FormData()),
  },
];

describe("API path inputs preserve the requested endpoint", () => {
  it.each([
    ["PROJ-123", "PROJ-123"],
    ["../space", "..%2Fspace"],
    ["%2e%2e", "%252e%252e"],
    ["%2E", "%252E"],
    [".%2e", ".%252e"],
    ["%2e.", "%252e."],
    ["%2fspace", "%252fspace"],
    ["%5cspace", "%255cspace"],
    ["%2E./space", "%252E.%2Fspace"],
    ["%252e%252e%252fspace", "%25252e%25252e%25252fspace"],
    ["a/b", "a%2Fb"],
    ["a\\b", "a%5Cb"],
    ["?override=1", "%3Foverride%3D1"],
    ["#fragment", "%23fragment"],
    ["日本語 空白", "%E6%97%A5%E6%9C%AC%E8%AA%9E%20%E7%A9%BA%E7%99%BD"],
    ["a\nb", "a%0Ab"],
    ["a\tb", "a%09b"],
  ])("encodes issue key %j as one segment", async (value, encoded) => {
    const { client, requests } = capture();
    await api.getIssue(client, value);
    expect(requests).toEqual([
      {
        method: "GET",
        url: base + "issues/" + encoded,
        authorization: "Bearer synthetic-token",
      },
    ]);
  });

  it.each([".", ".."])("rejects dot segment %j before fetch", async (value) => {
    const { client, requests } = capture();
    await expect(async () => api.getIssue(client, value)).rejects.toThrow(TypeError);
    expect(requests).toEqual([]);
  });

  it.each(cases)("encodes path input for $name", async (endpoint) => {
    const { client, requests } = capture();
    await endpoint.call(client, "../projects/AUDIT");
    expect(requests).toEqual([
      {
        method: endpoint.method,
        url: base + endpoint.path,
        authorization: "Bearer synthetic-token",
      },
    ]);
  });

  it("keeps shared-file folder separators and encodes folder names", async () => {
    const { client, requests } = capture();
    await api.getSharedFiles(client, "PROJ", "folder/日本語 ?#/", { order: "asc" });
    expect(requests).toEqual([
      {
        method: "GET",
        url:
          base +
          "projects/PROJ/files/metadata/folder/%E6%97%A5%E6%9C%AC%E8%AA%9E%20%3F%23/?order=asc",
        authorization: "Bearer synthetic-token",
      },
    ]);
  });

  it.each(["../space", "folder/../../space", "folder/./file"])(
    "rejects shared-file traversal %j before fetch",
    async (path) => {
      const { client, requests } = capture();
      await expect(async () => api.getSharedFiles(client, "PROJ", path, {})).rejects.toThrow(
        TypeError,
      );
      expect(requests).toEqual([]);
    },
  );

  it("preserves numeric IDs, nested routes and query parameters", async () => {
    const { client, requests } = capture();
    await api.getIssueComments(client, 123, { count: 20 });
    await api.getPullRequest(client, "PROJ", "repo.name-1", 42);
    expect(requests.map(({ method, url }) => ({ method, url }))).toEqual([
      { method: "GET", url: base + "issues/123/comments?count=20" },
      { method: "GET", url: base + "projects/PROJ/git/repositories/repo.name-1/pullRequests/42" },
    ]);
  });

  it.each([
    ["", ""],
    ["/", "/"],
    ["/folder/", "/folder/"],
    ["folder//sub/", "folder//sub/"],
    ["%2e%2e/space", "%252e%252e/space"],
    ["folder/a\\b", "folder/a%5Cb"],
    ["folder/%2fspace", "folder/%252fspace"],
  ])("preserves shared-file segment boundaries for %j", async (path, encoded) => {
    const { client, requests } = capture();
    await api.getSharedFiles(client, "PROJ", path, {});
    expect(requests).toEqual([
      {
        method: "GET",
        url: base + "projects/PROJ/files/metadata/" + encoded,
        authorization: "Bearer synthetic-token",
      },
    ]);
  });

  it("protects every interpolated position in a nested route", async () => {
    const { client, requests } = capture();
    await api.getPullRequestAttachment(
      client,
      "../project",
      "../repo",
      // @ts-expect-error JavaScript callers can pass strings for numeric IDs.
      "../number",
      "../attachment",
    );
    expect(requests).toEqual([
      {
        method: "GET",
        url:
          base +
          "projects/..%2Fproject/git/repositories/..%2Frepo/pullRequests/..%2Fnumber/attachments/..%2Fattachment",
        authorization: "Bearer synthetic-token",
      },
    ]);
  });

  it.each([
    { endpoint: api.getUser, path: "users/..%2Fspace" },
    { endpoint: api.getWiki, path: "wikis/..%2Fspace" },
    { endpoint: api.getTeam, path: "teams/..%2Fspace" },
    { endpoint: api.getWatchingListItem, path: "watchings/..%2Fspace" },
  ])("protects numeric ID routes called from JavaScript: $path", async ({ endpoint, path }) => {
    const { client, requests } = capture();
    // @ts-expect-error JavaScript callers can pass strings for numeric IDs.
    await endpoint(client, "../space");
    expect(requests).toEqual([
      {
        method: "GET",
        url: base + path,
        authorization: "Bearer synthetic-token",
      },
    ]);
  });

  it("protects the Backlog class API", async () => {
    const requests: { method: string; url: string }[] = [];
    const client = new api.Backlog({
      host: "example.backlog.com",
      fetch: async (input, init) => {
        const request = new Request(input, init);
        requests.push({ method: request.method, url: request.url });
        return Response.json({});
      },
    });
    await client.deleteIssue("../projects/AUDIT");
    expect(requests).toEqual([{ method: "DELETE", url: base + "issues/..%2Fprojects%2FAUDIT" }]);
  });
});
