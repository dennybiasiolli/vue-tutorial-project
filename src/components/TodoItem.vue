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
const emit = defineEmits(['change'])
</script>

<template>
  <input
    type="checkbox"
    :checked="completed"
    @change="emit('change', $event.target.checked)"
  />
  {{ text }}
</template>
