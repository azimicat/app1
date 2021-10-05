const request = require("request");

// [openBD](https://openbd.jp/#contact)
var url = "https://api.openbd.jp/v1/get",
    isbn = "978-4-12-102408-4,978-4-7808-0204-7,978-4-908875-40-3",
    option = "pretty";
const requestUrl = url.concat("?isbn=", isbn, "&", option);

// リクエストURLの確認
console.log(requestUrl);

request(requestUrl, function (error, response, data) {
  if (error != null) {
    console.error("error:", error);
  }
  console.log("statusCode:", response && response.statusCode);
  const parsedData = JSON.parse(data);
  // console.log(parsedData); // 取得データの確認
  for(var i = 0; i<parsedData.length; i++) {
    // isbn1件ごとのデータを出力
    console.log(parsedData[i].summary);
  }
});
