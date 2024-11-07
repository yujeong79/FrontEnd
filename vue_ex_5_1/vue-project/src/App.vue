<template>
  <div>
    <h1>쇼핑 애플리케이션</h1>
    <ProductList v-bind:product-list="products"/>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  let id = 0
  const products = ref([
    { id: id++, name: '사과', price: 1000 },
    { id: id++, name: '바나나', price: 1500 },
    { id: id++, name: '딸기', price: 2000 },
    { id: id++, name: '포도', price: 3000 },
    { id: id++, name: '복숭아', price: 2000 },
    { id: id++, name: '수박', price: 5000 }
  ])

  import ProductList from '@/components/ProductList.vue';

</script>

<style scoped>

</style>