import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store';
import { appAxios } from "@/utils/appAxios";

import "@/assets/style.css"

import AppHeader from "@/components/Shared/appHeader";
import AppBookmarkList from "@/components/Shared/appBookmarkList/indexPage.vue";

import io from 'socket.io-client';
const socket = io("http://localhost:2025");

const app = createApp(App);

app.component("AppHeader", AppHeader);
app.component("AppBookmarkList", AppBookmarkList);

app.config.globalProperties.$appAxios = appAxios;
app.config.globalProperties.$socket = socket;
app.use(router);
app.use(store)
app.mount('#app');
