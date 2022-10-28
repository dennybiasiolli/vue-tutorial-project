<script setup>
import TodoItem from './TodoItem.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true,
  }
})
</script>

<template>
  <h4>{{ props.title }}</h4>
  <ul>
    <li
      v-for="(item, index) in props.items"
      :key="item.id"
      :class="{ 'item-completed': item.completed }"
    >
      {{ index + 1 }}.
      <TodoItem
        :text="item.text"
        :completed="item.completed"
      />
    </li>
  </ul>
</template>
