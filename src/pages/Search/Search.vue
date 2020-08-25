<template>
  <section class="search">
    <HeaderTop title="搜索" />
    <form class="search_form" autocomplete="off" @submit.prevent="search">
      <input
        type="search"
        name="search"
        placeholder="请输入商家或美食名称"
        class="search_input"
        v-model="keyword"
      />
      <input type="submit" name="submit" class="search_submit" />
    </form>

    <section class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <router-link :to="{path:'/shop',query:{id:item.id}}" tag="li" class="list_li" v-for="item in searchShops" :key="item._id">
          <section class="item_left">
            <img
              src="../../../public/images/u=2818577756,2340696154&fm=11&gp=0.jpg"
              class="restaurant_img"
            />
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span class="name">{{item.name}}</span>
              </p>
              <p>月售{{item.month_sales||item.recent_order_num}}单</p>
              <p>{{item.float_delivery_fee}}元起送 / 距离{{item.distance}}公里</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>
    <div class="no-search" v-else>很抱歉，没有搜索结果!</div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import HeaderTop from "../../components/Header/HeaderTop";
export default {
  data() {
    return {
      keyword: "",
      noSearchShops: false
    };
  },
  methods: {
    search() {
      let keyword = this.keyword.trim();
      if (keyword) {
        this.$store.dispatch("searchShops", keyword);
      } else {
        this.noSearchShops = true
      }
    },
  },
  computed: {
    ...mapState(["searchShops"]),
  },
  watch: {
    searchShops(value){
      if(!value.length){
        this.noSearchShops = true
      } else {
        this.noSearchShops = false
      }
    }
  },
  components: {
    HeaderTop,
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.search
  width 100%
  .search_form
    overflow hidden
    margin-top 45px
    background-color #fff
    padding 12px 8px
    input
      height 35px
      padding 0 4px
      border-radius 2px
      outline none
      &.search_input
        float left
        width 79%
        border 2px solid #c4c7ce
        border-right 0
        border-radius 10px 0 0 10px
        font-size 14px
        color #333
        background-color #f2f2f2
        &:focus
          border 2px solid #4e6ef2
      &.search_submit
        float right
        width 21%
        border 2px solid #4e6ef2
        border-radius 0 10px 10px 0
        font-size 16px
        color #fff
        background-color #4e6ef2
  .list
    width 100%
    overflow hidden
    position relative
    .list_container
      width 100%
      background-color #fff
      padding 10px 10px 55px 10px
      .list_li
        width 100%
        display: flex;
        justify-content: center;
        padding 18px 0
        border-bottom: 1px solid #ccc;
        overflow hidden
        &:last-child
          border-bottom none
        .item_left
          margin-right: 10px
          .restaurant_img
            width 50px
            height 50px
            border-radius 5px
            display block
        .item_right
          font-size 12px
          flex 1
          width 80%
          padding-right 10px
          .item_right_text
            width 100%
            box-sizing border-box
            p
            width 100%
            word-wrap break-word
            text-overflow ellipsis
            color #555
            line-height 16px
            span 
              display inline-block
              width 100%
              overflow hidden
              white-space: nowrap;
              text-overflow ellipsis
            .distance
              float right
  .no-search
    background-color #fff
    font-size 16px
    text-align center
    padding 20px
    color #111
</style>
