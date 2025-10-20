import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import App from './App.vue'
import routerOptions from './router' // router 자체 대신 router 설정을 가져옵니다.

// 기존 createApp 로직은 ViteSSG가 처리하므로 아래와 같이 수정합니다.
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  routerOptions,
  // a function to be executed just before mounting the app
  ({ app, router, routes, isClient, initialState }) => {
    // Pinia를 설정합니다.
    const pinia = createPinia()
    app.use(pinia)
  },
)
