import { Story } from "@storybook/vue3";

import SBasicButton, { Props } from "./SBasicButton.vue";
import { S_BASIC_BUTTON_SIZES } from "./types";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Basic Button",
  component: SBasicButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: {},
    size: {
      control: { type: "select" },
      options: S_BASIC_BUTTON_SIZES,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: Story<Props> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SBasicButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<SBasicButton v-bind="args" />',
});

export const Button = Template.bind({});
Button.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
