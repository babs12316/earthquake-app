<template>
  <div>
    <h6>Magnitude Sort</h6>
    <div class="magsort">
      <span v-on:click="$emit('magsort', 'asc')">Asc</span> |
      <span v-on:click="$emit('magsort', 'desc')">desc</span>
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
.magsort {
  border: 1px solid gray;
}
.magsort span:hover {
  cursor: pointer;
}
</style>
