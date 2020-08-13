<template>
  <div class="shop_list_container">
    <ul class="shop_list">
      <li class="shop_li">
        <a href="#">
          <section class="shop_li_left">
            <img class="shop_img" src="./images/shop/1.jpg" />
          </section>
          <section class="shop_li_right">
            <section class="shop_header">
              <h4 class="shop_title">锄禾日当午，汗滴禾下土</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating">
              <section class="shop_rating_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_num">
                  3.6
                </div>
                <div class="order_num">
                  月售106单
                </div>
              </section>
              <section class="shop_rating_right">
                <span class="delivery_style delivery_right">蜂鸟专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </section>
        </a>
      </li>
      <li class="shop_li">
        <a href="#">
          <section class="shop_li_left">
            <img class="shop_img" src="./images/shop/1.jpg" />
          </section>
          <section class="shop_li_right">
            <section class="shop_header">
              <h4 class="shop_title">锄禾日当午，汗滴禾下土</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating">
              <section class="shop_rating_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_num">
                  3.6
                </div>
                <div class="order_num">
                  月售106单
                </div>
              </section>
              <section class="shop_rating_right">
                <span class="delivery_style delivery_right">蜂鸟专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </section>
        </a>
      </li>
      <li class="shop_li">
        <a href="#">
          <section class="shop_li_left">
            <img class="shop_img" src="./images/shop/1.jpg" />
          </section>
          <section class="shop_li_right">
            <section class="shop_header">
              <h4 class="shop_title">锄禾日当午，汗滴禾下土</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating">
              <section class="shop_rating_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_num">
                  3.6
                </div>
                <div class="order_num">
                  月售106单
                </div>
              </section>
              <section class="shop_rating_right">
                <span class="delivery_style delivery_right">蜂鸟专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </section>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
      a
        clearFix()
        display block
        width 100%
        padding 10px
        box-sizing border-box
        .shop_li_left
          float left
          width 23%
          // height 75px
          .shop_img
            width 100%
            height 100%
        .shop_li_right
          float right
          width 77%
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
                // font-size 0
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
