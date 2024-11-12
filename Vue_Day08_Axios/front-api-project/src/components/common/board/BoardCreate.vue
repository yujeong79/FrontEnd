<template>
    <div>
        <h4>게시글 작성</h4>
        <fieldset>
            <legend>등록</legend>
            <div>
                <label for="title">제목 : </label>
                <input type="text" id="title" v-model="board.title">
            </div>
            <div>
                <label for="writer">쓰니 : </label>
                <input type="text" id="writer" v-model="board.writer">
            </div>
            <div>
                <label for="content">내용 : </label>
                <textarea id="content" cols="30" rows="10" v-model="board.content"></textarea>
            </div>
            <div>
                <button @click="createBoard">등록</button>
            </div>
        </fieldset>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useBoardStore } from '@/stores/board';

    const store = useBoardStore();

    const board = ref({ // 양방향 바인딩 되어 있기 때문에 쓰면 알아서 들어감
        title: '',
        writer: '',
        content: '',
    });

    const createBoard = function() { // 등록하면 createBoard 실행
        store.createBoard(board.value);
    };

</script>

<style scoped></style>
