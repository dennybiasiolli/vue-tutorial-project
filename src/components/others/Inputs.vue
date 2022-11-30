<script setup>
import { ref } from 'vue';

const message = ref('')
const longMessage = ref('')
const checked = ref('KO')

const names = [
  { id: 'jack', value: 'Jack' },
  { id: 'john', value: 'John' },
  { id: 'mike', value: 'Mike' },
]
const checkedNames = ref([])
const picked = ref('')
const selected = ref([])
</script>

<template>
  <h2>Inputs</h2>
  <div>
    <p>Message is: &quot;{{ message }}&quot; {{ typeof message }}</p>
    <input v-model="message" placeholder="edit me" />
  </div>

  <div>
    <p style="white-space: pre-line;">{{ longMessage }}</p>
    <textarea v-model="longMessage" placeholder="add multiple lines"></textarea>
  </div>

  <div>
    <input type="checkbox" id="checkbox" v-model="checked" true-value="OK" false-value="KO" />
    <label for="checkbox">{{ checked }}</label>
  </div>

  <div>
    <div>Checked names: {{ checkedNames }}</div>
    <span v-for="name in names" :key="name.id">
      <input type="checkbox" :id="name.id" :value="name.id" v-model="checkedNames">
      <label :for="name.id">{{ name.value }}</label>
    </span>
  </div>

  <div>
    <div>Picked: {{ picked }}</div>
    <span v-for="name in names" :key="name.id">
      <input type="radio" :id="name.id" :value="name.id" v-model="picked" />
      <label :for="name.id">{{ name.value }}</label>
    </span>
  </div>

  <div>Selected: {{ selected }}</div>
  <select v-model="selected" multiple>
    <option disabled value="">Please select one</option>
    <option v-for="name in names" :key="name.id" :value="name.id">{{ name.value }}</option>
  </select>
</template>
