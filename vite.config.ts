import vue from "@vitejs/plugin-vue";
import ViteRestart from "vite-plugin-restart";

export default ({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  build: {
    manifest: true,
    outDir: "./dist/",
    rollupOptions: {
      input: {
        app: "./src/main.ts",
      },
    },
  },
  server: {
    host: "0.0.0.0",
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
      reload: ["./templates/**/*"],
    }),
  ],
});
