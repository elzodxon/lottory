<template>
  <button
    type="button"
    class="bg-blue-600 text-white"
    :class="classes"
    @click="onClick"
    :style="style"
  >
    {{ props.label }}
  </button>
</template>

<script setup lang="ts">
import { Size } from "./types";
import { computed } from "vue";

export interface Props {
  label: string;
  backgroundColor?: string;
  size: Size;
}

interface Emits {
  (e: "click"): void;
}

const props = withDefaults(defineProps<Props>(), { size: "medium" });

const emit = defineEmits<Emits>();

const onClick = () => {
  emit("click");
};

const classes = computed(() => [
  props.size == "small" && ["py-1 px-2", "rounded"],
  props.size == "medium" && ["py-2 px-3", "rounded-lg"],
  props.size == "large" && ["py-3 px-4", "rounded-xl"],
]);

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));
</script>
