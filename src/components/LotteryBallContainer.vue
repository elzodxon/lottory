<template>
  <div class="ball-container">
    <div class="row">
      <div
        v-for="(ball, index) in rowBalls"
        :key="index"
        class="ball"
        :class="{ 'animate-roll-in': ball.appeared }"
      >
        <span class="text-white font-bold text-xl">{{ ball.number }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rowBalls: [], // Balls in the current row
    };
  },
  methods: {
    generateRandomNumber() {
      return Math.floor(Math.random() * 90) + 1; // Generate a random number between 1 and 90
    },
    addBallToRow() {
      const newBall = {
        number: this.generateRandomNumber(),
        appeared: true,
      };
      this.rowBalls.push(newBall);

      // After 2 seconds, hide the ball
      setTimeout(() => {
        newBall.appeared = false;
      }, 2000);
    },
    createNewRow() {
      const interval = setInterval(() => {
        if (this.rowBalls.length < 10) {
          this.addBallToRow();
        } else {
          clearInterval(interval);
        }
      }, 200);
    },
  },
  created() {
    // Start creating new rows with balls continuously
    setInterval(() => {
      this.createNewRow();
    }, 2000);
  },
};
</script>

<style scoped>
/* Add your Tailwind CSS styles here */
.ball-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}

.ball {
  width: 50px;
  height: 50px;
  background-color: #3490dc;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 5px;
  opacity: 0;
  transform: translateX(20px);
}

.animate-roll-in {
  animation: roll-in 1s ease-out;
}

@keyframes roll-in {
  0% {
    transform: translateX(20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
