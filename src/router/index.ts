import { createWebHistory, createRouter } from "vue-router";
import routes from "vue-auto-routing";
import { createRouterLayout } from "vue-router-layout";
// import generatedRoutes from "./routes";

const RouterLayout = createRouterLayout(layout => {
  return import("@/views/layouts/" + layout + ".vue");
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: RouterLayout,
      children: routes
    }
  ]
});


router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = to.path !== '/' ? `${nearestWithTitle.meta.title} | Vue Zephyr` : nearestWithTitle.meta.title;
  if(!nearestWithTitle) document.title = 'Vue Zephyr'; // Fall back if there is no title set

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el?.parentNode?.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map((tagDef: { [x: string]: string; }) => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach((tag: Node) => document.head.appendChild(tag));

  next();
});

export default router;