import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
// import home from '@/components/home'
import One from '@/pages/one/Home'
import Admin from '@/pages/one/admin'
import Message from '@/pages/one/message'
import Login from '@/pages/menber/login'
import Shop from '@/pages/Shop/Shop'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/register',
			name: 'One',
			component: One
		},
		{
			path: '/admin',
			name: 'Admin',
			component: Admin
		},
		{
			path: '/message',
			name: 'Message',
			component: Message
		},
		{
			path: '/Login',
			name: 'Login',
			component: Login
		},
		{
			path: '/shop',
			name: 'Shop',
			component: Shop
		}
	]
})
