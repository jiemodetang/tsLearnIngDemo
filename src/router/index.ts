import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    props: (route: any) => {

      return {
        title: '我试试',
        toAboutParams: route.params,
        toAboutQuery: route.query
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile.vue'),
  }, {
    path: '/npmTest',
    name: 'npmTest',
    component: () => import(/* webpackChunkName: "profile" */ '../views/npmTest.vue'),
  }, {
    path: '/fullpage',
    name: 'fullpage',
    component: () => import(/* webpackChunkName: "fullpage" */ '../views/fullpage.vue'),
  }, {
    path: '/veevalidate',
    name: 'veevalidate',
    component: () => import(/* webpackChunkName: "veevalidate" */ '../views/veevalidate.vue')
  }, {
    path: '/veevalidate',
    name: 'veevalidate',
    component: () => import(/* webpackChunkName: "veevalidate" */ '../views/veevalidate.vue')
  }, {
    path: '/fontawesome',
    name: 'fontawesome',
    component: () => import(/* webpackChunkName: "fontawesome" */ '../views/fontawesome.vue')
  }, {
    path: '/fontmin',
    name: 'fontmin',
    component: () => import(/* webpackChunkName: "fontmin" */ '../views/fontmin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
