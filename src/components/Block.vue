<template>
  <div
    class="block"
  >
    <div class="overlap-2">
      <div class="text-wrapper-7" style="top: 11px;">Hash</div>
      <div class="text-wrapper-25">000000...7c83bfa</div>
    </div>
    <div class="overlap-3">
      <div class="text-wrapper-7 text-wrapper-8">1.31 MB</div>
      <div class="text-wrapper-7" style="top: 10px;">Size</div>
    </div>
    <div class="overlap-4">
      <div class="text-wrapper-7 text-wrapper-9">Miner</div>
      <div class="group">
        <div class="overlap-5">
          <div class="text-wrapper-7 text-wrapper-16">SpiderPool</div>
        </div>
      </div>
    </div>
    <div class="overlap-6">
      <div class="text-wrapper-7 text-wrapper-10" style="display: inline-block; left: 0;">Total fees</div>
      <p class="element-BTC" style="left: 295px; position: relative; bottom: 10px">
        <span style="color: #fff;">0.43 BTC (</span>
        <span style="color: #2e913e">$13,710</span>
        <span style="color: #fff;">)</span>
      </p>
    </div>
    <p class="element-BTC2" style="left: 1069px; top: 80px;">
      <span style="color: #fff;">6.68 BTC (</span>
      <span style="color: #2e913e">$213,136</span>
      <span style="color: #fff;">)</span>
    </p>
    <div class="text-wrapper-7 text-wrapper-11">Subsidy + fees:</div>
    <p class="element-BTC" style="left: 303px; top: 80px; width: 403px;">
      <span class="text-wrapper-12">2021-01-23 08:47 </span>
      <span style="font-style: italic; color: white;">(1 hour ago)</span>
    </p>
    <div class="text-wrapper-7 text-wrapper-13">3.99 MWU</div>
    <div class="text-wrapper-7 text-wrapper-14">Timestamp</div>
    <div class="text-wrapper-7 text-wrapper-15">Weight</div>
  </div>
</template>

<script>
export default {
  name: "Block",
};
</script>


<style scoped>
.block {
  background-color: #222336;
  height: 275px;
  left: 133px;
  position: absolute;
  top: 392px;
  width: 1460px;
}

.block .overlap-2 {
  background-color: #12141d;
  height: 56px;
  left: 31px;
  position: absolute;
  top: 33px;
  width: 666px;
}

.block .text-wrapper-7 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 26px;
  font-weight: 400;
  left: 13px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  white-space: nowrap;
  width: 70px;
}

.block .text-wrapper-25 {
  color: #3dd1f0;
  font-family: "Inter", Helvetica;
  font-size: 26px;
  font-weight: 400;
  left: 272px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 11px;
  white-space: nowrap;
  width: 230px;
}
.block .overlap-3 {
  background-color: #12141d;
  height: 56px;
  left: 31px;
  position: absolute;
  top: 145px;
  width: 666px;
}

.block .text-wrapper-8 {
  left: 272px;
  top: 10px;
  width: 114px;
}

.block .overlap-4 {
  background-color: #12141d;
  height: 56px;
  left: 762px;
  position: absolute;
  top: 145px;
  width: 666px;
}

.block .text-wrapper-9 {
  left: 15px;
  top: 12px;
  width: 77px;
}

.block .group {
  height: 37px;
  left: 307px;
  position: absolute;
  top: 11px;
  width: 198px;
}

.block .overlap-5 {
  background-color: #2852a7;
  border-radius: 9px;
  height: 37px;
  position: relative;
  width: 196px;
}

.block .overlap-6 {
  background-color: #12141d;
  height: 56px;
  left: 762px;
  position: absolute;
  text-align: center;
  top: 33px;
  width: 666px;
}

.block .text-wrapper-10 {
  left: 15px;
  top: 11px;
  width: 143px;
}

.element-BTC {
  color: transparent;
  font-family: "Inter", Helvetica;
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  white-space: nowrap;
  width: 254px;
 
}
.element-BTC2 {
  color: transparent;
  font-family: "Inter", Helvetica;
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: 254px;
  bottom: 10px;
  display: inline-block;
}
.block .text-wrapper-11 {
  left: 777px;
  top: 99px;
  width: 207px;
}

.block .text-wrapper-12 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 0;
}

.block .text-wrapper-13 {
  left: 303px;
  top: 213px;
  width: 156px;
}

.block .text-wrapper-14 {
  left: 44px;
  top: 99px;
  width: 142px;
}

.block .text-wrapper-15 {
  left: 44px;
  top: 213px;
  width: 109px;
}

.block .text-wrapper-16 {
  left: 30px;
  top: 3px;
  width: 150px;
}

</style>
