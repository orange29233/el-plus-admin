<template>
<template v-for="menu in menuList" :key="menu.id">
    <el-sub-menu v-if="menu.children && menu.children.length" :key="menu.id" :index="menu.id">
      <template #title>
        <!-- <i :class="menu.source" class="nav-icon" :style="{ 'font-size': isCollapse ? '18px' : '18px' }"></i> -->
        <!-- <component :is="menu.source" class="nav-icon" :style="{ 'font-size': isCollapse ? '18px' : '18px' }"></component> -->
        <span>{{ menu.name }}</span>
        </template>
      <menu-item :menuList="menu.children"/>
    </el-sub-menu>
    <el-menu-item v-else :index="menu.id">
      <!-- <i :class="menu.source" class="nav-icon" :style="{ 'font-size': isCollapse ? '18px' : '18px' }"></i> -->
        <span>{{ menu.name }}</span>
    </el-menu-item>
  </template>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  isCollapse:Boolean,
  menuList: {
    type: Array,
    default:[]
  }
})


</script>

<style scoped lang="scss"></style>
