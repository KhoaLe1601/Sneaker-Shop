import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import "@fortawesome/fontawesome-free/css/all.min.css"
import 'bootstrap/dist/css/bootstap.min.css'
import router from './router'

createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
