import { Response, Reference } from "./typedef";
// import { ApiClient, Client, HttpMethod, QueryParameters } from "./client";

// export interface RequestOption {
//   retries?: number;
//   timeout?: number;
//   deadline?: number;
// }

// const apiClientImpl: ApiClient<RequestOption> = {
//   request: (
//     httpMethod: HttpMethod,
//     url: string,
//     headers: ObjectLike | any,
//     requestBody: ObjectLike | any,
//     queryParameters: QueryParameters | undefined,
//     options?: RequestOption,
//   ): Promise<any> => {
//     const query = generateQueryString(queryParameters);
//     const requestUrl = query ? url + "?" + encodeURI(query) : url;

//     return new Promise((resolve, reject) => {
//       const agent = Superagent;
//       const request = agent(httpMethod, requestUrl);
//       if (headers) {
//         request.set(headers);
//       }
//       if (requestBody) {
//         request.send(requestBody);
//       }
//       if (options) {
//         options.retries && request.retry(options.retries);
//         if ((options.timeout && options.timeout > 0) || (options.deadline && options.deadline > 0)) {
//           request.timeout({ response: options.timeout, deadline: options.deadline });
//         }
//       }
//       request.end((error, response) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(response.body);
//         }
//       });
//     });
//   },
// };

const main = async () => {
  // [openBD](https://openbd.jp/#contact)
  var url = "https://api.openbd.jp/v1/get",
    isbn = "978-4-12-102408-4,978-4-7808-0204-7,978-4-908875-40-3",
    option = "pretty";
  const requestUrl = url.concat("?isbn=", isbn, "&", option);

  // リクエストURLの確認
  console.log(requestUrl);

  const Client = require("node-rest-client").Client;

  const client = new Client();

  client.get(requestUrl, function (response: null | string) {
    if (response === null) {
      console.error("error:", "undefined");
      return;
    }
    const parsedResponse: Reference = JSON.parse(response);
    // console.log("statusCode:", parsedResponse.statusCode);
    console.log(parsedResponse);
    return;
    // console.log(parsedData); // 取得データの確認
    // for (var i = 0; i < responseDate.length; i++) {
    //   // isbn1件ごとのデータを出力
    //   var data: any = responseDate[i];
    //   console.log(data.summary);
    // }
  });
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
