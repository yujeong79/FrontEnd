<template>
  <div>
    <nav>
      <router-link :to="{name: 'home'}">Home</router-link> 
      <router-link :to="{name: 'products'}">Products</router-link> 
      <router-link :to="{name: 'favorite'}">Favorite</router-link> 
    </nav>

    <router-view></router-view>
  </div>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
  nav {
    padding: 10px;
    display: flex;
    gap: 20px;
    justify-content: center;

    background-color: black;
    color: white;
  }

  nav a:visited,
  nav a:hover,
  nav a:active {
    color: white;
  }
</style>