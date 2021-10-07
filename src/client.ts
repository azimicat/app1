export type endpoint = "https://api.openbd.jp/";

export type HttpMethod = "GET" | "PUT" | "POST" | "DELETE" | "OPTIONS" | "HEAD" | "PATCH" | "TRACE";
export type SuccessResponses = "";
export interface QueryParameter {
    value: any;
    style?: "form" | "spaceDelimited" | "pipeDelimited" | "deepObject";
    explode: boolean;
  }
export interface QueryParameters {
    [key: string]: QueryParameter;
  }
export class Client<RequestOption> {
    constructor(private apiClient: ApiClient<RequestOption>, private baseUrl: string) {}
  }

export interface ApiClient<RequestOption> {
    request: <T = SuccessResponses>(
      httpMethod: HttpMethod,
      url: endpoint,
      queryParameters: QueryParameters | undefined,
      options?: RequestOption,
    ) => Promise<T>;
  }
