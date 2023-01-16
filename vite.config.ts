import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import vueTypeImports from "vite-plugin-vue-type-imports";

export default defineConfig({
  base: "/",
  plugins: [vue(), vueTypeImports(), eslintPlugin()],
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: {
      provider: "istanbul",
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
