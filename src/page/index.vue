<template>
  <div>
    <div class="title">
      <img src="../images/index/title.png">
    </div>
    <grid :show-lr-borders="false" :show-tb-borders="false" :show-vertical-dividers="false" class='label'>
      <grid-item>
        <img src="../images/index/egg.png">
        <h4>五星蛋</h4>
      </grid-item>
      <grid-item>
        <img src="../images/index/Pregnant.png">
        <h4>孕妇蛋</h4>
      </grid-item>
      <grid-item>
        <img src="../images/index/baby.png">
        <h4>宝宝蛋</h4>
      </grid-item>
      <grid-item>
        <img src="../images/index/Subscribe.png">
        <h4>订阅套餐</h4>
      </grid-item>
    </grid>
    <flexbox orient="vertical" class='content-list'>
      <flexbox-item>
        <h3>100000盒爱心蛋免费领</h3>
        <div class="content">
          <img src="../images/index/product0.png" alt="">
        </div>
      </flexbox-item>
      <flexbox-item>
        <h3>专享订阅套餐，消费金融返现</h3>
        <div class="content">
          <img src="../images/index/product1.png" alt="">
        </div>
      </flexbox-item>
      <flexbox-item>
        <h3>尊享礼品卡</h3>
        <div class="content">
          <img src="../images/index/product2.png" alt="">
        </div>
      </flexbox-item>
      <flexbox-item>
        <h3>快乐鸡舍互动游戏<img src="../images/index/more.png" alt=""></h3>
        <div class="content">
          <img src="../images/index/Icon.png" alt="">
        </div>
      </flexbox-item>
      <flexbox-item>
        <h3>一起来看看快乐的蛋和明星们的日常<img src="../images/index/more.png" alt=""></h3>
        <h4>快乐的蛋   &《非常静距离》钟意秀-视频</h4>
        <div class="content">
          <img src="../images/index/bg.png" alt="">
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Grid, GridItem, GroupTitle } from 'vux'
import { Flexbox, FlexboxItem } from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem,
    GroupTitle
  },
  methods: {
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.title img{width: 100%;height: auto;}
.grid-center{display: block;text-align: center;color: #666;}
.weui-grids{background-color: #fff;}
.label img{margin: 0 auto;width: 90%;}
.label h4{color: #353536;}
.label .weui-grid:after{}
.content-list{padding:0 10px 20px;}
.content-list h3{font-weight: bolder;font-size: 16px;margin: 14px 0 0;}
.content-list h3 img{float: right;margin-top: 8px;width: 32px;}
.content-list h4{color:#9b9b9b; }
.content img{border-radius: 4px;text-align: center;width: 100%;margin-top: 8px;}
</style>