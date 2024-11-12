<template>
    <div>
        <h4>게시글 목록</h4>

        <hr>

        <table>
        <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>쓰니</th>
                <th>조회수</th>
                <th>등록일</th>
            </tr>
        </thead>
        <tbody>
            <!-- DB에서 데이터를 받아와서 데이터의 수만큼 아래의 tr 태그를 반복시켜야 해! -->
            <!-- pinia에 데이터를 저장해두고 가져와서 쓰자 -->
            <tr v-for="board in store.boardList" :key="board.id">
                <td>{{ board.id }}</td>
                <td><router-link :to="`board/${board.id}`">{{ board.title }}</router-link></td>
                <td>{{ board.writer }}</td>
                <td>{{ board.viewCnt }}</td>
                <td>{{ board.regDate }}</td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script setup>
    import { useBoardStore } from '@/stores/board.js';
    import { onMounted } from 'vue';

    const store = useBoardStore();

    onMounted(()=>{
        store.getBoardList();
    });

</script>

<style scoped></style>
