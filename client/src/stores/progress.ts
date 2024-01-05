import { ref } from 'vue';
import { defineStore } from 'pinia';
import { sectionsLen } from '@/data/text';

export const useProgressStore = defineStore('progress', () => {
  const masterSection = ref(0);

  function setMasterSection(value: number) {
    if (value < 0 || value >= sectionsLen) return;
    masterSection.value = value;
  }

  const section = ref(0);

  function setSection(value: number) {
    if (value < 0 || value >= sectionsLen) return;
    section.value = value;
  }

  return { masterSection, setMasterSection, section, setSection };
})
