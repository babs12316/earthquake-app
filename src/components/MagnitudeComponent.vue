<template>
  <div>
    <h6>Magnitude</h6>
    {{ mag }}
  </div>
</template>

<script>
export default {
  name: "PlaceMagnitude",
  props: {
    mag: Number
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
