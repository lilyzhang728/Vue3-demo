import { createRouter, createWebHashHistory } from "vue-router"

//history 为控制路由模式的参数，
//createWebHashHistory返回的是hash模式。createWebHistory返回的是history模式
export default createRouter({
	history: createWebHashHistory(),
	routes: [{
		path: '/todo',
		component: () => import('../views/todo.vue')
	},{
		path: '/test',
		component: () => import('../views/test.vue')
	}]
})