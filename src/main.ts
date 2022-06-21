import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/index.css";
import definePlugins from "@/plugins";

const app = createApp(App);
// Define your plugins inside @/plugins.ts. It is required for storybook support.
definePlugins(app);
app.mount("#app");
