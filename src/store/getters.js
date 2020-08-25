export default {

  totalCount(state) {
    return state.cartFoods.reduce((total, food) => total + food.count, 0)
  },

  totalPrice(state) {
    return state.cartFoods.reduce((total, food) => total + food.count * food.price, 0)
  },

  // 评价组件中满意的数量，根据全部数量中的rateType===0计算
  satisfied(state) {
    return state.rating.reduce((total, item) => total + (item.rateType === 0 ? 1 : 0), 0)
  }
}