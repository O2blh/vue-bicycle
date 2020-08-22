<template>
<el-card class="box-card" style="width:450px;margin: 120px auto;">
  <div slot="header" class="clearfix" >
    <h1>用户登录</h1>
  </div>
  <el-form :model="loginForm" ref="loginForm" label-width="50px" class="demo-loginForm">
  <el-form-item label="账号" prop="username" :rules="[{required:true,message:'请输入账号',trigger:'blur'}]">
    <el-input v-model="loginForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password" :rules="[{required:true,message:'请输入密码',trigger:'blur'}]">
    <el-input type="password" v-model="loginForm.password" ></el-input>
  </el-form-item>
  <el-form-item>
    <el-button style="margin-left:-40px;" type="primary" @click="submitForm('loginForm')">登陆</el-button>
  </el-form-item>
</el-form>
</el-card>
</template>
<style>
  h1{
    font-size:26px;
    color: black;
    text-align: left;
    font-weight: normal;
  }
</style>
<script type="es6">
import {loginUserUrl} from "../api/api";
import axios from "axios";
import {Notification} from "element-ui";
  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const data={
                username:this.loginForm.username,
                password:this.loginForm.password
            };
            loginUserUrl(data).then(
                function(res){
                    if(res.data.result=="success"){
                    this.$router.push({path:"/home"});
                    }
                    else{
                     Notification({
                        title:"提示",
                        type:"error",
                        message:"用户名或密码错误"
                    });
                }
            }.bind(this)
            );
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>