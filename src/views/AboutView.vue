<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <v-img
      :src="require('../assets/external-relations/01.jpg')"
      class="my-3"
      contain
      height="200"
    /> -->
  </div>
  <!-- <div>
    <div v-if="showDiv">
      <h1>This is an about page</h1>
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      pageWidth: 0,
    };
  },
  computed: {
    showDiv() {
      return this.pageWidth >= 600;
    },
  },
  mounted() {
    this.pageWidth = window.innerWidth;
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.pageWidth = window.innerWidth;
    },
  },
};
</script>
