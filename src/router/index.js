import { createRouter, createWebHashHistory } from 'vue-router'
import CompositionAPI from '@/components/CompositionAPI.vue'
import OptionsAPI from '@/components/OptionsAPI.vue'
import TodoUtility from '@/components/TodoUtility.vue'

export const routes = [
  { path: '/composition-api', component: CompositionAPI },
  { path: '/options-api', component: OptionsAPI },
  { path: '/todo-utility', component: TodoUtility },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
