<script setup>
const props = defineProps({
  customMessage: {
    type: String,
    // validator(value) {
    //   return ['Ciao', 'Pippo', 'Hello world'].includes(value)
    // },
  },
})

const emit = defineEmits({
  changeMessage: ({ id, char }) => {
    if (!id) {
      console.warn('Missing ID')
      return false
    } else if (!char) {
      console.warn('Missing CHAR')
      return false
    }
    return true
  },
})

function handleButtonClick() {
  emit('changeMessage', { id: 123, char: '.' })
}
</script>

<template>
  <div>{{ props.customMessage }}</div>
  <button @click="handleButtonClick">Change me</button>
</template>
