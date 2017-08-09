import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Feature from '@/components/Feature'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/feature',
      name: 'Feature',
      component: Feature
    }
  ]
})
