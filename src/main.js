import Vue from 'vue'
import VueParticles from 'vue-particles'
import App from './App.vue'
import router from './router'
import MyHelper from './helpers'

Vue.config.productionTip = false
Vue.use(MyHelper)
Vue.use(VueParticles)
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
