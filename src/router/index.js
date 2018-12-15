import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/page/index'
import page2 from '@/page/2'
import page3 from '@/page/3'
import page4 from '@/page/4'
import page5 from '@/page/5'
import page6 from '@/page/6'
import page7 from '@/page/7'
import page8 from '@/page/8'
import detail from '@/page/detail'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/2',
    name: 'page2',
    component: page2
  }, {
    path: '/3',
    name: 'page3',
    component: page3
  }, {
    path: '/4',
    name: 'page4',
    component: page4
  }, {
    path: '/5',
    name: 'page5',
    component: page5
  }, {
    path: '/6',
    name: 'page6',
    component: page6
  }, {
    path: '/7',
    name: 'page7',
    component: page7
  }, {
    path: '/8',
    name: 'page8',
    component: page8
  }, {
    path: '/detail',
    name: 'detail',
    component: detail
  }, {
    path: '/*',
    name: 'index',
    component: index
  }]
})