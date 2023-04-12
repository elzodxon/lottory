<template>
  <div>
    <div v-if="showBottomSheet" class="bg-overlay"></div>
    <transition name="bottom-sheet" mode="out-in">
      <div
        v-if="showBottomSheet"
        class="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md rounded-[20px_20px_0px_0px]"
      >
        <div class="flex items-center justify-between p-4">
          <!-- Content of the bottom sheet -->
          <h1 class="text-[22px] leading-[27px] text-black font-bold">
            Amalni tanlang
          </h1>
          <button @click="$emit('on-close')">
            <CloseIcon />
          </button>
        </div>
        <hr />
        <div class="px-4 py-2 overflow-scroll">
          <!-- Close button to close the bottom sheet -->
          <div>
            UMUMIY QOIDALAR 1.1. Ushbu Siyosat doirasida Foydalanuvchining
            shaxsiy ma’lumotlari quyidagilarni anglatadi: 1.1.1. Saytdan
            foydalanganda Foydalanuvchi o’zi to’g’risida taqdim etgan har qanday
            shaxsiy ma’lumotlar, shu jumladan foydalanuvchining shaxsiy
            ma’lumotlari. 1.1.2. Foydalanuvchi qurilmasida o’rnatilgan dasturiy
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from "@/components/Icons/CloseIcon.vue";

interface Props {
  showBottomSheet: boolean;
}

withDefaults(defineProps<Props>(), {
  showBottomSheet: false,
});
</script>

<style scoped>
/* Style for the bottom sheet */
.bottom-sheet-enter-active {
  animation: slide-up 0.3s ease-in-out;
}

.bottom-sheet-leave-active {
  animation: slide-up 0.3s ease-in-out reverse;
}

.bottom-sheet-enter,
.bottom-sheet-leave-to {
  transform: translateY(100%);
}

@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}

.bg-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.65);
  transition: opacity 200ms;
}
</style>
