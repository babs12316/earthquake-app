<template>
  <div>
    <h6>Date Sort</h6>
    <div class="datesort">
      <span
        :class="[isFirstSpanActive ? 'active' : '']"
        @click="updateFirstSpanClass"
        v-on:click="$emit('datesort', 'asc')"
        >Asc</span
      >
      |
      <span
        :class="[isSecondSpanActive ? 'active' : '']"
        @click="updateSecondSpanClass"
        v-on:click="$emit('datesort', 'desc')"
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
.datesort {
  border: 1px solid gray;
}
.datesort span:hover {
  cursor: pointer;
}
.active {
  background: slategray;
  color: #fff;
  font-weight: bold;
}
</style>
