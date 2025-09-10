<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Login</h3>
    <input @click="onSubmit" v-model="userData.username" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
    <input @click="onSubmit" v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
    <button class="default-button">Giriş yap</button>
    <span class="text-center mt-3 text-sm">
      Üye değilim,
      <router-link :to="{ name: 'RegisterPage' }" class="text-red-900 hover:text-black">
        Üye olmak istiyorum!
      </router-link>
    </span>
  </div>

</template>
<script>
import CryptoJS from "crypto-js";

export default {
  data() {
    return {
      userData: {
        username: null,
        password: null
      }
    }
  }, methods: {
    onSubmit() {
      // GET /posts?title=json-server&author=typicode
      const password = CryptoJS.AES.encrypt(this.userData.password, this.$store.getters._saltKey).toString();

      this.$appAxios.get(`/users?username= ${this.userData.username}&password=${password}`).then(login_response => {
        console.log("login_response :>> ", login_response);
      })
      .catch(e=> console.log(e))
      // .finally(() => this.loader = false);
    }
  }
}
</script>
