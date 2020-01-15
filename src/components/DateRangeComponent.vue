<template>
  <div>
    <h6>Select days</h6>
    <div v-on:click="$emit('daterange', daterange)">
      <VueSlideBar
        v-model="daterange"
        :min="0"
        :max="30"
        :processStyle="slider.processStyle"
        :lineHeight="slider.lineHeight"
        :tooltipStyles="{
          backgroundColor: 'slategray',
          borderColor: 'slategray'
        }"
      >
      </VueSlideBar>
      Earthquake occured on or before{{
        new Date(Date.now() - 24 * 60 * 60 * 1000 * daterange)
      }}
    </div>
  </div>
</template>

<script>
import VueSlideBar from "vue-slide-bar";

export default {
  data() {
    return {
      daterange: 0,
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
div#wrap {
  padding-top: 20px;
}
</style>
