<template>
  <div class="cube2">
    <div class="rectangle"></div>
    <p class="cube-text">
      <span class="text-wrapper">
        ~10 sat/vB
        <br />
      </span>
      <span class="span">
        10 ~ 10 sat/vB
        <br />
      </span>
      <span class="text-wrapper-2">
        1.31 MB
        <br />
      </span>
      <span class="text-wrapper">
        1,680 transactions
        <br />
        in ~30 minutes
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Cube2",
};
</script>

<style scoped>
.cube2 {
  background-image: url(../assets/vector-4.svg);
  background-size: 100% 100%;
  height: 176px;
  left: 246px;
  position: absolute;
  top: 58px;
  width: 178px;
}


</style>
