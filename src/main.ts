import "@/styles/index.css";

import { createApp } from "vue";

import definePlugins from "@/plugins";

import App from "./App.vue";

const app = createApp(App);
// Define your plugins inside @/plugins.ts. It is required for storybook support.
definePlugins(app);
app.mount("#app");
