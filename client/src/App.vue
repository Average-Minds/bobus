<script setup lang="ts">
import { RouterView } from 'vue-router'
import { initClient } from './client';
import { useProgressStore } from '@/stores/progress'

const progress = useProgressStore()
initClient(progress);

</script>

<template>
  <RouterView />
</template>
