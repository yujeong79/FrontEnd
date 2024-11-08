<template>
    <div>
        <h1>상세 프로필</h1>
        <p>반갑습니다. {{ userId }}입니다.</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const userId = ref(route.params.username);

</script>

<style scoped>

</style>