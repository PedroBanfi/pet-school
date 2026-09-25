import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
       path: '/pets',
      name: 'pets',
      component: () => import('../views/PetsView.vue'),
    },
    {
       path: '/pets/novo',
      name: 'addPets',
      component: () => import('../views/addPetViews.vue'),
    },
  ],
});

export default router;
