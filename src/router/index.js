/* 
  路由
*/
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import User from '../pages/User/User.vue'
import Login from '../pages/Login/Login.vue'

// 声明
Vue.use(Router)


export default new Router({
  // 所有路由
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/user',
      component: User,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})