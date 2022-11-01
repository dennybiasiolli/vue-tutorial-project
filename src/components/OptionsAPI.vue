<script>
import { mapState, mapActions } from 'pinia'
import { useStore } from '@/stores/main'

export default {
  computed: {
    ...mapState(useStore, ['count', 'isEven'])
  },
  methods: {
    ...mapActions(useStore, ['increment'])
  },
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <h2>Options API</h2>

  {{ count }}
  <button @click="increment(1)">+1</button>
  Is even: {{ isEven }}
</template>
