<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-3">
        <div class="row filters">
          <div class="col-sm-12">
            <AlertFilterComponent
              v-on:alerttype="updateAlertType($event)"
            ></AlertFilterComponent>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <br />
            <MagnitudeRangeComponent
              v-on:magrange="updateMagrange($event)"
            ></MagnitudeRangeComponent>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <br />
            <DateRangeComponent
              v-on:daterange="updateDaterange($event)"
            ></DateRangeComponent>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <br />
            <MagnitudeSortComponent
              v-on:magsort="sortMag($event)"
            ></MagnitudeSortComponent>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <br />
            <DateSortComponent
              v-on:datesort="dateMag($event)"
            ></DateSortComponent>
          </div>
        </div>
      </div>
      <hr />
      <div class="col-xs-12 col-sm-12 col-md-9">
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
import MagnitudeRangeComponent from "@/components/MagnitudeRangeComponent.vue";
import DateRangeComponent from "@/components/DateRangeComponent.vue";
import MagnitudeSortComponent from "@/components/MagnitudeSortComponent.vue";
import DateSortComponent from "@/components/DateSortComponent.vue";

const axios = require("axios");
export default {
  name: "home",
  data: function() {
    return {
      info: null,
      details: null,
      info1: [],
      test: null,
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
      if (alertvalue != "all") {
        //Do not filter json if 'All' option selected
        this.details = this.details.filter(
          detail => detail.properties.alert == alertvalue
        );
      }
    },
    updateMagrange: function(magrange) {
      this.details = this.info;
      this.details = this.details.filter(
        detail => detail.properties.mag < magrange
      );
    },
    updateDaterange: function(daterange) {
      this.details = this.info;
      this.details = this.details.filter(
        detail =>
          detail.properties.time <= Date.now() - 24 * 60 * 60 * 1000 * daterange
      );
    },
    sortMag: function(sorttype) {
      this.details = this.info;
      this.details.sort(function(a, b) {
        if (sorttype == "asc") {
          return a.properties.mag - b.properties.mag;
        } else if (sorttype == "desc") {
          return b.properties.mag - a.properties.mag;
        }
      });
    },
    dateMag: function(sorttype) {
      this.details = this.info;
      this.details.sort(function(a, b) {
        if (sorttype == "asc") {
          return a.properties.time - b.properties.time;
        } else if (sorttype == "desc") {
          return b.properties.time - a.properties.time;
        }
      });
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
    AlertFilterComponent,
    MagnitudeRangeComponent,
    DateRangeComponent,
    MagnitudeSortComponent,
    DateSortComponent
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
.filters {
  padding: 10%;
  border-right: 1px solid #ccc;
}
</style>
