<template>
  <div id="userChart" style="height:500px;">地区统计</div>
</template>
<script>
import { getUserAreaUrl } from "../../api/api";
import echarts from "echarts";
export default {
  data() {
    return {
      item: [],
      charLine: null,
    };
  },
  computed:{
      legend(){ return this.item.map((cur)=>cur.name)}
  },
  methods: {
    getAreaCharts() {
      getUserAreaUrl().then((res) => {
        console.log(res.data);
        this.item = res.data;
        this.drawLineData();
      });
    },
    drawLineData() {
      this.charLine = echarts.init(document.getElementById("userChart"));
      this.charLine.setOption({
        title: {
          text: "用户地区比例统计",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: this.legend,
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.item,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
  },
  mounted() {
    this.getAreaCharts();
  },
};
</script>