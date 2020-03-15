import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { MainPage, WorksPage, AboutPage, CarrersPage, ContactPage } from './pages'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/works',
    component: WorksPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/carrers',
    component: CarrersPage
  },
  {
    path: '/contact',
    component: ContactPage
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
