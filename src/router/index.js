import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/loginadd',
      name:'login',
      component:()=>import('../views/login.vue')
    },
  {
    path:'/inicio',
    name:'inicio',
    component:()=>import('../views/inicio.vue')
  },
  {
    path:'/almacen',
    name:'almacen',
    component:()=>import('../views/almacen.vue')
  },
  {
    path:'/sucursales',
    name:'sucursales',
    component:()=>import('../views/sucursales.vue')
  },
  {
    path:'/register',
    name:'register',
    component:()=>import('../views/register.vue'),
  }
  ]
})

export default router
