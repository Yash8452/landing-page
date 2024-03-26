import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: false
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
  defaultWebpackOptions: {
    module: {
      rules: []
    }
  }
});
