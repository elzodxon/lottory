<template>
  <div class="flex items-center justify-center h-screen">
    <div class="flex flex-col items-center justify-center">
      <CLogo class="mb-[200px]" />

      <CSpinner />
    </div>
  </div>
</template>
<script setup lang="ts">
import CLogo from "@/components/CLogo.vue";
import CSpinner from "@/components/CSpinner.vue";
</script>
