<script setup lang="ts">
import { useProgressStore } from '@/stores/progress';
import Section from '@/components/Section.vue';

const progress = useProgressStore();
</script>

<template>
  <main>
    <Section :current-section="progress.section" />
  </main>
</template>

<style scoped>
main {
  padding: var(--padding-common);
  padding-top: calc(var(--header-height) + var(--padding-common));
}
</style>
