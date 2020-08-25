<template>
  <section class="order">
    <!-- <header class="header">
      <a class="header_title">
        <span class="header_title_text">订单列表</span>
      </a>
    </header> -->
    <HeaderTop title="订单列表">
    </HeaderTop>
    <section class="order_no_login" v-if="!userInfo._id">
      <img src="./images/order/person.png" />
      <h3>登录后查看外卖订单</h3>
      <router-link tag="button" to="/login">立即登陆</router-link>
    </section>
    <section class="order_login" v-else>
      <section>用户已登录</section>
      <section>订单信息</section>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import HeaderTop from '../../components/Header/HeaderTop'
export default {
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    HeaderTop
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.order  
  position relative
  width 100%
  .order_no_login
    padding-top 140px
    width 60%
    margin 0 auto
    text-align center
    >img
      display block
      width 100%
      height 30%
    >h3
      padding 10px 0
      font-size 17px
      color #6a6a6a
    >button
      display inline-block
      background #4e6ef2
      font-size 14px
      color #fff
      border 0
      outline none
      border-radius 5px
      padding 10px 20px
  .order_login
    background-color #fff
    width 100%
    position absolute
    left 0
    top 45px
</style>
