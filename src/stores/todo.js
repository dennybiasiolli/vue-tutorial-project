import axios from 'axios'
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
  async getTodoItems() {
    try {
      const { data } = await axios.get('/todos')
      this.items = data
    } catch {
      this.items = []
    }
  },
  async switchTodo(id, completed) {
    await axios.patch(`/todos/${id}`, { completed })
    await this.getTodoItems()
  },
  async updateTodo(id, text) {
    await axios.patch(`/todos/${id}`, { text })
    await this.getTodoItems()
  },
  async addTodo(text) {
    try {
      await axios.post('/todos', { text })
      await this.getTodoItems()
    } catch {
    }
  }
}

export const useTodoStore = defineStore('todo', {
  state: () => defaultState,
  getters,
  actions,
})
