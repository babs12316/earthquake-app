<template>
  <div>
    <h6>Date Sort</h6>
    <div class="datesort">
      <span v-on:click="$emit('datesort', 'asc')">Asc</span> |
      <span v-on:click="$emit('datesort', 'desc')">desc</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h6 {
  font-weight: bold;
  color: slategray;
}
.datesort {
  border: 1px solid gray;
}
.datesort span:hover {
  cursor: pointer;
}
.datesort span:focus {
  background: 1px solid gray;
}
</style>
