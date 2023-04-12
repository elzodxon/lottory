<template>
  <div>
    <transition name="fade" mode="out-in">
      <SplashScreen v-if="loading" />
      <div v-else>
        <AuthScreen class="mx-6" v-bind="{ form }" />
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { minLength, required } from "@vuelidate/validators";
import { ref } from "vue";

import AuthScreen from "@/components/Screens/AuthScreen.vue";
import SplashScreen from "@/components/Screens/SplashScreen.vue";
import { useForm } from "@/composables/useForm";

const loading = ref(true);

const form = useForm(
  {
    passport: null,
    date: new Date(),
  },
  {
    passport: {
      required,
      minLength: minLength(8),
    },
    date: {
      required,
    },
  }
);
setTimeout(() => {
  loading.value = false;
}, 1000);
</script>
