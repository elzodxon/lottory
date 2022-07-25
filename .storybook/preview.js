import "../src/styles/index.css";

import { app } from "@storybook/vue3";

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
