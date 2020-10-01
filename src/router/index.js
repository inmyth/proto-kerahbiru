import Vue from 'vue'
import VueRouter from 'vue-router'
import { AuthedPage, PublicPage, Login, Home, Profile, HttpApi } from '../components'

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
  {
    path: '/',
    component: PublicPage,
    children: [
      { path: 'login', component: Login },

    ]
  }, 
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  // const authRequired = !to.path.startsWith(publicPages)
  const authRequired = publicPages.find(p => to.path.startsWith(p)) === undefined;

  // Vuex might not be initialized when this functions is invoked
  let isLoggedOut = Vue.store ? Vue.store.getters.isLoggedOut : false
  if (authRequired && isLoggedOut) {
    return next('/login');
  }
  next();
})

export default router
