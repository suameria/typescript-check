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


6. install ESLint & Prettier

ESLint
- JavaScriptのための静的検証ツール
- ファイル内のバグチェックやコーディングスタイルの一貫性を保つ

Prettier
- コードフォーマッター
- ルールに則ってソースコードを整形してくれる
- プロジェクトごとにルールを設定する

npm install --save-dev eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin

eslint-config-prettier eslintとprettierを併用する際に使う

    eslintのコマンドを走らせたら下記エラーが出た、どうやらprettierの/以下のパッケージはすべて統合されたらしいので、eslintrc.jsのextendsにはprettierのみの記述でOKらしい！
    概要は下記エラーから参照
    Error: Cannot read config file: /home/node/app/typescript-check/node_modules/eslint-config-prettier/@typescript-eslint.js
    Error: "prettier/@typescript-eslint" has been merged into "prettier" in eslint-config-prettier 8.0.0. See: https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21
    Referenced from: /home/node/app/typescript-check/.eslintrc.js

@typescript-eslint/eslint-plugin ESLint(本来はJSのチェックだが)でTypeScriptのチェックを行う

@typescript-eslint/parser ESLintでTypeScriptを解析できるようにする


7. 存在しないことを表現する型

null: 値が欠如していることを表す
undefined: 初期化されておらず値が割り当てられていないことを表す


8. TypeScriptはanyを回避するゲーム

any: どんな型でも許容する=全く安全ではない
unknown: どんな型になるのか不明
unknownは代入した値によって型が変化する
anyは絶対に使わないようにする


```
