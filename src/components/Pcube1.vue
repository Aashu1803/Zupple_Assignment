<template>
  <div class="pcube1">
    <div class="rectangle-pcube"></div>
    <p class="cube-text">
      <span class="text-wrapper">
        ~80 sat/vB
        <br />
      </span>
      <span class="span">
        30 ~ 856 sat/vB
        <br />
      </span>
      <span class="text-wrapper-2">
        1.45 MB
        <br />
      </span>
      <span class="text-wrapper">
        2,469 transactions
        <br />5 minutes ago
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Pcube1",
};
</script>

<style>
.pcube1 {
  background-image: url(../assets/vector-8.svg);
  background-size: 100% 100%;
  height: 176px;
  left: 894px;
  position: absolute;
  top: 58px;
  width: 178px;
}

.rectangle-pcube {
  background: linear-gradient(180deg, rgb(65, 72, 189) 12.89%, rgb(95, 67, 193) 68.68%);
  height: 147px;
  left: 28px;
  position: absolute;
  top: 28px;
  width: 149px;
}
</style>
