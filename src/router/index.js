import Vue from 'vue'
import Router from 'vue-router'
import Sign from '../components/Sign/Sign'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    }
  ]
})
