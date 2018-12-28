import Vue from 'vue'
import App from './App.vue'
// import router from './router'

Vue.config.productionTip = false

import VeeValidate from 'vee-validate';  // Add this
Vue.use(VeeValidate);  // Add this

new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')
