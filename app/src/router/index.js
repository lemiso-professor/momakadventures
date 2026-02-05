import { createRouter, createWebHashHistory } from "vue-router";
import {
  HomeView,
  SafarisView,
  BeacholidaysView,
  AdventuresView
} from "../views";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/safaris", name: "safaris", component: SafarisView },
  { path: "/beacholidays", name: "beacholidays", component: BeacholidaysView },
  { path: "/adventures", name: "adventures", component: AdventuresView },

];

/** Initialize here */
const router = createRouter({
 history: createWebHashHistory(),  routes,
  // ADD THIS SECTION BELOW:
  scrollBehavior(to, from, savedPosition) {
    // If the user clicked the back/forward button, keep their scroll position
    if (savedPosition) {
      return savedPosition;
    } else {
      // Otherwise, always scroll to the top of the page
      return { top: 0 };
    }
  },
});

export default router;
 