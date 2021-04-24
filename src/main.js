// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


import Vue from 'vue'
import App from './App.vue'
// import UserApp from './components/FormsApp/UserApp.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

// new Vue({
//   el: '#userapp',
//   render: h => h(UserApp)
// })
