<template>
  <div class="banner-carousel">
    <div><img src="https://picsum.photos/375/200?random=1"></div>
    <div><img src="https://picsum.photos/375/200?random=2"></div>
    <div><img src="https://picsum.photos/375/200?random=3"></div>
    <div><img src="https://picsum.photos/375/200?random=4"></div>
    <div><img src="https://picsum.photos/375/200?random=5"></div>
  </div>
</template>
 
<script>
  import $ from 'jquery'
  import 'slick-carousel'
  import 'slick-carousel/slick/slick.css'
  // optional style for arrows & dots
  import 'slick-carousel/slick/slick-theme.css'
  $(document).ready(function(){
    $('.banner-carousel').slick({
      infinite: true,
      slidesToShow: 1, // Shows a three slides at a time
      slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
      arrows: false, // Adds arrows to sides of slider
      dots: true // Adds the dots on the bottom
    });
  });
  export default {
    // name: 'MyComponent',
    // components: { VueSlickCarousel },
  }
</script> 
<style scoped>
  .banner-carousel{
    width: 100%;
    height: auto;
  }
  .banner-carousel img{
    margin: 0 auto;
  }
</style>