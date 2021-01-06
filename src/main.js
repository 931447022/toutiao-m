import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载 vant 核心组件库
import Vant from 'vant'

// 加载vant 全局样式
import 'vant/lib/index.css'

// 加载全局样式
import './styles/index.less'

// 加载动态设置 Vant 组件库
import 'amfe-flexible'

// 加载 dayjs 初始化配置
import './utils/dayjs'

// 注册使用vant 组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
