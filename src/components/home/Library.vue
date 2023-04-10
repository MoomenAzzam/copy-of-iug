<template>
  <div class="library-wrap">
    <div class="container">
      <div class="position-relative">
        <div class="row">
          <div class="col-md-8 col-sm-8 offset-md-2 offset-sm-2">
            <div class="lab-serch-form fadeInUp text-center">
              <h1>Search In...</h1>
              <form action="" id="formSearch" name="search" method="post">
                <div class="row mb-3">
                  <div class="col-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="address"
                        id="title"
                        class="form-control form-control-lg"
                        placeholder="... Address"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="author"
                        id="author"
                        class="form-control form-control-lg"
                        placeholder="... Author"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="primary-btn mb-3 primary-btn-green"
                  onclick="goLib()"
                >
                  Central Library
                </button>
                <button
                  type="submit"
                  class="primary-btn mb-3 primary-btn-blue"
                  onclick="goResearch()"
                >
                  IUG Journals
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchComp",
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
.library-wrap {
  background-image: url("../../assets/images/home/labbg.jpg");
  padding: 65px 0;
  position: relative;
  .lab-serch-form {
    background-color: #00000075;
    padding: 35px 75px;
  }
  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 40px;
    color: #fff;
  }
  .row form {
    input {
      background: none;
      color: #fff;
      border-color: #fff;
    }
    .primary-btn {
      width: 100%;
      color: #fff;
      font-weight: 400;
      border-radius: 4px;
      font-size: 1.25rem;
    }
  }
}
.library-wrap::before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
}
</style>
