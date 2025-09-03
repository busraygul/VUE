<template>
    <div class="container-sm">
            <h3 class="mb-2">{{ counter }}</h3>
            <button @click="counter++" class="green">+</button>
            <button @click="counter--" class="red">-</button>
        </div>
</template>

<script>
export default {
  data(){
    return {
      counter: 0,
    };
  },
};
</script>