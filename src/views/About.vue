
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div
      v-for="(section, index) in Object.keys(info)"
      :key="index"
      class="group"
    >
      <div
        class="card"
        v-for="earthquake in info[section]['features']"
        :key="earthquake.mag"
      >
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
          :tsnami="earthquake.properties.tsunami"
        ></TsunamiComponent>
        <!-- earthquake occurrence page -->
        {{ earthquake.properties.url }}
        <!--location of the epicenter lang & lat -->
        {{ earthquake.geometry.coordinates[0] }},{{
          earthquake.geometry.coordinates[1]
        }}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import PlaceComponent from "@/components/PlaceComponent.vue";
import TimeComponent from "@/components/TimeComponent.vue";
import MagnitudeComponent from "@/components/MagnitudeComponent.vue";
import AlertComponent from "@/components/AlertComponent.vue";
import TsunamiComponent from "@/components/TsunamiComponent.vue";

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
    HelloWorld,
    PlaceComponent,
    TimeComponent,
    MagnitudeComponent,
    AlertComponent,
    TsunamiComponent
  }
};
</script>
