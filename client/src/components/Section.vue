<script setup lang="ts">
import { computed } from 'vue'
import text from '@/data/text';

export interface Props {
  currentSection?: number;
}

const props = withDefaults(defineProps<Props>(), {
  currentSection: 0,
});

const section = computed(() => {
  return text.sections?.[props.currentSection] ?? {};
})
</script>

<template>
  <header v-if="props.currentSection === 0">
    <h3>{{ text.mainTitle }}</h3>

    <p v-if="text.mainSubtitle">
      {{ text.mainSubtitle }}
    </p>

    <p v-if="text.mainInfo">
      {{ text.mainInfo }}
    </p>
  </header>

  <section>
    <h3>{{ props.currentSection + 1 }}. {{ section.title }}</h3>

    <p
      v-for="(line, lineIndex) in section.lines"
      :key="`line_${props.currentSection}_${lineIndex}`"
    >
      <template v-if="typeof line === 'string'">
        {{ line }}
      </template>
      <template v-else>
        <strong v-if="line.heading">{{ line.heading }}</strong>:
        <span v-if="line.text">{{ line.text }}</span>
      </template>
    </p>
  </section>
</template>

<style scoped>
main {
  padding: var(--padding-common);
  padding-top: calc(var(--header-height) + var(--padding-common));
}
</style>
