<template>
  <div class="shop_list_container">
    <ul class="shop_list" v-if="shops.length">
      <li class="shop_li" v-for="(shop, index) in shops" :key="index">
        <a href="#">
          <section class="shop_li_left">
            <!-- <img class="shop_img" src="./images/shop/1.jpg" /> -->
            <img class="shop_img" src="./images/shop/food03.jpg" />
          </section>
          <section class="shop_li_right">
            <section class="shop_header">
              <h4 class="shop_title">{{shop.name}}</h4>
              <ul class="shop_detail_ul" v-for="(support,index) in shop.supports" :key="index">
                <li class="supports">{{support.icon_name}}</li>
              </ul>
            </section>
            <section class="shop_rating">
              <section class="shop_rating_left">
                <Star :score="shop.rating" :size="24"/>
                <div class="rating_num">
                  {{shop.rating}}
                </div>
                <div class="order_num">
                  月售{{shop.recent_order_num}}单
                </div>
              </section>
              <section class="shop_rating_right">
                <span class="delivery_style delivery_right">{{shop.delivery_mode.text}}</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥{{shop.float_minimum_order_amount}}起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥{{shop.float_delivery_fee}}</span>
              </p>
            </section>
          </section>
        </a>
      </li>
    </ul>
    <ul v-else>
      <li v-for="i in 5" :key="i">
        <img src="./images/shop_back.svg" alt="back">
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Star from '../../components/Star/Star'

export default {
  data () {
      return {
        baseImgUrl: 'http://cangdu.org:8001/img/'
      }
    },
  computed: {
    ...mapState(['shops'])
  },
  components: {
    Star
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl";
.shop_list_container
  width 100%
  height 500px
  margin-top 15px
  // background-color red
  .shop_list
    .shop_li
      width 100%
      border-bottom 2px solid #eee
      >a
        clearFix()
        display block
        width 100%
        padding 10px
        box-sizing border-box
        .shop_li_left
          float left
          width 23%
          height 82px
          .shop_img
            width 100%
            height 100%
        .shop_li_right
          float right
          width 74%
          .shop_header
            clearFix()
            width 100%
            .shop_title
              float left
              color #333
              font-size 16px
              line-height 16px
              font-weight 700
              &::before
                content '品牌'
                display inline-block
                font-size 12px
                line-height 11px
                color #333
                background-color #ffd930
                padding 2px 2px
                border-radius 2px
                margin-right 5px
            .shop_detail_ul
              float right
              .supports
                float left
                font-size 14px
                color #999
                padding 0 2px
          .shop_rating
            clearFix()
            width 100%
            margin-top 19px
            margin-bottom 18px
            .shop_rating_left
              float left
              color #ff9a0d
              .star //2x图 3x图
                float left
                font-size 0
                .star-item
                  display inline-block
                  background-repeat no-repeat
                &.star-48
                  .star-item
                    width 20px
                    height 20px
                    margin-right 22px
                    background-size 20px 20px
                    &:last-child
                      margin-right: 0
                    &.on
                      bg-image('./images/stars/star48_on')
                    &.half
                      bg-image('./images/stars/star48_half')
                    &.off
                      bg-image('./images/stars/star48_off')
                &.star-36
                  .star-item
                    width 15px
                    height 15px
                    margin-right 6px
                    background-size 15px 15px
                    &:last-child
                      margin-right 0
                    &.on
                      bg-image('./images/stars/star36_on')
                    &.half
                      bg-image('./images/stars/star36_half')
                    &.off
                      bg-image('./images/stars/star36_off')
                &.star-24
                  .star-item
                    width 10px
                    height 10px
                    margin-right 3px
                    background-size 10px 10px
                    &:last-child
                      margin-right 0
                    &.on
                      bg-image('./images/stars/star24_on')
                    &.half
                      bg-image('./images/stars/star24_half')
                    &.off
                      bg-image('./images/stars/star24_off')
              .rating_num
                float left
                font-size 14px
                color #ff6000
                margin-left 4px
              .order_num
                float left
                font-size 14px
                color #666
                margin-left 4px
                // transform scale(.8)
            .shop_rating_right
              float right
              .delivery_style
                // transform-origin 35px 0
                // transform scale(.7)
                display inline-block
                font-size 12px
                color #4e6ef2
                padding 0px 3px
                border-radius 2px
          .shop_distance
            clearFix()
            width 100%
            font-size 12px
            .shop_delivery_msg
              float left
              color #666
            .segmentation
              color #ccc
</style>
