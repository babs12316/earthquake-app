<template>
  <div>
    <h6>Time</h6>
    {{ getTime }}
  </div>
</template>

<script>
export default {
  name: "Time",
  props: {
    time: Number
  },
  computed: {
    getTime: function() {
      return new Date(this.time);
    }
  }
};
</script>

<style lang="scss" scoped>
h6 {
  font-weight: bold;
  color: slategray;
  margin-top: 5px;
  margin-bottom: 0px;
}
</style>
