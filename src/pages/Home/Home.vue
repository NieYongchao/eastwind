<template>
  <div class="home">
    <!-- 首页头部 -->
    <HeaderTop :title="address.name">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo._id?'/userinfo':'/login'">
        <span class="header_login_text" v-if="!userInfo._id">
          登录|注册
        </span>
        <span class="header_login_user" v-else>
          <i class="iconfont icon-yonghu1"></i>
        </span>
      </router-link>
    </HeaderTop>
    <!-- 轮播图 -->
    <nav class="nav_box">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(categorys, index) in categorysArr"
            :key="index"
          >
            <a
              href="javascript:"
              class="link_to_food"
              v-for="(category, index) in categorys"
              :key="index"
            >
              <div class="food_container">
                <img :src="baseImageUrl + category.image_url" />
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/home_back.svg" alt="back" v-else>
    </nav>
    <!-- 商家列表 -->
    <div class="home_shop_list">
      <!-- 附近商家 -->
      <div class="shop_list_header">
        <i class="iconfont icon-fujinshangjia"></i>
        <span class="shop_list_title">附近商家</span>
      </div>
      <!-- 商家列表 -->
      <ShopList />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import HeaderTop from "../../components/Header/HeaderTop";
import ShopList from "../../components/ShopList/ShopList";

export default {
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com",
    };
  },

  mounted() {
    // 获取食品分类数据
    this.$store.dispatch("getCategorys");
    // 获取商家数据
    this.$store.dispatch("getShops")
  },
  computed: {
    ...mapState(["address", "categorys", "userInfo"]),

    // 处理食品分类数据
    categorysArr() {
      let categorys = this.categorys;
      let arr = [];
      let subArr = [];
      categorys.forEach((c) => {
        if (subArr.length == 8) {
          subArr = [];
        }
        if (subArr.length == 0) {
          arr.push(subArr);
        }
        subArr.push(c);
      });
      return arr;
    },
  },
  watch: {
    categorys() {
      this.$nextTick(() => {
        // 挂载时实现轮播
        new Swiper(".swiper-container", {
          // Optional parameters
          loop: true,

          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    },
  },
  components: {
    HeaderTop,
    ShopList,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import url('//at.alicdn.com/t/font_2001281_892uv117k1h.css');
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
