<template>
  <div class="container-fluid">
    <div class="filters">
      <div class="col-sm-2">
        <AlertFilterComponent
          v-on:alerttype="updateAlertType($event)"
        ></AlertFilterComponent>
      </div>
    </div>
    <hr />
    <div
      v-for="earthquake in details"
      :key="earthquake.index"
      class="card col-xs-12 col-sm-12 col-md-6 col-lg-6"
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
      <MagnitudeComponent :mag="earthquake.properties.mag"></MagnitudeComponent>
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
import AlertFilterComponent from "@/components/AlertFilterComponent.vue";

const axios = require("axios");
export default {
  name: "home",
  data: function() {
    return {
      info: null,
      details: null,
      alertfilter: new RegExp(".")
    };
  },
  mounted() {
    axios
      .get(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"
      )
      .then(
        response =>
          (this.info = response.data.features) && //Store json data in 2 variables
          (this.details = response.data.features)
      );
  },
  methods: {
    updateAlertType: function(alertvalue) {
      this.details = this.info; //get original Json
      this.details = this.details.filter(
        detail => detail.properties.alert == alertvalue
      );
    }
  },
  components: {
    PlaceComponent,
    TimeComponent,
    MagnitudeComponent,
    AlertComponent,
    TsunamiComponent,
    OccuranceUrlComponent,
    MapComponent,
    AlertFilterComponent
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
