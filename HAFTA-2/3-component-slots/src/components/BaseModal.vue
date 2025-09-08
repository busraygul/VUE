<template>
  <div class="container">
    <div class="header">
      <h1>
        <slot name="title" />
      </h1>
      <hr />
    </div>

    <div class="content my-2">
      <slot name="content"/>
    </div>
    <slot/>
    <hr />
    <div class="footer text-right">
      <button class="mr-2">Kapat</button>
      <button @click="onSave" class="green">Kaydet</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title","content","onSave"]
}
</script>
