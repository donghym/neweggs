<template>
  <div class="detailegg1">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
         <img src="../../../images/detail/banner/0.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../../../images/detail/banner/2.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../../../images/detail/banner/3.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../../../images/detail/banner/4.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../../../images/detail/banner/5.jpg">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <img src="../../../images/detail/egg-1/egg1-1.jpg">
    <img src="../../../images/detail/egg-1/egg1-2.jpg">
    <img src="../../../images/detail/egg-1/egg1-3.jpg">
    <img src="../../../images/detail/egg-1/egg1-4.jpg">
    <img src="../../../images/detail/egg-1/egg1-5.jpg">
    <img src="../../../images/detail/egg-1/egg1-6.jpg">
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      swiper,
      swiperSlide
    },
  data () {
    return {
      banners: ['http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg', 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg', 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg'],
      swiperOption: {
        autoplay: 3000,
        loop:1,
        pagination : '.swiper-pagination'
      }
    }
  },
    mounted() {
      this.swiper.slideTo(1, 1000, false)
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },

    methods: {
    }
}
</script>
<style>
  .swiper-slide{height: 280px;}
  .swiper-slide img{width: 100%; height: 100%;}

</style>
<style scoped>
  .detailegg1{background-color: #f2f7fc;}
  .detailegg1 img{width: 100%;}
</style>
