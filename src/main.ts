import { createApp } from 'vue'
import App from './App.vue'
import Loading from './components/global/loading.vue'
import router from './router'
createApp(App).use(router).component('Loading', Loading).mount('#app')
