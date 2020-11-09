import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import autoPreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";

const production = !process.env.ROLLUP_WATCH;

function typeCheck() {
  return {
    writeBundle() {
      require("child_process").spawn("svelte-check", {
        stdio: ["ignore", "inherit", "inherit"],
        shell: true,
      });
    },
  };
}

export default {
  input: "src/main.ts",
  output: {
    format: "cjs",
    file: production ? "build/index.js" : "public/build/index.js",
  },
  plugins: [
    // typeCheck(),

    svelte({
      format: "cjs",
      customElement: true,
      preprocess: autoPreprocess(),
    }),

    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),

    commonjs(),

    typescript(),

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
