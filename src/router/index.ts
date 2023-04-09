import { createRouter, createWebHistory } from 'vue-router'

import type { App } from 'vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('../views/home/index.vue') },
  ],
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
