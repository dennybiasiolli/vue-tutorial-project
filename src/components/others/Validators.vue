<script setup>
import { ref, watch } from 'vue'

const description = ref('')
const descriptionValid = ref(false)
function validateDescription() {
  console.log('validateDescription')
  descriptionValid.value = !!description.value.trim()
}


const username = ref('')
const password = ref('')
const formValid = ref(false)
function validateForm() {
  console.log('validateForm')
  formValid.value = !!(
    username.value.trim() && password.value.trim()
  )
}
watch([username, password], () => validateForm())
</script>

<template>
  <h2>Validators</h2>
  <div>
    <input
      type="text"
      placeholder="Description"
      v-model="description"
      @input="validateDescription" />
    <span v-if="!descriptionValid">Please insert a value</span>
  </div>

  <div>
    <!-- <form @input="validateForm"> -->
    <!-- <form @submit.prevent="handleSubmit"> -->
    <form>
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit" :disabled="!formValid">Submit</button>
      <!-- <button type="submit">Submit</button> -->
    </form>
  </div>
</template>
