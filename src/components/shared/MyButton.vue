<script setup>
const emit = defineEmits(['click'])
</script>

<template>
  <button @click="emit('click', $event)">
    <slot></slot>
  </button>
</template>
