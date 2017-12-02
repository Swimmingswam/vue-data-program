import Vue from 'vue'
import Layout from "./components/Layout.vue"
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Index from './pages/index.vue'
import Detail from './pages/detail.vue'
import analysis from './pages/detail/analysis.vue'
import count from './pages/detail/count.vue'
import forecast from './pages/detail/forecast.vue'
import publish from './pages/detail/publish.vue'
import orderlist from './pages/orderList.vue'

Vue.use(VueRouter);
Vue.use(VueResource);
 
let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Index
		},
		{
			path: '/orderlist',
			component: orderlist
		},
		{
			path: '/detail',
			component: Detail,
			redirect: '/detail/analysis',
			children: [
				{
					path: 'analysis',
					component: analysis
				},
				{
					path: 'count',
					component: count
				},
				{
					path: 'forecast',
					component: forecast
				},
				{
					path: 'publish',
					component: publish
				}
			]
		}
		
	]
})


new Vue({
  el: '#app',
  template:"<Layout/>",
  router,
  render: h => h(Layout)
})
