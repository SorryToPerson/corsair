/*
 * @Author: xulibang
 * @Date: 2023-03-07 14:54:55
 * @LastEditors: xulibang
 * @LastEditTime: 2023-03-13 00:34:02
 * @FilePath: /corsair/vite.config.ts
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from 'vite-plugin-style-import';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// icons自动导入
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'node_modules'),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        // custom
        {
          '@vueuse/core': [
            // named imports
            'useMouse', // import { useMouse } from '@vueuse/core',
            // alias
            ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
          ],
          axios: [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
        },
      ],
      resolvers: [
        ElementPlusResolver(
          // 自定义主题色需要加上这个
          { importStyle: 'sass' },
        ),
      ],
      // 配置文件生成位置
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      // 指定组件位置，默认是src/components
      dirs: ['src/components'],
      resolvers: [
        ElementPlusResolver(
          // 自定义主题色需要加上这个
          { importStyle: 'sass' },
        ),
      ],
      // 配置文件生成位置
      dts: 'src/components.d.ts',
    }),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        // 如果没有你需要的resolve，可以在lib内直接写，也可以给我们提供PR
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          ensureStyleFile: true, // 忽略文件是否存在, 导入不存在的CSS文件时防止错误。
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 自定义 element 主题样式
        additionalData: `@use "@/styles/theme.scss" as *;`,
      },
    },
  },
  server: {
    port: 8080, //启动端口
    hmr: {
      host: '127.0.0.1',
      port: 8080,
    },
    // 设置 https 代理
    proxy: {
      '/api': {
        target: 'your https address',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
});
