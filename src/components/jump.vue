<template>
  <div class="jump">
    <flexbox>
      <flexbox-item><router-link to='index'><div class="flex-demo">1</div></router-link></flexbox-item>
      <flexbox-item><router-link to='2'><div class="flex-demo">2</div></router-link></flexbox-item>
      <flexbox-item><router-link to='3'><div class="flex-demo">3</div></router-link></flexbox-item>
      <flexbox-item><router-link to='4'><div class="flex-demo">4</div></router-link></flexbox-item>
      <flexbox-item><router-link to='5'><div class="flex-demo">5</div></router-link></flexbox-item>
      <flexbox-item><router-link to='6'><div class="flex-demo">6</div></router-link></flexbox-item>
      <flexbox-item><router-link to='7'><div class="flex-demo">7</div></router-link></flexbox-item>
      <flexbox-item><router-link to='8'><div class="flex-demo">8</div></router-link></flexbox-item>
    </flexbox>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
  name: 'jump',
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="less">
.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>