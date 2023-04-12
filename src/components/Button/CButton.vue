<template>
  <button
    v-bind="{ disabled, type }"
    class="s-button s-transition rounded-lg py-2.5 px-4 flex items-center justify-center cursor-pointer relative group"
    :style="{ '--box-shadow': shadowColor, '--spinnerColor': spinnerColor }"
    :class="[{ 'pointer-events-none': loading }, buttonVariantClass]"
    @click="onClick"
  >
    <i
      :class="[
        's-transition absolute-center-h absolute-center-v',
        loading ? 'opacity-100 visible' : 'opacity-0 invisible w-0',
      ]"
    >
      <svg
        class="loading-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M11.9999 3.14746C16.8856 3.14746 20.8524 7.11425 20.8524 11.9999C20.8524 16.8856 16.8856 20.8524 11.9999 20.8524C7.11425 20.8524 3.14746 16.8856 3.14746 11.9999C3.14746 7.11425 7.11425 3.14746 11.9999 3.14746Z"
          stroke="#17171C"
          stroke-width="3"
        />
        <path
          d="M11.2458 20.8191C9.38896 20.6622 7.56653 19.9205 6.07624 18.5787C3.60297 16.3517 2.67826 13.0422 3.37337 10.0106"
          stroke="#17171C"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    </i>
    <slot v-if="!loading">
      <!--      <SIcon v-if="icon" :icon="icon" :class="iconClass" />-->
      <span :class="textStyle" class="s-transition">
        {{ text }}
      </span>
    </slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { ButtonVariants } from "./types";

interface Props {
  text?: string;
  textClass?: string;
  shadowColor?: string;
  hasShadow?: boolean;
  spinnerColor?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: string;
  variant?: ButtonVariants;
  icon?: string;
  iconClass?: string;
}
// ******* PROPS *******
const props = withDefaults(defineProps<Props>(), {
  hasShadow: true,
  text: "Button",
  type: "button",
  textClass: "",
  shadowColor: "",
  spinnerColor: "white",
  disabled: false,
  loading: false,
  variant: "primary",
});

// ******* EMITS *******
interface Emits {
  (e: "click"): void;
}
const emit = defineEmits<Emits>();

const onClick = () => {
  emit("click");
};

const textStyle = computed(() => {
  const labelClass = props.textClass;
  return [
    labelClass,
    !props.loading ? "opacity-100 visible" : "opacity-0 invisible",
    "font-medium	 letter-3 !leading-sm text-sm select-none",
  ];
});
</script>

<style>
.s-button {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;
  background: #63d455;
  border-radius: 10px;
  width: 100%;
}

.s-button:active:not(:disabled) {
  transform: scale(0.9);
}

.s-button:disabled {
  background: #2b2b30 !important;
  box-shadow: none;
}

.s-button:disabled h1,
.s-button:disabled p,
.s-button:disabled {
  color: #a5aab4;
}

.s-button:not(:disabled):not(.no-hover):hover {
  //transform: translate(0, -3px) !important;
  //box-shadow: 0 10px 20px -10px var(--box-shadow) !important;
}

.s-button:disabled {
  cursor: not-allowed;
  background-color: #e6e9ef !important;
}
</style>
