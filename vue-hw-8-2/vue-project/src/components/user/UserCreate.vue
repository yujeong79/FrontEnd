<template>
  <div>
    <h3>사용자 등록</h3>
    <fieldset>
      <div>
        <label for="id">ID</label>
        <input type="text" id="id" v-model="user.id">
      </div>
      <div>
        <label for="password">PW</label>
        <input type="text" id="password" v-model="user.password">
      </div>
      <div>
        <label for="name">이름</label>
        <input type="text" id="name" v-model="user.name">
      </div>
      <div>
        <label for="email">이메일</label>
        <input type="email" id="email" v-model="user.email">
      </div>
      <div>
        <label for="age">나이</label>
        <input type="number" id="age" v-model="user.age">
      </div>
      <div>
        <button @click="createUser">등록</button>
      </div>
    </fieldset>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useUserStore } from '@/stores/userStore';

  const store = useUserStore();

  const user = ref({
    id: '',
    password: '',
    name: '',
    email: '',
    age: '',
  });

  const createUser = function() {
    store.createUser(user.value);
  }

</script>

<style>
</style>
