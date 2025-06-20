import * as qs from "qs";
import * as nock from "nock";
import { setGlobalDispatcher, MockAgent, Interceptable } from "undici";

const nodeVersion = Number(process.versions.node.split(".")[0]);
const isNativeFetch = nodeVersion >= 18;
let nockScope: nock.Scope;
let undiciInterceptable: Interceptable;

type BodyMatcher = (body: string | Record<string, any>) => boolean;

interface MockParams {
  method: "GET" | "POST";
  path: string;
  query?: Record<string, any>;
  body?: BodyMatcher;
  status: number;
  data: any;
  headers?: Record<string, any>;
  times: number;
}

export const mockRequest = ({
  path, method, query, body, status, data, headers, times
}: MockParams) => {
  const queryStr = qs.stringify(query, { arrayFormat: 'brackets' });
  const newPath = `${path}?${queryStr}`

  if (isNativeFetch) {
    const interceptor = undiciInterceptable.intercept({
      method,
      path: newPath,
    });

    interceptor
      .reply(status, data, { headers })
      .times(times);
  } else {
    let interceptor: nock.Interceptor;

    if (method === "GET") {
      interceptor = nockScope.get(newPath);
    } else if (method === "POST" ) {
      interceptor = nockScope.post(newPath, body);
    }

    interceptor
      .times(times)
      .reply(status, data, headers);
  }
};

export const mockPrepare = (host: string) => {
  if (isNativeFetch) {
    const mockAgent = new MockAgent();
    setGlobalDispatcher(mockAgent);
    undiciInterceptable = mockAgent.get(host);
  } else {
    nockScope = nock(host);
  }
};

export const mockCleanup = () => {
  if (isNativeFetch) {
    undiciInterceptable.close();
  } else {
    nock.cleanAll();
  }
};
