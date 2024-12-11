import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './Routers/router'

// createApp(App).mount('#app')
const pinia =createPinia()
const app =createApp(App)
// app.use(createPinia())
app.use(router)
app.use(pinia)
app.mount('#app');
