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
        <router-link :to="{ name: 'todo-utility' }">To-do Utility</router-link>
      </li>
    </ul>
  </nav>
</template>
