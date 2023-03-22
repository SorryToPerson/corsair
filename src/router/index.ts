/*
 * @Author: xulibang
 * @Date: 2023-03-07 16:08:27
 * @LastEditors: xulibang
 * @LastEditTime: 2023-03-22 23:06:33
 * @FilePath: /corsair/src/router/index.ts
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/pages/layout/index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/pages/home/index.vue'),
      },
      {
        path: '/user',
        component: () => import('@/pages/user/index.vue'),
      },
      {
        path: '/technology',
        component: () => import('@/pages/technology/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
