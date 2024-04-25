/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import router from './router'


// Composables
import { createApp } from 'vue'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000'

const app = createApp(App)

registerPlugins(app)

app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
