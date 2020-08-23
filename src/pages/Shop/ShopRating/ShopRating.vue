<template>
  <div class="rating">
    <div rating-content>
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">4.7</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家99%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <Star :score="4.5" :size="36"/> 
            <span class="score">4.6</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <Star/> 
            <span class="score">4.6</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">30分钟</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '../../../components/Star/Star'
export default {

  components: {
    Star
  }
}
</script>

<style lang="stylus" rel="stylesheet">
.rating
  position relative
  width 100%
  height 200px
  background-color red
  .overview
    display flex
    padding 15px
    background-color #fff
    .overview-left
      flex 0 0 137px
      width 137px
      border-right 1px solid #ccc
      text-align center
      @media only screen and (max-width: 320px)
        flex: 0 0 120px
        width: 120px
      .score
        margin-bottom: 6px
        line-height: 28px
        font-size: 24px
        color: rgb(255, 153, 0)
      .title
        margin-bottom: 8px
        line-height: 12px
        font-size: 12px
        color: rgb(7, 17, 27)
      .rank
        line-height: 10px
        font-size: 10px
        color: rgb(147, 153, 159)
    .overview-right
      flex 1
      padding 6px 0 6px 24px
      @media only screen and (max-width: 320px)
        padding-left: 6px 
      .score-wrapper
        margin-bottom: 8px
        font-size: 0
        .title
          display: inline-block
          line-height: 18px
          vertical-align: top
          font-size: 12px
          color: #111
        .star
          display: inline-block
          margin: 0 12px
          vertical-align: top
        .score
          display inline-block
          line-height: 18px
          vertical-align: top
          font-size: 12px
          color: rgb(255, 153, 0)
      .delivery-wrapper
        font-size 0
        .title
          line-height: 18px
          font-size: 12px
          color: rgb(7, 17, 27)
        .delivery
          margin-left: 12px
          font-size: 12px
          color: rgb(147, 153, 159)
</style>