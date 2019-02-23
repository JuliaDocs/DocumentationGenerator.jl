import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import AsyncComputed from 'vue-async-computed'

Vue.use(AsyncComputed)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
