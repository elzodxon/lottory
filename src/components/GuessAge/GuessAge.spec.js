import { mount } from "@vue/test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, expect, test } from "vitest";

import GuessAge from "./GuessAge.vue";

test("mount component", async () => {
  expect(GuessAge).toBeTruthy();

  const wrapper = mount(GuessAge, {
    props: {
      title: "Guess User Age App",
    },
  });
  expect(wrapper.text()).toContain("Guess User Age App");
});

export const restHandlers = [
  rest.get("https://api.agify.io/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          age: 55,
          name: "tope",
        },
      ])
    );
  }),
];
const server = setupServer(...restHandlers);
// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
//  Close server after all tests
afterAll(() => server.close());
// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());

test("Button clicked", async () => {
  expect(GuessAge).toBeTruthy();

  const wrapper = mount(GuessAge, {
    props: {
      title: "Guess User Age App",
    },
  });
  const ac = await wrapper.get("button").trigger("click");
  expect(wrapper.vm.search).toEqual("");
});
