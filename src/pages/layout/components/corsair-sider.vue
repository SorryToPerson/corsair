<!--
 * @Author: xulibang
 * @Date: 2023-03-11 09:55:01
 * @LastEditors: xulibang
 * @LastEditTime: 2023-03-23 01:24:26
 * @FilePath: /corsair/src/pages/layout/components/corsair-sider.vue
 * @Description: 
-->
<script setup lang="ts" name="sider">
import { menus } from '@/store/constants';
const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleChangeCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
</script>
<template>
  <div class="logo">
    <img src="~@/assets/svgs/corsair.svg" alt="" />
  </div>
  <el-menu
    class="el-menu-vertical"
    :collapse="isCollapse"
    :router="true"
    background-color="#565c62"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item v-for="item in menus" :key="item.key" :index="item.path">
      <el-icon><location /></el-icon>
      <template #title>{{ item.title }}</template>
    </el-menu-item>
  </el-menu>
  <div class="collapse-icon">
    <el-icon v-if="isCollapse" :size="20" @click="handleChangeCollapse">
      <Expand />
    </el-icon>
    <el-icon v-else :size="20" @click="handleChangeCollapse">
      <Fold />
    </el-icon>
  </div>
</template>
<style lang="scss" scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu {
  padding-bottom: 60px;
  border-right: none;
  height: 100%;
}
.logo {
  text-align: center;
  height: 60px;
}
.collapse-icon {
  padding: 20px;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  :hover {
    color: $corsairColor;
  }
}
</style>
