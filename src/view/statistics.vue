<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="curActive">
        <el-menu-item index="sexStatistics">
          <router-link to="/home/statistics/sexStatistics">用户性别统计</router-link>
        </el-menu-item>
        <el-menu-item index="areaStatistics">
          <router-link to="/home/statistics/areaStatistics">用户地区统计</router-link>
        </el-menu-item>
        <el-menu-item index="ageStatistics">
          <router-link to="/home/statistics/ageStatistics">用户年龄统计</router-link>
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
  name: "statistics",
  data() {
    return {
      curActive: this.$route.name,
    };
  },
  mounted() {
    console.log(this.$route.meta.parentName);
    console.log(this.$route.name);
  },
};
</script>