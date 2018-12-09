import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import SignUp from '@/components/SignUp'
import Stat from '@/components/Stat'
import Postpage from '@/components/Postpage'
import Write from '@/components/Write'
import Person from '@/components/Person'
import TeamMatcihng from '@/components/TeamMatching'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/signUp',
      name: 'signUp',
      component : SignUp
    },
    {
      path: '/stat',
      name: 'stat',
      component : Stat
    },
    {
      path: '/postpage',
      name: 'postpage',
      component: Postpage
    },
    {
      path: '/postpage/wirte',
      name: 'write',
      component: Write
    },
    {
      path: '/person',
      name: 'person',
      component: Person
    },
    {
      path: '/match',
      name: 'TeamMatcihng',
      component: TeamMatcihng
    }
  ]
})
