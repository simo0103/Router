import Vue from 'vue'
import VueRouter from 'vue-router';
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import About from '@/components/About'
import Contacts from '@/components/Contacts'
import Blog from '@/components/Blog'

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
      path: '/blog',
      name: 'Blog',
      component: Blog,
      props: false

    }
  ]
})

