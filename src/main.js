/* 
  入口js
*/

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueLazyload from 'vue-lazyload' //图片懒加载
import loading from './common/timg.gif'
import './filters/index'

import './mock/mockServe'

Vue.component(Button.name, Button)

Vue.use(VueLazyload, {
  loading
})

new Vue({
  el: '#app',
  render: c=>c(App),
  router,
  store
})
