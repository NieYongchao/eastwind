<template>
  <div id="box">
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer'
export default {
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