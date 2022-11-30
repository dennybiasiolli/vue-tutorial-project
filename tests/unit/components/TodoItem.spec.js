import { shallowMount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import TodoItem from '@/components/TodoItem.vue'

it('should render as expected', () => {
  const wrapper = shallowMount(TodoItem, {
    props: {
      text: 'my todo text',
      completed: false,
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})

it('should emit change event', async () => {
  const wrapper = shallowMount(TodoItem, {
    props: {
      text: 'my todo text',
      completed: false,
    },
  })
  await wrapper.find('input').setChecked()
  expect(wrapper.emitted().change).toBeTruthy()
  expect(wrapper.emitted().change.length).toBe(1)
  expect(wrapper.emitted().change[0]).toEqual([true])
})
