// アロー関数
export const logMessage = (message: string): void => {
  console.log("Function basic sample 1:", message);
};

// 名前付き関数
export function logMessage2(message: string): void {
  console.log("Function basic sample 2:", message);
}

// 関数式
export const logMessage3 = function (message: string): void {
  console.log("Function basic sample 3:", message);
};

// アロー関数の省略記法
export const logMessage4 = (message: string): void => console.log("Function basic sample 4:", message);

// neverを使ってみる
export const alwaysThrowError = (message: string): never => {
  throw new Error(message);
};

// 呼び出しシグネチャ(省略記法)
type LogMessage = (message: string) => void;

export const logMessage5: LogMessage = (message) => {
  console.log("Function basic sample 5:", message);
};

// 呼び出しシグネチャ(完全記法)
type FullLogMessage = {
  (message: string): void;
};

export const logMessage6: LogMessage = (message) => {
  console.log("Function basic sample 6:", message);
};
