import Vue from 'vue'
import App from './App.vue'
import VueAnimate from 'vue-animate-scroll'
import Scrollspy from 'vue2-scrollspy'

Vue.use(VueAnimate)
Vue.use(Scrollspy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
