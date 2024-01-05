import { createRouter, createWebHashHistory } from 'vue-router'
import BaseView from '../views/BaseView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'base',
      component: BaseView
    },
    {
      path: '/master',
      name: 'master',
      // route level code-splitting
      // this generates a separate chunk (Master.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MasterView.vue')
    }
  ]
})

export default router
