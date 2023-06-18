<template>
  <div>
    <div class="page-title">
      <div class="container">
        <h1>الكليات</h1>
      </div>
    </div>
    <div class="content">
      <div class="container">
        <div class="row g-5">
          <div class="col-12 col-lg-4">
            <div class="img">
              <img
                src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/%D8%B7%D8%A8.png"
                alt=""
              />
            </div>
            <div class="title">
              <h3>Faculty of Medicine</h3>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="img">
              <img
                src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/%D8%B7%D8%A8.png"
                alt=""
              />
            </div>
            <div class="title">
              <h3>Faculty of Medicine</h3>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="img">
              <img
                src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/%D8%B7%D8%A8.png"
                alt=""
              />
            </div>
            <div class="title">
              <h3>Faculty of Medicine</h3>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="img">
              <img
                src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/%D8%B7%D8%A8.png"
                alt=""
              />
            </div>
            <div class="title">
              <h3>Faculty of Medicine</h3>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="img">
              <img
                src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/%D8%B7%D8%A8.png"
                alt=""
              />
            </div>
            <div class="title">
              <h3>Faculty of Medicine</h3>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="img">
              <img
                src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/%D8%B7%D8%A8.png"
                alt=""
              />
            </div>
            <div class="title">
              <h3>Faculty of Medicine</h3>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="img">
              <img
                src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/%D8%B7%D8%A8.png"
                alt=""
              />
            </div>
            <div class="title">
              <h3>Faculty of Medicine</h3>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="img">
              <img
                src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/%D8%B7%D8%A8.png"
                alt=""
              />
            </div>
            <div class="title">
              <h3>Faculty of Medicine</h3>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="img">
              <img
                src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/%D8%B7%D8%A8.png"
                alt=""
              />
            </div>
            <div class="title">
              <h3>Faculty of Medicine</h3>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="img">
              <img
                src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/%D8%B7%D8%A8.png"
                alt=""
              />
            </div>
            <div class="title">
              <h3>Faculty of Medicine</h3>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="img">
              <img
                src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/%D8%B7%D8%A8.png"
                alt=""
              />
            </div>
            <div class="title">
              <h3>Faculty of Medicine</h3>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="img">
              <img
                src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/%D8%B7%D8%A8.png"
                alt=""
              />
            </div>
            <div class="title">
              <h3>Faculty of Medicine</h3>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="img">
              <img
                src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/%D8%B7%D8%A8.png"
                alt=""
              />
            </div>
            <div class="title">
              <h3>Faculty of Medicine</h3>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="img">
              <img
                src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/%D8%B7%D8%A8.png"
                alt=""
              />
            </div>
            <div class="title">
              <h3>Faculty of Medicine</h3>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="img">
              <img
                src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/%D8%B7%D8%A8.png"
                alt=""
              />
            </div>
            <div class="title">
              <h3>Faculty of Medicine</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerComp />
  </div>
</template>

<script>
import footerComp from "@/components/footer/footer.vue";

export default {
  name: "FucultiesView",
  components: {
    footerComp,
  },
};
</script>

<style scoped>
.page-title {
  padding: 40px 0;
  background: rgba(0, 0, 0, 0.05);
}
.container {
  width: 1200px;
}
.page-title {
  color: rgb(57, 57, 57);
}
.content {
  padding-top: 50px;
  padding-bottom: 100px;
}
.content .container {
  width: 1100px;
}
.content .img {
  max-width: 100%;
  overflow: hidden;
}
.content .img img {
  width: 100%;
}
.content .title {
  color: #007bff;
  text-align: center;
  padding: 10px 0;
}
</style>
