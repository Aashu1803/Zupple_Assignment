<template>
  <div class="cube3">
    <div class="rectangle"></div>
    <p class="cube-text">
      <span class="text-wrapper">
        ~11 sat/vB
        <br />
      </span>
      <span class="span">
        10 ~ 12 sat/vB
        <br />
      </span>
      <span class="text-wrapper-2">
        1.1 MB
        <br />
      </span>
      <span class="text-wrapper">
        1,915 transactions
        <br />
        in ~20 minutes
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Cube3",
};
</script>

<style scoped>
.cube3 {
  background-image: url(../assets/vector-4.svg);
  background-size: 100% 100%;
  height: 176px;
  left: 450px;
  position: absolute;
  top: 58px;
  width: 178px;
}

</style>
