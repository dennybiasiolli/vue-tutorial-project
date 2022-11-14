<script setup>
import { ref, watch } from 'vue'

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
const emit = defineEmits(['change', 'textChanged', 'delete'])

const showForm = ref(false)
const formValid = ref(false)
const innerText = ref('')

function handleChangeClick() {
  showForm.value = true
  innerText.value = props.text
}

function handleCancelClick() {
  showForm.value = false
}

function handleSave() {
  emit('textChanged', innerText.value)
  showForm.value = false
}

function validateForm() {
  if (!innerText.value.trim()) {
    formValid.value = false
    return
  }
  formValid.value = true
}

watch([innerText], () => {
  validateForm()
})
</script>

<template>
  <input
    type="checkbox"
    :checked="completed"
    @change="emit('change', $event.target.checked)"
  />
  {{ text }}
  <button v-if="!showForm" @click="handleChangeClick">Change</button>
  <button v-if="!showForm" @click="emit('delete')">Delete</button>
  <form v-show="showForm">
    <input type="text" v-model="innerText" />
    <button type="button" @click="handleCancelClick">Cancel</button>
    <button type="submit" :disabled="!formValid" @click="handleSave">Save</button>
  </form>
</template>
