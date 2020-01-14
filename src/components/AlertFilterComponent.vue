<template>
  <div>
    {{ alerttype }}
 <!--   <button v-on:click="$emit('enlarge-text', 0.1)">
      Enlarge text
    </button>-->
    <select v-model="alerttype" v-on:change="$emit('alerttype', alerttype)">
      <option disabled value="">Please select one</option>
      <option value="yellow">Yellow</option>
      <option value="green">Green</option>
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
