import axios from 'axios'
import { createApp } from 'vue'
import { router } from '@/router'
import { pinia } from '@/stores'
import App from './App.vue'

axios.defaults.baseURL = 'http://localhost:3000'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
