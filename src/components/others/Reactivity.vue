<script setup>
import { ref, computed } from 'vue';

const awesome = ref(true)
const myArray = ref([12, 34, 56])
const myArray2 = ref([{
  id: 123,
  text: 'nome 1',
}, {
  id: 234,
  text: 'nome 2',
}])
const myObject = ref({
  id: 12,
  text: 'my text',
  isActive: true,
})

// const contatti = ref([])
// const contattiNonBloccati = computed(() => contatti.value.filter(c => !c.bloccato))
// function getContatti() {
// }

// const ordini = ref([])
// const ordiniNonBloccati = computed(() => ordini.value.filter(o => !o.bloccato))
// function getOrdini() {
// }
</script>

<template>
  <!-- <Contatto
    v-for="contatto in contattiNonBloccati"
    :key="contatto.id"
    :contatto="contatto" /> -->

  <!-- <Ordine
    v-for="ordine in ordiniNonBloccati"
    :key="ordine.id"
    :ordine="ordine" /> -->

  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else="awesome">Vue is NOT awesome!</h1>

  <h1 v-show="awesome">Vue is awesome!</h1>

  <ul>
    <li v-for="(element, index) in myArray" :key="element">
      {{ index + 1 }}. {{ element }}
    </li>
  </ul>

  <ul>
    <li v-for="(element, index) in myArray2" :key="element.id">
      {{ index + 1 }}. {{ element.text }}
    </li>
  </ul>

  <ul>
    <li v-for="element in myArray" :key="element">
      {{ element }}
    </li>
  </ul>

  <ul>
    <li v-for="(value, key, index) in myObject" :key="key">
      {{ key }}: {{ value }}
    </li>
  </ul>

  <ul>
    <li v-for="i in 10" :key="i">
      {{ i }}
    </li>
  </ul>
</template>