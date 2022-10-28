<script setup>
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
      {{ index + 1 }}. <input type="checkbox" v-model="item.completed" /> {{ item.text }}
    </li>
  </ul>
</template>
