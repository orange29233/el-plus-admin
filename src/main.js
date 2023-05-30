import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'  
import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'   //element-plus 官方样式声明文件
import '@/style.css'  //自定义全局样式 
import router from '@/router/index.js'  //路由
import { setupSvgIcon } from "@/components/SvgIcon/index.js";  //注册 SvgIcon 组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //引入element-plus官方图标

const app = createApp(App)

//注册element-plus官方图标库
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

//注册 SvgIcon 组件
setupSvgIcon(app)


app.use(ElementPlus)
app.use(router)

app.mount('#app')