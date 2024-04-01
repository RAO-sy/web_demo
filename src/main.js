import Vue from 'vue'
import App from './App.vue'
import router from '@/router'; // 导入路由配置
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router //use router
}).$mount('#app')
