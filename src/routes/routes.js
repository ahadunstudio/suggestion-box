const routes = [
  {
    path: "/",
    redirect: "/suggestions",
  },
  {
    path: "/",
    component: () => import("~/layouts/site.vue"),
    children: [
      {
        path: "suggestions",
        component: () => import("~/pages/suggestion/index.vue"),
        meta: { title: "Pejuang Rupiah | Bank Indonesia" },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("~/pages/error/not-found.vue"),
  },
];

export { routes };
