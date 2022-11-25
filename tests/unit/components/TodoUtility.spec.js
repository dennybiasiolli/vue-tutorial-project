import { createTestingPinia } from '@pinia/testing'
import { shallowMount } from '@vue/test-utils'
import { expect, it, beforeEach, vi } from 'vitest'
import TodoUtility from '@/components/TodoUtility.vue'
import { useTodoStore } from '@/stores/todo'

let pinia, todoStore

const myShallowMount = () => shallowMount(TodoUtility, {
  global: { plugins: [pinia] }
})

beforeEach(() => {
  pinia = createTestingPinia({
    createSpy: vi.fn,
    initialState: {
      todo: {
        items: [
          { id: 1, text: 'Todo item 1', completed: false },
          { id: 2, text: 'Todo item 2', completed: true },
        ],
      },
    },
  })
  todoStore = useTodoStore()
})

it('renders as expected', () => {
  const wrapper = myShallowMount()
  expect(wrapper.html()).toMatchSnapshot()
})

it('should switch todo', async () => {
  const wrapper = myShallowMount()
  const todoLists = wrapper.findAll('todo-list-stub')
  expect(todoLists.length).toBe(2)
  await todoLists[0].trigger('switch-completed-todo', { id: 1, completed: true })
  expect(todoStore.switchTodo).toHaveBeenCalledWith(1, true)
})
