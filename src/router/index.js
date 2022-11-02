import { createRouter, createWebHashHistory } from 'vue-router'
import CompositionAPI from '@/components/CompositionAPI.vue'
import HomePage from '@/components/HomePage.vue'
import OptionsAPI from '@/components/OptionsAPI.vue'
import TodoUtility from '@/components/TodoUtility.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/composition-api',
    name: 'composition-api',
    component: CompositionAPI,
  },
  {
    path: '/options-api',
    name: 'options-api',
    component: OptionsAPI,
  },
  {
    path: '/todo-utility',
    name: 'todo-utility',
    component: TodoUtility,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
