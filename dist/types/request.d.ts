export default class Request {
    private configure;
    constructor(configure: {
        host: string;
        apiKey?: string;
        accessToken?: string;
        timeout?: number;
    });
    get<T>(path: string, params?: any): Promise<T>;
    post<T>(path: string, params?: any): Promise<T>;
    put<T>(path: string, params: any): Promise<T>;
    patch<T>(path: string, params: any): Promise<T>;
    delete<T>(path: string, params?: any): Promise<T>;
    request(options: {
        method: string;
        path: string;
        params?: Params | FormData;
    }): Promise<Response>;
    checkStatus(response: Response): Promise<Response>;
    parseJSON<T>(response: Response): Promise<T>;
    private toQueryString;
    get webAppBaseURL(): string;
    get restBaseURL(): string;
}
export type Params = {
    [index: string]: number | string | number[] | string[];
};
