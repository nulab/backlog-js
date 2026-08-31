import * as qs from "qs";
import { fetch as undiciFetch, MockAgent, Interceptable } from "undici";
import type { Fetch } from "../src/types";

let undiciInterceptable: Interceptable;
let mockAgent: MockAgent;

interface MockParams {
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  path: string;
  query?: Record<string, any>;
  body?: string;
  status: number;
  data: any;
  headers?: Record<string, any>;
  reqHeaders?: Record<string, string>;
  times: number;
}

export const mockRequest = ({
  path,
  method,
  query,
  body,
  status,
  data,
  headers,
  reqHeaders,
  times,
}: MockParams) => {
  const queryStr = qs.stringify(query, { arrayFormat: "brackets" });
  const newPath = queryStr ? `${path}?${queryStr}` : path;

  const interceptor = undiciInterceptable.intercept({
    method,
    path: newPath,
    ...(body !== undefined && { body }),
    ...(reqHeaders !== undefined && { headers: reqHeaders }),
  });

  interceptor.reply(status, data, { headers }).times(times);
};

/**
 * The fetch implementation the tests inject via `configure.fetch`.
 *
 * It binds undici's own `fetch` to the current `MockAgent` explicitly instead of
 * relying on `setGlobalDispatcher()`. The global dispatcher is not a reliable
 * hook: undici 8 (bundled from Node.js 26) moved its global dispatcher to a new
 * symbol, so a `MockAgent` installed by the `undici` package no longer
 * intercepts `globalThis.fetch`, and requests silently escape to the real
 * backlog.jp. Passing the dispatcher per request keeps mocking independent of
 * which undici the running Node.js happens to bundle.
 */
export const mockFetch: Fetch = (input, init) =>
  <any>undiciFetch(<any>input, { ...(<any>init), dispatcher: mockAgent });

export const mockPrepare = (host: string) => {
  mockAgent = new MockAgent();
  // Fail fast with MockNotMatchedError on unmatched requests instead of
  // letting them escape to the real network.
  mockAgent.disableNetConnect();
  undiciInterceptable = mockAgent.get(host);
};

export const mockCleanup = () => {
  undiciInterceptable.close();
  mockAgent.close();
};
