<template>
  <div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { usePermission } from "@vueuse/core";

usePermission("camera");
</script>
