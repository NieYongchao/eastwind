/* 
  同步更新state
*/

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATING
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
}