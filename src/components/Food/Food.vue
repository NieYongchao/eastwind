<template>
  <div>
    <transition name="fade">
      <div class="food" v-if="isShow">
        <div class="food_content">
          <div class="image_header">
            <img :src="food.image" />
            <p class="food_desc">{{ food.info }}</p>
            <div class="back" @click="toggleShow">
              <i class="iconfont icon-back"></i>
            </div>
          </div>
          <div class="content">
            <h1 class="title">{{ food.name }}</h1>
            <div class="detail">
              <span class="sell_count">月售{{ food.sellCount }}份</span>
              <span class="rating">好评率{{ food.rating }}%</span>
            </div>
            <div class="price">
              <span class="now">￥{{ food.price }}</span>
              <span class="old" v-show="food.oldPrice"
                >￥{{ food.oldPrice }}</span
              >
            </div>
            <div class="cart_wrapper">
              <CartControl :food="food" />
            </div>
          </div>
        </div>
        <div class="food_cover" @click="toggleShow"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import CartControl from "../../components/CartControl/CartControl";
export default {
  props: {
    food: Object,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow;
    },
  },
  components: {
    CartControl,
  },
};
</script>

<style lang="stylus" rel="stylesheet" scoped>
@import "//at.alicdn.com/t/font_2001281_gg1y2fb2gm.css"
@import "../../common/stylus/mixins.styl"
.food
  position fixed
  left 0
  top 0
  bottom 0
  z-index 100
  width 100%
  &.fade-enter-active, &.fade-leave-active
    transition all 0.4s
  &.fade-enter, &.fade-leave-to
    opacity 0
  .food_content
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    width 80%
    height 63%
    background-color #fff
    border-radius 10px
    z-index 66
    box-shadow 0px 0px 3px 0px  #ccc
    .image_header
      position relative
      width 100%
      height 0
      padding-top 100%
      img
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        border-radius 10px 10px 0 0
      .food_desc
        font-size 14px
        color #ddd
        letter-spacing 0
        position absolute
        left 0
        bottom 0
        padding 0 10px 10px
      .back
        position absolute
        top 5px
        left 0
        .icon-back
          display block
          padding 10px
          color #fff
          font-size 20px
    .content
      position relative
      padding 18px
      .title
        line-height 14px
        margin-bottom 8px
        font-size 14px
        font-weight 700
        color #111
      .detail
        margin-bottom: 5px
        line-height: 14px
        font-size: 14px
        color  rgb(147, 153, 159)
        .sell_count
          margin-right 15px
      .price
        font-weight 700
        line-height 24px
        .now
          margin-right 10px
          font-size 14px
          color  rgb(240, 20, 20)
        .old
          font-size 14px
          text-decoration line-through
          color: rgb(147, 153, 159)
      .cart_wrapper
        position absolute
        bottom 0
        right 15px
  .food_cover
    position absolute
    top 0
    right 0
    left 0
    bottom -48
    height 100%
    background-color rgba(0,0,0, .5)
    z-index 55
</style>
