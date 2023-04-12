import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";

import Button from "@/components/Button/SButton.vue";

test("mount", async () => {
  expect(Button).toBeTruthy();

  const wrapper = mount(Button, {
    props: {
      text: "Button",
    },
  });

  expect(wrapper.text()).toContain("Button");
});
