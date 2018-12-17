import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import order from './views/Order.vue'
import Grap from './views/Grap.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/grap',
      name: 'grap',
      component: Grap
    }

  ]
})
