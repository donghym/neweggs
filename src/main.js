// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
/* eslint-disable no-new */
//进入路由之前设置拦截器
let noLoginList = ["index", "2", "3", "4", "5", "6", "7", "8"];
// router.routeInfo.beforeEach((to, from, next) => {
//   let user = sessionStorage.getItem('user');
//   //如果要去登录页面
//   if (noLoginList.indexOf(to.name) >= 0) {
//     if (!user || user == '') {
//       //未登录的状态通行
//       next();
//       return;
//     } else {
//       if (["index", "2", "3"].indexOf(to.name) >= 0) {
//         //已登录的状态去首页
//         next({
//           name: 'home'
//         });
//         return;
//       } else {
//         //已登录的状态去首页
//         next();
//         return;
//       }
//     }
//   } else {
//     //去登录页面以外的页面(以下是本文关键代码)
//     if (user && user != '') {
//       //判断是否为需要缓存组件,如果是添加组件名到数组
//       if (to.meta.keepAlive) {
//         const toName = to.name;
//         let keepLi = store.getters.getKeepAlList;
//         keepLi.indexOf(toName) < 0 ? keepLi.push(toName) : '';
//         store.commit('SET_KEEPALLIST', keepLi);
//       }
//       //根据路径名深度设置转场动画类型
//       store.commit('SET_TRANSNA', (to.path.split('/').length < from.path.split('/').length ? 'leftin' : 'rightin'));
//       next();
//     } else {
//       let toWhere = router.nameList.indexOf(to.name) >= 0 ? to : { name: 'home' };
//       next({
//         name: 'login',
//         params: {
//           jumpTo: {
//             name: toWhere.name,
//             params: toWhere.params,
//             query: toWhere.query,
//           },
//         }
//       });
//     }
//   }
// });
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})