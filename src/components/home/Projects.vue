<template>
  <div class="projects-wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 fadeInUp">
          <div class="title d-flex justify-content-between align-items-center">
            <h2>Conferences</h2>
            <a
              href="https://www.iugaza.edu.ps/en/conference/"
              class="primary-btn-green"
              >View all</a
            >
          </div>
          <div class="row my-5">
            <div class="col-sm-6">
              <div class="post-item conference-item">
                <div
                  class="post-thumb bg-image"
                  style="
                    background-image: url(https://www.iugaza.edu.ps/wp-content/uploads/2022/05/شعار-مؤتمر-كلية-الهندسة-08-1024x911.jpg);
                  "
                >
                  <a
                    href="https://www.iugaza.edu.ps/en/conference/8th-international-engineering-conference-for-renewable-energy-and-sustainability/"
                  >
                    <time>&nbsp;8th -9th May 2023</time>
                  </a>
                </div>
                <div class="post-info">
                  <h3>
                    <a
                      href="https://www.iugaza.edu.ps/en/conference/8th-international-engineering-conference-for-renewable-energy-and-sustainability/"
                      >8th International Engineering Conference for Renewable
                      Energy and Sustainability&nbsp;</a
                    >
                  </h3>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="post-item conference-item">
                <div
                  class="post-thumb bg-image"
                  style="
                    background-image: url(https://www.iugaza.edu.ps/wp-content/uploads/2021/09/المؤتمر-الفلسطيني-الدولي-1024x697.jpg);
                  "
                >
                  <a
                    href="https://www.iugaza.edu.ps/en/conference/third-palestinian-international-conference-on-information-and-communication-technology-picict-2021/"
                  >
                    <time>28-29 Sep</time>
                  </a>
                </div>
                <div class="post-info">
                  <h3>
                    <a
                      href="https://www.iugaza.edu.ps/en/conference/third-palestinian-international-conference-on-information-and-communication-technology-picict-2021/"
                      >Third Palestinian International Conference on Information
                      and Communication Technology (PICICT 2021)</a
                    >
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 fadeInUp">
          <div class="title d-flex justify-content-between align-items-center">
            <h2>Projects</h2>
            <a
              href="https://www.iugaza.edu.ps/en/project/"
              class="primary-btn-blue rounded-pill"
              >View all</a
            >
          </div>
          <div class="row my-5">
            <div class="col-sm-6">
              <div class="post-item project-item">
                <div
                  class="post-thumb bg-image"
                  style="
                    background-image: url(https://www.iugaza.edu.ps/wp-content/uploads/2021/09/مشروع-تعزيز-فرص-العمل-عن-بعد-لخريجي-الجامعات-الفلسطينية-1024x696.jpg);
                  "
                >
                  <a href="https://www.iugaza.edu.ps/en/project/pro17949/">
                    <time class="secound"><span>15</span>September 2021 </time>
                  </a>
                </div>
                <div class="post-info">
                  <h3>
                    <a href="https://www.iugaza.edu.ps/en/project/pro17949/"
                      >Reinforcing Access to Cross Border Employability at
                      Palestinian Higher Education Institutions – REACH</a
                    >
                  </h3>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="post-item project-item">
                <div
                  class="post-thumb bg-image"
                  style="
                    background-image: url(https://www.iugaza.edu.ps/wp-content/uploads/2021/09/مشروع-تعزيز-القدرة-البحثية-الوطنية-1024x696.jpg);
                  "
                >
                  <a href="https://www.iugaza.edu.ps/en/project/pro17948/">
                    <time class="secound"><span>15</span>September 2021 </time>
                  </a>
                </div>
                <div class="post-info">
                  <h3>
                    <a href="https://www.iugaza.edu.ps/en/project/pro17948/"
                      >Strengthening of National Research Capacity on Policy,
                      Conflict Resolution, and Reconciliation (PEACE)</a
                    >
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectsComp",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.container h2 {
  font-size: 30px;
  color: black;
  font-weight: bold;
}
.projects-wrap {
  padding: 45px 0;
  background: #fbfbfb;
}
.post-item {
  background: #fff;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
  border-radius: 5px;
  margin-bottom: 30px;
  .post-thumb {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    a {
      display: block;
      padding-top: 67.7%;
      position: relative;

      time {
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        display: inline;
        background-color: #7bb83f;
        padding: 15px;
        text-align: center;
        font-weight: 700;
        border-radius: 0 5px 0 5px;
        font-size: 15px;
      }
      .secound {
        background-color: #00a3ff;
      }
    }

    a::before {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px 5px 0 0;
    }
  }
  .post-info {
    min-height: 195px;
    h3 {
      transition: all 0.2s;
      margin: 0;
      height: 1.7;
      padding: 25px;
      line-height: 26px;
      font-size: 17px;
      a {
        line-height: 30px;
        color: black;
        transition: all 0.2s;
        text-decoration: none;
      }
    }
  }
}
.post-item:hover .post-info a {
  color: #7bb83f;
}
</style>
