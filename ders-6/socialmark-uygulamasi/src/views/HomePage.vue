<template>
  <AppHeader />
  <div class="flex flex-row">

    <sideBar @category-changed="updateBookmarkList" />
    
    <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>
      Bookmark Bulunmamaktadır!
    </div>
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
      this.$appAxios.get("/user_bookmarks/?embed=bookmark&embed=user").then(user_bookmark_response => {
        console.log("user_bookmark_response :>> ", user_bookmark_response);
        this.$store.commit("setBookmarks", user_bookmark_response?.data);
      });

      //! Like olarak eklediklerimizi çekmek için user_likes üzerinden çekelim..
      this.$appAxios.get("/user_likes/?embed=bookmark&embed=user").then(user_likes_response => {
        this.$store.commit("setLikes", user_likes_response?.data);
      });
    },
    
  }
};
</script>