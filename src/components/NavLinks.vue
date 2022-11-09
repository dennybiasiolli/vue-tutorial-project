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
        <router-link :to="{ name: 'todo-utility' }">
          To-do Utility
          <span v-if="todoStore.todoItems.length > 0">
            ({{ todoStore.todoItems.length }})
          </span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'form-test' }">Form</router-link>
      </li>
    </ul>
  </nav>
</template>
