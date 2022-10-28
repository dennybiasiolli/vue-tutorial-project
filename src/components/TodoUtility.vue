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
</script>

<template>
  <h2>Todo Utility</h2>

  <TodoList
    title="To-do list"
    :items="todoItems"
  />

  <TodoList
    title="Completed list"
    :items="completedItems"
  />
</template>

<style>
.item-completed {
  color: grey;
}
</style>
