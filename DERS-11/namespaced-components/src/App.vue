<script setup>
  // import inputPage from './components/Forms/inputPage.vue';
  // import labelPage from './components/Forms/labelPage.vue';
  // import selectPage from './components/Forms/selectPage.vue';

  import * as Form from "./components/form-components";
  //tek bir importla hallettik. js dosyasından export ettik.
</script>

<template>
  <!-- <labelPage>
    Başlık
    <inputPage />
  </labelPage>

  <labelPage>
    Kategori
    <selectPage />
  </labelPage> -->

  <Form.labelPage>
    Başlık
    <Form.inputPage />
  </Form.labelPage>

  <Form.labelPage>
    Kategori
    <Form.selectPage />
  </Form.labelPage>
</template>