import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import About from '@/components/About'


Vue.use(Router)

export default new Router({
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

    }
  ]
})
