import { createPinia } from 'pinia'

import type { App } from 'vue'

const pinia = createPinia()

export function setupPinia(app: App<Element>) {
  app.use(pinia)
}
