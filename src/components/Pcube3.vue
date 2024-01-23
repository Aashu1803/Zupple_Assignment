<template>
  <div class="pcube3">
    <div class="rectangle-pcube"></div>
    <p class="cube-text">
      <span class="text-wrapper">
        ~12 sat/vB
        <br />
      </span>
      <span class="span">
        12 ~ 795 sat/vB
        <br />
      </span>
      <span class="text-wrapper-2">
        1.11 MB
        <br />
      </span>
      <span class="text-wrapper">
        2,609 transactions
        <br />
        25 minutes ago
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Pcube3",
};
</script>

<style scoped>
.pcube3 {
  background-image: url(../assets/vector-8.svg);
  background-size: 100% 100%;
  height: 176px;
  left: 1300px;
  position: absolute;
  top: 58px;
  width: 178px;
}
</style>
