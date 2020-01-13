<template>
  <div class="container-fluid">
    <hr />
    <div v-for="section in info" :key="section.index">
      <div
        class="card col-sm-6"
        v-for="earthquake in section.features"
        :key="earthquake.mag"
      >
        <!--location of the epicenter lang & lat -->
        <MapComponent
          :ylng="earthquake.geometry.coordinates[0]"
          :xlat="earthquake.geometry.coordinates[1]"
        ></MapComponent>
        <br />
        <!-- Place -->
        <PlaceComponent :place="earthquake.properties.place"></PlaceComponent>
        <!-- Time -->
        <TimeComponent :time="earthquake.properties.time"></TimeComponent>
        <!-- Magnititude -->
        <MagnitudeComponent
          :mag="earthquake.properties.mag"
        ></MagnitudeComponent>
        <!-- Alert -->
        <AlertComponent :alert="earthquake.properties.alert"></AlertComponent>
        <!-- tsunami -->
        <TsunamiComponent
          :tsunami="earthquake.properties.tsunami"
        ></TsunamiComponent>
        <!-- earthquake occurrence page -->
        <OccuranceUrlComponent
          :url="earthquake.properties.url"
        ></OccuranceUrlComponent>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import PlaceComponent from "@/components/PlaceComponent.vue";
import TimeComponent from "@/components/TimeComponent.vue";
import MagnitudeComponent from "@/components/MagnitudeComponent.vue";
import AlertComponent from "@/components/AlertComponent.vue";
import TsunamiComponent from "@/components/TsunamiComponent.vue";
import OccuranceUrlComponent from "@/components/OccuranceUrlComponent.vue";
import MapComponent from "@/components/MapComponent.vue";

const axios = require("axios");
export default {
  name: "home",
  data: function() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"
      )
      .then(response => (this.info = response));
  },
  components: {
    PlaceComponent,
    TimeComponent,
    MagnitudeComponent,
    AlertComponent,
    TsunamiComponent,
    OccuranceUrlComponent,
    MapComponent
  }
};
</script>
<style lang="scss" scoped>
.card {
  padding: 10px;
  margin-bottom: 20px;
  float: left;
  border: none;
}
</style>
