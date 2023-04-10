<template>
  <div class="program-wrap bg-image">
    <div class="container">
      <div class="position-relative entry-program-wrap">
        <div class="title text-center text-white">
          <h2>Academic Programs</h2>
        </div>
        <div class="row g-5">
          <div class="col-md-4">
            <div class="program-item">
              <h3 class="text-center">Bachelor's degree</h3>
              <p>
                The university awards a bachelor's degree in 80 academic majors
              </p>
              <a href="#" class="primary-btn-green">Read more</a>
            </div>
          </div>

          <div class="col-md-4">
            <div class="program-item">
              <h3 class="text-center">Master's degree</h3>
              <p>The university awards a master's degree in 20 disciplines</p>
              <a href="#" class="primary-btn-green">Read more</a>
            </div>
          </div>

          <div class="col-md-4 wow">
            <div class="program-item">
              <h3 class="text-center">PHD degree</h3>
              <p>
                The university awards a PHD degree in the College of Management,
                Economics, Engineering, and ,Arts and Information Technology
              </p>
              <a href="#" class="primary-btn-green">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "programComp",
};
</script>

<style lang="scss" scoped>
.program-wrap {
  background-image: url(https://www.iugaza.edu.ps/wp-content/themes/iug/assets/images/programbg.jpg);
  background-position: center center;
  background-size: cover;
  color: #fff;
  position: relative;
  padding: 65px 0;
  z-index: 2;
  .title {
    margin-bottom: 90px;
    h2 {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 0;
      color: #fff;
    }
  }
  .program-item {
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid #ffffff;
    padding: 15px;
    font-size: 14px;
    min-height: 285px;
    h3 {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 35px;
    }
    p {
      min-height: 72px;
      margin-bottom: 1.7rem;
      font-size: 20px;
    }
  }
  .program-item:hover {
    border-color: #00a3ff;
  }
}
.program-wrap::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.605);
  z-index: -1;
}
.primary-btn-green {
  background: conic-gradient(from 90deg, #0396e9, #00a3ff);
}
.primary-btn-green:hover {
  background: conic-gradient(from 90deg, #7bb83f, #8dc53e);
  color: #fff;
}
</style>
