<template>
  <div>{{ getTsunamiStatus }}</div>
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

<style lang="scss" scoped></style>
