import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueAnimate from 'vue-animate-scroll'
import VueScrollactive from 'vue-scrollactive'
import VueSmoothScroll from 'vue2-smooth-scroll'

import App from './App.vue'

import Valencian from './lang/ca.js'
import Spanish from './lang/es.js'

Vue.use(VueI18n)
Vue.use(VueAnimate)
Vue.use(VueScrollactive)
Vue.use(VueSmoothScroll)

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'ca',
  messages: {
    ca: Valencian,
    es: Spanish
  }
})

new Vue({
  i18n,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
