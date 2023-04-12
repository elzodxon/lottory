<template>
  <div class="bg-[#091724] relative">
    <div class="overlay" />
    <div class="flex items-center justify-center h-screen">
      <div class="flex flex-col items-center justify-center">
        <CLogoLarge class="mb-[100px]" />

        <CSpinner />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import CSpinner from "@/components/CSpinner.vue";
import CLogoLarge from "@/components/Logo/CLogoLarge.vue";
</script>

<style>
.overlay {
  background: #81ee74;
  filter: blur(166.223px);
  position: absolute;
  top: 50%;
  left: 0;
  width: 191.49px;
  height: 191.49px;
}
</style>
