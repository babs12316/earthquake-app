<template>
  <div>
    {{ getTime }}
  </div>
</template>

<script>
export default {
  name: "Time",
  props: {
    time: Number
  },
  computed: {
    getTime: function() {
      return new Date(this.time);
    }
  }
};
</script>

<style lang="scss" scoped></style>
