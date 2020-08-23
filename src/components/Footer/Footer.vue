<template>
  <div class="footer_box">
    <section class="footer_item" :class="{on: '/home'===$route.path}" @click="gotoPath('/home')">
      <span class="footer_icon">
        <i class="iconfont icon-changyonglogo40"></i>
      </span>
      <span>外卖</span>
    </section>
    <section class="footer_item" :class="{on: '/search'===$route.path}" @click="gotoPath('/search')">
      <span class="footer_icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>搜索</span>
    </section>
    <section class="footer_item" :class="{on: '/order'===$route.path}" @click="gotoPath('/order')">
      <span class="footer_icon">
        <i class="iconfont icon-waimaidingdan0101"></i>
      </span>
      <span>订单</span>
    </section>
    <section class="footer_item" :class="{on: '/user'===$route.path}" @click="gotoPath('/user')">
      <span class="footer_icon">
        <i class="iconfont icon-yonghu"></i>
      </span>
      <span>我的</span>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    gotoPath (path) {
      this.$router.push(path);
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import url('//at.alicdn.com/t/font_2001281_gg1y2fb2gm.css');
  .footer_box 
    width 100%
    height 60px
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    display flex
    .footer_item
      display flex 
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 6px
      &.on
        color #4e6ef2
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>