import { createApp } from 'vue'
import MyPlugin from 'my-library'
import App from './App.vue'

const app = createApp(App)
app.use(MyPlugin())

app.mount('#app')
