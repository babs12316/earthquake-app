<template>
  <div>
    <GmapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
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
      center: { lat: 18.186066, lng: 76.041939 },
      markers: [
        {
          position: {
            lat: 18.186066,
            lng: 76.041939
          }
        }
      ],
      places: [],
      currentPlace: null
    };
  }
};
</script>

<style lang="scss" scoped></style>
