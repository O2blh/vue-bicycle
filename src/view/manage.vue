<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="curActive">
        <el-menu-item index="users">
          <router-link to="/home/manage/users">用户管理</router-link>
        </el-menu-item>
        <el-menu-item index="bicycle">
          <router-link to="/home/manage/bicycle">单车管理</router-link>
        </el-menu-item>
        <el-menu-item index="trip">
          <router-link to="/home/manage/trip">行程管理</router-link>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<style>
</style>
<script>
export default {
  name: "manage",
  data() {
    return {
      curActive: this.$route.name,
    };
  },
};
</script>