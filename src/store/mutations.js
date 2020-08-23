/* 
  同步更新state
*/
import Vue from 'vue'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATING,
  INCREASE_FOOD_COUNT,
  DECREASE_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },

  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },

  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  // 商家食品分类
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  // 商家评价
  [RECEIVE_RATING] (state, {rating}) {
    state.rating = rating
  },
  // 商家详情
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  // 增加food中的count
  [INCREASE_FOOD_COUNT] (state, {food}) {
    if(!food.count){
      Vue.set(food, 'count', 1) //给food绑定count
      state.cartFoods.push(food) //把food添加到购物车中
    } else {
      food.count++
    }
  },
  // 减少food中的count
  [DECREASE_FOOD_COUNT] (state, {food}) {
    if(food.count){
      food.count--
      if(food.count===0){
        // 数量为0时把购物车cartFoods中对应的food删除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
  // 清空购物车
  [CLEAR_CART] (state) {
    //把foods中的count设置为0
    state.cartFoods.forEach(food => food.count = 0)
    // 把cartFoods购物车数据清空
    state.cartFoods = []
  }
}