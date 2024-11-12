<template>
    <div>
        <nav>
            <RouterLink to="/">Home</RouterLink> |
            <RouterLink :to="{name: 'boardList'}">BoardList</RouterLink> | 
            <RouterLink :to="{name: 'boardCreate'}">BoardCreate</RouterLink> | 
        </nav>

        <RouterView/>
    </div>
</template>

<script setup>

</script>

<style scoped>
    nav {
        text-align: center;
    }

    nav a {
        font-weight: bold;
        text-decoration: none;
        color: black;
    }

    nav a.router-link-exact-active { /* 해당 컴포넌트가 활성화되면 router-link-exact-active 클래스가 생김 */
        color: #42b983;
    }
</style>