<template>
  <div>
    <SliderHomeComp /> <CounterHomeComp /><NewsHomeComp />
    <ProgramHomeComp /><youtube-comp /><libraryComp /><projectsComp /><footerComp />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SliderHomeComp from "@/components/home/Slider.vue";
import CounterHomeComp from "@/components/home/Counter.vue";
import NewsHomeComp from "@/components/home/News.vue";
import ProgramHomeComp from "@/components/home/Program.vue";
import youtubeComp from "@/components/home/Youtube.vue";
import libraryComp from "@/components/home/Library.vue";
import projectsComp from "@/components/home/Projects.vue";
import footerComp from "@/components/footer/footer.vue";
// Components

export default defineComponent({
  name: "HomeView",
  components: {
    SliderHomeComp,
    CounterHomeComp,
    NewsHomeComp,
    ProgramHomeComp,
    youtubeComp,
    libraryComp,
    projectsComp,
    footerComp,
  },
});
</script>
<style>
* {
  font-family: "Tajawal", sans-serif;
}
</style>
