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
export declare const mockRequest: ({ path, method, query, body, status, data, headers, times }: MockParams) => void;
export declare const mockPrepare: (host: string) => void;
export declare const mockCleanup: () => void;
export {};
//# sourceMappingURL=mock.d.ts.map