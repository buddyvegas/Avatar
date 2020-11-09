import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    format: "cjs",
    file: production ? "build/index.js" : "public/build/index.js",
  },
  plugins: [
    svelte({
      format: "cjs",
      customElement: true,
    }),

    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),

    commonjs(),

    !production &&
      serve({
        open: true,
        contentBase: "public",
      }),

    !production && livereload(),

    production &&
      terser({
        compress: {
          reduce_vars: false,
          sequences: false,
        },
      }),
  ],
};
