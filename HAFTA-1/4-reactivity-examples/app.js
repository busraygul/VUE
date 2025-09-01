const app = Vue.createApp({
    data(){
        return{
            search: "",
            itemList: ["elma","armut","çilek","kiraz"],
            //filteredList: [],
        }
    },methods: {
        searchList(){
            //this.filteredList = this.itemList.filter(i => i.includes(this.search))
        },
    },computed: { //bunun sayesinde direkt yazarken filtreleniyor
        filteredList(){
            return this.itemList.filter((i) => i.includes(this.search))
        }
    }
}).mount("#app")

// app.mount("#app") //böyle de tanımlanabilir