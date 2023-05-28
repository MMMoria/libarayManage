import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入iconfont图标
import './assets/iconfont/iconfont.css'
import $ from 'jquery'
// 引入全局样式
import '@/styles/index.scss'
import 'animate.css'
// import animated from 'animate.css'
//
// vue.use(animated)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


