<script setup lang="ts" name="layout">
import { reactive, toRefs, onMounted } from 'vue';
import corsairSider from './components/corsair-sider.vue';
import corsairHeader from './components/corsair-header.vue';
import corsairFooter from './components/corsair-footer.vue';
// onMounted(() => {
// })
</script>
<template>
  <el-container>
    <el-header>
      <corsairHeader />
    </el-header>
    <el-container>
      <el-aside>
        <corsairSider />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>
      <corsairFooter />
    </el-footer>
  </el-container>
</template>
<style lang="scss" scoped>
.el-header {
  background-color: #f3f3f3;
}
.el-main {
  background-color: #fcfcfc;
}
.el-aside {
  width: 220px;
  background-color: #8df;
}
.el-footer {
  background-color: orange;
}
</style>
