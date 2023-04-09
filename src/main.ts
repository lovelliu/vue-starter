import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupPinia } from './store'

import './styles/index.css'

function bootstrap() {
  const app = createApp(App)

  setupRouter(app)
  setupPinia(app)

  app.mount('#app')
}

bootstrap()
