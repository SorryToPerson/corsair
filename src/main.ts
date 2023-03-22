/*
 * @Author: xulibang
 * @Date: 2023-03-07 14:54:55
 * @LastEditors: xulibang
 * @LastEditTime: 2023-03-22 19:16:41
 * @FilePath: /corsair/src/main.ts
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import '@/styles';

// 创建vue实例
const app = createApp(App);

// 挂载icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 挂载pinia
app.use(store);

// 挂载router
app.use(router);

// 挂载pinia

// 挂载实例
app.mount('#app');
