<template>
<template v-for="menu in menuList" :key="menu.id">
    <el-sub-menu v-if="menu.children && menu.children.length" :key="menu.id" :index="menu.id">
      <template #title>{{ menu.name }}</template>
      <menu-item :menuList="menu.children"/>
    </el-sub-menu>
    <el-menu-item v-else :index="menu.id">
      <span>{{ menu.name }}</span>
    </el-menu-item>
  </template>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  menuList: {
    type: Array,
    default:[]
  }
})

</script>

<style scoped lang="less"></style>
