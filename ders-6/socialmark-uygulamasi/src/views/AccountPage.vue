<template>
  <AppHeader />
  <div class="flex flex-row">
    <SideBar />

    
    <!-- <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>
      Bookmark Bulunmamaktadır!
    </div> -->
  </div>
</template>

<script>
import SideBar from '@/components/Account/SideBar.vue';
import appHeader from '../components/Shared/appHeader';
export default {
  components: {
    SideBar,
    appHeader
  },
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks?_embed=category&_embed=user").then(bookmark_list_response => {
      console.log("bookmark_list_response :>> ", bookmark_list_response);
      this.bookmarkList = bookmark_list_response?.data || [];
    });
  },
  
}
</script>