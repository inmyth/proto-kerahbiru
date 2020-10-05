import Vue from 'vue'
import VueRouter from 'vue-router'
import { AuthedPage, PublicPage, Login, Home, Profile, HttpApi, Certificate} from '../components'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AuthedPage,
    children: [
      { path: '', component: Home, meta: { requiresAuth: true } },
      { path: 'profile', component: Profile, meta: { requiresAuth: true } },
      { path: 'hapi', component: HttpApi, meta: { requiresAuth: true } },
    ]
  },
  {
    path: '/',
    component: PublicPage,
    children: [
      { path: 'login', component: Login },
      { path: 'cert', component: Certificate}

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
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // see https://router.vuejs.org/guide/advanced/meta.html
    // https://www.digitalocean.com/community/tutorials/how-to-set-up-vue-js-authentication-and-route-handling-using-vue-router
    let isLoggedIn = localStorage.getItem('user') != null;
    if (!isLoggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
