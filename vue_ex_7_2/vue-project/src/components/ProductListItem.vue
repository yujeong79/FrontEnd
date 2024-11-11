<template>
    <div>
        {{ product.id }} - {{ product.title }} - {{ product.body }}
        <button @click="store.deleteProduct(product.id)">Delete</button>
    </div>
</template>

<script setup>
    import { useProductStore } from '@/stores/product.js';

    const store = useProductStore();

    defineProps({
        product: Object,
    });
</script>

<style scoped>

</style>