import * as Error from './error';

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
  }): Promise<IResponse> {
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
      init.body = params instanceof FormData ? <FormData>params : this.toFormData(params);
    } else {
      Object.keys(params).forEach(key => query[key] = params[key]);
    }
    const qs = this.toQueryString(query);
    const url = `${this.restBaseURL}/${path}` + (qs.length > 0 ? `?${qs}` : '');
    return fetch(url, init).then(this.checkStatus);
  }

  public checkStatus(response: IResponse): Promise<IResponse> {
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

  public parseJSON<T>(response: IResponse): Promise<T> {
    return response.json();
  }

  private toFormData(params: Params): FormData {
    return Object.keys(params).reduce((result, key) => {
      const value = params[key];
      if (!value) {
        return result;
      }
      if (Array.isArray(value)) {
        (<any[]> value).forEach(v => result.append(`${key}[]`, v));
      } else {
        result.append(key, value);
      }
      return result;
    }, new FormData());
  }

  private toQueryString(params: Params): string {
    return Object.keys(params).reduce((result, key) => {
      const value = params[key];
      if (!value) {
        return result;
      }
      if (Array.isArray(value)) {
        (<any[]> value).forEach(v => result.push(`${key}[]=${v}`));
      } else {
        result.push(`${key}=${value}`);
      }
      return result;
    }, []).join('&');
  }

  public get webAppBaseURL(): string {
    return `https://${this.configure.host}`;
  }

  public get restBaseURL(): string {
    return `${this.webAppBaseURL}/api/v2`;
  }

}

export type Params = { [index: string]: number|string|number[]|string[]; };
