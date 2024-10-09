import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  target: "es2022",
  entry: [
    "src/core/ReactNativeWebViewBridge.ts",
    "src/plugins/navigationPlugin.ts",
    "src/plugins/versionHandlingPlugin.ts",
  ],
  format: ["cjs", "esm"],
});
