<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="260px">
          <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          :collapse="isCollapse"
          text-color="#fff"
          :default-active="1"
          >
          <!-- <el-menu> -->
          <menu-item :menuList="userMenu"/>
          </el-menu>
          
        </el-aside>
        <el-container>
          <el-main class="main">Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import MenuItem from "./MenuItem.vue";
import { ref ,computed,onMounted } from "vue";
import { useUser } from "@/hooks/useUser.js";
const { user_menu_tree } = useUser();

const isCollapse = ref(false)

const userMenu = computed(()=>{
  return user_menu_tree.value[0].children
})

onMounted(() => {

})


</script>

<style scoped>
.common-layout{
  height: 100vh;
  width: 100%;
}
.main{
  height: calc(100vh - 120px);
}
</style>
