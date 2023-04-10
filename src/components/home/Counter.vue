<template>
  <div class="counters-wrap counters-wrap text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-6">
          <div class="counter-item">
            <div class="counter">142</div>
            <p>International Partners</p>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="counter-item">
            <div class="counter">40</div>
            <p>Cooperation Agreements</p>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="counter-item">
            <div class="counter">120</div>
            <p>Academic Programmes</p>
          </div>
        </div>
        <div class="col-md-3 col-6">
          <div class="counter-item">
            <div class="counter">20</div>
            <p>Research Centres</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "counterComp",
};
</script>

<style lang="scss">
.counters-wrap {
  margin-left: -15px;
  margin-right: -15px;
  padding: 10px 0;
  color: #fff;
  background: conic-gradient(from 90deg, #7bb83f, #8dc53e);
  .counter-item {
    padding: 20px 0;
    font-size: 20px;
    font-weight: 700;
    .counter {
      font-size: 60px;
      font-weight: 700;
      line-height: 80px;
    }
    p {
      margin-bottom: 10px;
    }
  }
}
@media (max-width: 1200px) {
  .counters-wrap .counter-item {
    font-size: 16px;
  }
}
</style>
