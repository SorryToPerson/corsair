<!--
 * @Author: xulibang
 * @Date: 2023-03-07 14:54:55
 * @LastEditors: xulibang
 * @LastEditTime: 2023-03-08 13:04:42
 * @FilePath: /corsair/src/App.vue
 * @Description: 
-->
<script setup lang="ts">
import { RouterView } from 'vue-router';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
const locale = zhCn;
</script>

<template>
  <div id="app">
    <el-config-provider :locale="locale">
      <RouterView />
    </el-config-provider>
  </div>
</template>

<style scoped></style>
