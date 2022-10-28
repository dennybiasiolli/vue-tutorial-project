<script setup>
import { ref, computed, onMounted } from 'vue'

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

  <h4>To-do list</h4>
  <ul>
    <li
      v-for="(item, index) in todoItems"
      :key="item.id"
      :class="{ 'item-completed': item.completed }"
    >
      {{ index + 1 }}. {{ item.text }}
    </li>
  </ul>

  <h4>Completed list</h4>
  <ul>
    <li
      v-for="(item, index) in completedItems"
      :key="item.id"
      :class="{ 'item-completed': item.completed }"
    >
      {{ index + 1 }}. {{ item.text }}
    </li>
  </ul>
</template>

<style>
.item-completed {
  text-decoration: line-through;
}
</style>
