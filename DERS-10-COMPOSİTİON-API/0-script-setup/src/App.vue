<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title">
  <button @click="inc"> {{ counter }}</button>
  <hr>
  <oddOrEven :counter="counter" @odd-event="alertMe" />
  <hr>
  <h1>User App</h1>
  <input type="text" v-model="state.personal.name">
  <input type="text" v-model="state.personal.lname">
  {{ state.personal }} 
</template>
<script setup>
// beforeCreate() created() ve data() yerine setup kullanılıyor
import { reactive, ref } from "vue";
import oddOrEven from "./components/oddOrEven.vue";
import Utils from "./composable/Utils";
import { watch } from "vue";
const { title, counter, inc, alertMe } = Utils();

//!UserApp
const state = reactive({
  personal: {
    name: "Büşra",
    lname: "Ay",
  },
  itemList: []
});
//const itemList = ref([]);

watch(
  () => JSON.parse(JSON.stringify(state.personal)),
  (newPersonal, oldPersonal) => {
    console.log(oldPersonal);
    console.log(newPersonal);
  }
);
console.log("state :>> ", state.personal.name);
</script>