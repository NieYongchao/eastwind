<template>
  <div>
    <ShopHeader/>
    <div class="nav">
      <router-link class="nav_item" to="/shop/goods" replace>点餐</router-link>
      <router-link class="nav_item" to="/shop/rating" replace>评价</router-link>
      <router-link class="nav_item" to="/shop/info" replace>商家</router-link>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader'
export default {
  mounted () {
    this.$store.dispatch('getShopInfo')
  },
  components: {
    ShopHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet">
.nav
  display flex
  height 40px
  line-height 40px
  background-color #fff
  .nav_item
    display block
    flex 1
    text-align center
    font-size 14px
    color #111
    position relative
    &.router-link-active
      color #000
      font-weight bold
      &::after
        content ''
        position absolute
        left 50%
        transform translateX(-50%)
        bottom 6px 
        width 30px
        height 2px
        background-color #4e6ef2
        transition all 1s
</style>