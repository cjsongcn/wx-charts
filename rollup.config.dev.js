import babel from "rollup-plugin-babel";

let banner = `/*
 * charts for WeChat small app v1.0
 *
 * https://github.com/cjsongcn/wx-charts
 * 2022-03-21
 *
 * Designed and built with all the love of Web
 */
`;

export default {
  entry: "src/app.js",
  format: "cjs",
  dest: "example/components/index.js",
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
  ],
  banner: banner,
};
