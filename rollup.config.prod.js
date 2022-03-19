import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify";

let banner = `/*
 * charts for WeChat small app v1.0
 *
* https://github.com/cjsongcn/wx-charts
* 2022-03-219
 *
 * Designed and built with all the love of Web
 */
`;

export default {
  entry: "src/app.js",
  format: "cjs",
  dest: "dist/index.js",
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    uglify(),
  ],
  banner: banner,
};
