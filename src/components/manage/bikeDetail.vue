<template>
  <baidu-map class="map" :center="{lng: item.Lng, lat: item.Lat}" :zoom="15" style="height:700px;width:100%;">
    <bm-marker
      :position="{lng: item.Lng, lat:  item.Lat}"
      :dragging="true"
      animation="BMAP_ANIMATION_BOUNCE"
    >
      <bm-label
        content="我在这"
        :labelStyle="{color: 'red', fontSize : '24px'}"
        :offset="{width: -35, height: 30}"
      />
    </bm-marker>
  </baidu-map>
</template>
<script>
import { getBikeDetailUrl } from "../../api/api";
import axios from "axios";
export default {
  data() {
    return {
      item: {
        Lng: 0,
        Lat: 0,
      },
    };
  },
  mounted() {
    console.log('detail'+this.$route.params);
    let bike = {
      id: this.$route.params.Id,
    };
    getBikeDetailUrl(bike).then((res) => {
      console.log(res.data);
      this.item = res.data;
    });
  },
};
</script>