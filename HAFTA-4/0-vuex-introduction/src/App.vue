<template>
  <p>
    <!-- {{ $store.state.user }}
    {{ $store.state.permissions }} -->

    <!-- <ul>
      <li v-for="permission in $store.state.permissions" :key="permission">
          {{ permission }}
      </li>
    </ul> -->

    <!-- <ul>
      <li v-for="user in $store.state.userList" :key="user">
          {{ user }}
      </li>
    </ul> -->

    
  </p>

  <UserList />
  <NewUser />

</template>

<script>
import UserList from "@/components/UserList.vue";
import NewUser from "@/components/NewUser.vue";


export default {
  name: "App",
  created() {
    // console.log(this.$store.state.user);
    // console.log(this.$store.state.itemList.filter(i => i.type === "mobilya"));

    // console.log(this.$store.getters._woodItems)
    // console.log(this.$store.getters.activeUser)
    // console.log("this.activeUser :>> ",this.activeUser)
  },
  components: {
    NewUser,
    UserList,
  }
  
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
