<template>
  <div class="h-full w-full min-h-screen 
    bg-[url('https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80')]"
    >
    <div class="container mx-auto">
      <div class="">
        <h1 class="title text-7xl font-bold text-white text-center py-5">Lottery</h1>
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

export default {
  components: { LotteryTable },
  data() {
    return {
      tableData: [
        {
          id: 1,
          number: 1,
          line1: [null, 12, 23, 34, null, null, 66, 72, null],
          line2: [1, null, null, 36, 41, null, 63, null, 81],
          line3: [3, null, 25, null, 49, 50, null, 76, null],
          line1_sel: [],
          line2_sel: [1],
          line3_sel: [3],
        },
        {
          id: 2,
          number: 2,
          line1: [1, null, null, 33, 48, 52, 67, null, null],
          line2: [5, 19, null, 36, null, null, null, 71, 80],
          line3: [null, null, 23, null, null, 54, 66, 72, 88],
          line1_sel: [1],
          line2_sel: [5],
          line3_sel: [],
        },
        {
          id: 3,
          number: 3,
          line1: [1, null, 24, 33, null, 50, null, null, 81],
          line2: [null, 16, null, 38, null, 54, 61, 73, null],
          line3: [null, 19, null, null, 48, null, 66, 75, 84],
          line1_sel: [1],
          line2_sel: [],
          line3_sel: [],
        },
        {
          id: 4,
          number: 4,
          line1: [null, 16, null, null, 43, 57, 60, null, 83],
          line2: [null, 13, null, 35, 49, null, null, 79, 86],
          line3: [2, null, 29, 32, null, 51, 66, null, null],
          line1_sel: [],
          line2_sel: [],
          line3_sel: [],
        },
      ],
    };
  },

  mounted() {
    this.fetchTicketsList();
  },
  methods: {
    fetchTicketsList() {
      fetch("https://zty.uicgroup.tech/l/api/tickets/")
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          console.log(data);
          this.tableData = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
.title {
  text-shadow: #5B432C 5px 0 10px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #5B432C;
}
</style>
