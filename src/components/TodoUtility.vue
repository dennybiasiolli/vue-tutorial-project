<script setup>
import { ref, onMounted } from 'vue'

const items = ref([])

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
  <ul>
    <li
      v-for="(item, index) in items"
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
