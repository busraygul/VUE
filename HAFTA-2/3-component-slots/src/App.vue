<template>
  <!-- <BaseModal :on-save="onSave" :title="'Modal Title'" :content="content" /> -->

  <BaseModal>
    <template #title>
      <h3>Slot ile gelen title bilgisi</h3>
    </template>

    <!-- <template #content>
      <p class="text-green">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
        accusamus minus eaque. Quia explicabo rerum officia corrupti reiciendis
        dolorum dolore.
      </p>
    </template> -->
    <!-- aşağıdaki gibi de kulllanılabilir -->

    <template v-slot:content>
      <p class="text-green">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
        accusamus minus eaque. Quia explicabo rerum officia corrupti reiciendis
        dolorum dolore.
      </p>
    </template>

    <template #default>
      Bu default olarak gösterilecek.
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "@/components/BaseModal";

export default {
  components: {
    BaseModal,
  },
  data() {
    return {
      content: `<h3 class= "text-red">title</h3>`,
    };
  },
  methods: {
    onSave() {
      alert("Saved!");
    },
  },
};
</script>