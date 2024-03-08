# typescript-check

- TypeScript

```text

cf.
https://www.youtube.com/playlist?list=PLX8Rsrpnn3IW0REXnTWQp79mxCvHkIrad

- tsconfig
- Webpack

1. Build from TypeScript files to JavaScript files

[~.ts, ~.ts ...]
=== TS(Compile) ===> [~.js, ~.js ...]
=== bundle.js(one file) ===> JS


2. package.json

npm init


3. install packages
npm install --save-dev typescript ts-loader webpack webpack-cli webpack-dev-server

typescript TypeScriptの構文をJavaScriptの構文に変換するコンパイラ

ts-loader　Webpackと連動してTypeScriptコンパイラを起動

webpack 複数のファイルを1つにまとめる

webpack-cli コマンドラインでwebpackを使う

webpack-dev-server Webpackのビルド 開発用Webサーバーの起動 ホットリロード


4. create a webpack.config.js file

webpackの設定を記述していく


5. create a tsconfig.json file

tsc --init

* bash: tsc: command not found
もしtscコマンドがなかったら
npm install -g typescript サーバーにtscコマンドが使えるようにインストール必要あり



```
