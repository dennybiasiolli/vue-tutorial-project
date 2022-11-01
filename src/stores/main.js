import { defineStore } from 'pinia'

export const defaultState = {
  count: 0,
}

export const getters = {
  isEven() {
    return this.count % 2 === 0
  }
}

export const actions = {
  increment(num) {
    this.count += num
  }
}

export const useStore = defineStore('main', {
  state: () => defaultState,
  getters,
  actions,
})
