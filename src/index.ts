// import World from "./world";

// const root = document.getElementById("root");

// const world = new World("Hello World!");
// world.sayHello(root);

// 03. 基本の型定義
// import { anySample, notExistSample, primitiveSample, unknownSample } from "./basic";

// anySample();
// notExistSample();
// primitiveSample();
// unknownSample();

// 04. 関数の型定義
import {
  logMessage,
  logMessage2,
  logMessage3,
  logMessage4,
  alwaysThrowError,
  logMessage5,
  logMessage6,
} from "./function/basic";

logMessage("Hello TypeScript!");
logMessage2("Hello TypeScript!!");
logMessage3("Hello TypeScript!!!");
logMessage4("Hello TypeScript!!!!");
// エラーを起こすと下の処理は実行されないことに注意
// alwaysThrowError("スローエラー");
logMessage5("呼び出しシグネチャ省略記法");
logMessage6("呼び出しシグネチャ完全記法");

// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from "./function/parameters";

// // isUserSignedIn("ABC", "ameria");
// // isUserSignedIn("111");
// // isUserSignedIn2("ABC");
// const sum: number = sumProductsPrice(1, 2, 3, 4, 5);
// console.log("Function parameters sample5:", sum);
