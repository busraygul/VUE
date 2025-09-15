<template>
  <AppHeader />

  <div class="flex flex-row">

    <sideBar @category-changed="updateBookmarkList" />
    
    <app-bookmark-list :items="bookmarkList" />
    
  </div>
</template>

<script>
import sideBar from "@/components/HomePage/sideBar";
export default {
  components: {
    sideBar,
  },
  data(){
    return {
      bookmarkList : []
    }
  },
  created(){
         this.$appAxios.get("/bookmarks?_embed=category&_embed=user").then(bookmark_list_response => {
        console.log("bookmark_list_response :>> ", bookmark_list_response);
        this.bookmarkList = bookmark_list_response?.data || [];
      });
  },
  methods: {
    updateBookmarkList(categoryId){
      const url = categoryId ? `/bookmarks?_embed=category&_embed=user&categoryId=${categoryId}`: `/bookmarks?_embed=category&_embed=user`
      this.$appAxios.get(url).then(bookmark_list_response => {
        console.log("bookmark_list_response :>> ", bookmark_list_response);
        this.bookmarkList = bookmark_list_response?.data || [];
      });
    }
  }
};
</script>