<template>
    <div>
        <h4>게시글 상세</h4>

        <table>
            <thead>
                <tr>
                    <th>항목</th>
                    <th>내용</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>번호</td>
                    <td>{{ store.board.id }}</td>
                </tr>
                <tr>
                    <td>제목</td>
                    <td>{{ store.board.title }}</td>
                </tr>
                <tr>
                    <td>작성자</td>
                    <td>{{ store.board.writer }}</td>
                </tr>
                <tr>
                    <td>내용</td>
                    <td>{{ store.board.content }}</td>
                </tr>
                <tr>
                    <td>작성일</td>
                    <td>{{ store.board.regDate }}</td>
                </tr>
            </tbody>
        </table>

        <router-link :to="`/board/update/${store.board.id}`">수정</router-link>
        <button @click="deleteBoard()">삭제</button>
    </div>
</template>

<script setup>
    import { useBoardStore } from '@/stores/board';
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const store = useBoardStore();
    const route = useRoute();

    const boardId = ref(route.params.id);

    // onMounted 하면서 store에서 axios 요청으로 게시글 하나 들고오면 되겠다잉
    onMounted(()=>{
        store.getBoard(boardId.value);
    });

    // 삭제 버튼을 누르면 호출
    const deleteBoard = function() {
        store.deleteBoard(boardId.value);
    }

</script>

<style scoped></style>
