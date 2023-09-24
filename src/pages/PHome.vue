<template>
  <div
    class="h-full w-full min-h-screen bg-cover bg-[url('https://wallpapers.com/images/hd/high-resolution-wood-background-sk0k1ko8b0lxyyf4.jpg')]"
  >
    <div class="container mx-auto">
      <div class="">
        <h1 class="title text-7xl font-bold text-white text-center py-5">
          Lottery
        </h1>
        <div class="grid grid-cols-12 gap-5">
          <div
            class="col-span-4"
            v-for="tableNumber in tableData.length"
            :key="tableNumber"
          >
            <LotteryTable :rowData="tableData[tableNumber - 1]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LotteryTable from "@/components/LotteryTable.vue";

import axios from "../axios.js";

export default {
  components: { LotteryTable },
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
</style>
