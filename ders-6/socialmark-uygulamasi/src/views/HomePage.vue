<template>
  <AppHeader />

  <div class="flex flex-row">

    <sideBar />
    
    <app-bookmark-list />
    
  </div>
</template>

<script>
import sideBar from "@/components/HomePage/sideBar";
export default {
  components: {
    sideBar,
  },
};
</script>