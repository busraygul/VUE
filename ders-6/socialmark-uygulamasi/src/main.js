import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store';
import { appAxios } from "@/utils/appAxios";

import "@/assets/style.css"

import AppHeader from "@/components/Shared/appHeader";
import AppBookmarkList from "@/components/Shared/appBookmarkList/indexPage.vue";


const app = createApp(App);

app.component("AppHeader", AppHeader);
app.component("AppBookmarkList", AppBookmarkList);

app.config.globalProperties.$appAxios = appAxios;
app.use(router);
app.use(store)
app.mount('#app');
