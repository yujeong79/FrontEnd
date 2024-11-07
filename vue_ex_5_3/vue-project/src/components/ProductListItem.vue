<template>
    <div>
        <li v-for="item in products" :key="item.id">
            {{ item.name }} - {{ item.price }}원
            <button @click="addShoppingCart(item.id)">장바구니에 추가</button>
        </li>
    </div>
</template>

<script setup>
    const props = defineProps({ // props 선언
        products: Array,
    })

    const emit = defineEmits(['addShoppingCart']); // emit - 이벤트 발신
    function addShoppingCart(itemId) {
        emit('addShoppingCart', itemId);
    }

</script>

<style scoped>

</style>