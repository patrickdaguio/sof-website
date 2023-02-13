import { createApp } from "vue";
import "@/css/main.pcss";
import components from "@/js/components/_components";

if (import.meta.hot) import.meta.hot.accept();

const app = createApp({
  components,
  compilerOptions: {
    delimiters: ["${", "}"],
  },
});

app.mount("#app");
