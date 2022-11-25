import { expect, it, vi } from 'vitest'
import CompositionAPI from '@/components/CompositionAPI.vue'
import HomePage from '@/components/HomePage.vue'
import OptionsAPI from '@/components/OptionsAPI.vue'
import NotFound from '@/components/NotFound.vue'
import TodoUtility from '@/components/TodoUtility.vue'
import { routes } from '@/router'

vi.mock('@/components/CompositionAPI.vue', () => ({ default: {} }))
vi.mock('@/components/HomePage.vue', () => ({ default: {} }))
vi.mock('@/components/OptionsAPI.vue', () => ({ default: {} }))
vi.mock('@/components/NotFound.vue', () => ({ default: {} }))
vi.mock('@/components/TodoUtility.vue', () => ({ default: {} }))

it('should have expected routes', () => {
  expect(routes).toEqual([
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/composition-api',
      name: 'composition-api',
      component: CompositionAPI,
      meta: {
        askForPermission: true,
      },
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
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ])
})
