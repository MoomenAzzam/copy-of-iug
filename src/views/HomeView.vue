<template>
  <div><SliderHomeComp /></div>
</template>

<script>
import { defineComponent } from "vue";
import SliderHomeComp from "@/components/home/Slider.vue";
// Components

export default defineComponent({
  name: "HomeView",
  components: {
    SliderHomeComp,
  },
});
</script>
<style>
* {
  font-family: "Tajawal", sans-serif;
}
</style>
