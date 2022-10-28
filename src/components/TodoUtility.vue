<script setup>
import { ref, computed, onMounted } from 'vue'
import TodoList from './TodoList.vue'

const items = ref([])
const todoItems = computed(() => items.value.filter(item => !item.completed))
const completedItems = computed(() => items.value.filter(item => item.completed))

onMounted(() => {
  items.value = [
    { id: 1, text: 'Todo item 1', completed: false },
    { id: 2, text: 'Todo item 2', completed: false },
    { id: 3, text: 'Todo item 3', completed: true },
    { id: 4, text: 'Todo item 4', completed: false },
    { id: 5, text: 'Todo item 5', completed: true },
  ];
})

function handleSwitchTodo({ id, completed }) {
  const item = items.value.find(item => item.id === id)
  item.completed = completed;
}
</script>

<template>
  <h2>Todo Utility</h2>

  <TodoList
    title="To-do list"
    :items="todoItems"
    @switch-completed-todo="handleSwitchTodo"
  />

  <TodoList
    title="Completed list"
    :items="completedItems"
    @switch-completed-todo="handleSwitchTodo($event)"
  />
</template>

<style>
.item-completed {
  color: grey;
}
</style>
