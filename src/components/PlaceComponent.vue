<template>
  <div>
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
</style>
