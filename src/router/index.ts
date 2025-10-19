import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // 웹사이트의 기본 경로
      name: 'home',
      component: HomeView // 이 경로로 접속하면 HomeView 컴포넌트를 보여줌
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/contact', name: 'contact', component: ContactView },
  ],
})

export default router
