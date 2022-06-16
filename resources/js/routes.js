import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from "./components/Pages/HomePage.vue";
import ContactPage from "./components/Pages/ContactPage.vue";
import PageNotFound from "./components/Pages/PageNotFound.vue";
import PostDetails from "./components/Pages/PostDetails.vue";

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: "active_page",
    routes: [
        { path: "/", component: HomePage, name: "home" },
        { path: "/contacts", component: ContactPage, name: "contacts" },
        { path: "/posts/:id", component: PostDetails, name: "post-details" },
        { path: "*", component: PageNotFound, name: "notFound" },
    ],
});

export default router;
