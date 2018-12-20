<template>
  <div class="detailegg2">
    <swiper :list="list" :show-desc-mask="false" :auto="true" height="220px"></swiper>
    <img src="../../../images/detail/egg-1/egg8-0.jpg">
    <img src="../../../images/detail/egg-1/egg8-1.jpg">
    <img src="../../../images/detail/egg-1/egg1-4.jpg">
    <img src="../../../images/detail/egg-1/egg1-5.jpg">
    <img src="../../../images/detail/egg-1/egg1-6.jpg">
    <img src="../../../images/detail/egg-1/egg2-2.jpg">
    <img src="../../../images/detail/egg-1/egg2-8.jpg">
    <img src="../../../images/detail/egg-1/egg2-4.jpg">
    <img src="../../../images/detail/egg-1/egg2-5.jpg">
    <img src="../../../images/detail/egg-1/egg2-6.jpg">
    <img src="../../../images/detail/egg-1/egg2-12.jpg">
    <img src="../../../images/detail/egg-1/egg2-13.jpg">
    <img src="../../../images/detail/egg-1/egg2-14.jpg">
    <img src="../../../images/detail/egg-1/egg2-15.jpg">
    <img src="../../../images/detail/egg-1/egg2-16.jpg">
    <img src="../../../images/detail/egg-1/egg2-18.jpg">
    <img src="../../../images/detail/egg-1/egg2-17.jpg">
    <img src="../../../images/detail/egg-1/egg3-7.jpg">
    <img src="../../../images/detail/egg-1/egg2-20.jpg">
    <img src="../../../images/detail/egg-1/egg2-21.jpg">
    <div>
      <div class="clear10"></div>
      <video src="../../../video/v1.mp4" controls="controls">
        您的浏览器不支持 video 标签。
      </video>
    </div>
    <img src="../../../images/detail/egg-1/egg2-22.jpg">
    <img src="../../../images/detail/egg-1/egg3-12.jpg">

  </div>
</template>
<script>
  import { Swiper, SwiperItem } from 'vux'
  import pic1 from '../../../images/detail/banner/0.jpg'
  import pic2 from '../../../images/detail/banner/2.jpg'
  import pic3 from '../../../images/detail/banner/3.jpg'
  import pic4 from '../../../images/detail/banner/4.jpg'
  import pic5 from '../../../images/detail/banner/5.jpg'
  export default {
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
    },
    data () {
      return {
          list:[{
            url: 'javascript:',
            img: pic1,
            title: ''
          }, {
            url: 'javascript:',
            img: pic2,
            title: ''
          },{
            url: 'javascript:',
            img: pic3,
            title: ''
          },{
            url: 'javascript:',
            img: pic4,
            title: ''
          },{
            url: 'javascript:',
            img: pic5,
            title: ''
          }]
      }
    }
  }
</script>
<style>
  .swiper-demo-img img {
    width: 100%;
  }
</style>
<style scoped>
  .detailegg2{background-color: #f2f7fc;}
  .detailegg2 img{width: 100%;}
  video{margin-left: -1px;width: 100%;}
</style>
