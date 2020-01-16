<template>
  <div>
    <h6>Select Magnitude Range</h6>
    <div  v-on:click="$emit('magrange', magrange)">
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
      magrange: 1,
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
div#wrap {
  padding-top: 0px;
  .vue-slide-bar {
    height: 20px !important;
  }
}
</style>
