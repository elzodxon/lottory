import "@/styles/index.css";

import { createPinia } from "pinia";
import { createApp, h } from "vue";

import definePlugins from "@/plugins";
import router from "@/router/index";

import App from "./App.vue";

export const app = createApp({
  render: () => h(App),
});

app.use(router);
app.use(createPinia());
definePlugins(app);

app.mount("#app");
