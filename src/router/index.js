import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/" , component: Home},
    { path: "/contact", component: () => import("@/views/Contact.vue") },
    { path : "/skill", component : () => import("@/views/Skill.vue")},
    // { path : "/blog" , component : () => import("@/views/Blog.vue")},
    { path: "/:notFound(.*)", component: () => import("@/views/NotFound.vue") },
  ],
  linkActiveClass: "active-link",
});
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})
export default router;
