import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import UserView from '@/views/UserView.vue'
import LoginView from '@/views/LoginView.vue'
import BoardView from '@/views/BoardView.vue'
import BoardList from '@/components/board/BoardList.vue'
import BoardCreate from '@/components/board/BoardCreate.vue'

const isAuth = true; // 로그인 상태

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/user/:id', // 동적 라우팅
      name: 'user',
      component: UserView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: (to, from) => {
        if(isAuth) {
          alert('이미 로그인 했잖아!!!');
          return {name: 'home'};
        }
      },
    },
    {
      path: '/board',
      name: 'board',
      component: BoardView,
      children: [
        {
          path: '',
          name: 'boardList',
          component: BoardList,
        },
        {
          path: 'create', // / 자동으로 들어가므로 / 넣지 말 것!!!
          name: 'boardCreate',
          component: BoardCreate,
        },
      ]
    }
  ],
})

router.beforeEach((to, from) => {
  // console.log(to);
  // console.log(from);

  if(!isAuth && to.name !== 'login') { // 로그인 상태가 아니면서 login 페이지가 아닌 다른 페이지로 이동하려고 하면
    alert('로그인이 필요합니다.');
    return {name: 'login'}; // return에 이렇게 쓰면 router.push처럼 동작
  }

})

export default router
