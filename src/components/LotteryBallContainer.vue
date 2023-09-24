<template>
  <div class="bg-gray-900 mx-auto p-4 border rounded-lg shadow-md max-w-xl h-[90px]">
    <div class="h-10">
      <div class="flex" :style="containerStyle">
        <transition-group name="roll">
          <div
            v-for="(number, index) in lotteryNumbers"
            :key="index"
            class="mb-2 w-[60px]"
          >
            <div
              :class="[
                'ball bg-white text-gray-900 text-xl  rounded-full p-2 w-10 h-10 font-bold flex items-center justify-center',
                { 'active-ball mt-2': index === 0 },
              ]"
            >
              {{ number }}
            </div>
          </div>
        </transition-group>
      </div>
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
        this.$emit("new-ball");
      } catch (err) {
        alert(
          `Game Over! Winner is ${err.response.data.ticket_win}. Start a new Game!`
        );
        this.gameFinished = true;
      }
    },
    startGame() {
      // Start the game by fetching the first number.
      this.fetchNewNumber();

      // Set up an interval to fetch new numbers periodically.
      this.intervalId = setInterval(() => {
        if (!this.gameFinished) {
          this.fetchNewNumber();
        }
      }, 2000); // Add a new number every 2 seconds (adjust as needed)
    },
  },
  mounted() {
    // Start the game when the component is mounted.
    this.startGame();
  },
  beforeUnmount() {
    // Clear the interval when the component is destroyed.
    clearInterval(this.intervalId);
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

.active-ball {
  animation: example infinite;
  animation-duration: 2s;
}
@keyframes example {
  0%   {
    transform: scale(0.5);
  }

  100% {
    transform: scale(1.25);
  }
}
.ball {
  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset;
}
</style>
