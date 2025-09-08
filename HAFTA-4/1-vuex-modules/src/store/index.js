import { createStore } from "vuex";
import musteri from "./modules/contact";
import taskmanager from "./modules/taskmanager";

const store = createStore({
    state: {
        mainName: "kablosuzkedi"
    },
    modules: {
        musteri,
        taskmanager,
    }
});

export default store;