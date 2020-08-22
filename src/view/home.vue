<template>
<div>
  <el-container>
    <el-header>
      <el-menu
        :default-active="curActive"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="introduction">
          <router-link to="/home/introduction">主页</router-link>
        </el-menu-item>
        <el-menu-item index="manage">
          <router-link to="/home/manage">管理</router-link>
        </el-menu-item>
        <el-menu-item index="statistics">
          <router-link to="/home/statistics">统计</router-link>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
  </div>
</template>
<script>
export default {
  data(){
    return{
      curActive:this.$route.meta.parentName||this.$route.name
    }
  },
  mounted(){
    console.log(this.$route.name);
  }
}
</script>