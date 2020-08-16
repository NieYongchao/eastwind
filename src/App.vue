<template>
  <div id="box">
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Footer from './components/Footer/Footer'

export default {
  mounted(){
    // this.$store.dispatch('getAddress')
    this.getAddress()
  },
  methods: {
    ...mapActions(['getAddress'])
  },
  components: {
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #box 
    width 100%
    height 100%
    background-color #eee
</style>