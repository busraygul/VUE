
<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">
      <button class="red" @click="activeComponent = 'ColorRed'">Red</button>
      <button class="green" @click="activeComponent = 'ColorGreen'">
        Green
      </button>
      <button class="blue" @click="activeComponent = 'ColorBlue'">Blue</button>
    </div>

    <!-- <ColorRed msg="Red Component" v-if="activeComponent == 'Red'" class="mb-2" />
    <ColorGreen v-if="activeComponent == 'Green'" class="mb-2" />
    <ColorBlue v-if="activeComponent == 'Blue'" class="mb-2" /> -->

    <keep-alive>
      <component :is="activeComponent" msg="Red Component">
      <h3 class="bg-green text-white">Green Component</h3>
    </component>
    </keep-alive>
    
  </div>
</template>

<script>
import ColorRed from "@/components/ColorRed";
import ColorGreen from "@/components/ColorGreen";
import ColorBlue from "@/components/ColorBlue";

export default {
  components: {
    ColorRed,
    ColorGreen,
    ColorBlue,
  },
  data() {
    return {
      activeComponent: "Red",
    };
  },
};
</script>