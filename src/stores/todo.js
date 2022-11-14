import { defineStore } from 'pinia'

export const defaultState = {
  items: [],
}

export const getters = {
  todoItems() {
    return this.items.filter(item => !item.completed)
  },
  completedItems() {
    return this.items.filter(item => item.completed)
  }
}

export const actions = {
  switchTodo(id, completed) {
    const item = this.items.find(item => item.id === id)
    item.completed = completed;
  },
  addTodo(text) {
    const maxId = Math.max(...this.items.map(item => item.id))
    this.items.push({
      id: maxId + 1,
      text,
      completed: false,
    })
  }
}

export const useTodoStore = defineStore('todo', {
  state: () => defaultState,
  getters,
  actions,
})
