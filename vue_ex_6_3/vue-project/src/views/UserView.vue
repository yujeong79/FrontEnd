<template>
    <div>
        <h1>User Profile</h1>
        <p>Username : {{ userId }}</p>
        <router-link :to="{name: 'profile'}">상세 프로필</router-link> | 
        <router-link :to="{name: 'user-posts'}">작성한 게시글</router-link>
    </div>
    
    <hr>

    <router-view></router-view>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute, RouterLink, RouterView } from 'vue-router';  

    const route = useRoute();
    const userId = ref(route.params.username);
</script>

<style scoped>

</style>