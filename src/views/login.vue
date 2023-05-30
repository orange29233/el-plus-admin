<template>
  <div class="login">
    <el-container>
      <el-main class="left_side">
        <img src="@/assets/img/img9.jpg" alt="img" class="main_img" />
      </el-main>
      <el-aside width="500px" class="right_side">
        <el-form
          :model="loginModel"
          ref="formEl"
          :rules="rules"
          style="width: 300px"
        >
          <h3>登录</h3>
          <el-form-item prop="account">
            <el-input v-model="loginModel.account" placeholder="用户名" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model.trim="loginModel.password"
              type="password"
              placeholder="密码"
            />
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              v-model.trim="loginModel.code"
              placeholder="验证码"
              style="width: 300px"
            >
              <template #append>
                <el-image
                  :src="imgsrc"
                  @click="getCaptcha"
                  style="width: 80px"
                ></el-image>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit(formEl)">登录</el-button>
          </el-form-item>
        </el-form>
      </el-aside>
    </el-container>
    <!-- <el-row>
      <el-col :span="16" >
        
      </el-col>
      <el-col :span="8" >
        <div class="formbox">
          <el-form>
            <el-formitem> </el-formitem>
          </el-form>
        </div>
      </el-col>
    </el-row> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUser } from "@/hooks/useUser.js";

const { loginModel, getCaptcha, login, imgsrc } = useUser();

const formEl = ref();

//表单验证规则
const rules = ref({
  account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
});

//提交
const onSubmit = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid, fields) => {
    if (valid) {
      //提交表单
      login();
    } else {
      console.log(fields);
    }
  });
};

onMounted(() => {
  getCaptcha();
});
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: #005aa7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #fffde4,
    #005aa7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #fffde4,
    #005aa7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.main_img {
  height: 50%;
  border-radius: 10px;
}
.left_side {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right_side {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
