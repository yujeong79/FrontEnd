<template>
    <div>
        <div v-for="child in props.children" :key="child.name">
            <h4>자식 페이지입니다.</h4>
            이름 : {{ child.name }} <br>
            나이 : {{ child.age }} <br>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        children: Array,
    });

</script>

<style scoped>

</style>