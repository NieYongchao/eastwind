<template>
  <div class="rating">
    <div class="rating-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{ info.score }}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家99%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <Star :score="info.serviceScore" :size="36" />
            <span class="score">{{ info.serviceScore }}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <Star :score="info.foodScore" :size="36" />
            <span class="score">{{ info.foodScore }}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{ info.deliveryTime }}分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="rating-select">
        <div class="rating-type">
          <span class="block" :class="{ active: selectType===2 }" @click="setSelectType(2)">
            全部<span class="count">{{ rating.length }}</span>
          </span>
          <span class="block" :class="{ active: selectType===0 }" @click="setSelectType(0)">
            满意<span class="count">{{ satisfied }}</span>
          </span>
          <span class="block" :class="{ active: selectType===1 }" @click="setSelectType(1)">
            不满意<span class="count">{{ rating.length - satisfied }}</span>
          </span>
        </div>
        <div
          class="switch"
          :class="{ on: onlyContent }"
          @click="toggleOnlyContent"
        >
          <i class="iconfont icon-xuanze"></i>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(item, index) in ratingFilters" :key="index">
            <div class="avatar">
              <img :src="item.avatar" />
            </div>
            <div class="content">
              <h1 class="name">{{ item.username }}</h1>
              <div class="star-wrapper">
                <Star :score="item.score" :size="24" />
                <span class="delivery">{{ item.deliveryTime }}</span>
              </div>
              <p class="text">{{ item.text }}</p>
              <div class="recommend">
                <span
                  class="iconfont"
                  :class="
                    item.rateType === 0
                      ? 'icon-dianzan11-up'
                      : 'icon-dianzan11-down'
                  "
                ></span>
                <span
                  class="item"
                  v-for="(i, index) in item.recommend"
                  :key="index"
                  >{{ i }}</span
                >
              </div>
              <div class="time">{{ item.rateTime | dateFormat }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import Star from "../../../components/Star/Star";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      onlyContent: true,
      selectType: 2, //2全部，0，满意，1不满意
    };
  },
  mounted() {
    this.$store.dispatch("getShopRating", () => {
      this.$nextTick(() => {
        new BScroll(".rating", {
          click: true,
          scrollY: true,
          probeType: 2,
        });
      });
    });
  },
  methods: {
    toggleOnlyContent() {
      this.onlyContent = !this.onlyContent;
    },
    // 满意，不满意，全部
    setSelectType (selectType) {
      this.selectType = selectType
    }
  },
  computed: {
    ...mapState(["info", "rating"]),
    ...mapGetters(["satisfied"]),
    // 对rating进行数据筛选
    // eslint-disable-next-line vue/return-in-computed-property
    ratingFilters () {
      // 根据selectType: 0满意，1不满意，2全部和onlyContent: true显示有内容的评价 对rating进行筛选，返回过滤后的数据
      const { rating, onlyContent, selectType } = this
      // eslint-disable-next-line no-unused-vars
      return rating.filter((item)=>{
        const { text, rateType } = item
        return (selectType===2 || selectType===rateType) && (!onlyContent || text.length>0)
      })
    }
  },

  components: {
    Star,
  },
};
</script>

<style lang="stylus" rel="stylesheet">
@import url("//at.alicdn.com/t/font_2001281_jn4p81ikcwr.css");
.rating
  position absolute
  left 0
  bottom 0
  top 195px
  width 100%
  background-color #fff
  overflow hidden
  .overview
    display flex
    padding 17px
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
        margin: 6px 0px
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
  .split
    width: 100%
    height: 16px
    border-top: 1px solid rgba(7, 17, 27, 0.1)
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    background: #f3f5f7
  .rating-select
    background-color #fff
    .rating-type
      padding: 18px 0
      margin: 0 18px
      font-size: 0
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 12px
        line-height: 16px
        border-radius: 5px
        font-size: 12px
        color: rgb(77, 85, 93)
        background: rgba(77, 85, 93, 0.2)
        &.active
          background: #4e6ef2
          box-shadow 0 0 2px 2px #8258FA
          color: #fff
        .count
          margin-left: 2px
          font-size: 8px
    .switch
      padding: 12px 18px
      line-height: 24px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      color: rgb(147, 153, 159)
      font-size: 0
      &.on
        .icon-xuanze
          background-color #fff
          color #4e6ef2
          box-shadow 0 0 2px 2px #ccc
          border-radius 50%
      .icon-xuanze
        display: inline-block
        vertical-align: top
        margin-right: 5px
        font-size: 26px
      .text
        display: inline-block
        vertical-align: top
        font-size: 13px
  .rating-wrapper
    padding 0 18px
    background-color #fff
    .rating-item
      display: flex
      padding: 18px 0
      .avatar
        flex: 0 0 28px
        width: 28px
        margin-right: 12px
        img
          width 28px
          height 28px
          border-radius: 50%
      .content
        position: relative
        flex: 1
        .name
          margin-bottom: 4px
          line-height: 12px
          font-size: 10px
          color: #111
        .star-wrapper
          margin-bottom: 6px
          font-size: 0
          .star
            display inline-block
            margin-right: 6px
            vertical-align: top
          .delivery
            display: inline-block
            vertical-align: top
            line-height: 12px
            font-size: 10px
            color: rgb(147, 153, 159)
        .text
          margin-bottom: 8px
          line-height: 18px
          color: #111
          font-size: 12px
        .recommend
          line-height: 16px
          font-size: 0
          .icon-dianzan11-up, .icon-dianzan11-down, .item
            display: inline-block
            margin: 0 8px 4px 0
            font-size: 16px
          .icon-dianzan11-up
            color: #ff9900
          .icon-dianzan11-down
            color: rgb(147, 153, 159)
          .item
            font-size 12px
            padding: 0 6px
            border: 1px solid rgba(7, 17, 27, 0.1)
            border-radius: 1px
            color: rgb(147, 153, 159)
            background: #fff
        .time
          position: absolute
          top: 0
          right: 0
          line-height: 12px
          font-size: 10px
          color: #111
</style>
