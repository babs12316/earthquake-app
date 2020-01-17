<template>
  <div>
    <h6>Place</h6>
    <h2>{{ place }}</h2>
  </div>
</template>

<script>
export default {
  name: "Place",
  props: {
    place: String
  }
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.5em;
}
h6 {
  font-weight: bold;
  color: slategray;
  margin-top: 5px;
  margin-bottom: 0px;
}
</style>
