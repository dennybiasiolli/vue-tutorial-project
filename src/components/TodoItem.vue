<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})
</script>

<template>
  <input type="checkbox" v-model="completed" />
  {{ text }}
</template>
