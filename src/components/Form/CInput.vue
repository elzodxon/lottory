<template>
  <div
    :class="[
      'k-input inline-flex items-center relative k-transition transition-all duration-500 bg-white rounded-lg border overflow-hidden w-full h-11 ',
      error ? '!border-red' : 'border-gray focus-within:border-blue',
    ]"
  >
    <span :class="[prefixClass, 'pl-4']">
      <slot name="prefix" />
    </span>
    <input
      :value="modelValue"
      v-bind="{ type, minlength, maxlength, max, min, disabled, placeholder }"
      :readonly="!autocomplete"
      :class="[
        inputClass,
        'font-medium text-sm !leading-[164%] text-dark placeholder:text-gray bg-transparent flex-grow py-2.5  outline-none',
      ]"
      class="w-full"
      ref="kInput"
      @input="handleInput"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
    />

    <span :class="[suffixClass, 'pr-4']">
      <slot name="suffix" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  type?: string;
  placeholder?: string;
  modelValue: number | string;
  disabled?: boolean;
  error?: boolean;
  maxlength?: number;
  minlength?: number;
  max?: number;
  min?: number;
  inputClass?: string | string[];
  prefixClass?: string;
  suffixClass?: string;
  autocomplete?: boolean;
}

const emit = defineEmits<{
  (e: "update:modelValue", value: Props["modelValue"]): void;
}>();

const handleInput = (e: { target: HTMLInputElement }) => {
  emit("update:modelValue", e.target.value);
};

const kInput = ref();
defineExpose({ kInput });

withDefaults(defineProps<Props>(), {
  type: "text",
  maxlength: undefined,
  minlength: undefined,
  max: undefined,
  min: undefined,
  inputClass: undefined,
  autocomplete: true,
});
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
