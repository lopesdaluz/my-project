import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './components/Home.vue'
import Quiz from './components/QuizFetch.vue'
import Category from './components/CategoryFetch.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: Home,
      path: '/'
    },
    {
      component: Quiz,
      path: '/quiz'
    },
    {
      component: Category,
      path: '/category'
    }
  ]
})
