<template>
  <div class="page8">
    <jump></jump>
    <div class="content">
      <h3>专属礼品定制<img src="../images/common/more.png"></h3>
      <img src="../images/8/t1.png">
      <img src="../images/8/t2.png">
    </div>
    <div class="content">
      <h3>热销订阅制套餐<img src="../images/common/more.png"></h3>
      <img src="../images/8/list1.png">
      <h4>孕妈多营养鸡蛋  孕期安心陪伴订阅制套餐</h4>
      <p>7个月(28周)，每两周配送1次</p>
      <p>每次配送30枚，共420枚</p>
      <img src="../images/8/list2.png">
      <h4>0-6岁宝宝多营养鸡蛋  年度呵护订阅制套餐</h4>
      <p> 1年(52周)，每两周配送1次</p>
      <p>每次配送30枚，共780枚</p>
    </div>
    <jump></jump>
  </div>
</template>
<script>
import jump from '../components/jump'
export default {
  components: {
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
  .page7{background-color: #f2f7fc;}
  .content{margin: 0 auto 20px;background-color: #fff;padding-bottom: 20px;}
  .content h3{font-weight: bolder;font-size: 16px;width: 90%;margin: 0 auto 10px; padding-top: 20px;}
  .content h3 img{float: right;margin-top: 8px;width: 32px;margin-right: 10px;}
  .content>img{display:block;width:92%;margin: 20px auto 10px;}
  ul li{width: 44%;margin-left: 4%;float: left;}
  ul li img{width: 100%;}
  .content h4{margin: 0 auto;font-size: 14px;margin-top: -20px;margin-left: 10%;margin-bottom: 4px;}
  .content p{margin: 0 auto;position: relative;margin-left: 10%; padding-left: 16px;margin-bottom: 2px;}
  .content p:before{position: absolute;content: '';display: inline-block;border:solid 2px #1fccc6;border-radius: 10px;width: 8px;height: 8px;top:4px;left: 0;}
</style>