<template>
  <div>
    <h6>Tsunami status</h6>
    {{ getTsunamiStatus }}
  </div>
</template>

<script>
export default {
  name: "Tsunami",
  props: {
    tsunami: Number
  },
  computed: {
    getTsunamiStatus() {
      return this.tsunami == 0 ? "Tsunami not occured" : "Tsunami occured";
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
