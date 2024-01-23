
<template>
  <div class="frame">
    <div class="div-2">
      <div class="orange_cubes">
      <Cube1 />
      <Cube2 />
      <Cube3 />
      <Cube4 />
      </div>
      <div class="purple_cubes">
      <Pcube1 />
      <Pcube2 />
      <Pcube3 />
      <Pcube4 />
      </div>

      <hr class="custom-hr">
           
      <Block />
      <TransactionBox1 />
      <TransactionBox2 />
      <TransactionBox3 />

      <BlockHeading />
      <div class="text-wrapper-85">2,575 transactions</div>
      <TrsID1 />
      <TrsID2 />
      <TrsID3 />
      <Pagination />


    </div>
  </div>
</template>

<script>
import Cube1 from "@/components/Cube1.vue";
import Cube2 from "@/components/Cube2.vue";
import Cube3 from "@/components/Cube3.vue";
import Cube4 from "@/components/Cube4.vue";
import Pcube1 from "@/components/Pcube1.vue";
import Pcube2 from "@/components/Pcube2.vue";
import Pcube3 from "@/components/Pcube3.vue";
import Pcube4 from "@/components/Pcube4.vue";
import Block from "@/components/Block.vue";
import TransactionBox1 from "@/components/TransactionBox1.vue";
import TransactionBox2 from "@/components/TransactionBox2.vue";
import TransactionBox3 from "@/components/TransactionBox3.vue";
import TrsID1 from "@/components/TrsID1.vue";
import TrsID2 from "@/components/TrsID2.vue";
import TrsID3 from "@/components/TrsID3.vue";
import Pagination from "@/components/Pagination.vue";
import BlockHeading from "@/components/BlockHeading.vue";

export default {
  name: "Explorer",
  components: {
    Cube1,
    Cube2,
    Cube3,
    Cube4,
    Pcube1,
    Pcube2,
    Pcube3,
    Pcube4,
    Block,
    TransactionBox1,
    TransactionBox2,
    TransactionBox3,
    TrsID1,
    TrsID2,
    TrsID3,
    Pagination,
    BlockHeading,
  },
};
</script>


<style>
.custom-hr {
  width: 88%;
  border: none; 
  border-top: 4px solid white; 
  position: absolute;
  top: 280px;
  margin: 150px 120px; 
}

.frame {
  background-color: #12141d;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}

.orange_cubes::after {
  content: "";
  position: absolute;
  height: 250px;
  background-color: transparent;
  border-left: 4px dashed white; 
  border-spacing: 2px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
}


.frame .div-2 {
  background-color: #12141d;
  height: 1844px;
  overflow: hidden;
  position: relative;
  width: 1728px;
}

.custom-hr {
  border: none; 
  border-top: 2px solid white; 
  margin: 20px 120px; 
}


.frame .line {
  height: 9px;
  left: 129px;
  object-fit: cover;
  position: absolute;
  top: 300px;
  width: 1468px;
}

.frame .line-2 {
  height: 210px;
  left: 859px;
  object-fit: cover;
  position: absolute;
  top: 44px;
  width: 9px;
}

.frame .text-wrapper-85 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 40px;
  font-weight: 400;
  left: 129px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 706px;
  width: 386px;
}

@media (max-width: 1200px) {
  .custom-hr {
    top: 350px;
    margin: 20px auto;
  }

  .frame .text-wrapper-85 {
    top: 706px;
  }
}

</style>