import { join } from "path";

export const entry = {
  bundle: "./src/index.ts",
};

export const output = {
  path: join(__dirname, "dist"),
  // entry:{bundle:}のbundleが名前となるのでbundle.js
  filename: "[name].js",
};

export const resolve = {
  extensions: [".ts", ".js"],
};

export const devServer = {
  contentBase: join(__dirname, "dist"),
  open: true,
};

export const module = {
  rules: [
    {
      loader: "ts-loader",
      test: /\.ts$/,
    },
  ],
};
