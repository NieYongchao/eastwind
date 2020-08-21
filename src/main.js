/* 
  入口js
*/

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { Button } from 'mint-ui'
import 'mint-ui/lib/style.css'

import './mock/mockServe'

Vue.component(Button.name, Button)


new Vue({
  el: '#app',
  render: c=>c(App),
  router,
  store
})
