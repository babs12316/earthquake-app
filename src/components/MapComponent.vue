<template>
  <div class="map">
    <GmapMap
      :center="center"
      :zoom="12"
      map-type-id="terrain"
      style="width: 400px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "Map",
  props: {
    xlat: Number,
    ylng: Number
  },
  data() {
    return {
      center: { lat: this.xlat, lng: this.ylng },
      markers: [
        {
          position: {
            lat: this.xlat,
            lng: this.ylng
          }
        }
      ],
      places: [],
      currentPlace: null
    };
  }
};
</script>

<style lang="scss" scoped>
#terrain {
  width: 400px;
  height: 300px;
}
.map {
  margin: auto;
  display: inline-block;
}
.vue-map-container {
  display: table-cell;
}
</style>
