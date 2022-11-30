<script setup>
const props = defineProps(['modelValue', 'type'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :type="props.type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
