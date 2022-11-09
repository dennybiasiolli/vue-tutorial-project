<script setup>
import axios from 'axios'
import { onMounted, ref, computed } from 'vue'

axios.defaults.baseURL = 'http:///localhost:3000'

const products = ref([])
const product = ref(null)

const lastProductId = computed(() => products.value[products.value.length - 1].id)

async function getProducts() {
  try {
    const { data } = await axios.get('/products')
    products.value = data
  } catch (error) {
    products.value = []
  }
}

async function getProduct(id) {
  try {
    const { data } = await axios.get(`/products/${id}`)
    product.value = data
  } catch (error) {
    product.value = null
  }
}

async function createProduct(name, price) {
  try {
    await axios.post('/products', { name, price })
    loadData()
  } catch (error) {
  }
}

async function updateProductName(id, name) {
  if (id) {
    try {
      await axios.patch(`/products/${id}`, {
        name,
      })
      loadData()
    } catch (error) {
    }
  }
}

async function deleteProduct(id) {
  if (id) {
    try {
      await axios.delete(`/products/${id}`)
      loadData()
    } catch (error) {
    }
  }
}

function loadData() {
  getProducts()
  getProduct(1)
}

onMounted(() => {
  loadData()
})
</script>

<template>
  <h2>Axios Test</h2>
  <p>
    <h4>Get Products</h4>
    <ul>
      <li v-for="product in products">{{ product }}</li>
    </ul>
  </p>
  <p>
    <h4>Get Product ID=1</h4>
    <span>{{ product }}</span>
  </p>
  <p>
    <h4>Operations</h4>
    <button @click="createProduct('surf board', 423)">
      Create product
    </button>
    <button @click="updateProductName(lastProductId, 'ancient table')">
      Update last product name
    </button>
    <button @click="deleteProduct(lastProductId)">
      Delete last product
    </button>
  </p>
</template>
