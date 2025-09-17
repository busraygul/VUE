<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title">
  <button @click="inc"> {{ counter }}</button>
  <hr>
  <oddOrEven :counter="counter" @odd-event="alertMe" />
</template>

<script setup>
import oddOrEven from "./components/oddOrEven.vue";
import Utils from "./composable/Utils";

const { title, counter, inc, alertMe } = Utils();
</script>