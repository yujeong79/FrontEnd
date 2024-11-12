import { ref, computed } from 'vue';
import { defineStore } from "pinia";
import axios from 'axios';
import router from '@/router';

const REST_API_URL = `http://localhost:8080/userapi/user`;

export const useUserStore = defineStore("user", () => {
  
  // 전체 게시글 가져오기
  const userList = ref([]); 
  const getUserList = function() {
    axios({
      url: REST_API_URL,
      method: 'GET'
    })
    .then((response)=>{
      console.log("게시글 목록 조회")
      console.log(response.data)
      userList.value = response.data
    })
    .catch(()=>{
      console.log("게시글 조회 실패")
    })
  };

  // 해당 게시글 가져오기
  const user = ref({});
  const getUser = function(id) {
    axios({
      url: REST_API_URL + "/" + id,
      method: 'GET',
    })
    .then((response)=>{
      console.log("해당 게시물 조회 완료")
      console.log(response.data)
      user.value = response.data
    })
    .catch(()=>{
      console.log("해당 게시물 조회 실패")
    })
  };

  const createUser = function(user) {
    axios({
      url: REST_API_URL,
      method: 'POST',
      data: user
    })
    .then(()=>{
      console.log("사용자 등록 완료")
      router.push({name: 'UserList'})
    })
    .catch(()=>{
      console.log("실패")
    })
  }

  const userCount = computed(()=>{
    return userList.value.length;
  })
  
  return {
    userList,
    getUserList,
    userCount,
    user,
    getUser,
    createUser,
  };
});
