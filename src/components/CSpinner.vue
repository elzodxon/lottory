<template>
  <div class="spinner"></div>
</template>

<style>
.spinner {
  width: 24px;
  height: 24px;
  display: grid;
  border-radius: 50%;
  -webkit-mask: radial-gradient(farthest-side, #0000 40%, #ffffff 41%);
  background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 1) 0
      )
      center/1.9px 100%,
    linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0.75) 0
      )
      center/100% 1.9px;
  background-repeat: no-repeat;
  animation: spinner-d3o0rx 1.2s infinite steps(12);
}

.spinner::before,
.spinner::after {
  content: "";
  grid-area: 1/1;
  border-radius: 50%;
  background: inherit;
  opacity: 0.915;
  transform: rotate(30deg);
}

.spinner::after {
  opacity: 0.83;
  transform: rotate(60deg);
}

@keyframes spinner-d3o0rx {
  100% {
    transform: rotate(1turn);
  }
}
</style>
