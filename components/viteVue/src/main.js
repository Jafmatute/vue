/** @format */

import { createApp } from "vue";
import App from "./App.vue";

// Properties Global
const app = createApp(App);

app.config.globalProperties.$filters = {
  toUpperCaseLocale(value) {
    return value.toUpperCase();
  },
};

app.mount("#app");
