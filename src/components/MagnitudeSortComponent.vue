<template>
  <div>
    <h6>Magnitude Sort</h6>
    <div class="magsort">
      <span
        :class="[isFirstSpanActive ? 'active' : '']"
        @click="updateFirstSpanClass"
        v-on:click="$emit('magsort', 'asc')"
        >Asc</span
      >
      |
      <span
        :class="[isSecondSpanActive ? 'active' : '']"
        @click="updateSecondSpanClass"
        v-on:click="$emit('magsort', 'desc')"
        >Desc</span
      >
    </div>
  </div>
</template>

<script>
import SortMixin from "../mixins/SortMixin";
export default {
  data: function() {
    return {
      isFirstSpanActive: false,
      isSecondSpanActive: false
    };
  },
  mixins: [SortMixin]
};
</script>

<style lang="scss" scoped>
h6 {
  font-weight: bold;
  color: slategray;
}
.magsort {
  border: 1px solid gray;
}
.magsort span:hover {
  cursor: pointer;
}
.active {
  background: slategray;
  color: #fff;
  font-weight: bold;
}
</style>
