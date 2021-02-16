import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import multi from "@rollup/plugin-multi-entry";

export default {
  input: "spec/**/*.spec.js",
  output: {
    sourcemap: true,
    format: "cjs",
    name: "tests",
    file: "bundle/bundle-tests.js",
  },
  plugins: [
    multi(),
    svelte({ css: true, dev: true }),
    resolve({
      only: [/^svelte-/],
    }),
    commonjs(),
  ],
  onwarn (warning, warn) {
    if (warning.code === "UNRESOLVED_IMPORT") return;
    warn(warning);
  }
};
