<template>
  <v-app>
    <v-main>
      <HeaderView />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// @import '~vuetify/styles/main.sass';
import HeaderView from "@/components/header/header.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    HeaderView,
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/style.scss";

* {
  color: $primary;
}
</style>
