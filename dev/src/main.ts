import { createApp } from 'vue'
import MyLibrary from 'my-library'
import App from './App.vue'

const app = createApp(App)
app.use(MyLibrary)

app.mount('#app')
