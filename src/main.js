import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
document.body.style.margin = 0;

new Vue({
  render: h => h(App),
}).$mount('#app')
