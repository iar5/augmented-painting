if (location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './vue/App.vue'
import Contact from './vue/Contact.vue'
import Help from './vue/Help.vue'
import Splash from './vue/Landing.vue'
import List from './vue/List.vue'
import Guide from './vue/Guide.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'hash',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    { path: '/', component: List },
    { path: '/guide', component: Guide },
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


