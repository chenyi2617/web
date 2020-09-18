import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Offer from '../views/Offer.vue'
import Mme from '../views/Mme.vue'
import Vip from '../views/Vip.vue'
import Resource from '../views/Resource.vue'
import Business from '../views/Business.vue'
import Kehu from '../views/Kehu.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/offer',
    component: Offer
  },
  {
    path: '/mme',
    name: 'Mme',
    component: Mme
  },
  {
    path: '/vip',
    name: 'Vip',
    component: Vip
  },
  {
    path: '/resource',
    component: Resource,
  },
  {
    path: '/business',
    component: Business,
  },
  {
    path: '/kehu',
    component: Kehu,
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
