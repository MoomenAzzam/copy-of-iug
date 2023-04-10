<template>
  <div>
    <div class="container my-5">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Youtube</h2>
        <a href="#" class="primary-btn-green">View all</a>
      </div>
      <div class="row g-4 mt-5">
        <div class="col-md-4 fadeInUp">
          <div
            class="video-item bg-image"
            style="
              background-image: url(https://www.iugaza.edu.ps/wp-content/uploads/2022/11/03-1024x576.jpg);
            "
          >
            <a href="https://www.iugaza.edu.ps/en/video/vid26044/">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div class="col-md-4 fadeInUp">
          <div
            class="video-item bg-image"
            style="
              background-image: url(https://www.iugaza.edu.ps/wp-content/uploads/2022/11/2-1-1024x576.jpg);
            "
          >
            <a href="https://www.iugaza.edu.ps/en/video/vid26010/">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div class="col-md-4 fadeInUp">
          <div
            class="video-item bg-image"
            style="
              background-image: url(https://www.iugaza.edu.ps/wp-content/uploads/2022/11/4-1024x576.jpg);
            "
          >
            <a href="https://www.iugaza.edu.ps/en/video/vid26009/">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "youtubeComp",
};
</script>

<style lang="scss" scoped>
.container h2 {
  font-size: 30px;
  color: black;
  font-weight: bold;
}
.video-item {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  margin-bottom: 30px;
  position: relative;
  a {
    display: block;
    padding-top: 50%;
    position: relative;
    border-radius: 4px;
  }
  i {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 70px;
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.5s;
    z-index: 5;
  }
  a:hover i {
    top: 40%;
  }
}
.video-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
</style>
