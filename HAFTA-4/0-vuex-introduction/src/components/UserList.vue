<template>
    <ul>
      <li v-for="(item, index) in woodItems" :key="index">
          {{ item.title }}
      </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    //computed: mapGetters(["woodItems", "activeUser"])
  computed: {
    // ...mapGetters(["woodItems", "activeUser"])

    ...mapGetters({
      woodItems : "_woodItems",
      activeUser : "_activeUser"
    })
    // customComputed(){

    // }
  }
}
</script>