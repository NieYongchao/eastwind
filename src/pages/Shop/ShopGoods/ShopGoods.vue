<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <!-- .current -->
          <li
            class="menu-item"
            v-for="(item, index) in goods"
            :key="index"
            :class="{ current: index == currentIndex }"
            @click="clickMenuItem(index)"
          >
            <span class="text">
              <img class="icon" :src="item.icon" v-if="item.icon" />
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="foodsUl">
          <li
            class="food-list-hook"
            v-for="(item, index) in goods"
            :key="index"
          >
            <h1 class="title">{{ item.name }}</h1>
            <ul>
              <li
                class="food-item"
                v-for="(food, index) in item.foods"
                :key="index"
                @click="showFood(food)"
              >
                <div class="icon">
                  <img width="57" height="57" :src="food.icon" />
                </div>
                <div class="content">
                  <h2 class="name">{{ food.name }}</h2>
                  <p class="desc">{{ food.description }}</p>
                  <div class="extra">
                    <span class="count">月售 {{ food.sellCount }} 份</span>
                    <span>好评率 {{ food.rating }}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{ food.price }}</span>
                    <span class="old" v-if="food.oldPrice"
                      >￥{{ food.oldPrice }}</span
                    >
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food" />
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCart/>
    </div>
    <Food :food="food" ref="food"/>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState } from "vuex";
import CartControl from "../../../components/CartControl/CartControl";
import Food from "../../../components/Food/Food";
import ShopCart from "../../../components/ShopCart/ShopCart";

export default {
  data() {
    return {
      scrollY: 0, //存放foods-wrapper滚动条滑动高度
      tops: [], //存放foods-wrapper每个标签的初始高度
      food: {} //点击列表弹窗现实的food
    };
  },
  mounted() {
    this.$store.dispatch("getShopGoods", () => {
      this.$nextTick(() => {
        // 列表数据显示之后执行
        this._initScroll();
        this._initTops();
        console.log('-------')
      });
    });
  },
  computed: {
    ...mapState(["goods"]),
    currentIndex() {
      // 用来判断当前所属导航
      let { scrollY, tops } = this;
      let index = tops.findIndex((top, index) => {
        return scrollY >= top && scrollY < tops[index + 1];
      });

      return index;
    },
  },
  methods: {
    // 初始化食物列表滑动
    _initScroll () {
      new BScroll(".menu-wrapper", {
        scrollY: true,
        click: true,
      });
      this.foodsScroll = new BScroll(".foods-wrapper", {
        probeType: 2,
        scrollY: true,
        click: true,
      });
      // 监听滑动事件，获取scrollY
      this.foodsScroll.on("scroll", (e) => {
        this.scrollY = Math.abs(e.y);
      });
      // 监听滑动结束事件
      this.foodsScroll.on("scrollEnd", (e) => {
        this.scrollY = Math.abs(e.y);
      });
    },
    // 挂载数据时拿到各个食物分类的初始高度
    _initTops () {
      let tops = [];
      let top = 0;
      tops.push(top);
      let lis = this.$refs.foodsUl.children;
      lis.forEach((i) => {
        top += i.clientHeight;
        tops.push(top);
      });
      this.tops = tops;
    },
    // 点击食物分类  右侧食物列表跳转到对应位置
    clickMenuItem (index) {
      let scrollY = this.tops[index];
      this.scrollY = scrollY;
      this.foodsScroll.scrollTo(0, -scrollY, 300);
    },
    // 调用子组件food打开/关闭食物弹窗
    showFood (food) {
      // 把点击的对应food数据保存到this.food中传给弹窗组件
      this.food = food
      // 调用子组件food打开/关闭食物弹窗
      this.$refs.food.toggleShow()
    }
  },
  components: {
    CartControl,
    Food,
    ShopCart
  },
};
</script>

<style lang="stylus" rel="stylesheet">
@import "//at.alicdn.com/t/font_2001281_jn4p81ikcwr.css"
@import "../../../common/stylus/mixins.styl"
.goods
  display: flex
  position: absolute
  top: 195px
  bottom: 46px
  width: 100%
  background: #fff;
  overflow: hidden
  .menu-wrapper
    flex: 0 0 80px
    width: 80px
    background: #f3f5f7
    .menu-item
      display: table
      height: 54px
      width: 56px
      padding: 0 12px
      line-height: 14px
      &.current
        position: relative
        z-index: 10
        margin-top: -1px
        background: #fff
        color: #4e6ef2
        font-weight: 700
      .text
        display: table-cell
        width: 56px
        vertical-align: middle
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        font-size: 12px
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
  .foods-wrapper
    flex: 1
    .title
      padding-left: 14px
      height: 26px
      line-height: 26px
      border-left: 2px solid #d9dde1
      font-size: 12px
      color: rgb(147, 153, 159)
      background: #f3f5f7
    .food-item
      display: flex
      margin: 18px
      padding-bottom: 18px
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        border-none()
        margin-bottom: 0
      .icon
        flex: 0 0 57px
        margin-right: 10px
      .content
        flex: 1
        .name
          margin: 2px 0 8px 0
          height: 14px
          line-height: 14px
          font-size: 14px
          color: rgb(7, 17, 27)
        .desc, .extra
          line-height: 14px
          font-size: 13px
          color: rgb(147, 153, 159)
        .desc
          line-height 16px
          margin-bottom: 7px
        .extra
          margin-bottom 4px
          .count
            margin-right: 12px
        .price
          font-weight: 700
          line-height: 24px
          .now
            margin-right: 8px
            font-size: 14px
            color: rgb(240, 20, 20)
          .old
            text-decoration: line-through
            font-size: 10px
            color: rgb(147, 153, 159)
        .cartcontrol-wrapper
          position: absolute
          right: 0
          bottom: 12px
</style>
