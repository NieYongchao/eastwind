/* 
  路由
*/
import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../pages/Home/Home.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import User from '../pages/User/User.vue'
// 路由组件懒加载，定义为函数  返回一个import  点击对应路由时才请求
const Home = () => import('../pages/Home/Home.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const User = () => import('../pages/User/User.vue')
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRating from '../pages/Shop/ShopRating/ShopRating.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import Userinfo from '../components/Userinfo/Userinfo.vue'

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
    },
    // 商家详情
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/rating',
          component: ShopRating
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          component: ShopGoods
        },
      ]
    },
    {
      path: '/userinfo',
      component: Userinfo
    }
  ]
})