<template>
  <div>
    <h1>쇼핑 애플리케이션</h1>
    <ul><ProductListItem :products="products" @add-shopping-cart="addShoppingCart"/></ul>
    총 가격 : {{ totalPrice }}원
    <h2>장바구니</h2>
    <ul><Cart :shopping-cart="shoppingCart" @delete-product-from-shopping-cart="deleteProductFromShoppingCart"/></ul>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import ProductListItem from './components/ProductListItem.vue';
  import Cart from './components/Cart.vue';

  let id = 0;

  const products = ref([
    {id: id++, name: '사과', price: 1000},
    {id: id++, name: '바나나', price: 1500},
    {id: id++, name: '딸기', price: 2000},
    {id: id++, name: '포도', price: 3000},
    {id: id++, name: '복숭아', price: 2000},
    {id: id++, name: '수박', price: 5000},
  ]);

  const totalPrice = computed(() => {
    let total = 0;
    for(const p of products.value) {
      total += p.price;
    }

    return total;
  });

  const shoppingCart = ref([]);
  function addShoppingCart(itemId) {
    const idx = products.value.findIndex((product)=>{
      return product.id === itemId;
    });

    shoppingCart.value.push(products.value[idx]);
  }

  function deleteProductFromShoppingCart(itemId) {
    const idx = products.value.findIndex((product) => {
      return product.id === itemId;
    });

    shoppingCart.value.splice(idx, 1);
  }



</script>

<style scoped>

</style>