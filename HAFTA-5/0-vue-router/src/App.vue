<template>
<!-- <a href="/">Anasayfa</a>
<a href="/hakkimda">Hakkımda</a> -->

<div class="container">
  <div mb-2>
    <router-link class="nav-link" active-class="active" to="/">
  Anasayfa
</router-link>

<router-link class="nav-link" active-class="active" to="/hakkimda">
  Hakkımda
</router-link>

<router-link class="nav-link" active-class="active" to="/detay/123">
  Detay
</router-link>
  </div>
  

  <router-view></router-view>
</div>

</template>

<style>
  .nav-link {
    padding: 5px 10px;
    text-decoration: none;
    border: 1px solid #fa6558;
    color: #fa6558;
    display: inline-block;
    margin-right: 5px;
    margin-top: 15px !important;
  }

  .active{
    background-color: #fa6558;
    color: #fff;
  }
</style>