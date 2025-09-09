import { createRouter, createWebHashHistory } from "vue-router";
//import HomePage from "@/views/HomePage";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: () => import("@/views/HomePage")
    },
    {
        name: "AboutPage",
        path: "/hakkimda",
        component: () => import("@/views/AboutPage") 
    },
    {
        name: "DetailsPage",
        path: "/detay/:userID",
        component: () => import("@/views/DetailsPage") 
    },

];

const router = createRouter({
    routes,
    //history: createWebHistory()
    history: createWebHashHistory()
});

export default router;