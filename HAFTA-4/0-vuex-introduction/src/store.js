
import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            name: "Büşra",
            lname: "Aygül",
            age: 33,
            address: {},
            password: 123,
            tc: 1111,
        },
        theme: "dark",
        fullName: "Büşra Aygül",
        permissions: [1, 2, 3, 4, 5],
        userList: [
            "Büşra",
            "Serap",
            "Hümeyra",
            "Beyza",
        ],
        itemList: [
            {id: 1, title: "Masa", type: "mobilya"},
            {id: 2, title: "Sandalye", type: "mobilya"},
            {id: 3, title: "TV", type: "elektronik"},
            {id: 4, title: "Monitor", type: "elektronik"},
            {id: 5, title: "Bardak", type: "plastik"},
        ]
    },
    mutations: { //senkron çalışır hızlı bir şekilde state i günceller.
        newItem(state, item){
            state.itemList.push(item);
        }
    },
    actions: {
        //asenkron çalışır
        newItem({commit}, item){
            console.log("item :>> ", item)
            setTimeout(() => {
                commit("newItem", item)
            }, 2000);

        }
    },
    getters: {
        _woodItems : state => state.itemList.filter(i => i.type === "mobilya"),
        _activeUser(state){
            const user = {
                ...state.user
            };
            delete user.password; //password bilgisini gizledik
            return user;
        }
    } 
}
);

export default store;