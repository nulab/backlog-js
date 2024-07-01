export declare class BacklogError extends Error {
    private _name;
    private _url;
    private _status;
    private _body;
    private _response;
    constructor(name: BacklogErrorNameType, response: Response, body?: {
        errors: BacklogErrorMessage[];
    });
    get name(): BacklogErrorNameType;
    get url(): string;
    get status(): number;
    get body(): {
        errors: BacklogErrorMessage[];
    };
    get response(): Response;
}
export declare class BacklogApiError extends BacklogError {
    constructor(response: Response, body?: {
        errors: BacklogErrorMessage[];
    });
}
export declare class BacklogAuthError extends BacklogError {
    constructor(response: Response, body?: {
        errors: BacklogErrorMessage[];
    });
}
export declare class UnexpectedError extends BacklogError {
    constructor(response: Response);
}
export interface BacklogErrorMessage {
    message: string;
    code: number;
    errorInfo: string;
    moreInfo: string;
}
export type BacklogErrorNameType = 'BacklogApiError' | 'BacklogAuthError' | 'UnexpectedError';
