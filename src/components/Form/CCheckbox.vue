<template>
  <label
    class="group inline-flex items-center relative select-none min-h-[20px]"
    :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
  >
    <input
      v-bind="{ disabled }"
      type="checkbox"
      class="absolute opacity-0 invisible h-0 w-0 peer"
      :checked="modelValue"
      :value="value"
      :name="name"
      @change="handleChange"
    />
    <span
      :class="[
        'duration-200 ease-in-out absolute top-0.5 left-0 inline-block h-5 w-5 rounded border-2 peer-checked:-rotate-90 peer-checked:after:opacity-100 peer-checked:after:rotate-[138deg] after:transition-all after:duration-200 after:absolute after:left-[6px] after:top-[2.5px] after:w-1.5 after:h-[11px] after:border-r-[2.2px] after:border-b-[2.2px] after:rotate-[0deg] after:opacity-0',
        'border-gray peer-checked:border-green after:border-green peer-disabled:border-gray peer-disabled:after:border-gray',
        {
          '!border-danger': error,
          'group-hover:border-green': !disabled,
        },
      ]"
    />
    <span class="pl-8">
      <slot name="label">
        <span
          :class="[
            'font-medium letter-3 leading-[17px] text-[#2B3646] text-sm',
            labelStyles,
          ]"
        >
          {{ label }}
        </span>
      </slot>
    </span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number | boolean;
  label?: string;
  name?: string;
  value?: string | number | boolean;
  disabled?: boolean;
  error?: boolean;
  labelStyles?: string;
}
const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits<{
  (e: "update:modelValue", value: Props["modelValue"]): void;
}>();
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", props.value ? target?.value : target?.checked);
};
</script>
