import { shallowMount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import TodoList from '@/components/TodoList.vue'

it('should render as expected', () => {
  const wrapper = shallowMount(TodoList, {
    props: {
      title: 'my to do list',
      items: [
        { id: 123, text: 'my todo 1', completed: false },
        { id: 456, text: 'my todo 2', completed: false },
        { id: 789, text: 'my todo 3', completed: true },
      ],
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})
