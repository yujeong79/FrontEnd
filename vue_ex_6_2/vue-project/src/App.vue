<template>
  <div>
    <header>
      <nav>
        <router-link :to="{name: 'home'}">Home</router-link> | 
        <router-link :to="{name: 'about'}">About</router-link> | 
        <router-link :to="{name: 'user', params: {id: username }}">User</router-link> | 
      </nav>
    </header>
    
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { RouterLink, RouterView } from 'vue-router';

  const username = ref('admin');

</script>

<style scoped>

</style>