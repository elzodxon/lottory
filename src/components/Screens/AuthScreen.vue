<template>
  <div>
    <header class="flex items-center justify-center mt-12 mb-16">
      <CLogo />
    </header>

    <div class="mb-6">
      <label class="font-medium text-sm leading-[17px] text-gray mb-2 block">
        Pasport seriyasi, raqami yoki JSHSHIR
      </label>
      <CInput
        :error="$v.passport.$invalid"
        v-model="values.passport"
        @blur="v$.passport.$touch()"
        placeholder="AA1234567 | JSHSHIR"
      />
    </div>
    <div class="mb-6">
      <label class="font-medium text-sm leading-[17px] text-gray mb-2 block">
        Tug‘ilgan kun
      </label>
      <CInput v-model="values.date" type="date" placeholder="10.01.2000" />
    </div>

    <div class="mb-6">
      <CCheckbox @click="showBottomSheet = true">
        <template #label>
          <p class="text-sm font-medium">
            <span class="text-green"
              >Foydalanuvchi kelishuvi va Maxfiylik siyosati shartlarini
            </span>
            <span class="text-gray"> qabul qilaman </span>
          </p>
        </template>
      </CCheckbox>
    </div>

    <CButton text="Davom etish" @click="onSubmit" />

    <!-- Bottom sheet -->

    <CBottomSheet
      v-bind="{ showBottomSheet }"
      @on-close="showBottomSheet = false"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, unref } from "vue";

import CButton from "@/components/Button/CButton.vue";
import CBottomSheet from "@/components/CBottomSheet.vue";
import CCheckbox from "@/components/Form/CCheckbox.vue";
import CInput from "@/components/Form/CInput.vue";
import CLogo from "@/components/Logo/CLogo.vue";
import { TForm } from "@/composables/useForm";

interface Props {
  form: TForm<any>;
}

const props = withDefaults(defineProps<Props>(), {});

const { form } = unref(props);
const { values, $v } = form;

const showBottomSheet = ref(false);

const onSubmit = () => {
  $v.value.$validate();
  // Todo: Submit function
};
</script>
