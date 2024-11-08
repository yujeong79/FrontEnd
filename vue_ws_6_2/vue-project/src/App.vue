<script setup>
  import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <div>
    <h2>Quiz 퀴즈</h2>
    <h4>여기는 퀴즈의 나라! 놀라운 퀴즈들이 기다리고 있어요. 지금 바로 도전해보세요!</h4>
    <router-link :to="{name: 'home'}">Home</router-link> |
    <router-link :to="{name: 'quiz'}">Quiz</router-link>
  
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>