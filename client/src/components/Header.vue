<script setup lang="ts">
import { useProgressStore } from '@/stores/progress'

const progress = useProgressStore()

export interface Props {
  master?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  master: false,
})

const plusTenPercent = () => progress.setProgress(progress.progress + .1)
</script>

<template>
  <header>
    <div v-if="props.master">
      <button @click="plusTenPercent">+10%</button>
    </div>
    <div>{{ progress.percent }} %</div>
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
