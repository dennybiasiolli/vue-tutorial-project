<script setup>
import { ref, reactive, computed } from 'vue';

const message = ref('Prova ciao')
const rawHtml = `<span style="color:red;">Ciao</span>`
const dynamicId = 'id123'
const isButtonDisabled = ref(true)
const myClass = 'foo'
const objectOfAttrs = ref({
  id: 'container',
  class: 'wrapper'
})

const isActive = ref(true)
const isActiveTest = ref(true)
const classObject = ref({
  active: isActive.value,
  'text-danger': isActiveTest.value,
})


const number = 0
const ok = ref(true)

const inverted = computed(() => message.value.split('').reverse().join(''))
</script>

<template>
  <p>
    {{ rawHtml }}
    <div v-html="rawHtml"></div>
  </p>
  <p>
    <div id="myDinamicId">ID 1</div>
    <div :id="dynamicId">ID 2</div>
    <button :disabled="isButtonDisabled">Button</button>
  </p>
  <p>
    <div
      :id="dynamicId"
      class="base-class"
      v-bind="objectOfAttrs"
      :class="myClass"
    >objectOfAttrs</div>
  </p>

  <p>
    Num + 1 = {{ number + 1 }}
  </p>
  <p>
    {{ ok ? 'YES' : 'NO' }}
  </p>
  <p>
    {{ message.split('').reverse().join('') }}
    {{ inverted }}
  </p>
  <div :qualsiasi-cosa="`list-${dynamicId}`">dynamicId</div>
  <div
    class="static"
    :class="classObject"
  >Binding class</div>
</template>

<style>
.foo {
  font-size: 12;
}
</style>