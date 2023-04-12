const routes = [
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/layouts/LError.vue"),
  },
  { path: "/", component: () => import("@/pages/PHome.vue") },
];

export default routes;
