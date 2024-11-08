<template>
    <div>
        <h5>{{ quiz.pk }}번 문제. {{ quiz.question }}</h5>
        <label for="answer">정답 입력</label>
        <input type="text" id="answer">
    </div>
</template>

<script setup>
    defineProps({
        quiz: Object,
    });

</script>

<style scoped>

</style>