<template>
    <div>
        <h3>부모 컴포넌트</h3>
        <ParentChild @some-event="someCallback" @emit-args-method="getNumber" @update-name="updateName"
        my-msg="message" v-bind:dynamic-name="name"/>
    </div>
</template>

<script setup>
    import {ref} from 'vue';

    import ParentChild from '@/components/ParentChild.vue';
    // import ParentChild from './ParentChild.vue'; 

    const name = ref("Kim");

    const someCallback = function() {
        console.log('ParentChild에서 이벤트가 발생했습니다!!')
    };

    const getNumber = function(...args) {
        console.log(args)
    };

    const updateName = function(newName) {
        name.value = newName;
    };

</script>

<style scoped>

</style>