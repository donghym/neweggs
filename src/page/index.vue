<template>
  <div class="index">
    <div class="title">
      <img src="../images/index/title.png">
    </div>
    <grid :show-lr-borders="false" :show-tb-borders="false" :show-vertical-dividers="false" class='label'>
      <grid-item>
        <img src="../images/index/egg.png">
        <h4>五星蛋</h4>
      </grid-item>
      <grid-item>
        <router-link to="6">
          <img src="../images/index/Pregnant.png">
          <h4>孕妇蛋</h4>
        </router-link>
      </grid-item>
      <grid-item>
        <router-link  to="7">
        <img src="../images/index/baby.png">
        <h4>宝宝蛋</h4>
        </router-link>
      </grid-item>
      <grid-item>
        <router-link  to="4">
        <img src="../images/index/Subscribe.png">
        <h4>订阅套餐</h4>
          </router-link>
      </grid-item>
    </grid>
    <div class="content">
      <h3>100000盒爱心蛋免费领</h3>
      <router-link  to="2">
      <img src="../images/index/product0.png" alt="">
      </router-link>
      <h3>专享订阅套餐，消费金融返现</h3>
      <router-link  to="3">
      <img src="../images/index/product1.png" alt="">
      </router-link>
      <h3>尊享礼品卡</h3>
      <router-link  to="8">
      <img src="../images/index/product2.png" alt="">
      </router-link>
    </div>
    <div class="content">
      <h3>快乐鸡舍互动游戏<img src="../images/common/more.png" alt=""></h3>
      <img src="../images/index/Icon.png" alt="">
      <h3>一起来看看快乐的蛋和明星们的日常<img src="../images/common/more.png" alt=""></h3>
      <h4>快乐的蛋   &《非常静距离》钟意秀-视频</h4>
      <img src="../images/index/bg.png" alt="">
    </div>
    <jump></jump>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle } from 'vux'
import { Flexbox, FlexboxItem } from 'vux'
import jump from '../components/jump'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem,
    GroupTitle,
    jump
  },
  methods: {
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .index{background-color: #ebf0f5}
  .title img{width: 100%;height: auto;}
  .grid-center{display: block;text-align: center;color: #666;}
  .weui-grids{background-color: #fff;}
  .label img{margin: 0 auto;width: 90%;}
  .label h4{color: #353536;text-align: center;}
  .label .weui-grid:after{}
  .content{margin: 0 auto 20px;background-color: #fff;padding-bottom: 20px;}
  .content h3{font-weight: bolder;font-size: 16px;width: 90%;margin: 0 auto; padding-top: 20px;}
  .content h3 img{float: right;margin-top: 8px;width: 32px;margin-right: 10px;}
  .content h4{width: 90%;margin: 0 auto 10px;font-size: 14px;color: #b4b4b4;}
  .content img{display:block;width:92%;margin: 20px auto 10px;}
</style>
