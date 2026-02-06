import { createRouter, createWebHashHistory } from "vue-router";
import {
  HomeView,
  SafarisView,
  BeacholidaysView,
  AdventuresView,
  PackagesView,
  GalleryView,  
  ReviewView,
  ContactView,
  AirView,
  BookingView,
} from "../views";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/safaris", name: "safaris", component: SafarisView },
  { path: "/beacholidays", name: "beacholidays", component: BeacholidaysView },
  { path: "/adventures", name: "adventures", component: AdventuresView },
  { path: "/packages", name: "packages", component: PackagesView },
  { path: "/gallery", name: "gallery", component: GalleryView },
  { path: "/reviews", name: "reviews", component: ReviewView },
  { path: "/contact", name: "contact", component: ContactView },
  { path: "/airbnb", name: "airbnb", component: AirView },
  { path: "/booking", name: "booking", component: BookingView },
  { path: "/signin", name: "signin", component: () => import("../views/SigninView.vue") },
  { path: "/register", name: "register", component: () => import("../views/RegisterView.vue") },
  { path: "/dashboard", name: "dashboard", component: () => import("../views/DashboardView.vue") },
  { 
  path: "/admin", 
  component: () => import("../components/auth/dashboard/AdminView.vue"),
  // Optional: Add a "Guard" so only admins can enter
  beforeEnter: (to, from, next) => {
    const authStore = useAuthStore();
    if (authStore.profile?.role === 'admin') next();
    else next('/signin');
  }
}

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
 