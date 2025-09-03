<template>
<app-header/>
  <div class="container">
    <h3>Bu Benim İlk Vue CLI Uygulamam</h3>
    <p>Bugün component ve Vue CLI öğreniyoruz</p>
  </div>
  <CounterItem></CounterItem>

  <!-- <benim-guzel-sayacim></benim-guzel-sayacim> -->
  <!-- <CounterItem/>

    <counter-item/> 

  isimlendirmede vue direkt eşlediği için tıpatıp aynısı olmasına gerek yok-->

</template>

<script>
  import CounterItem from "@/components/CounterItem";
  export default {
    components: {
      CounterItem: CounterItem, //key valuesi aynı  olduğu için CounterItem yazsak da yeterli olur
      // benim-guzel-sayacim: CounterItem  istediğim şekilde tanımlayabilirim. 
      // sadece sağ taraf import ederken kullandığımla aynı olmalı
    }
}
</script>