import Vue from 'vue'
// Using import aliases in Vite
import MyLibrary from 'my-library'
import App from './App.vue'

Vue.use(MyLibrary)

new Vue({
  render: h => h(App),
}).$mount('#app')
