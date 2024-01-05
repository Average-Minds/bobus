<script setup lang="ts">
import { useProgressStore } from '@/stores/progress';
import { clientSendSection } from '@/client';

const progress = useProgressStore();

interface Props {
  master?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  master: false,
})

const setSection = (value: number) => {  
  if (props.master) {
    const newValue = progress.masterSection + value;
    progress.setMasterSection(newValue);
    clientSendSection(newValue);
  } else {
    const newValue = progress.section + value;
    progress.setSection(newValue);
  }
}

const prevSection = () => setSection(-1);
const nextSection = () => setSection(1);
</script>

<template>
  <header>
    <button @click="prevSection">
      ◀
    </button>
    <button @click="nextSection">
      ▶
    </button>
    <div v-if="props.master">
      M
    </div>
    
    <div v-else>
      K
      <button
        :disabled="progress.masterSection === progress.section"
        @click="progress.setSection(progress.masterSection)"
      >
        ✨
      </button>
    </div>
    {{ progress.masterSection }}|{{ progress.section }}
    <div>{{ progress.section }}</div>
  </header>
</template>

<style scoped>
header {
    position: fixed;
    max-width: var(--max-width);
    width: 100%;
    height: var(--header-height);
    padding: var(--padding-common);
    background-color: var(--color-background-soft);
    display: flex;
}

header > *:last-child {
    margin-left: auto;
}
</style>
