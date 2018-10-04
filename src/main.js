import Vue from 'vue'
import App from './App.vue'
import VueAnimate from 'vue-animate-scroll'
import VueScrollactive from 'vue-scrollactive'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueAnimate)
Vue.use(VueScrollactive)
Vue.use(VueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
