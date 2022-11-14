<script setup>
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@/stores/todo';
import { ref, onMounted, watch } from 'vue'
import TodoList from './TodoList.vue'

const todoStore = useTodoStore()

const formValid = ref(false)
const itemText = ref('')
const { todoItems, completedItems } = storeToRefs(todoStore)

const { getTodoItems, switchTodo, updateTodo, addTodo, deleteTodo } = todoStore

onMounted(() => {
  getTodoItems()
})

function handleSwitchTodo({ id, completed }) {
  switchTodo(id, completed)
}

function validateForm() {
  if (!itemText.value.trim()) {
    formValid.value = false
    return
  }
  formValid.value = true
}

function handleSubmit() {
  addTodo(itemText.value)
  itemText.value = ''
}

watch([itemText], () => {
  validateForm()
})
</script>

<template>
  <h2>Todo Utility</h2>

  <form @submit="handleSubmit">
    <input type="text" placeholder="To-do item" v-model="itemText" />
    <button type="submit" :disabled="!formValid">Add</button>
  </form>

  <TodoList
    v-if="todoItems.length > 0"
    title="To-do list"
    :items="todoItems"
    @switch-completed-todo="handleSwitchTodo"
    @change-todo-text="updateTodo($event.id, $event.text)"
    @delete-todo-item="deleteTodo"
  />

  <TodoList
    v-if="completedItems.length > 0"
    title="Completed list"
    :items="completedItems"
    @switch-completed-todo="switchTodo($event.id, $event.completed)"
    @change-todo-text="updateTodo($event.id, $event.text)"
    @delete-todo-item="deleteTodo"
  />
</template>

<style>
.item-completed {
  color: grey;
}
</style>
