<template>
  <div>
    <h2>사용자 상세 정보</h2>
    
    <span>
      <p>ID</p>
      <p>{{ store.user.id }}</p>
      <p>PW</p>
      <p>{{ store.user.password }}</p>
      <p>이름</p>
      <p>{{ store.user.name }}</p>
      <p>이메일</p>
      <p>{{ store.user.email }}</p>
      <p>나이</p>
      <p>{{ store.user.age }}</p>
    </span>
      
  </div>
</template>

<script setup>
  import { useUserStore } from '@/stores/userStore';
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router'
  
  const store = useUserStore();
  const route = useRoute();

  const userId = ref(route.params.id);

  onMounted(()=>{
    store.getUser(userId.value);
  })


</script>

<style>
</style>
