<template>
    <div>
        제목: {{ props.post.title }}
    </div>
</template>

<script setup>
    const props = defineProps({
        post: Object,
    })
</script>

<style scoped>

</style>