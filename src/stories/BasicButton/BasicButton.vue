<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
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

const props = withDefaults(defineProps<Props>(), { primary: false });

const emit = defineEmits<Emits>();

const onClick = () => {
  emit("click");
};

const classes = computed(() => ({
  "storybook-button": true,
  [`storybook-button--${props.size || "medium"}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));
</script>
