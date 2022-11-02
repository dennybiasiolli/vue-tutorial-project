<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <h1>Page Not Found</h1>
  <p>
    &quot;{{ route.fullPath }}&quot
    does not exists.
  </p>

  Return to
  <router-link :to="{ name: 'home' }">Home Page</router-link>
</template>
