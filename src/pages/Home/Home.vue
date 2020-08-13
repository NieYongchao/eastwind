<template>
  <div class="home">
    <!-- 首页头部 -->
    <HeaderTop>
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" to="#">
        <span class="header_login_text">
          登录|注册
        </span>
      </router-link>
    </HeaderTop>
    <!-- 轮播图 -->
    <nav class="nav_box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" />
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg" />
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg" />
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg" />
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.jpg" />
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.jpg" />
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.jpg" />
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.jpg" />
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpg" />
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg" />
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg" />
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg" />
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg" />
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg" />
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" />
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg" />
              </div>
              <span>土豪推荐</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!-- 商家列表 -->
    <div class="home_shop_list">
      <!-- 附近商家 -->
      <div class="shop_list_header">
        <i class="iconfont icon-fujinshangjia"></i>
        <span class="shop_list_title">附近商家</span>
      </div>
      <!-- 商家列表 -->
      <ShopList/>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import HeaderTop from "../../components/Header/HeaderTop";
import ShopList from "../../components/ShopList/ShopList"

export default {
  data() {
    return {
      adress: "平顶山",
    };
  },

  mounted() {
    // 挂载时实现轮播
    new Swiper(".swiper-container", {
      // Optional parameters
      loop: true,

      pagination: {
        el: ".swiper-pagination",
      },
      
    });
  },
  components: {
    HeaderTop,
    ShopList
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import url('//at.alicdn.com/t/font_2001281_rol967bc8y.css');
@import "../../common/stylus/mixins.styl";
.home
  width 100%
  .nav_box
    width 100%
    height 230px
    background-color #FFF
    position relative
    top 45px
    overflow hidden
    .swiper-container
      width 100%
      height 100%
      .swiper-slide
        display flex
        align-items center
        flex-wrap wrap
        .link_to_food
          flex 25%
          .food_container
            display block
            width 100%
            text-align center
            padding-bottom 10px
            font-size 0
            img
              display inline-block
              width 50px
              height 50px
          span
            display block
            text-align center
            font-size 14px
            color #666
  .home_shop_list
    width 100%
    height auto
    background-color #fff
    margin-top 60px
    .shop_list_header
      padding 15px 10px 0
      .icon-fujinshangjia
        margin 0 10px
        color #999
        font-size 18px
        vertical-align middle
      .shop_list_title
        color #999
        font-size 16px
        line-height 20px
</style>
