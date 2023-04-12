<template>
  <div>
    <SplashScreen v-if="loading" />
    <div v-else>
      <WelcomePage />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

import SplashScreen from "@/components/SplashScreen.vue";
import WelcomePage from "@/components/WelcomePage.vue";

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 1000);
</script>
