<template>
    <div>
        <h1>User Profile</h1>
        <p>Username: {{ userId }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const userId = ref(route.params.id);
</script>

<style scoped>

</style>