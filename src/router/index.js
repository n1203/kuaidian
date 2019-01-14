import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
// import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '/',
			name: 'Home',
			component: Home
    }
  ]
})
