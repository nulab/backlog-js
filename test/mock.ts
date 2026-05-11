import * as qs from "qs";
import { setGlobalDispatcher, MockAgent, Interceptable } from "undici";

let undiciInterceptable: Interceptable;

type BodyMatcher = (body: string | Record<string, any>) => boolean;

interface MockParams {
  method: "GET" | "POST" | "DELETE";
  path: string;
  query?: Record<string, any>;
  body?: BodyMatcher;
  status: number;
  data: any;
  headers?: Record<string, any>;
  times: number;
}

export const mockRequest = ({
  path, method, query, status, data, headers, times
}: MockParams) => {
  const queryStr = qs.stringify(query, { arrayFormat: 'brackets' });
  const newPath = `${path}?${queryStr}`

  const interceptor = undiciInterceptable.intercept({
    method,
    path: newPath,
  });

  interceptor
    .reply(status, data, { headers })
    .times(times);
};

export const mockPrepare = (host: string) => {
  const mockAgent = new MockAgent();
  setGlobalDispatcher(mockAgent);
  undiciInterceptable = mockAgent.get(host);
};

export const mockCleanup = () => {
  undiciInterceptable.close();
};
