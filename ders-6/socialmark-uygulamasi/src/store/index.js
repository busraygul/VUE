import { createStore } from "vuex";

export default createStore ({
    state: {
        user : null,
        saltKey: "booklike123!456?"
    },
    getters: {
        _isAuthenticated : state => state.user !== null,
        _getCurrentUser(state) { //şifresiz olarak user ı return ettik
            const user = state.user;
            delete user?.password; //optional chaining ile userin içinde password var ise sil demiş olduk.
            return user;
        },
         _saltKey : state => state.saltKey
    }
});