import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import db from './db'

const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$db = db;
app.mount('#app')