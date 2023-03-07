/*
 * @Author: xulibang
 * @Date: 2023-03-07 15:33:29
 * @LastEditors: xulibang
 * @LastEditTime: 2023-03-07 15:33:35
 * @FilePath: /corsair/src/store/user.ts
 * @Description:
 */
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三',
    };
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
  },
});
