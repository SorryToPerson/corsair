<!--
 * @Author: xulibang
 * @Date: 2023-03-13 00:21:53
 * @LastEditors: xulibang
 * @LastEditTime: 2023-03-22 18:24:29
 * @FilePath: /corsair/src/components/corIcon/index.vue
 * @Description: 
-->
<script setup lang="ts" name="corIcon">
import { PropType } from 'vue';

defineProps({
  icon: {
    type: String as PropType<string>,
    default: '',
  },
});
</script>
<template>
  <i class="iconfont" :class="icon"></i>
</template>
<style lang="scss" scoped>
.iconfont {
  margin: 0 8px;
}
</style>
