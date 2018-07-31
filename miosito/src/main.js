import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.component('font-awesome-icon')
Vue.config.productionTip = false
import '@/assets/fonts/all.css'
import '@/assets/fonts/fontawesome.min.css'
import '@/assets/fonts/fontawesome.css'




const app = new Vue({
 // el: '#app',
  components: { App },
  template: '<App/>',
  //render: h => h(Main),
  router //importo il file router/index.js

}).$mount('#app')

/*
Mounting takes place at the Virtual Dom Level, before the User sees anything.
When you $mount('#app'), there will be an 'el' parameter that gets set.
This 'el' defines the ID of the element that this instance will be "mounted" to.
So, in your template, if you have an element that you want to be the mounted component,
then in your declaration of the component, you would mount it with "el: #app".
*/

//se voglio che la pagina Main.vue sia la prima a vedersi, importo Main e renderizzo h=> h(Main)//
