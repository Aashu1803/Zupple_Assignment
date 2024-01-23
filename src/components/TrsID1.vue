<template>
  <div class="trsID1">
    <div class="text-wrapper-3">18f75452814dec66956b3a85afa74926dba803bfe586caa3ef04bac6b32d102d</div>
    <div class="text-wrapper-4">2021-01-23 08:47</div>
  </div>
</template>

<script>
export default {
  name: "TrsID1",
};
</script>

<style>
.trsID1 {
  background-color: #222336;
  height: 56px;
  left: 133px;
  position: absolute;
  top: 776px;
  width: 1460px;
}

/* Add responsive styles here */
@media (max-width: 1200px) {
  .trsID1 {
    width: calc(100% - 20px); /* Adjust the width for smaller screens, considering margins */
    left: 10px; /* Adjust the left position for smaller screens */
  }

  .text-wrapper-3,
  .text-wrapper-4 {
    white-space: nowrap; /* Prevent text wrapping on smaller screens */
    overflow: hidden;
    text-overflow: ellipsis; /* Show ellipsis (...) for overflowed text */
  }
}

/* ... (your existing styles) ... */
</style>
