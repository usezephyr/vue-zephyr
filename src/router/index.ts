import { createWebHistory, createRouter } from "vue-router";
import routes from "vue-auto-routing";
import { createRouterLayout } from "vue-router-layout";
// import generatedRoutes from "./routes";

const RouterLayout = createRouterLayout(layout => {
  return import("@/views/layouts/" + layout + ".vue");
});

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: RouterLayout,
      children: routes
    }
  ]
});
