<script setup lang="ts">
import { FRIEND_DATA } from './friend-data';
import MNavLinks from './MNavLinks.vue';
</script>

<template>
  <div class="pt-8">
    <MNavLinks
      v-for="{ title, items } in FRIEND_DATA"
      :title="title"
      :items="items"
    />
  </div>
</template>
