<template>
  <div
    class="h-full w-full min-h-screen bg-cover bg-[url('https://wallpapers.com/images/hd/high-resolution-wood-background-sk0k1ko8b0lxyyf4.jpg')]"
  >
    <div class="container mx-auto" style="max-width: 95%">
      <div class="flex flex-col items-center justify-center mb-5">
        <div>
          <button
            @click="onShuffle"
            class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded mt-2"
          >
            Shuffle
          </button>
          <button
            @click="onStartGame"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            New Game
          </button>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-5">
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
    onStartGame() {
      axios
        .post("new-game/")
        .then((res) => {
          alert("New Game Started");
          this.fetchTicketsList();
        })
        .catch((err) => {
          // Todo: Show Error
        });
    },
    onShuffle() {
      axios
        .get("get-number/")
        .then(() => {
          this.fetchTicketsList();
        })
        .catch((err) => {
          console.log("err", err);
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
