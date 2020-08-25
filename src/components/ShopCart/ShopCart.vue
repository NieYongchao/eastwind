<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left" @click="toggleShow">
          <div class="logo-wrapper">
            <div class="logo" :class="{ highlight: totalCount }">
              <i
                class="iconfont icon-waimaigouwuche"
                :class="{ highlight: totalCount }"
              ></i>
            </div>
            <div class="num">{{ totalCount }}</div>
          </div>
          <div class="price">￥{{ totalPrice }}</div>
          <div class="desc">另需配送费￥{{ info.deliveryPrice }} 元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">
            {{ payText }}
          </div>
        </div>
      </div>
      <transition name="move">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="clearCart">清空</span>
          </div>
          <div class="list-content">
            <ul>
              <li class="food" v-for="(food, index) in cartFoods" :key="index">
                <span class="name">{{ food.name }}</span>
                <div class="price">
                  <span>￥{{ food.price }}</span>
                </div>
                <div class="cartcontrol-wrapper">
                    <CartControl :food="food" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" v-show="listShow" @click="toggleShow"></div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import CartControl from "../../components/CartControl/CartControl";
import BScroll from "better-scroll";
import { MessageBox } from 'mint-ui';
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggleShow  () {
      if (this.totalCount > 0) {
        this.isShow = !this.isShow;
      }
    },
    // 清空购物车
    clearCart () {
      MessageBox.confirm('确定清空购物车吗?').then(() => {
        this.$store.dispatch('clearCart')
      },()=>{
        
      })
    }
  },
  computed: {
    ...mapState(["cartFoods", "info"]),
    ...mapGetters(["totalCount", "totalPrice"]),

    payClass() {
      let { totalPrice } = this;
      let { minPrice } = this.info;
      return totalPrice >= minPrice ? "enough" : "not-enough";
    },
    payText() {
      let { totalPrice } = this;
      let { minPrice } = this.info;
      if (totalPrice === 0) {
        return `￥${totalPrice}元起送`;
      } else if (totalPrice < minPrice) {
        return `还差￥${minPrice - totalPrice}元起送`;
      } else {
        return "结算";
      }
    },
    listShow() {
      
      if (this.totalCount === 0) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.isShow = false;
        return false;
      }

      // 创建列表滑动条
      if (this.isShow) {
        this.$nextTick(() => {
          // scroll不管isShow为true多少次，只创建一次
          if (!this.scroll) {
            this.scroll = new BScroll(".list-content", {
              click: true,
            });
          } else {
            this.scroll.refresh() //刷新一次滚动条，防止第一次无法滑动
          }
        });
      }

      return this.isShow;
    },
  },
  components: {
    CartControl,
  },
};
</script>

<style lang="stylus" rel="stylesheet" scoped>
@import url("//at.alicdn.com/t/font_2001281_jn4p81ikcwr.css");
@import "../../common/stylus/mixins.styl"
.shopcart
  position fixed
  left 0
  bottom 0
  z-index 50
  width 100%
  height 48px
  border-top 1px solid #ccc
  .content
    display flex
    background #fff
    // font-size 0
    .content-left
      flex 1
      .logo-wrapper
        display inline-block
        vertical-align top
        position relative
        top -10px
        margin 0 12px
        padding 6px
        width 56px
        height 56px
        box-sizing border-box
        border-radius 50%
        z-index 60
        .logo
          width 100%
          height 100%
          border-radius 50%
          text-align center
          box-shadow 0 0 5px 3px #ccc
          background #999
          &.highlight
            background #0080FF
          .icon-waimaigouwuche
            line-height 44px
            font-size 24px
            color #fff
            &.highlight
              color #fff
        .num
          position absolute
          top 0
          right 0
          width 24px
          height 16px
          line-height 16px
          text-align center
          border-radius 16px
          font-size 9px
          font-weight 700
          color #ffffff
          background rgb(240, 20, 20)
          box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)
      .price
        display inline-block
        vertical-align top
        margin-top 5px
        line-height 24px
        padding-right 12px
        box-sizing border-box
        font-size 16px
        font-weight 700
        color #111
      .desc
        display inline-block
        vertical-align bottom
        margin-bottom 15px
        margin-left -45px
        font-size 12px
    .content-right
      flex 0 0 120px
      width 120px
      .pay
        height 40px
        margin-top 4px
        line-height 40px
        text-align center
        font-size 14px
        font-weight 700
        color #fff
        border-radius 50px
        &.not-enough
          background #999
        &.enough
          background #0080FF
  .shopcart-list
    position absolute
    left 0
    top 0
    background-color #fff
    width 100%
    z-index -5
    transform translateY(-100%)
    &.move-enter-active, &.move-leave-active
      transition transform .3s
    &.move-enter, &.move-leave-to
      transform translateY(0)
    .list-header
      height 40px
      line-height 40px
      padding 0 18px
      background #EFFBF8
      border-bottom 1px solid rgba(7, 17, 27, 0.1)
      .title
        float left
        font-size 14px
        color rgb(7, 17, 27)
      .empty
        float right
        font-size 14px
        color rgb(0, 160, 220)
    .list-content
      padding 0 18px
      max-height 217px
      overflow hidden
      background #fff
      .food
        position relative
        padding 12px 0
        box-sizing border-box
        .name
          line-height 24px
          font-size 14px
          color rgb(7, 17, 27)
        .price
          position absolute
          right 90px
          bottom 12px
          line-height 24px
          font-size 14px
          font-weight 700
          color rgb(240, 20, 20)
        .cartcontrol-wrapper
          position absolute
          top 50%
          transform translateY(-50%)
          right 0
.list-mask
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  z-index 40
  backdrop-filter blur(2px)
  opacity 1
  background rgba(7, 17, 27, 0.6)
  &.fade-enter-active, &.fade-leave-active
    transition all .3s
  &.fade-enter, &.fade-leave-to
    opacity 0
</style>
