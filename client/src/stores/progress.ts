import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useProgressStore = defineStore('progress', () => {
  const section = ref(0);

  function setSection(value: number) {
    section.value = value;
  }

  return { section, setSection }
})
