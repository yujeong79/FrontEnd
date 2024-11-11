<template>
    <div>
        남은 제품 개수 : {{ store.productCount }} 
    </div>
</template>

<script setup>
    import { useProductStore } from '@/stores/product.js';

    const store = useProductStore();
</script>

<style scoped>

</style>