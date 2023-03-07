/*
 * @Author: xulibang
 * @Date: 2023-03-07 14:54:55
 * @LastEditors: xulibang
 * @LastEditTime: 2023-03-07 16:10:17
 * @FilePath: /corsair/src/main.ts
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from '@/router';
import './style.css';

// 创建vue实例
const app = createApp(App);

// 挂载pinia
app.use(store);

// 挂载router
app.use(router);

// 挂载实例
app.mount('#app');
