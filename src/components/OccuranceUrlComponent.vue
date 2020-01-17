<template>
  <div>
    <h6>Earthquake Occurance page</h6>
    <a :href="url">{{ url }}</a>
  </div>
</template>

<script>
export default {
  name: "OccuranceURL",
  props: {
    url: String
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
a {
  color: #2c3e50;
}
</style>
