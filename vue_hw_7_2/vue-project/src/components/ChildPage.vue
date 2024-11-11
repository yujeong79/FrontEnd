<template>
    <div class="child-page">
        <h3>자식 페이지</h3>
        <p>{{ child.name }}</p>
    </div>
</template>

<script setup>
    defineProps({
        child: Object,
    });
</script>

<style scoped>
    .child-page {
        border: 1px solid;
        background-color: white;
    }
</style>