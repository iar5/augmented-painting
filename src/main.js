import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './vue/App.vue'
import Contact from './vue/Contact.vue'
import Help from './vue/Help.vue'
import Splash from './vue/Landing.vue'
import PaintingList from './vue/PaintingList.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: PaintingList },
    { path: '/contact', component: Contact },
    { path: '/help', component: Help },
    { path: '/splash', component: Splash },

    { path: '*', redirect: (to) => { return "/" }},    
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


