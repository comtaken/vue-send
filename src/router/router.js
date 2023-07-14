import { createRouter, createWebHistory } from 'vue-router'
import Index from '../components/Index.vue'
import SendCompletely from '../components/SendCompletely.vue'

const routes = [
	{
		path: '/',
		name: 'Index',
		component: Index
	},
	{
		path: '/send-completely',
		name: 'SendCompletely',
		component: SendCompletely
	}
  ]

  const router = createRouter({
	history: createWebHistory(),
	routes
  })
  
  export default router