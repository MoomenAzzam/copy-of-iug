<template>
  <!-- SwiperPaginationVertical: ture, -->
  <swiper
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <v-img src="~@/assets/images/home/1-1-scaled.jpg"></v-img>
    </swiper-slide>
    <swiper-slide>
      <v-img src="~@/assets/images/home/01-3-scaled.jpg"></v-img>
    </swiper-slide>
    <swiper-slide>
      <v-img src="~@/assets/images/home/02-1-scaled.jpg"></v-img>
    </swiper-slide>
    <swiper-slide>
      <v-img src="~@/assets/images/home/bannerwalla2-scaled.jpg"></v-img>
    </swiper-slide>
    <swiper-slide>
      <v-img
        src="~@/assets/images/home/Muhammad-Osama-Al-Efrangi-MD.-scaled.jpg"
      ></v-img>
    </swiper-slide>
    <swiper-slide>
      <v-img src="~@/assets/images/home/01-3-scaled.jpg"></v-img>
    </swiper-slide>
    <div
      class="swiper-pagination swiper-pagination-clickable swiper-pagination-vertical"
    ></div>
    <!-- slot="pagination" -->
    <div class="slide-btns">
      <a href="https://donate.iugaza.edu.ps/" class="btn btn-primary">
        <img
          src="https://www.iugaza.edu.ps/wp-content/themes/iug/assets/images/users.svg"
        />
        <span>Donate Now! </span>
      </a>

      <a
        href="https://www.iugaza.edu.ps/en/contact-us/"
        class="btn btn-success"
      >
        <img
          src="https://www.iugaza.edu.ps/wp-content/themes/iug/assets/images/comment.svg"
        />
        <span>Contact us</span>
      </a>
    </div>
    <!-- start home links -->
    <div class="home-links align-items-center scroll-item" v-show="true">
      <div class="container">
        <div class="row slide-links mx-2">
          <div class="col-md-2 col-4 slide-link-col px-2">
            <div class="link-item">
              <a href="https://moodle.iugaza.edu.ps/">
                <div class="link-item-img">
                  <img
                    src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/screen.svg"
                    alt=""
                  />
                </div>
                <p class="m-0">E-learning Moodle</p>
              </a>
            </div>
          </div>
          <div class="col-md-2 col-4 slide-link-col px-2">
            <div class="link-item">
              <a href="https://eportal.iugaza.edu.ps/ords/f?p=142">
                <div class="link-item-img">
                  <img
                    src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/edit.svg"
                    alt=""
                  />
                </div>
                <p class="m-0">Join us</p>
              </a>
            </div>
          </div>
          <div class="col-md-2 col-4 slide-link-col px-2">
            <div class="link-item">
              <a href="http://mail.students.iugaza.edu.ps/">
                <div class="link-item-img">
                  <img
                    src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/credit.svg"
                    alt=""
                  />
                </div>
                <p class="m-0">Student Email</p>
              </a>
            </div>
          </div>

          <div class="col-md-2 col-4 slide-link-col px-2">
            <div class="link-item">
              <a href="https://donate.iugaza.edu.ps/">
                <div class="link-item-img">
                  <img
                    src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/money.svg"
                    alt=""
                  />
                </div>
                <p class="m-0">Donate Now!</p>
              </a>
            </div>
          </div>
          <div class="col-md-2 col-4 slide-link-col px-2">
            <div class="link-item">
              <a href="http://lectures.iugaza.edu.ps">
                <div class="link-item-img">
                  <img
                    src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/screen.svg"
                    alt=""
                  />
                </div>
                <p class="m-0">Video lectures</p>
              </a>
            </div>
          </div>
          <div class="col-md-2 col-4 slide-link-col px-2">
            <div class="link-item">
              <a href="http://www.iugaza.edu.ps/payment-methods/">
                <div class="link-item-img">
                  <img
                    src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/comment.svg"
                    alt=""
                  />
                </div>
                <p class="m-0">Contact us</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  name: "conSLid",
  data() {
    return {
      showItem: false,
      xxx: "hi",
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY; // get the current vertical scroll position
      const scrollThreshold = 100; // set the scroll threshold to 500 pixels (change this as needed)

      if (scrollPosition >= scrollThreshold) {
        this.showItem = true; // show the item
        window.removeEventListener("scroll", this.handleScroll); // remove the scroll event listener once the item is shown
      }
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/style.scss";

#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* START slide-btns */
.slide-btns {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -110px;
  z-index: 999;
  transform: rotate(-90deg);
}
.slide-btns a:first-child {
  background: $primary;
  background: $blue-background;
  border-radius: 0;
}
.slide-btns a:last-child {
  background: $secundary;
  border: none;
  background: $green-background;
  border-radius: 0;
}
// start home links
.home-links {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 998;
  display: block;
  display: flex;
  background: #0000006f;
  width: 100%;
  height: 130px;
  .slide-links > *:not(:first-child) {
    border-left: 1px solid rgba(255, 255, 255, 0.5);
  }
  .link-item {
    margin: auto;
    text-align: center;
    .link-item-img img {
      max-width: 100%;
    }
    p {
      color: white;
      font-size: 16px;
      font-family: "Tajawal", sans-serif;
      font-weight: normal;
      margin: 0;
      padding: 0;
      height: 100%;
      line-height: 26px;
    }
  }
}
@media (max-width: 770px) {
  .slide-btns {
    display: none;
  }
  .home-links {
    height: fit-content;
    position: relative;
    background-color: #000;
    padding-bottom: 20px;
    .slide-links *:not(:first-child) {
      border-left: none;
    }
    .link-item {
      margin-top: 15px;
      margin-bottom: 15px;
      a {
        min-height: 80px;
        height: auto;
        padding: 0;
      }
      p {
        font-size: 12px;
      }
    }
  }
}
// .scroll-item {
// display: none; /* hide the item by default */
// height: 5000px;
// transition: 1s;
// }
</style>
