import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // index.js를 생략해도 알아서 넣어줌(관례)

const app = createApp(App)

app.use(router) // vue instance에 추가

app.mount('#app')
