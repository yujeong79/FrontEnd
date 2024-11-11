<template>
    <div>
        <h4>TodoForm</h4>
        <input type="text" v-model.trim="todoText" @keyup.enter = "createTodo">
        <button @click="createTodo">등록</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useTodosStore } from '@/stores/todos';

    const todoText = ref(""); // v-model로 input 요소에서 받은 value를 양방향 바인딩

    const store = useTodosStore();
    const createTodo = function() {
        if(todoText.value) { // JS는 빈문자열을 false로 인식하기 때문에 그냥 if(todoText.value)만 써도 됨
            store.addTodo(todoText.value);
            todoText.value = '';
        } else {
            alert('빈 문자열은 등록할 수 없습니다!');
        }
    };

</script>

<style scoped>

</style>