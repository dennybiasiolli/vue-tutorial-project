<script setup>
import { onMounted, ref, watch } from 'vue'

const formValid = ref(false)
const username = ref('')
const password = ref('')
const validationMessage = ref('')

function validateForm() {
  if (!username.value) {
    validationMessage.value = 'A username is required'
    formValid.value = false
    return
  }
  if (!password.value) {
    validationMessage.value = 'A password is required'
    formValid.value = false
    return
  }
  validationMessage.value = ''
  formValid.value = true
}

function handleFormSubmit(e) {
  console.log('submit', {
    username: username.value,
    password: password.value,
  })
}

watch([username, password], () => {
  validateForm()
})

onMounted(() => {
  validateForm()
})
</script>

<template>
  <h2>Form Test</h2>
  <form method="post" action="/foo/bar" @submit.prevent="handleFormSubmit">
    Form test
    <p>
      <label for="username">Username </label>
      <input type="text" name="username" placeholder="Username" id="username" v-model="username" />
    </p>
    <p>
      <label for="password">Password </label>
      <input type="password" name="password" placeholder="Password" id="password" v-model="password" />
    </p>
    <button type="submit" :disabled="!formValid">Submit</button> {{ validationMessage }}
  </form>
</template>
