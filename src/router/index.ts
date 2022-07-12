import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import MenuView from '@/views/projects/MenuView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/projects',
    name: 'ProjectsView',
    component: ProjectsView,
  },
  {
    path: '/projects/menu',
    name: 'MenuView',
    component: MenuView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
