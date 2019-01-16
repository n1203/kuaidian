import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
// import home from '@/components/home'
import One from '@/pages/one/Home'
import Admin from '@/pages/one/admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '/',
			name: 'Home',
			component: Home
    },
		 {
			path: '/registe',
			name: 'One',
			component: One
		},
		{
			path: '/admin',
			name: 'Admin',
			component: Admin
		}
  ]
})
