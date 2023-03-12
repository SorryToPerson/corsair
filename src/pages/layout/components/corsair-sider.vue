<!--
 * @Author: xulibang
 * @Date: 2023-03-11 09:55:01
 * @LastEditors: xulibang
 * @LastEditTime: 2023-03-13 00:53:50
 * @FilePath: /corsair/src/pages/layout/components/corsair-sider.vue
 * @Description: 
-->
<script setup lang="ts" name="sider">
import { menus } from '@/store/constants';
const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<template>
  <el-menu
    class="el-menu-vertical"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu v-for="item in menus" :key="item.key" :index="item.key">
      <template #title>
        <CorIcon :icon="item.icon" />
        <h3>{{ item.title }}</h3>
      </template>
    </el-sub-menu>
  </el-menu>
</template>
<style lang="scss" scoped>
.el-menu {
  width: 100%;
  height: 100%;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-icon-menu {
  width: 20px;
  height: 20px;
}
</style>
