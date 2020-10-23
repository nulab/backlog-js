import * as Error from './error';
import * as qs from 'qs';

export default class Request {

  constructor(private configure: {
    host: string, apiKey?: string, accessToken?: string, timeout?: number
  }) { }

  public get<T>(path: string, params?: any): Promise<T> {
    return this.request({ method: 'GET', path, params }).then<T>(this.parseJSON);
  }

  public post<T>(path: string, params?: any): Promise<T> {
    return this.request({ method: 'POST', path, params }).then<T>(this.parseJSON);
  }

  public put<T>(path: string, params: any): Promise<T> {
    return this.request({ method: 'PUT', path, params }).then<T>(this.parseJSON);
  }

  public patch<T>(path: string, params: any): Promise<T> {
    return this.request({ method: 'PATCH', path, params }).then<T>(this.parseJSON);
  }

  public delete<T>(path: string, params?: any): Promise<T> {
    return this.request({ method: 'DELETE', path, params }).then<T>(this.parseJSON);
  }

  public request(options: {
    method: string,
    path: string,
    params?: Params | FormData
  }): Promise<Response> {
    const { method, path, params = <Params>{} } = options;
    const { apiKey, accessToken, timeout } = this.configure;
    const query: Params = apiKey ? { apiKey: apiKey } : {};
    const init: RequestInit = { method: method, headers: {} };
    if (timeout) {
      init['timeout'] = timeout;
    }
    if (!apiKey && accessToken) {
      init.headers['Authorization'] = 'Bearer ' + accessToken;
    }
    if (typeof window !== 'undefined') {
      init.mode = 'cors';
    }
    if (method !== 'GET') {
      if (params instanceof FormData) {
        init.body = <FormData>params
      } else {
        init.headers['Content-type'] = 'application/x-www-form-urlencoded';
        init.body = this.toQueryString(params);
      }
    } else {
      Object.keys(params).forEach(key => query[key] = params[key]);
    }
    const queryStr = this.toQueryString(query);
    const url = `${this.restBaseURL}/${path}` + (queryStr.length > 0 ? `?${queryStr}` : '');
    return fetch(url, init).then(this.checkStatus);
  }

  public checkStatus(response: Response): Promise<Response> {
    return new Promise((resolve, reject) => {
      if (200 <= response.status && response.status < 300) {
        resolve(response);
      } else {
        response.json().then(data => {
          if (response.status === 401) {
            reject(new Error.BacklogAuthError(response, data));
          } else {
            reject(new Error.BacklogApiError(response, data));
          }
        }).catch(err => reject(new Error.UnexpectedError(response)));
      }
    });
  }

  public parseJSON<T>(response: Response): Promise<T> {
    return response.json();
  }

  private toQueryString(params: Params): string {
    return qs.stringify(params, { arrayFormat: 'brackets' });
  }

  public get webAppBaseURL(): string {
    return `https://${this.configure.host}`;
  }

  public get restBaseURL(): string {
    return `${this.webAppBaseURL}/api/v2`;
  }

}

export type Params = { [index: string]: number|string|number[]|string[]; };
