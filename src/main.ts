import { createApp } from 'vue'

import { setupRouter } from './router'
import { setupPinia } from './store'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

function bootstrap() {
  const app = createApp(App)

  setupRouter(app)
  setupPinia(app)

  app.mount('#app')
}

bootstrap()
