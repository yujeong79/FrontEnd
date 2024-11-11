<template>
    <div>
      <h2>StoreTest</h2>
      <!-- State -->
      <p>state: {{ store.count }}</p>
      <!-- Getters -->
      <p>getter: {{ store.doubleCount }}</p>
      <!-- Action -->
      <button @click="store.increment()">Action(증가1)</button>
      <button @click="increment2">증가2</button> <!-- 컴포넌트 내에서 따로 메서드를 정의해서 사용해도 중앙저장소의 데이터에 영향 -->
    </div>
  </template>
  
  <script setup>
    import { useCounterStore } from '@/stores/counter';
  
    const store = useCounterStore();
    console.log(store.count);
  
    const increment2 = function() {
      store.increment();
    };
  
  </script>
  
  <style scoped>
  
  </style>