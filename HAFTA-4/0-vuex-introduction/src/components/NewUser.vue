<template>
  <button @click="updateName">Yeni Item Ekle</button>
</template>

<script>
export default {
  methods: {
    updateName() {
      const userData = {
        id: new Date().getTime(),
        title: "Raf",
        type: "mobilya",
      };

      //commit ile mutations ı çağırabiliyoruz.
      this.$store.commit("newItem", userData);
      //this.$store.state.itemList.push(userData)
      //this.$store.state.fullName = new Date().getTime();

      //dispatch ile actions ı çağırabiliyoruz
      this.$store.dispatch("newItem", userData)
    },
  },
};
</script>