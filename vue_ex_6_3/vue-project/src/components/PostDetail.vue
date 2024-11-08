<template>
    <div>
        <p>번호 : {{ postId }}</p>
        <!-- <p>제목 : {{ post.title }}</p>
        <p>내용 : {{ post.content }}</p> -->
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const posts = ref([
        {id: 1, title: 'Post 1', content: 'Content 1'},
        {id: 2, title: 'Post 2', content: 'Content 2'},
        {id: 3, title: 'Post 3', content: 'Content 3'},
    ]);

    const postId = ref(route.params.id);

    watch(()=>route.params.id, (newId)=>{
        postId.value = newId;
    });

    const post = ref(() => {
        return posts.value.find(item => item.id === postId.value);       
    });

</script>

<style scoped>

</style>