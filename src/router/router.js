/**
 * @file 创建路由对象
 */
import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/login/login.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'login',
			component: Login,
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
	],
});
