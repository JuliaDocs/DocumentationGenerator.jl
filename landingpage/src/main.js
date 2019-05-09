import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import AsyncComputed from 'vue-async-computed'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VueCookies from 'vue-cookies'

Vue.use(Loading)
Vue.use(VueCookies)
Vue.use(AsyncComputed)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
