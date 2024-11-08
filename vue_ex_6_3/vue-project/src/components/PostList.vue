<template>
    <div>
        <h1>{{ userName }}이 작성한 게시글</h1>
        <ol>
            <li v-for="post in posts" :key="post.id">
                <router-link :to="{name: 'post-detail', params: {id: post.id}}"><PostListItem :post="post"/></router-link>
            </li>
        </ol>
        <hr>
    </div>

    <router-view></router-view>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    import PostListItem from './PostListItem.vue';

    const route = useRoute();

    const userName = ref(route.params.username);

    let id = 1;

    const posts = ref([
        {id: id++, title: 'Post 1', content: 'Content 1'},
        {id: id++, title: 'Post 2', content: 'Content 2'},
        {id: id++, title: 'Post 3', content: 'Content 3'},
    ]);

</script>

<style scoped>

</style>