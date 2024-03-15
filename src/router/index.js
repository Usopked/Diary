// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'
import AboutPage from '../components/AboutPage.vue'
import ThirdPage from '../components/ThirdPage.vue'

const routes = [
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: Home
  },
  {
    path: '/aboutpage',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/thirdpage',
    name: 'ThirdPage',
    component: ThirdPage,
  },
  // 추가 페이지 라우트는 여기에 정의
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
