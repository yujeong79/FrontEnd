<template>
    <div>
        <span :class="{ 'is-done': todo.isDone }" class="click-cursor"
        @click="store.updateTodo(todo.id)">{{ todo.text }}</span> 
        <button @click="store.deleteTodo(todo.id)">삭제</button>
    </div>
</template>

<script setup>
    import { useTodosStore } from '@/stores/todos';

    const store = useTodosStore();

    defineProps({
        todo: Object,
    });
</script>

<style scoped>
    .is-done {
        text-decoration: line-through;
    }

    .click-cursor { /* 해당 요소 위의 마우스가 올라가면 커서 모양이 바뀜 */
       cursor: pointer; 
    }
</style>