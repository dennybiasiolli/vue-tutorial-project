import { it, expect } from 'vitest'
import { defaultState, getters, actions } from '@/stores/main'

it('should have the default state', () => {
  expect(defaultState).toEqual({
    count: 0,
  })
})

it('works with isEven getter', () => {
  expect(
    getters.isEven.call({ count: 1 })
  ).toBe(false)
})

it('works with increment action', () => {
  const state = { count: 0 }
  actions.increment.call(state, 1)
  expect(state.count).toBe(1)
})
