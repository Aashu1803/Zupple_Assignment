import { createRouter, createWebHistory } from 'vue-router'
import Application_form from '../views/Application_form.vue'
import Explorer from '../views/Explorer.vue'

const routes = [
  {
    path: '/',
    name: 'Application_form',
    component: Application_form
  },
  {
    path: '/explorer',
    name: 'explorer',
    component: Explorer
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
