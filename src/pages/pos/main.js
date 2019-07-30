import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import '@/service/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont/iconfont.css'

Vue.use(ElementUI, {
  size: 'medium'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
