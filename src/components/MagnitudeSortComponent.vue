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
.magsort {
  border: 1px solid gray;
  margin: 55px;
}
.magsort span:hover {
  cursor: pointer;
}
</style>
