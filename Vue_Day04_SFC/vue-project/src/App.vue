<template>
  <div>
    <h2>App.vue</h2>
    <MyComponent/>
    <my-component/> <!-- 알아서 kebab-case도 형변환을 해준다. -->
  </div>
</template>

<script setup>
  // import MyComponent from './components/MyComponent.vue'; // 상대경로
  import MyComponent from '@/components/MyComponent.vue'; // 절대경로 @/ => src/
</script>

<style scoped>

</style>