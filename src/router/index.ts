/*
 * @Author: xulibang
 * @Date: 2023-03-07 16:08:27
 * @LastEditors: xulibang
 * @LastEditTime: 2023-03-11 10:36:40
 * @FilePath: /corsair/src/router/index.ts
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/pages/layout/index.vue'),
    children: [
      {
        name: '首页',
        meta: {
          title: '首页',
          keepAlive: true,
          requireAuth: true,
        },
        path: '',
        component: () => import('@/pages/home/index.vue'),
      },
      {
        path: '/config',
        component: () => import('@/pages/config/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
