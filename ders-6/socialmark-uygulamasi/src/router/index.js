import store from "@/store";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: () => import("@/views/HomePage")
    }, {
        name: "LoginPage",
        path: "/login",
        component: () => import("@/views/LoginPage")
    }, {
        name: "RegisterPage",
        path: "/register",
        component: () => import("@/views/RegisterPage")
    }, {
        name: "NewBookmarkPage",
        path: "/newbookmark",
        component: () => import("@/views/NewBookmark")
    }, {
        name: "FavoritesPage",
        path: "/favorites",
        component: () => import("@/views/AccountPage")
    }, {
        name: "Likes",
        path: "/likes",
        component: () => import("@/views/AccountPage")
    }, {
        name: "Settings",
        path: "/settings",
        component: () => import("@/views/AccountPage")
    },

]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

router.beforeEach((to, _, next) => {
    const authRequiredRoutes = ["HomePage"];
    const authNotRequiredRoutes = ["LoginPage", "RegisterPage"];
    const _isAuthenticated = store.getters._isAuthenticated;

    if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false);

    if (authRequiredRoutes.indexOf(to.name) > -1) {
        if (_isAuthenticated) next();
        else next({ name: "LoginPage" });
    } else {
        next();
    }
});

export default router;