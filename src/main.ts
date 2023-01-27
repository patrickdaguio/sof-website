import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR");
  });
}

createApp(App).mount("#app");
