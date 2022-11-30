<script setup>
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore()
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home Page</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'options-api' }">Options API</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'composition-api' }">Composition API</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'inputs' }">Inputs</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'my-input' }">My Input</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'reactivity' }">Reactivity</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'template' }">Template</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'validators' }">Validators</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'watchers' }">Watchers</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'form-test' }">Form</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'axios-test' }">Axios</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'todo-utility' }">
          To-do Utility
          <span v-if="todoStore.todoItems.length > 0">
            ({{ todoStore.todoItems.length }})
          </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
