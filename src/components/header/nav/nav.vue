<template>
  <div class="menu-wrap">
    <div class="container">
      <nav class="navbar navbar-expand-md py-0">
        <router-link
          class="navbar-brand d-flex align-items-center"
          title="الجامعة الإسلامية بغزة"
          to="/home"
        >
          <!-- href="https://www.iugaza.edu.ps/en/" -->
          <img
            class="logo"
            :src="require('@/assets/images/home/logo.png')"
            alt="الجامعة الإسلامية بغزة"
          />
          <h1 class="d-none d-lg-block slogan site-title-seo">
            الجامعة الاسلامية بغزة <span>Islamic University of Gaza</span>
          </h1>
        </router-link>
        <div class="d-flex align-items-center d-md-none">
          <div class="lang">
            <a href="https://www.iugaza.edu.ps" class="d-inline-block" dir="ltr"
              ><i class="fa fa-language"></i> العربية</a
            >
          </div>
          <button class="navbar-toggler" type="button" @click="showNav()">
            <i class="fa fa-bars"></i>
          </button>
        </div>

        <div
          class="collapse navbar-collapse"
          :style="{ display: showNavItems ? 'block' : 'none' }"
        >
          <ul id="" class="navbar-nav ml-auto">
            <li
              itemscope="itemscope"
              itemtype="https://www.schema.org/SiteNavigationElement"
              class="menu-item"
            >
              <!-- http://www.iugaza.edu.ps/en -->
              <router-link
                title="Home"
                class="nav-link"
                to="/"
                :class="{ activeItem: $route.path == '/' }"
                >Home</router-link
              >
            </li>
            <li
              itemscope="itemscope"
              itemtype="https://www.schema.org/SiteNavigationElement"
              class="menu-item"
            >
              <!-- href="https://www.iugaza.edu.ps/en/about-iug/" -->
              <router-link
                title="About IUG"
                class="nav-link"
                :class="{ activeItem: $route.path === '/about' }"
                to="/about"
                >About IUG</router-link
              >
            </li>
            <li
              itemscope="itemscope"
              itemtype="https://www.schema.org/SiteNavigationElement"
              class="menu-item"
            >
              <router-link
                title="Faculties"
                to="/fuculties"
                class="nav-link"
                :class="{ activeItem: $route.path === '/fuculties' }"
                >Faculties</router-link
              >
            </li>
            <li
              itemscope="itemscope"
              itemtype="https://www.schema.org/SiteNavigationElement"
              class="menu-item"
            >
              <router-link
                title="External Relations"
                to="/ecternal-relations"
                :class="{ activeItem: $route.path === '/ecternal-relations' }"
                class="nav-link"
                >External Relations</router-link
              >
            </li>
            <li
              itemscope="itemscope"
              itemtype="https://www.schema.org/SiteNavigationElement"
              class="menu-item"
            >
              <router-link
                title="Research"
                to="/research"
                :class="{ activeItem: $route.path === '/research' }"
                class="nav-link"
                >Research</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "navComponent",
  data() {
    return {
      showNavItems: false,
    };
  },
  methods: {
    showNav() {
      this.showNavItems = !this.showNavItems;
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.menu-wrap {
  font-weight: 700;
  height: 136px;
  .navbar-brand {
    padding: 10px 0;
    height: 136px;
    .site-title-seo {
      font-size: 22px;
      line-height: 28px;
      font-weight: 700;
      margin-left: 15px;
      span {
        display: block;
        font-size: 18px;
      }
    }
    img {
      height: 80px;
    }
  }
  .collapse {
    font-size: 16px;
    ul {
      display: flex;
      li {
        align-items: center;
        margin: 0 3px;
        a {
          font-weight: 700;
          color: #000;
          padding: 55px 13px;
          align-items: center;
          display: flex;
        }
        a.activeItem {
          background: conic-gradient(from 90deg, #0396e9, #00a3ff);
          color: #fff;
        }
      }
      li:hover {
        background: conic-gradient(from 90deg, #0396e9, #00a3ff);

        a {
          color: #fff;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .menu-wrap {
    height: 106px;
    .navbar-brand {
      margin: 0;
      height: 106px;
      .site-title-seo {
        font-size: 19px;
        span {
          font-size: 16px;
        }
      }
      img {
        height: 70px;
      }
    }
    .collapse {
      font-size: 16px;
      ul {
        height: 106px;
        display: flex;
        li {
          align-items: center;
          margin: 0 4px;
          a {
            font-weight: 700;
            color: #000;
            height: 106px;
            padding: 44px 13px;
            align-items: center;
            display: flex;
          }
          a.activeItem {
            background: conic-gradient(from 90deg, #0396e9, #00a3ff);
            color: #fff;
          }
        }
        a:hover {
          background: conic-gradient(from 90deg, #0396e9, #00a3ff);
          color: #fff;
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .menu-wrap {
    height: 100px;
    margin-top: 55px;
    .navbar-brand {
      height: 106px;
    }

    ul {
      height: 100px;
    }
  }
}
@media (max-width: 767px) {
  .menu-wrap {
    z-index: 1000;
    height: 70px;
    margin-top: 0px;
    .navbar-brand {
      height: 70px;
      img {
        height: 50px;
      }
    }
    .collapse {
      display: block;
      position: absolute;
      left: -13px;
      top: 82px;
      width: 100vw;
      margin: 0px;
      background: conic-gradient(
        from 90deg,
        rgb(123, 184, 63),
        rgb(141, 197, 62)
      );
      a.activeItem {
        border-bottom: solid 1px #fff;
      }
      ul {
        height: fit-content;
        li {
          align-items: center;
          margin: 0;
          a {
            font-weight: 700;
            height: fit-content;
            padding: 4px 10px;
          }
          a:hover {
            border-bottom: solid 1px #fff;
          }
        }
      }
    }
  }
}
.lang a {
  padding: 10px 0;
  color: #00a3ff;
  font-weight: normal;
  margin-right: 5px;
  i {
    color: rgba(0, 0, 0, 0.25);
    margin-left: 5px;
  }
}
</style>
