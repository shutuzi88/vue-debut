<template>
  <div class="nav-outer">
    <div class="nav-inner">
      <div class="nav-item dsd">
        <router-link to="/dsd">
          <div><img src="../../assets/1.png" alt=""></div>
          <div>免運！蝦皮直送</div>
        </router-link>
      </div>
      <div class="nav-item choices">
        <router-link to="/choices"></router-link>
          <div><img src="../../assets/2.png" alt=""></div>
          <div>蝦選榜</div>
        </router-link>
      </div>
      <div class="nav-item activities">
        <router-link to="/activites">
          <div><img src="../../assets/3.png" alt=""></div>
          <div>最強活動合集</div>
        </router-link>
      </div>
      <div class="nav-item supermarket">
        <router-link to="/supermarket">
          <div><img src="../../assets/4.png" alt=""></div>
          <div>蝦皮超市</div>
        </router-link>
      </div>
      <div class="nav-item free-delivery">
        <router-link to="/free-delivery">
          <div><img src="../../assets/5.png" alt=""></div>
          <div>免運專區</div>
        </router-link>
      </div>
      <div class="nav-item malls">
        <router-link to="/malls">
          <div><img src="../../assets/6.png" alt=""></div>
          <div>蝦皮商城</div>
        </router-link>
      </div>
      <div class="nav-item coupons">
        <router-link to="/coupons">
          <div><img src="../../assets/7.png" alt=""></div>
          <div>搶5折券</div>
        </router-link>
      </div>
      <div class="nav-item for-men">
        <router-link to="/for-men">
          <div><img src="../../assets/8.png" alt=""></div>
          <div>男人館</div>
        </router-link>
      </div>
      <div class="nav-item groups">
        <router-link to="/groups">
          <div><img src="../../assets/9.png" alt=""></div>
          <div>蝦皮團購</div>
        </router-link>
      </div>
      <div class="nav-item luxuries">
        <router-link to="/luxuries">
          <div><img src="../../assets/10.png" alt=""></div>
          <div>輕奢時尚</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-outer{
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
    overflow-y: visible;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
  .nav-inner{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-top: 1rem;
    height: 13rem;
  }
  .nav-item{
    width: 22.22%;
    height: 5rem;
  }
  .nav-item img{
    width: 45px;
  }
  .nav-item div{
    max-height: 2.625rem;
    font-size: .625rem;
    line-height: .875rem;
    color: rgba(0,0,0,.87);
    word-wrap: break-word;
    overflow: hidden;
    white-space: normal;
  }
</style>
