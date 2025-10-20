// src/router/index.ts

// 1. createMemoryHistory를 추가로 import 합니다.
import { createWebHistory, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectView.vue'
import ContactView from '../views/ContactView.vue'

export default {
  // 2. import.meta.env.SSR 값을 확인하여 분기 처리합니다.
  history: import.meta.env.SSR
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/contact', name: 'contact', component: ContactView },
  ],
}
