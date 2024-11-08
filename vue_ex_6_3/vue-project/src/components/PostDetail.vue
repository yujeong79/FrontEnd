<template>
    <div>
        <p>번호 : {{ post.id }}</p>
        <p>제목 : {{ post.title }}</p>
        <p>내용 : {{ post.content }}</p>
    </div>
</template>

<script setup>

    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const posts = ref([
        {id: 1, title: 'Post 1', content: 'Content 1'},
        {id: 2, title: 'Post 2', content: 'Content 2'},
        {id: 3, title: 'Post 3', content: 'Content 3'},
    ]);

    const route = useRoute();
    const postId = ref(route.params.id);
    const post = ref({});

    watch(()=>route.params.id, (newId)=>{
        postId.value = newId;
        post.value = posts.value[postId.value-1];
        console.log(post.value);
    });

</script>

<style scoped>

</style>