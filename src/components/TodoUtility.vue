<script setup>
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@/stores/todo';
import { onMounted } from 'vue'
import TodoList from './TodoList.vue'

const todoStore = useTodoStore()

const { items, todoItems, completedItems } = storeToRefs(todoStore)

const { switchTodo } = todoStore

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
  switchTodo(id, completed)
}
</script>

<template>
  <h2>Todo Utility</h2>

  <TodoList
    v-if="todoItems.length > 0"
    title="To-do list"
    :items="todoItems"
    @switch-completed-todo="handleSwitchTodo"
  />

  <TodoList
    v-if="completedItems.length > 0"
    title="Completed list"
    :items="completedItems"
    @switch-completed-todo="switchTodo($event.id, $event.completed)"
  />
</template>

<style>
.item-completed {
  color: grey;
}
</style>
