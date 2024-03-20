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
// import { logMessage, logMessage2, logMessage3, logMessage4, alwaysThrowError } from "./function/basic";

// logMessage("Hello TypeScript!");
// logMessage2("Hello TypeScript!!");
// logMessage3("Hello TypeScript!!!");
// logMessage4("Hello TypeScript!!!!");
// alwaysThrowError("スローエラー");

import { isUserSignedIn, isUserSignedIn2 } from "./function/parameters";

isUserSignedIn("ABC", "ameria");
isUserSignedIn("111");

isUserSignedIn2("ABC");
