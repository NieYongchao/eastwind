/* 
  路由
*/
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import User from '../pages/User/User.vue'

// 声明
Vue.use(Router)


export default new Router({
  // 所有路由
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})