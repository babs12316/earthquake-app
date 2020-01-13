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

<style lang="scss" scoped></style>
