<script setup>
import { ref, computed, onMounted } from 'vue'

// reactive state
const count = ref(0)
const isEven = computed(() => count.value % 2 === 0)

// functions that mutate state and trigger updates
function increment(num) {
  count.value += num
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  {{ count }}
  <button @click="increment(1)">+1</button>
  Is even: {{ isEven }}
</template>
