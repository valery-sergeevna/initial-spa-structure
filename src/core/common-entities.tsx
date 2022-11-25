export interface Status {
    value: string;
    label: string;
}

enum AllowedMethods {
    "post", "POST", "get", "GET", "put", "PUT"
}

export type Body = string | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array> | null | undefined;

export type Method = keyof typeof AllowedMethods;

export type _Headers = Headers | string[][] | Record<string, string> | undefined;

export interface Props {
    url: string;
    method?: Method;
    headers: _Headers,
    body?: Body
}
