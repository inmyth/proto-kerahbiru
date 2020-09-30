import Vue from 'vue'
import VueRouter from 'vue-router'
import {AuthedPage, Home, Profile, HttpApi} from '../components'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AuthedPage,
    children: [
      { path: '', component: Home },
      { path: 'profile', component: Profile },
      { path: 'hapi', component: HttpApi },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router