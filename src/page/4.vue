<template>
  <div class="page4">
    <jump></jump>
    <ul class="page4-top">
      <li><img src="../images/4/top1.png"></li>
      <li><img src="../images/4/top2.png"></li>
      <li><img src="../images/4/top3.png"></li>
    </ul>
    <div class="content-list">
      <h3 class="clearfix">
        订阅式金融套餐返款流程
        <img src="../images/common/more.png">
      </h3>
      <h4>用心呵护每一次美好绽放</h4>
      <div class="content">
        <img src="../images/4/list1.png">
      </div>
      <div class="content">
        <img src="../images/4/list2.png">
      </div>
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
  .page4{background-color: #f2f7fc;}
  .page4-top{background-color: #fff;padding-bottom: 20px;}
  .page4-top li{text-align: right;margin-bottom: 10px;}
  .page4-top li img{width: 95%;}

  .content-list{padding:0 5%;margin:0 auto;padding-bottom: 20px;background-color: #fff;}
  .content-list h3{font-weight: bolder;font-size: 16px;margin: 14px 0 0; padding-top: 20px;}
  .content-list h3 img{float: right;margin-top: 8px;width: 32px;}
  .content-list h4{color:#9b9b9b;margin-bottom: 20px;}
  .content{margin-bottom: 10px;}
  .content>img{width:100%;}
</style>