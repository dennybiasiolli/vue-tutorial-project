import { expect, it, vi } from 'vitest'
import CompositionAPI from '@/components/CompositionAPI.vue'
import HomePage from '@/components/HomePage.vue'
import OptionsAPI from '@/components/OptionsAPI.vue'
import NotFound from '@/components/NotFound.vue'
import TodoUtility from '@/components/TodoUtility.vue'
import FormTest from '@/components/FormTest.vue'
import AxiosTest from '@/components/AxiosTest.vue'
import Inputs from '@/components/others/Inputs.vue'
import MyInput from '@/components/others/MyInput.vue'
import Reactivity from '@/components/others/Reactivity.vue'
import Template from '@/components/others/Template.vue'
import Validators from '@/components/others/Validators.vue'
import Watchers from '@/components/others/Watchers.vue'
import { routes } from '@/router'

vi.mock('@/components/CompositionAPI.vue', () => ({ default: {} }))
vi.mock('@/components/HomePage.vue', () => ({ default: {} }))
vi.mock('@/components/OptionsAPI.vue', () => ({ default: {} }))
vi.mock('@/components/NotFound.vue', () => ({ default: {} }))
vi.mock('@/components/TodoUtility.vue', () => ({ default: {} }))
vi.mock('@/components/FormTest.vue', () => ({ default: {} }))
vi.mock('@/components/AxiosTest.vue', () => ({ default: {} }))
vi.mock('@/components/Inputs.vue', () => ({ default: {} }))
vi.mock('@/components/MyInput.vue', () => ({ default: {} }))
vi.mock('@/components/Reactivity.vue', () => ({ default: {} }))
vi.mock('@/components/Template.vue', () => ({ default: {} }))
vi.mock('@/components/Validators.vue', () => ({ default: {} }))
vi.mock('@/components/Watchers.vue', () => ({ default: {} }))

it('should have expected routes', () => {
  expect(routes).toEqual([
    {
      path: '/',
      name: 'home',
      component: HomePage,
    }, {
      path: '/composition-api',
      name: 'composition-api',
      component: CompositionAPI,
    }, {
      path: '/options-api',
      name: 'options-api',
      component: OptionsAPI,
    }, {
      path: '/todo-utility',
      name: 'todo-utility',
      component: TodoUtility,
    }, {
      path: '/form-test',
      name: 'form-test',
      component: FormTest,
    }, {
      path: '/axios-test',
      name: 'axios-test',
      component: AxiosTest,
    }, {
      path: '/inputs',
      name: 'inputs',
      component: Inputs,
    }, {
      path: '/my-input',
      name: 'my-input',
      component: MyInput,
    }, {
      path: '/reactivity',
      name: 'reactivity',
      component: Reactivity,
    }, {
      path: '/template',
      name: 'template',
      component: Template,
    }, {
      path: '/validators',
      name: 'validators',
      component: Validators,
    }, {
      path: '/watchers',
      name: 'watchers',
      component: Watchers,
    }, {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    }
  ])
})
