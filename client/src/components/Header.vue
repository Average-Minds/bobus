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

const nextSection = () => {
  const newValue = progress.section + 1;
  progress.setSection(newValue);
  clientSendSection(newValue);
}
</script>

<template>
  <header>
    <div v-if="props.master">
      <button @click="nextSection">
        >>
      </button>
    </div>
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
