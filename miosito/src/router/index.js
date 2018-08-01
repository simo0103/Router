import Vue from 'vue'
import VueRouter from 'vue-router';
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import About from '@/components/About'
import Contacts from '@/components/Contacts'
import Events from '@/components/Events'
import Css from '../css/style.css'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [

    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
      props: false
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      props: false

    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
      props: false

    },
    {
      path: '/events',
      name: 'Events',
      component: Events,
      props: false

    }
  ]
})
