<template>
  <div class="page3">
    <div class="page3-top">
      <img src="../images/3/top.png">
    </div>
    <div class="flow">
      <h3 class="clearfix">
        订阅式金融套餐返款流程
        <img src="../images/common/more.png">
      </h3>
      <img src="../images/3/flow.png">
    </div>
    <div class="content">
      <div class="content-top">
        <h2>梁静的选择</h2>
        <p>快乐的蛋</p>
        <p>明星梁静投资的品质鲜鸡蛋品牌</p>
      </div>
      <div class="content-body">
        <img src="../images/3/advantage.png" alt="">
        <img src="../images/3/advantage-bottom.png" class="bottom" alt="">
      </div>
    </div>
    <ul>
      <li>
        <img src="../images/3/bg1.png">
        <h2>0-6岁宝宝多营养鸡蛋  年度呵护订阅制套餐</h2>
        <p>1年(52周)，每两周配送1次</p>
      </li>
      <li>
        <img src="../images/3/bg2.png">
        <h2>孕妈多营养鸡蛋  孕期安心陪伴订阅制套餐</h2>
        <p>7个月(28周)，每两周配送1次</p>
      </li>
    </ul>
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
<style scoped>
  .page3{background-color: #f2f7fc;}
  .page3-top img{width: 100%;}
  .flow{margin: 0 auto;padding-bottom: 20px;background-color: #fff;}
  .flow h3{font-weight: bolder;font-size: 16px;width: 90%;margin: 0 auto;padding-top: 12px;}
  .flow h3 img{float: right;margin-top: 8px;width: 32px;margin-right: 10px;}
  .flow>img{width:100%;}
  .content{background-color: #fff;margin-top: 20px;}
  .content-top{}
  .content-top h2{margin: 0;margin-left: 40px;padding-top: 10px;}
  .content-top p{color: #979797;margin:2px 0 4px 40px;}
  .content-body img{width:100%;}
  .content-body .bottom{padding-top: 20px;}
  ul{background-color: #fff;padding-bottom: 40px;}
  ul li img{width: 94%;margin-left: 3%;}
  ul li h2{margin: 0 auto;font-size: 14px;margin-top: -20px;margin-left: 10%;margin-bottom: 4px;}
  ul li p{margin: 0 auto;position: relative;margin-left: 10%; padding-left: 16px;margin-bottom: 20px;}
  ul li p:before{position: absolute;content: '';display: inline-block;border:solid 2px #1fccc6;border-radius: 10px;width: 8px;height: 8px;top:4px;left: 0;}
</style>