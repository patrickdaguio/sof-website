import vue from "@vitejs/plugin-vue";
import ViteRestart from "vite-plugin-restart";

export default ({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  build: {
    manifest: true,
    outDir: "../cms/web/dist/",
    rollupOptions: {
      input: {
        app: "./src/js/app.ts",
      },
    },
  },
  server: {
    fs: {
      strict: false,
    },
    origin: "http://localhost:3000",
    port: 3000,
    strictPort: true,
  },
  plugins: [
    vue(),
    ViteRestart({
      reload: ["../cms/templates/**/*"],
    }),
  ],
});
