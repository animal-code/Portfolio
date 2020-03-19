import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { MainPage, WorksPage, AboutPage, CarrersPage, ContactPage } from './pages'
// import Scrollbar from 'smooth-scrollbar'
import Header from './components/Header'
import Footer from './components/Footer'
Vue.config.productionTip = false
Vue.use(VueRouter)
// Scrollbar.init(document.body)
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
Vue.component('Header', Header)
Vue.component('Footer', Footer)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
