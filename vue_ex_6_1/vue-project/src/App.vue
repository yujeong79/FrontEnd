<template>
  <div>
    <nav>
      <router-link :to="{name: 'home'}">Home</router-link> | 
      <router-link :to="{name: 'about'}">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>

</style>