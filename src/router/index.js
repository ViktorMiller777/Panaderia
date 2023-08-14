import { createRouter, createWebHistory } from 'vue-router';
import VueLocalStorage from 'vue-localstorage';

const routes = [
  {
    path: '/orden',
    name: 'orden',
    component: () => import('../views/ordencompra.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/salidas',
    name: 'salidas',
    component: () => import('../views/ordensalida.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: () => import('../views/inicio.vue'),
  },
  {
    path: '/almacen',
    name: 'almacen',
    component: () => import('../views/almacen.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/sucursales',
    name: 'sucursales',
    component: () => import('../views/sucursales.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../views/Productos_Admin.vue'),
    meta: { requireAuth: true },
  }, 
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue'),
  }, 
  {
    path: '/pedido',
    name: 'pedido',
    component: () => import('../views/pedido.vue'),
    meta: { requireAuth: true },
  },
  {
    path: '/update',
    name: 'update',
    component: () => import('../views/Productos_Alterar.vue'),
    meta: { requireAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('jwtToken'); // Obtén el token del localStorage
  const isLoggedIn = !!token; // Verifica si hay un token

  if (to.matched.some((record) => record.meta.requireAuth)) {
    // Si la ruta requiere autenticación
    if (!isLoggedIn) {
      // Si no está autenticado, redirige a la página de inicio de sesión
      next('/login');
    } else {
      // Si está autenticado, permite el acceso
      next();
    }
  } else {
    // Si la ruta no requiere autenticación, permite el acceso
    next();
  }
});

export default router;