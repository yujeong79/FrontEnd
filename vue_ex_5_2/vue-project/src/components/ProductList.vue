<template>
    <li v-for="product in props.products" :key="product.id">
      {{ product.name }} - {{ product.price }}원
      <button @click="addShoppingCart(product.name)">장바구니에 추가</button>
    </li>
  </template>
  
  <script setup>
    import {ref} from 'vue';

    const props = defineProps({
        products: Array
    });

    const shoppingCart = ref([]);

    const addShoppingCart = function(name) {
        shoppingCart.value.push(name);
        console.log(shoppingCart.value);
    };

  </script>
  