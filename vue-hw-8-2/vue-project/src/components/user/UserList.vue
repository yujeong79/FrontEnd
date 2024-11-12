<template>
  <div>
    <h3>사용자 목록</h3>
    <p>등록된 사용자의 수 : {{ store.userCount }}</p>
    <hr>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>PW</th>
          <th>이름</th>
          <th>이메일</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in store.userList" :key="user.id">
          <td><RouterLink :to="`/user/${user.id}`">{{ user.id }}</RouterLink></td>
          <td>{{ user.password }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { useUserStore } from '@/stores/userStore';
  import { onMounted } from 'vue';

  const store = useUserStore();

  onMounted(()=>{
    store.getUserList();
  })

</script>

<style>
</style>
