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
const emit = defineEmits(['switchCompletedTodo', 'changeTodoText', 'deleteTodoItem'])
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
        @change="emit('switchCompletedTodo', { id: item.id, completed: $event})"
        @text-changed="emit('changeTodoText', { id: item.id, text: $event})"
        @delete="emit('deleteTodoItem', item.id)"
      />
    </li>
  </ul>
</template>
