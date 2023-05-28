import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/login";
import store from "@/store";

Vue.use(VueRouter)

// 静态路由
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/undefined',
    name: '401',
    component: ()=>import('@/views/undefined/undefined')
  },
  {
    path: '/',
    redirect: '/login',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router



