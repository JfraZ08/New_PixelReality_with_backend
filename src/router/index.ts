import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DroneView from '../views/DroneView.vue'
import EnterpriseView from '../views/EnterpriseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/entreprise',
      name: 'entreprise',
      component: EnterpriseView
    }
    {
      path: '/drone',
      name: 'drone',
      component: DroneView
    },

    
    
  ]
})

export default router
