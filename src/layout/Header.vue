<template>
  <div class="header"> 
    <div class="logo flex_center">
      <img src="@/assets/img/img9.jpg" style="height:30px" alt="">
      
      <div class="logo_text">vue3项目模板</div>
    </div>
    <div class="right flex_center">
      <el-color-picker v-model="defaultColor" show-alpha @change="handleColorChange"/>
      <el-switch
        v-model="isDark"
        inline-prompt
        style="--el-switch-on-color: #2c2c2c; --el-switch-off-color: #2c2c2c;--el-switch-border-color:#dcdfe6"
        active-text="dark"
        inactive-text="light"
      />
      <div class="flex_center ">
        <icon-ep-avatar style="margin-right: 5px;"/> 管理员
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDark } from '@vueuse/core'
const defaultColor = ref('#409EFF')
const isDark = useDark()

const handleColorChange = (value)=>{
  document.documentElement.style.setProperty('--el-color-primary', value)
}


</script>

<style scoped lang='scss'>
.header{
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.logo{
 height: 100%;
  
}
.logo_text{
  margin-left: 20px;
  font-size: 20px;
  font-weight: 600;
}
.right{
  width: 200px;
  font-size: 14px;
  *{
    margin-left:10px
  }
}
</style>