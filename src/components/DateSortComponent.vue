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
.datesort {
  border: 1px solid gray;
  margin: 55px;
}
.datesort span:hover {
  cursor: pointer;
}
</style>
