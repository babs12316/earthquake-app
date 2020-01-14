<template>
  <div>
    <h6>Alert Type</h6>
    <select v-model="alerttype" v-on:change="$emit('alerttype', alerttype)">
      <option :value="null" disabled>Select Alert Type</option>
      <option value="green">Green</option>
      <option value="orange">Orange</option>
      <option value="yellow">Yellow</option>
      <option value="all">All</option>
    </select>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      alerttype: null,
      info: null
    };
  }
};
</script>

<style lang="scss" scoped></style>
