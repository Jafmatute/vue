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

//Define directive
app.directive("background", {
  beforeMount(el, binding, vnode, prevVnode) {
    console.log("BIND", binding);
    el.style.background = binding.value;
  },
});

app.mount("#app");
