import { createApp } from 'vue'
import MyLibrary from '../../src'
import App from './App.vue'

const app = createApp(App)
app.use(MyLibrary)

app.mount('#app')
