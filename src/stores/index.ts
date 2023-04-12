import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => {
    return { state: 0 };
  },

  actions: {},
});
