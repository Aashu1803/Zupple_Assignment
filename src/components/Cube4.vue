<template>
  <div class="cube4">
    <div class="rectangle"></div>
    <p class="cube-text">
      <span class="text-wrapper">
        ~26 sat/vB
        <br />
      </span>
      <span class="span">
        12 ~ 536 sat/vB
        <br />
      </span>
      <span class="text-wrapper-2">
        1.41 MB
        <br />
      </span>
      <span class="text-wrapper">
        2,182 transactions
        <br />
        in ~10 minutes
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Cube4",
};
</script>

<style scoped>
.cube4 {
  background-image: url(../assets/vector-4.svg);
  background-size: 100% 100%;
  height: 176px;
  left: 652px;
  position: absolute;
  top: 58px;
  width: 178px;
}

</style>
