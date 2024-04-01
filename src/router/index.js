import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import show from '@/components/show.vue'

Vue.use(Router)

export default new Router({
  routes: [
	  {path:'/', redirect:'/home'},
	  {path:'/home', name: 'HelloWorld', component: HelloWorld},
	  {path: '/show', name: 'show', component: show}
  ]

})
