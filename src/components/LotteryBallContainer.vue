<template>
  <div class="flex items-center flex-col">
    <div class="flex flex-col items-center justify-center mb-3">
      <div>
        <button
          @click="fetchNewNumber"
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

    <div class="bg-white p-4 border rounded-lg shadow-md max-w-xs w-full">
      <div class="overflow-hidden h-10">
        <div class="flex" :style="containerStyle">
          <transition-group name="roll">
            <div
              v-for="(number, index) in lotteryNumbers"
              :key="index"
              class="mb-2"
            >
              <div
                :class="[
                  'bg-blue-500 text-white rounded-full p-2 w-8 h-8 text-center',
                  { 'bg-green-500': index === 0 },
                ]"
              >
                {{ number }}
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal  -->
  <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <!-- Overlay -->
    <div
      class="relative bg-white rounded-lg shadow-xl max-w-lg mx-auto p-8 z-10"
    >
      <h2 class="text-3xl font-bold mb-4">Congratulations!</h2>
      <p class="text-xl mb-6">The winner is: {{ winner }}</p>
      <button
        @click="toggleModal"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  data() {
    return {
      lotteryNumbers: [],
      maxNumbers: 10, // Maximum number of displayed lottery numbers
      containerStyle: {},
      gameFinished: false,

      // Modal
      show: false,
      winner: "",
    };
  },
  methods: {
    async fetchNewNumber() {
      try {
        const response = await axios.get("get-number/"); // Replace with your API endpoint
        const newNumber = response.data.number;
        if (this.lotteryNumbers.length >= this.maxNumbers) {
          this.lotteryNumbers.pop(); // Remove the last number (FIFO)
        }
        this.lotteryNumbers.unshift(newNumber); // Add the new number to the beginning
        this.containerStyle = {
          transform: `translateX(${50}px)`,
        };
        this.$nextTick(() => {
          this.containerStyle = {
            transform: `translateX(0)`,
          };
        });
        this.$emit("new-number");
      } catch (err) {
        this.winner = err.response.data.ticket_win;
        this.toggleModal();
        this.gameFinished = true;
      }
    },
    onStartGame() {
      axios
        .post("new-game/")
        .then(() => {
          alert("New Game Started");
          this.lotteryNumbers = [];
          this.$emit("new-number");
        })
        .catch(() => {
          // Todo: Show Error
        });
    },
    toggleModal() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.roll-enter-active,
.roll-leave-active {
  transition: transform 0.5s;
}
.roll-enter, .roll-leave-to /* .roll-leave-active in <2.1.8 */ {
  transform: translateX(100%);
}
</style>
