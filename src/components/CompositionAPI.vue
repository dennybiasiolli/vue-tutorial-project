<script setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useStore } from '@/stores/main'

const store = useStore()

// reactive state
const { count, isEven } = storeToRefs(store)
const { increment } = store

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <h2>Composition API</h2>

  {{ count }}
  <button @click="increment(1)">+1</button>
  Is even: {{ isEven }}
</template>
