import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import ViteRestart from "vite-plugin-restart";

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: "./web/dist/",
    rollupOptions: {
      input: {
        app: "./src/js/main.ts",
      },
    },
  },
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    ViteRestart({
      reload: ["templates/**/*"],
    }),
  ],
  publicDir: path.resolve(__dirname, "/dist/"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  server: {
    host: "0.0.0.0",
    origin: "http://localhost:3000",
    port: 3000,
    strictPort: true,
    fs: {
      strict: false,
    },
  },
}));
