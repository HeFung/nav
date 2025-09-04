<script setup lang="ts">
import { computed } from 'vue';

import { withBase } from 'vitepress';

import { Card } from './type';

const props = defineProps<{
  icon?: Card["icon"];
  title?: Card["title"];
  desc?: Card["desc"];
  link: Card["link"];
  label: Card["label"];
}>();

// 格式化标题
const formatTitle = computed(() => {
  if (!props.title) {
    return "";
  }
  return props.title;
});
// 格式化图标
const svg = computed(() => {
  if (typeof props.icon === "object") return props.icon.svg;
  return "";
});
</script>

<template>
  <a
    v-if="link"
    class="m-nav-link"
    :href="link"
    target="_blank"
    rel="noreferrer"
  >
    <article class="box">
      <div class="box-header">
        <!-- 图片 -->
        <div v-if="svg" class="icon" v-html="svg"></div>
        <div v-else-if="icon && typeof icon === 'string'" class="icon">
          <img
            :src="withBase(icon)"
            :alt="title"
            onerror="this.parentElement.style.display='none'"
          />
        </div>
        <h5 v-if="title" :id="formatTitle" class="title">{{ title }}</h5>
      </div>
      <!-- 描述 -->
      <p v-if="desc" class="desc">{{ desc }}</p>
      <!-- 标签 -->
      <div class="tags">
        <div class="tags-left">
          <span class="label" v-for="tag in label">{{ tag }}</span>
        </div>
      </div>
    </article>
  </a>
</template>

<style lang="scss" scoped>
.m-nav-link {
  --m-nav-icon-box-size: 40px;
  --m-nav-icon-size: 24px;
  --m-nav-box-gap: 12px;

  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.25s;
  &:hover {
    box-shadow: var(--vp-shadow-2);
    border-color: var(--vp-c-brand);
    text-decoration: initial;
    background-color: var(--vp-c-bg-soft-up);
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: var(--m-nav-box-gap);
    height: 100%;
    color: var(--vp-c-text-1);
    /* &-header {
      display: flex;
      align-items: center; 
    } */
  }

  .icon {
    width: 100%;
    height: 220px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .title {
    overflow: hidden;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: var(--m-nav-icon-box-size);
    font-size: 16px !important;
    font-weight: 600;
    text-decoration: none;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-left {
      .label {
        margin-right: 0.5rem;
        padding: 3px 6px;
        background-color: #5bc0de;
        color: #fff;
        border-radius: 4px;
        font-size: 13px;
      }
    }
  }

  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    /* margin: calc(var(--m-nav-box-gap) - 2px) 0 calc(var(--m-nav-box-gap) - 2px) 0; */
    margin: 0 0 calc(var(--m-nav-box-gap) - 2px) 0;
    line-height: 1.5;
    font-size: 12px;
    color: var(--vp-c-text-2);
  }
}

@media (max-width: 960px) {
  .m-nav-link {
    --m-nav-icon-box-size: 36px;
    --m-nav-icon-size: 20px;
    --m-nav-box-gap: 8px;

    .title {
      font-size: 14px;
    }
  }
}
</style>
