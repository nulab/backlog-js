import * as qs from "qs";
import { setGlobalDispatcher, getGlobalDispatcher, MockAgent, Interceptable, Dispatcher } from "undici";

let undiciInterceptable: Interceptable;
let mockAgent: MockAgent;
let previousDispatcher: Dispatcher;

interface MockParams {
  method: "GET" | "POST" | "DELETE";
  path: string;
  query?: Record<string, any>;
  body?: string;
  status: number;
  data: any;
  headers?: Record<string, any>;
  times: number;
}

export const mockRequest = ({
  path, method, query, body, status, data, headers, times
}: MockParams) => {
  const queryStr = qs.stringify(query, { arrayFormat: 'brackets' });
  const newPath = queryStr ? `${path}?${queryStr}` : path;

  const interceptor = undiciInterceptable.intercept({
    method,
    path: newPath,
    ...(body !== undefined && { body }),
  });

  interceptor
    .reply(status, data, { headers })
    .times(times);
};

export const mockPrepare = (host: string) => {
  previousDispatcher = getGlobalDispatcher();
  mockAgent = new MockAgent();
  setGlobalDispatcher(mockAgent);
  undiciInterceptable = mockAgent.get(host);
};

export const mockCleanup = () => {
  undiciInterceptable.close();
  mockAgent.close();
  setGlobalDispatcher(previousDispatcher);
};
