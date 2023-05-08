import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register-form',
      name: 'register-form',
      component: () => import('../components/RegisterForm.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/field',
      name: 'field',
      component: () => import('../views/FieldView.vue')
    },
    {
      path: '/with-register',
      name: 'with-register',
      component: () => import('../views/WithRegister.vue')
    }
  ]
})

export default router
