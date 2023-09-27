import { createRouter, createWebHistory } from "vue-router";

import routes from "@/router/routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const password = prompt("Enter password");

  if (password === "lotto-motto") {
    next();
  } else {
    next(false);
  }
});

export default router;
