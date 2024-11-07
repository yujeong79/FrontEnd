<template>
    <div>
        <ul>
            <li v-for="item in props.productList" :key="item.id">
                {{ item.name }} - {{ item.price }}원
            </li>
        </ul>
    </div>
</template>

<script setup>

    const props = defineProps({
        productList: Array,
    });

    console.log(props.productList[0]);

</script>

<style scoped>

</style>