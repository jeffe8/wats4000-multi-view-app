import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Survey from '@/components/Survey'
import Secret from '@/components/Secret'
// TODO: Import the Survey component
// TODO: Import the Secret component

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/survey',
      name: 'Survey',
      component: Survey
    },
    {
      path: '/secret',
      name: 'Secret',
      component: Secret
    }

    // Add the Survey route definition
    // Add the Secret route definition
  ]
})
