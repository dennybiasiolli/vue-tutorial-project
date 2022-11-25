import { shallowMount } from '@vue/test-utils'
import { expect, it } from 'vitest'
import HomePage from '@/components/HomePage.vue'

it('renders as expected', () => {
  const wrapper = shallowMount(HomePage)
  expect(wrapper.html()).toMatchSnapshot()
})
