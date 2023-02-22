<template>
  <header>
    <div class="tob-bar">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 d-none d-md-block">
            <div class="d-sm-flex align-items-center top-bar-social">
              <div class="call-us">
                <a
                  href="mailto:public@iugaza.edu.ps"
                  class="d-inline-block"
                  dir="ltr"
                >
                  <i class="fa fa-envelope"></i>
                  public@iugaza.edu.ps</a
                >

                <a href="tel:" class="d-none" dir="ltr">
                  <i class="fa fa-phone"></i>
                </a>
              </div>
              <div class="d-flex align-items-center">
                <div class="lang">
                  <!-- https://www.iugaza.edu.ps -->
                  <a href="#" class="d-inline-block" dir="ltr"
                    ><i class="fa fa-language"></i> العربية</a
                  >
                </div>

                <div class="social-links">
                  <ul class="list-inline m-0">
                    <li class="list-inline-item">
                      <a
                        title="email"
                        href="mailto:http://public@iugaza.edu.ps"
                        target="_blank"
                      >
                        <i class="fa fa-envelope"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        title="youtube"
                        href="https://www.youtube.com/channel/UCfGSd18MW8D9rUP4-jXD_Tw"
                        target="_blank"
                      >
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        title="instagram"
                        href="https://www.instagram.com/iugaza.ps/"
                        target="_blank"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        title="facebook"
                        href="https://www.facebook.com/IUGAZA/"
                        target="_blank"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        title="twitter"
                        href="https://twitter.com/iugaza"
                        target="_blank"
                      >
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        title="telegram"
                        href="https://t.me/iugaza1"
                        target="_blank"
                      >
                        <i class="fab fa-telegram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        title="live"
                        href="http://qvoice.iugaza.edu.ps/live.html"
                        target="_blank"
                      >
                        <i class="fa fa-broadcast-tower"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        title="فضفضة"
                        href="http://complaint.iugaza.edu.ps/"
                        target="_blank"
                      >
                        <i class="fas fa-archive"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="d-flex justify-content-between align-items-center py-2 nav-buttons"
            >
              <div class="">
                <ul id="menu-top_english1" class="top-nav m-0 p-0">
                  <li id="" class="">
                    <a
                      href="http://academicprogs.iugaza.edu/"
                      class="primary-btn"
                      >Staff Portal</a
                    >
                  </li>
                  <li id="" class="ms-2">
                    <a href="http://portal.iugaza.edu.ps/" class="primary-btn"
                      >Student Portal</a
                    >
                  </li>
                </ul>
              </div>
              <div class="search-header position-relative">
                <button type="button " class="searchBtn primary-btn">
                  <i class="fa fa-search" @click="toggleSearchForm"></i>
                </button>
                <div
                  class="search-form"
                  :style="{ display: searchFormVisible ? 'block' : 'none' }"
                >
                  <!-- https://www.iugaza.edu.ps/en/ -->
                  <form action="" method="get">
                    <div class="input-group">
                      <input
                        type="text"
                        name="seearch"
                        id="search"
                        placeholder="Search"
                        class="form-control"
                      />
                      <span class="input-group-btn">
                        <button type="submit" class="btn btn-success">
                          <i class="fa fa-search"></i>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <navView />
  </header>
</template>
<script>
import navView from "@/components/header/nav/nav.vue";
export default {
  name: "headerView",
  data() {
    return {
      searchFormVisible: false,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    toggleSearchForm() {
      this.searchFormVisible = !this.searchFormVisible;
    },
  },
  components: { navView },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.tob-bar {
  border-bottom: 1px solid #e5e5e5;
  height: 60px;
}
ul {
  list-style-type: none;
  li {
    display: inline-block;
    font-size: 16px;
    a {
      display: block;
      transition: 0.3s;
      color: $primary;
      padding: 7px;
    }
  }
}
.call-us {
  margin-right: 10px;
  padding: 10px 7px;
  a {
    font-weight: 300;
    padding: 10px 0px;
  }
}
.lang {
  padding: 5px 15px;
  a {
    padding: 10px 0px;
  }
}
.social-links {
  padding: 9px 15px;
  a {
    display: block;
    padding: 10px 7px;
    i {
      font-size: 16px;
    }
  }
}

.social-links,
.lang,
.call-us {
  border-right: 1px solid #e5e5e5;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 15px;
}
.social-links ul li a:hover {
  color: $gray-color;
}
.call-us a,
.lang a {
  color: $primary;
  i {
    color: $gray-color;
  }
}
.nav-buttons {
  height: 100%;
}
@media (min-width: 768px) and (max-width: 992px) {
  .tob-bar {
    margin-bottom: 55px;
  }
  .top-bar-social {
    justify-content: space-between;
  }
  .social-links {
    border: none;
    padding-right: 0;
  }
  .nav-buttons {
    position: relative;
  }
  .nav-buttons::before {
    position: absolute;
    content: "";
    top: 100%;
    margin-top: 2px;
    left: -140px;
    width: 141%;
    border-bottom: 1px solid #e5e5e5;
  }
}

.search-form {
  display: none;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  top: 100%;
  right: 0;
  padding: 15px;
  border: #e5e5e5 solid 2px;
  margin-top: 10px;
  width: 300px;
  z-index: 1001;
  form *,
  form *:focus,
  form *:active {
    background: inherit;
    border: none;
    outline: none;
    ::placeholder {
      color: #fff;
    }
  }
}

@media (max-width: 768px) {
  .search-form {
    margin-top: 15px;
  }
}
// end tob-bar
</style>
