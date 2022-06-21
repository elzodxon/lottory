import { app } from "@storybook/vue3";
import "../src/styles/index.css";
import definePlugins from "../src/plugins";

definePlugins(app);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
