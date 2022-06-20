import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CVView from '../views/CVView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'cv',
    component: CVView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
