<template>
  <div>
    <h6>Select days</h6>
    <div v-on:click="$emit('daterange', daterange)">
      <VueSlideBar
        v-model="daterange"
        :min="min"
        :max="max"
        :processStyle="slider.processStyle"
        :lineHeight="slider.lineHeight"
        :tooltipStyles="{
          backgroundColor: 'slategray',
          borderColor: 'slategray'
        }"
      >
      </VueSlideBar>
      <p>
        Earthquake occured on or before
        {{ new Date(Date.now() - 24 * 60 * 60 * 1000 * daterange) }}
      </p>
    </div>
  </div>
</template>

<script>
import VueSlideBar from "vue-slide-bar";

export default {
  data() {
    return {
      daterange: 0,
      min: 0,
      max: 30,
      slider: {
        lineHeight: 10,
        processStyle: {
          backgroundColor: "slategray"
        }
      }
    };
  },
  components: {
    VueSlideBar
  }
};
</script>
<style lang="scss" scoped>
h6 {
  margin-bottom: -10px;
  font-weight: bold;
  color: slategray;
}
p {
  font-size: 12px;
  color: slategray;
}
div#wrap {
  padding-top: 20px;
}
</style>
