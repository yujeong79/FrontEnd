<template>
    <div>
        <li v-for="item in props.shoppingCart" :key="item.id">
        {{ item.name }} - {{ item.price }}원
        <button @click="deleteProductFromShoppingCart(item.id)">삭제</button>
        </li>
    </div>
</template>

<script setup>
    const props = defineProps({
        shoppingCart: Array,
    });

    const emit = defineEmits(['deleteProductFromShoppingCart']);

    function deleteProductFromShoppingCart(itemId) {
        emit('deleteProductFromShoppingCart', itemId);
    };

</script>

<style scoped>

</style>