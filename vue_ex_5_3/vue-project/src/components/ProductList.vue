<template>
    <ul>
        <ProductListItem v-for="product in props.products" :key="product.id" :product="product"/>
    </ul>
</template>

<script setup>
    import ProductListItem from '@/components/ProductListItem.vue';

    const props = defineProps({
        products: Array,
    });

</script>

<style scoped>

</style>