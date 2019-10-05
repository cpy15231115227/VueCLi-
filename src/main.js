import Vue from 'vue'
import App from './App.vue'
// 加载引入
import router from './router.js'

// 导入 Bootstrap 
// VueCLI 会自动将该 css 文件插入页面的 head 中，不用link标签去引，不用去html里面写
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 配置进来
  // router:router
  // 简写
  router
}).$mount('#app')
