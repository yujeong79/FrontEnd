<template>
    <div class="parent-page">
        <h2>부모 컴포넌트</h2>
        <p>{{ family.father }}</p>
        <p>{{ family.mother }}</p>
        <span>
            <ChildPage class="child" v-for="child in family.children" :key="child.name" :child="child"/>
        </span>
    </div>
</template>

<script setup>
    import { useFamilyStore } from '@/stores/family.js';
    import ChildPage from '@/components/ChildPage.vue';

    const store = useFamilyStore();

    defineProps({
        family: Object,
    });
</script>

<style scoped>
    .parent-page {
        border: 1px solid;
        text-align: center;
        background-color: rgb(240, 240, 240);
    }

    .parent-page > span {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

</style>