<template>
  <div>
    <h6>Alert type</h6>
    <span> {{ alert }} </span>
  </div>
</template>

<script>
export default {
  name: "AlertType",
  props: {
    alert: String
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
span {
  text-transform: capitalize;
}
</style>
