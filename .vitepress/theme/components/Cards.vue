<script setup lang="ts">
import { computed } from 'vue';

import Card from './Card.vue';

// 参数
const props = defineProps<{
  title;
  items;
}>();

// 分组标题
const formatTitle = computed(() => {
  return props.title;
});
</script>

<template>
  <h2 v-if="title" :id="formatTitle" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
  </h2>
  <div class="m-nav-links">
    <Card
      v-for="{ icon, title, desc, link, label } in items"
      :key="link"
      :icon="icon"
      :title="title"
      :desc="desc"
      :link="link"
      :label="label"
    />
  </div>
</template>

<style lang="scss" scoped>
.m-nav-links {
  --m-nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--m-nav-gap);
  grid-column-gap: var(--m-nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--m-nav-gap);
}

@each $media,
  $size
    in (500px: 400px, 640px: 280px, 768px: 240px, 960px: 240px, 1440px: 240px)
    /* in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) */
{
  @media (min-width: $media) {
    .m-nav-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@media (min-width: 960px) {
  .m-nav-links {
    --m-nav-gap: 20px;
  }
}
</style>
