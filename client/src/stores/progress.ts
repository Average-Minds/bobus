import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProgressStore = defineStore('progress', () => {
  const progress = ref(0)
  
  const percent = computed(() => progress.value * 100)

  function setProgress(value: number) {
    progress.value = value
  }

  return { progress, percent, setProgress }
})
