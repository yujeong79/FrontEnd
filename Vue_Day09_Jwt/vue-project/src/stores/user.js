import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

const REST_API_URL = `http://localhost:8080/api-user`

export const useUserStore = defineStore('user', () => {
  const loginUser = ref(null);

  const userLogin = function(id, password) {
    axios.post(`${REST_API_URL}/login`, {
      id: id,
      password: password
    })
    .then((response)=>{
      console.log(response) // 이러면 토큰이 넘어옴
      sessionStorage.setItem('access-token', response.data['access-token'])

      const token = response.data['access-token'].split('.') 
      let name = JSON.parse(atob(token[1]))['name'] // 인코딩해서 name을 가져옴

      loginUser.value = name

      router.push({name: 'boardList'})

      // 로그아웃을 할 때는 sessionStorage에서 token을 지우고 
      // store에서 로그인 유저를 지우면 됨

    })
    .catch((error)=>{
      router.push({name: 'home'}) // 로그인 실패 시 홈으로 페이지 이동
      console.log(error)
    })
  }

  return { loginUser, userLogin };
})
