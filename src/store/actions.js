/* 
  异步请求 调用接口
*/

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATING,
  RECEIVE_INFO
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopRating,
  reqShopInfo
} from '../api'

export default {
  // 异步获取地址
  async getAddress ({commit, state}) {
    const geohash = state.latitude + ',' + state.longtitude 
    const result = await reqAddress(geohash)

    if(result.code==0){
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  // 异步获取食品分类
  async getCategorys ({commit}) {
    const result = await reqFoodCategorys()

    if(result.code==0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  // 异步获取商家数据
  async getShops ({commit, state}) {
    const { longtitude, latitude } = state
    const result = await reqShops(longtitude,latitude)

    if(result.code==0){
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  // 保存用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  // 获取用户信息
  async getUserInfo ({commit}) {
    let result = await reqUserInfo()
    if(result.code==0){
      let userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },
  // 用户退出
  async logout ({commit}) {
    let result = await reqLogout()
    if(result.code==0){
      commit(RESET_USER_INFO)
    }
  },
  // 获取商家食品分类信息
  async getShopGoods ({commit}, callback) {
    let result = await reqShopGoods()
    if(result.code==0){
      let goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 执行回调
      callback && callback()
    }
  },
  // 获取商家评价信息
  async getShopRating ({commit}) {
    let result = await reqShopRating()
    if(result.code==0){
      let rating = result.data
      commit(RECEIVE_RATING, {rating})
    }
  },
  // 获取商家详情信息
  async getShopInfo ({commit}) {
    let result = await reqShopInfo()
    if(result.code==0){
      let info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
}