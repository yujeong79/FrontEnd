import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'; // axios 쓰려면 이 파일에서 쓰겠다고 import 해야함!!!!!
import router from '@/router';

const REST_API_URL = `http://localhost:8080/api-board/board`; // 요청

export const useBoardStore = defineStore('board', () => {
  const boardList = ref([]) // 게시글 목록을 store 에서 관리하자~
  
  const getBoardList = function() {
    axios.get(REST_API_URL)
      .then((response)=>{
        console.log(response.data);

        boardList.value = response.data;
      })

      // catch 라던지 이런 처리도 해주면 좋은데.. 나중에 하장...
  };

  // action
  const createBoard = function(board) {
    axios({
      url: REST_API_URL,
      method: 'POST',
      // json 형태로 바꿔주지 않았지만 application/json이 알아서 적용되었다.
      data: board
    })
    .then(()=>{
      console.log("완료")
      router.push({name: 'boardList'}) // 작업이 성공적으로 완료됐으면 이동하도록 push
    })
    .catch(()=>{
      console.log("실패")
    })
  };

  const board = ref({}); // 보드 하나를 가져와서 담을 객체
  const getBoard = function(id) {
    axios({
      url: REST_API_URL + "/" + id,
      method: 'GET',
    })
    .then((response)=>{
      console.log(response.data)

      board.value = response.data
      console.log("완료")
    })
    .catch(()=>{
      console.log("실패")
    })
  }

  const deleteBoard = function(id) {
    axios({
      url: REST_API_URL + "/" + id,
      method: 'DELETE',
    })
    .then(()=>{
      router.push({name: 'boardList'})
      console.log("삭제 완료")
    })
    .catch(()=>{
      console.log("삭제 실패")
    })
  }

  const updateBoard = function() {
    console.log(board.value)
    axios({
      url: REST_API_URL + "/" + board.value.id,
      method: 'PUT',
      data: board.value
    })
    .then(()=>{
      router.push({path: `/board/${board.value.id}`})
      console.log("수정 완료")
    })
    .catch(()=>{
      console.log("수정 실패")
    })
  }

  return { boardList, getBoardList, createBoard, getBoard, board, deleteBoard, updateBoard };
})
