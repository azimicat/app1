import { OpenDBDescriptiveData } from "./typedef";
import { client } from "./client";

const main = async () => {
  // [openBD](https://openbd.jp/#contact)
  var url = "https://api.openbd.jp/v1/get",
    isbn = "978-4-12-102408-4,978-4-7808-0204-7,978-4-908875-40-3",
    option = "pretty";
  const requestUrl = url.concat("?isbn=", isbn, "&", option);

  // リクエストURLの確認
  console.log("リクエストURL:", requestUrl);

  client.get(requestUrl, function (response: null | string) {
    if (response === null) {
      console.error("error:", "undefined");
      return;
    }
    console.log(response);
    const itemList: OpenDBDescriptiveData[] = JSON.parse(response);
    for (var i = 0; i < itemList.length; i++) {
      // isbn1件ごとのデータを出力
      var data: any = itemList[i];
      // console.log(data.summary);
    }
  });
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
