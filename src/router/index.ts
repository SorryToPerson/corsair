/*
 * @Author: xulibang
 * @Date: 2023-03-07 16:08:27
 * @LastEditors: xulibang
 * @LastEditTime: 2023-03-08 17:11:50
 * @FilePath: /corsair/src/router/index.ts
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/login/login.vue'),
  },
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/home/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
