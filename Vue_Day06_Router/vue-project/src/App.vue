<template>
  <div>
    <h1>App.vue</h1>
    <nav> <!-- 구분용 태그 -->
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> |
      <router-link :to="{name: 'home'}">Home(NamedRoute)</router-link> | 
      <router-link :to="{name: 'about'}">About(NamedRoute)</router-link> |
      <router-link :to="{name: 'user', params: {id: 'jjang'}}">jjang님</router-link> | 
      <router-link :to="{name: 'user', params: {id: 'ssafy'}}">ssafy님</router-link> |
      <router-link :to="{name: 'login'}">로그인</router-link> | 
      <router-link :to="{name: 'board'}">보드</router-link> | 
    </nav>

    <hr>
    
    <router-view/>
  </div>
</template>

<script setup>
  // import { RouterLink, RouterView } from 'vue-router'; 전역 변수로 등록되어 있기 때문에 없어도 동작 가능!
</script>

<style scoped>

</style>