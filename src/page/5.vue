<template>
  <div class="page5">
    <jump></jump>
    <div class="content-list">
      <h3 class="clearfix">
        热销单品
        <img src="../images/common/more.png">
      </h3>
      <ul class="clearfix">
        <li><img src="../images/5/10.png"></li>
        <li><img src="../images/5/20.png"></li>
      </ul>
    </div>
    <div class="content-list">
      <h3 class="clearfix">
        精选周边
        <img src="../images/common/more.png">
      </h3>
      <ol class="clearfix">
        <li class="clearfix">
          <img src="../images/5/list1.png" class="good">
          <img src="../images/5/arr.png" class="arr">
          <h4>多功能蒸蛋器</h4>
        </li>
        <li class="clearfix">
          <img src="../images/5/list2.png" class="good">
          <img src="../images/5/arr.png" class="arr">
          <h4>孕产期营养滋补老母鸡</h4>
          <h5>乳酸菌喂养650天</h5>
        </li>
        <li class="clearfix">
          <img src="../images/5/list3.png" class="good">
          <img src="../images/5/arr.png" class="arr">
          <h4>韩版时尚纯棉厨房煎蛋围裙</h4>
        </li>
      </ol>
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
  .content-list{margin:0 auto;padding-bottom: 20px;background-color: #fff;}
  .content-list h3{font-weight: bolder;font-size: 16px;margin: 14px 0 10px; padding-top: 20px;padding:0 5%;}
  .content-list h3 img{float: right;margin-top: 8px;width: 32px;}
  .content-list h4{font-weight: bolder;margin:24px 0 6px;font-size: 16px;}
  .content-list h5{color:#9b9b9b;margin-bottom: 20px;}
  ul{}  
  ul li{float: left;width: 44%;margin-left: 4%;}  
  ul li img{width: 100%;}
  ol{}
  ol li{border-radius: 4px;border:solid 1px #efefef; padding: 10px;line-height: 1;width: 92%;margin-left: 4%;margin-bottom: 10px;vertical-align: middle;display: table;height: 80px;}
  ol li .good{float: left;height:80px;margin-right: 10px;}
  ol li .arr{float: right;width: 20px;padding-top: 30px;margin-right: 10px;}
</style>