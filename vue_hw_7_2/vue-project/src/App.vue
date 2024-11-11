<template>
  <div class="app-vue">
    <h1>pinia 연습하기</h1>
    <span>
      <ParentPage v-for="family in store.familyInfo" :key="family.familyName" :family="family"/>
    </span>
  </div>
</template>

<script setup>
  import { useFamilyStore } from '@/stores/family.js';
  const store = useFamilyStore();

  import ParentPage from '@/components/ParentPage.vue';

</script>

<style scoped>
      .app-vue > span {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>