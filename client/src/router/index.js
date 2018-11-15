import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import aaa from '@/components/aaa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/aaa',
      name: 'aaa',
      component: aaa
    }
  ]
})
