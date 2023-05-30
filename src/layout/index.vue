<template>
  <div class="common-layout">
    <el-container>
      <el-header style="border-bottom: 1px solid var(--el-border-color);">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside :width="asideWidth" class="aside">
          <el-menu
          :default-active="userMenu[1].id"
          :collapse="isCollapse"
          :collapse-transition="false"
          :unique-opened="true"
          active-text-color="var(--el-color-primary)"
          route
          >
          <!-- <el-menu> -->
          <menu-item :menuList="userMenu" :isCollapse="isCollapse"/>
          </el-menu>
          
        </el-aside>
        <el-container>
          <el-main class="main">Main</el-main>
          <el-footer class="flex_center" >Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import MenuItem from "./MenuItem.vue";
import Header from "./Header.vue";
import { ref ,computed,onMounted } from "vue";
import { useUser } from "@/hooks/useUser.js";
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const { user_menu_tree } = useUser();


const asideWidth = computed(()=>{
  return width.value <= 1400?'64px':'240px'
})
const isCollapse = computed(()=>{
  return width.value <= 1400?true:false
})

const userMenu = computed(()=>{
  return user_menu_tree.value[0].children
})

onMounted(() => {

})


</script>

<style scoped lang="scss">
.common-layout{
  height: 100vh;
  width: 100%;
}
.aside{
  height: calc(100vh - 60px);
  padding-bottom: 40px;
  box-sizing: border-box;
  overflow-y: scroll;
  
}
.aside::-webkit-scrollbar {display:none}
.main{
  height: calc(100vh - 120px);
}
</style>
