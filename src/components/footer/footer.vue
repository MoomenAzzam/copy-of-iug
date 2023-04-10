<template>
  <div class="footer pt-5">
    <div class="container">
      <div class="social-links text-center">
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
            <a title="telegram" href="https://t.me/iugaza1" target="_blank">
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
        <div class="footer-logo">
          <a href="#">
            <img
              src="https://www.iugaza.edu.ps/wp-content/uploads/2021/09/logo.png"
              alt="logo"
            />
            <div class="slogan site-title-seo">
              الجامعة الاسلامية بغزة <span>Islamic University of Gaza</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="btm-footer">
      <div class="container">
        <div class="d-lg-flex justify-content-md-between align-items-center">
          <div class="d-md-flex">
            <p class="copyright m-0">الفرع الرئيس: ش.الثلاثيني، الرمال، غزة</p>
            <ul class="list-unstyled mb-0">
              <li>
                <a href="tel:+97082644800"> 2644800 8 970+ </a>
              </li>
              <li>
                <a href="tel:+9702644400"> 2644400 8 970+ </a>
              </li>

              <li>
                <a href=""> ص.ب.108 </a>
              </li>
            </ul>
          </div>
          <div class="call-us">
            <a
              href="mailto:webmaster@iugaza.edu.ps"
              class="d-inline-block"
              dir="ltr"
            >
              <i class="fa fa-envelope"></i>webmaster@iugaza.edu.ps
            </a>

            <a
              href="mailto:public@iugaza.edu.ps"
              class="d-inline-block"
              dir="ltr"
            >
              <i class="fa fa-envelope"></i> public@iugaza.edu.ps</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="btm-footer">
      <div class="container">
        <div class="d-lg-flex justify-content-md-between align-items-center">
          <div class="d-md-flex">
            <p class="m-0">
              All rights reserved to the Islamic University of Gaza
            </p>
            <ul id="" class="list-unstyled mb-0">
              <li id="" class="">
                <a href="https://www.iugaza.edu.ps/en/privacy-statement/"
                  >سياسة الخصوصية</a
                >
              </li>
              <li id="" class="">
                <a href="https://www.iugaza.edu.ps/en/publication-policy/"
                  >سياسة النشر</a
                >
              </li>
              <li id="" class="">
                <a href="#">لتحميل تطبيقات الجامعة</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerComp",
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.footer {
  border-top: 1px solid #e5e5e5;
}
ul {
  list-style-type: none;
  li {
    display: inline-block;
    font-size: 16px;
    a {
      display: block;
      transition: 0.3s;
      color: $secundary;
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
.navbar-nav {
  display: inline-block;
  .menu-item {
    a {
      display: block;
      color: rgba(0, 0, 0, 0.8);
      padding: 15px;
      font-size: 18px;
      font-weight: 700;
    }
    a:hover {
      color: #000;
    }
  }
}
.footer-logo {
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-height: 110px;
    }
    .slogan {
      color: #000;
      font-size: 22px;
      line-height: 28px;
      font-weight: 700;
      margin-left: 15px;
      display: block;
      span {
        display: block;
      }
    }
  }
}
// @media (max-width: 768px) {
//   .slogan {
//     display: none;
//   }
// }
.btm-footer {
  border-top: 1px solid #e5e5e5;
}
.btm-footer p,
.btm-footer a {
  padding: 14px 1rem;
  border-right: 1px solid #e5e5e5;
  padding-right: 1rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.85rem;
  transition: all 0.2s;
}
.social-links {
  border: none;
}
.btm-footer a:hover {
  color: $secundary;
}
.btm-footer .call-us {
  border-left: 1px solid #e5e5e5;

  a {
    color: $primary;
    border-right: none;
  }
  i {
    color: rgba(0, 0, 0, 0.5);
    padding-right: 5px;
  }
}
</style>
