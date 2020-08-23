<template>
  <div class="cart_control">
    <transition name="move">
      <i class="iconfont icon-icon_remove" v-if="food.count" @click.stop="updateFoodCount(false)"></i>
    </transition>
    <span class="cart_count" v-if="food.count">{{food.count}}</span>
    <i class="iconfont icon-add" @click.stop="updateFoodCount(true)"></i>
  </div>
</template>

<script>
export default {
  props: {
    food: Object
  },
  methods: {
    updateFoodCount(isAdd){
      this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet">
@import "//at.alicdn.com/t/font_2001281_gg1y2fb2gm.css" 
.cart_control
  .icon-icon_remove
    display inline-block
    color #4e6ef2
    &.move-enter-active, &.move-leave-active
      transition all .3s 
    &.move-enter, &.move-leave-to
      opacity 0
      transform translateX(36px) rotate(360deg)
  .cart_count
    color #111
    font-size 14px  
    margin 0 8px
  .icon-add
    display inline-block
    color #4e6ef2
</style>