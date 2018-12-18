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

import detailegg1 from '@/page/detail/egg1/1'
import detailegg2 from '@/page/detail/egg1/2'
import detailegg3 from '@/page/detail/egg1/3'
import detailegg4 from '@/page/detail/egg1/4'
import detailegg5 from '@/page/detail/egg2/1'
import detailegg6 from '@/page/detail/egg2/2'

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
    path: '/detail/egg1/1',
    name: 'detailegg1',
    component: detailegg1
  }, {
    path: '/detail/egg1/2',
    name: 'detailegg2',
    component: detailegg2
  }, {
    path: '/detail/egg1/3',
    name: 'detailegg3',
    component: detailegg3
  }, {
    path: '/detail/egg1/4',
    name: 'detailegg4',
    component: detailegg4
  }, {
    path: '/detail/egg2/1',
    name: 'detailegg5',
    component: detailegg5
  }, {
    path: '/detail/egg2/2',
    name: 'detailegg6',
    component: detailegg6
  }, {
    path: '/*',
    name: 'index',
    component: index
  }],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }

})