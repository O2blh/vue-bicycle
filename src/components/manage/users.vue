<template>
  <div id="user-manage">
    <h3>用户管理</h3>
    <el-table :data="users" stripe style="width: 100%">
      <el-table-column prop="userid" label="用户id" width="180"></el-table-column>
      <el-table-column prop="username" label="用户名" width="180"></el-table-column>
      <el-table-column prop="sex" label="用户性别"></el-table-column>
      <el-table-column prop="address" label="所在地"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="mail" label="邮箱"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="changePage"
      :page-size="pagenation.PageSize"
      :page-count="pagenation.PageCount"
    ></el-pagination>
  </div>
</template>

<script>
import { getUsersUrl } from "../../api/api";
import axios from "axios";
export default {
  data() {
    return {
      users: [
      ],
      pagenation: {
        CurrentPage: 1,
        PageSize: 5,
        PageCount: 0,
      },
    };
  },
  methods: {
    getitems() {
      let obj = {
        CurrentPage: this.pagenation.CurrentPage,
        PageSize: this.pagenation.PageSize,
      };
      getUsersUrl(obj).then((res) => {
        console.log(res.data);
        this.users = res.data.users;
        this.pagenation.PageCount = res.data.PageCount;
      });
    },
    changePage(value) {
      this.pagenation.CurrentPage = value;
      this.getitems();
    },
  },
  mounted() {
    this.getitems();
  }
};
</script>