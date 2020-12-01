if (location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './vue/App.vue'
import Contact from './vue/Contact.vue'
import Help from './vue/Help.vue'
import Splash from './vue/Landing.vue'
import PaintingList from './vue/PaintingList.vue'
import Introduction from './vue/Introduction.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: PaintingList },
    { path: '/introduction', component: Introduction },
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


