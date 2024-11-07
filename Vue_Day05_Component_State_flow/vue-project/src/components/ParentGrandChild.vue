<template>
    <div>
        <h5>손자 컴포넌트</h5>
        <p>{{ myMsg }}</p>
        <input type="text" v-model="name">
        <button @click="updateName">이름 개명 신청</button>
    </div>
</template>

<script setup>
    import {ref} from 'vue';

    defineProps({
        myMsg : String,
    });

    const name = ref(''); // 입력 받은 이름을 저장

    // 손자 컴포넌트에서 emit 요청
    const emit = defineEmits(['updateName']);

    const updateName = function() {
        emit('updateName', name.value);
        name.value = ''; // 개명 신청 후 초기화
    };

</script>

<style scoped>

</style>