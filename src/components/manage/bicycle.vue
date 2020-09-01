<template>
  <div>
    <h3>单车管理</h3>
    <el-table :data="bikes" stripe style="width: 100%">
      <el-table-column prop="Id" label="编号" width="180"></el-table-column>
      <el-table-column prop="Lng" label="经度" width="180"></el-table-column>
      <el-table-column prop="Lat" label="纬度"></el-table-column>
      <el-table-column prop="address" label="二维码">
        <template slot-scope="scope">
          <img width="100" height="100" :src="scope.row.QRCode" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text">查看</el-button>
        </template>
      </el-table-column>
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
import { getBikesUrl } from "../../api/api";
import axios from "axios";
export default {
  name: "bicycle",
  data() {
    return {
      bikes: [],
      pagenation: {
        CurrentPage: 1,
        PageSize: 5,
        PageCount: 0,
      },
    };
  },
  methods: {
    handleClick(row) {
        this.$router.push({path:`/home/manage/bikeDetail/${row.Id}`});
    },
    getitems() {
      let obj = {
        CurrentPage: this.pagenation.CurrentPage,
        PageSize: this.pagenation.PageSize,
      };
      getBikesUrl(obj).then((res) => {
        console.log(res.data);
        this.bikes = res.data.bikes;
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
  },
};
</script>