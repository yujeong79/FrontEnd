import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardView from '../views/BoardView.vue'
import BoardList from '@/components/common/board/BoardList.vue'
import BoardCreate from '@/components/common/board/BoardCreate.vue'
import BoardDetail from '@/components/common/board/BoardDetail.vue'
import BoardUpdate from '@/components/common/board/BoardUpdate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/board',
      name: 'board',
      component: BoardView,
      children: [
        {
          path: "",
          name: "boardList",
          component: BoardList,
        },
        {
          path: "create",
          name: "boardCreate",
          component: BoardCreate,
        },
        {
          path: ":id",
          name: "boardDetail",
          component: BoardDetail,
        },
        {
          path: "update/:id",
          name: "boardUpdate",
          component: BoardUpdate,
        },
      ]
    },
  ],
})

export default router
