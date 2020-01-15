<template>
  <div>
    <h6>Select Magnitude Range</h6>
    <div v-on:click="$emit('magrange', magrange)">
      <VueSlideBar
        v-model="magrange"
        :min="1"
        :max="10"
        :processStyle="slider.processStyle"
        :lineHeight="slider.lineHeight"
        :tooltipStyles="{
          backgroundColor: 'slategray',
          borderColor: 'slategray'
        }"
      >
      </VueSlideBar>
    </div>
  </div>
</template>

<script>
import VueSlideBar from "vue-slide-bar";

export default {
  data() {
    return {
      magrange: 10,
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
