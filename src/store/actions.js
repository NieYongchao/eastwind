/* 
  异步请求 调用接口
*/

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqShops
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
  // 异步食品分类
  async getCategorys ({commit}) {
    const result = await reqFoodCategorys()

    if(result.code==0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  // 异步商家数据
  async getShops ({commit, state}) {
    const { longtitude, latitude } = state
    const result = await reqShops(longtitude,latitude)

    if(result.code==0){
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
}