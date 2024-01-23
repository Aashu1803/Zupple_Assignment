<template>
  <div class="cube1">
    <div class="rectangle"></div>
    <p class="cube-text">
      <span class="text-wrapper">
        ~9 sat/vB
        <br />
      </span>
      <span class="span">
        9 ~ 10 sat/vB
        <br />
      </span>
      <span class="text-wrapper-2">
        1.21 MB
        <br />
      </span>
      <span class="text-wrapper">
        1,680 transactions
        <br />
        in ~40 minutes
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Cube1",
};
</script>

<style>
.cube1 {
  background-image: url(../assets/vector-4.svg);
  background-size: 100% 100%;
  height: 176px;
  left: 44px;
  position: absolute;
  top: 58px;
  width: 178px;
}

.rectangle {
  background-color: #605b13;
  height: 147px;
  left: 28px;
  position: absolute;
  top: 28px;
  width: 149px;
}

.cube-text {
  color: transparent;
  font-family: "Inter", Helvetica;
  font-size: 15px;
  font-weight: 400;
  left: 28px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 50px;
  width: 149px;
}

.text-wrapper {
  color: #ffffff;
}

.span {
  color: #b3a51e;
}

.text-wrapper-2 {
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
}

</style>
