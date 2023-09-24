<template>
  <div class="wrapper h-full w-full min-h-screen bg-cover pt-5">
    <div class="container mx-auto">
      <LotteryBallContainer @new-number="fetchTicketsList" />
      <div class="grid grid-cols-12 gap-5 pb-6">
        <div
          class="col-span-3"
          v-for="tableNumber in tableData.length"
          :key="tableNumber"
        >
          <LotteryTable :rowData="tableData[tableNumber - 1]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LotteryBallContainer from "@/components/LotteryBallContainer.vue";
import LotteryTable from "@/components/LotteryTable.vue";

import axios from "../axios.js";

export default {
  components: { LotteryTable, LotteryBallContainer },
  data() {
    return {
      tableData: [],
    };
  },

  mounted() {
    this.fetchTicketsList();
  },
  methods: {
    fetchTicketsList() {
      axios
        .get("tickets/")
        .then((res) => {
          this.tableData = res.data;
        })
        .catch((err) => {
          // Todo: Show error
        });
    },
  },
};
</script>

<style>
.title {
  text-shadow: #5b432c 5px 0 10px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #5b432c;
}
.wrapper {
  background-image: url("../../public/img/wrapper-bg.jpg");
}
</style>
