const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0
        };
    }, methods: {
        //     inc(){
        //         this.counter ++;
        //     },
        //     dec(){
        //         this.counter --;
        //     }
        // 

        // getCounterResult(){
        //     console.log("Counter 1 çalıştı")
        //     return this.counter > 5 ? 'Büyük': 'Küçük'
        // },
        // getCounter2Result(){
        //     console.log("Counter 2 çalıştı")
        //     return this.counter2 > 5 ? 'Büyük': 'Küçük'
        // }
    }, computed: { //fonksiyon gibi çalışan değişkenler
        //sadece ilgi yeri değiştriyor bu yüzden iki fonk. aynı anda çalışmıyor

        getCounterResult() {
            console.log("Counter 1 çalıştı")
            return this.counter > 5 ? 'Büyük' : 'Küçük'
        },
        getCounter2Result() {
            console.log("Counter 2 çalıştı")
            return this.counter2 > 5 ? 'Büyük' : 'Küçük'
        }
    }, watch: { //computed da bulunan bir bilgiyi direkt izleyebilmemizi sağlar
        counter(newValue, oldValue){
            console.log("Counter: ",oldValue, "=>", newValue)
        },getCounterResult(newValue, oldValue) {
            console.log("Result: ",oldValue, "=>", newValue)
        }
    }
    

}).mount("#app")