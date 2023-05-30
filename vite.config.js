import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Icons from "unplugin-icons/vite";
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  },
  plugins: [
    vue(),
    Icons({
      autoInstall: true,
      compiler: "vue3",
    }),
    Components(
      {
        resolvers: [
          IconsResolver({
            prefix: 'icon', // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
            // {prefix}-{collection}-{icon} 使用组件解析器时，您必须遵循名称转换才能正确推断图标。
            // alias: { park: 'icon-park' } 集合的别名
            enabledCollections: ['ep'] // 这是可选的，默认启用 Iconify 支持的所有集合['mdi']
          }),
        ]
      }
    ),
  ],
  server:{
    port:8080,
    proxy:{
      '/api':{
        target: 'http://chejian.frutech.com.cn',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
