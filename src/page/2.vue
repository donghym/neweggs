<template>
  <div class="page2">
    <div class="title">
      <img src="../images/2/top.png">
      <span>
        <img src="../images/2/top-bottom.png">
      </span>
    </div>
    <div class="content-list">
      <div class="content info">
        <h2><img src="../images/2/little-icon.png">金牌五星蛋简介</h2>
        <ul>
          <li>蛋清透亮、浓稠如蜜，蛋黄大而饱满</li>
          <li>高蛋白、无腥味、可生食，拥有看得见的“双营养圈” </li>
          <li>在保持充足营养的同时，让鸡蛋口感保留自然馨</li>
        </ul>
        <ol>
          <li><img src="../images/2/info1.png"></li>
          <li><img src="../images/2/info2.png"></li>
          <li><img src="../images/2/info3.png"></li>
        </ol>
      </div>
      <div class="content rule">
        <h3>领取规则 <img src="../images/common/more.png"></h3>
        <ul>
          <li>
            <h4 class="clearfix">
              <span>1</span>本次免费领礼活动仅限于中国内陆地区，暂不支持港澳台地区用户参与；
            </h4>
          </li>
          <li>
            <h4 class="clearfix">
              <span>2</span>适用人群：孕期家庭成员或亲子(有娃)家庭成员；
            </h4>
            <h5>孕期家庭申领条件：</h5>
            <p>为验证申领人处于“孕期”阶段，需上传《孕产妇保健档    案手册》个人信息业(至少包含建档时间、姓名、性别、年    龄、身份证号等信息)或其它同等资质证明电子照片至官方    申领表单，审核通过即成功领取，不成功则领取失败；</p>
            <h5>亲子家庭申领条件：</h5>
            <p>为验证申领人处于“孕期”阶段，需上传《孕产妇保健档    案手册》个人信息业(至少包含建档时间、姓名、性别、年    龄、身份证号等信息)或其它同等资质证明电子照片至官方    申领表单，审核通过即成功领取，不成功则领取失败；</p>
          </li>
          <li>
            <h4 class="clearfix">
              <span>3</span>每个孕期ID档案和宝宝身份证ID仅限领取快乐的蛋－金牌五星蛋(10枚)装一盒，重复领取视为无效；
            </h4>
          </li>
          <li>
            <h4 class="clearfix">
              <span>4</span>单个申领人ID若是多宝妈妈请上传对等的《孕产妇保健档案手册》个人信息页、宝宝身份证号或同等资质证明电子照，审核通过即可单次免费获得对等商；
            </h4>
          </li>
          <li>
            <h4 class="clearfix">
              <span>5</span>快乐的蛋将对申领人的信息严格保密，若因快乐的蛋不当操作导致申领人及申领人家庭成员信息泄漏，快乐的蛋将担负法律责任，请申领人放心领取；
            </h4>
          </li>
          <li>
            <h4 class="clearfix">
              <span>6</span>本活动最终解释权归邦铭农信科技(北京)有限公司所有；
            </h4>
          </li>
        </ul>
      </div>
      <div class="content flow">
        <h3>领取流程 <img src="../images/common/more.png"></h3>
        <img src="../images/2/flow.png">
      </div>
      <div class="bottom clearfix">
        <div class="left">
          <h2>免费吃蛋，送完为止</h2>
          <div class="btn">赶快告诉你身边的小伙伴们吧！</div>
          <p>活动咨询：010－57107163</p>
          <p>微信咨询：wakawa2014</p>
        </div>
        <div class="right"><img src="../images/2/erweima.png"></div>
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
  .page2{background-color: #705ce6;position: relative;}
  .title{position: relative;}
  .title>img{width: 100%;height: auto;}
  .title span{ position: absolute;bottom: -30px;left: 0;display: block;width: 100%;text-align: center;z-index: 3;}
  .title span img{width: 90%;}
  .content-list{margin-top: -20px;position:relative;z-index: 2;width: 100%;}
  .content{margin: 0 auto;padding-bottom: 20px;}
  .content h3{font-weight: bolder;font-size: 16px;width: 90%;margin: 0 auto;}
  .content h3 img{float: right;margin-top: 8px;width: 32px;margin-right: 10px;}
  .content{background-color: #fff; border-radius:20px;margin-bottom: 20px;}
  .info{padding-top:50px;}
  .info h2{text-align: center;width: 80%;margin: 0 auto;}
  .info h2 img{float: left;height:18px;margin-top: 9px;}
  .info ul{width: 84%;margin: 0 11%;padding-top: 10px;font-size: 13px;}
  .info ul li{line-height: 30px;position: relative;padding-left: 20px;}
  .info ul li:before{content: '';display: inline-block;border:solid 2px #1fccc6;border-radius: 10px;width: 8px;height: 8px;margin-right: 8px;position: absolute;left: 0;top: 9px;}
  .info ol{}
  .info ol li{width: 90%;margin: 0 auto;margin-bottom: 10px;}
  .info ol li img{width: 100%;border-radius: 4px;}
  .rule{}
  .rule h3{padding-top: 20px;}
  .rule ul{width: 90%;margin: 0 auto}
  .rule ul li{line-height: 32px;}
  .rule ul li h4{font-size: 14px;position: relative;padding-left: 24px;}
  .rule ul li h4 span{display: inline-block;width: 20px;height: 20px;border-radius: 10px;text-align: center;line-height: 20px;color: #fff;background-color: #f0b248;position: absolute;left: 0;top: 6px;}
  .rule ul li h5{ position: relative;padding-left: 40px;}
  .rule ul li h5:before{position: absolute;content: '';display: inline-block;border:solid 2px #1fccc6;border-radius: 10px;width: 8px;height: 8px;top: 10px;left: 24px;background-color: #1fccc6;}
  .rule ul li p{ position: relative; padding-left: 40px;line-height: 24px;}
  .rule ul li p:before{position: absolute;content: '';display: inline-block;border:solid 2px #1fccc6;border-radius: 10px;width: 8px;height: 8px;top: 7px;left: 24px;}
  .flow{}
  .flow h3{padding-top: 20px;}
  .flow>img{display:block;width: 80%;margin: 20px auto 10px;}
  .bottom{}
  .bottom{padding-bottom: 20px;width: 90%;margin: 0 auto;}
  .bottom .left{float:left;}
  .bottom .left h2{color: #fff;font-size: 18px;margin: 4px 0;}
  .bottom .left .btn{color: #fff;font-size: 14px;background-color: #f0b248;padding:5px 10px;border-radius: 20px;margin-left: -10px;}
  .bottom .left p{color: #fff;font-size: 16px;margin-top: 4px;}
  .bottom .right{float: right;width: 40%;}
  .bottom .right img{width: 100%;}
</style>