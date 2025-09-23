<script setup>
import { onErrorCaptured, ref, defineAsyncComponent } from "@vue/runtime-core";
// import todosPage from "./components/todosPage.vue";
// import usersPage from "./components/usersPage.vue";
const err = ref(null);
const todosPage = defineAsyncComponent(() => import("./components/todosPage.vue"));
const usersPage = defineAsyncComponent(() => import("./components/usersPage.vue"));
onErrorCaptured((e) => {
  err.value = e;
  return true;
});
</script>

<template>
  <span v-if="err" class="error"> {{ err }}</span>
  <suspense v-else>
    <template #default>
      <div>
        <usersPage />
        <hr />
        <todosPage />
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>

<style scoped>
.error {
  color: red;
  font-size: 20px;
}
</style>