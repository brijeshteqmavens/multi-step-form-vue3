import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import './assets/css/font-awesome.css'
import './assets/js/custom.js' 
const app = createApp(App)
app.use(router)
app.mount('#app')
