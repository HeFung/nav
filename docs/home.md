---
layout: home

hero:
  name: 导航资源库
  text: 收集网站资源
  tagline: 书山有路勤为径，学海无涯苦作舟。
  image:
    src: /logo.png
    alt: 前端导航网站
  actions:
    - text: 影视点播
      link: https://vodtv.cn
    - text: 打赏赞助
      link: https://hefung.github.io/donate
      theme: alt
    - text: 编程笔记
      link: https://be.vodtv.cn/
      theme: alt
features:
  - icon: 📖
    title: 编程物语
    details: 整理前端常用知识网站，学习各种编程语言。
    link: /coding/common-framework/
    linkText: 前端网站
  - icon: 📘
    title: 常用AI
    details: 收集一些常用的AI工具，提高工作效率。
    link: /ai/
    linkText: AI网站
  - icon: 💡
    title: 辅助办公
    details: 收集一些常用的办公软件，提高工作效率。
    link: /office/
    linkText: 办公资源
  - icon: 🧰
    title: 设计灵感
    details: 收集一些常用的设计网站，提高设计水平。
    link: /design/
    linkText: 学习网站
  - icon: 🐞
    title: 科普娱乐
    details: 收集一些常用的科普娱乐网站，丰富业余生活。
    link: /popular-science/
    linkText: 科普网站
  - icon: 💯
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">一个小小的全栈开发</small>'
    link: https://github.com/hefung
---

<script setup>
import { FRIEND_DATA } from './home/friend-data';
</script>

<ClientOnly>
  <MNavLinks  v-for="{ title, items } in FRIEND_DATA" :title="title" :items="items" />
</ClientOnly>
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #0078D4 45%, #41d1ff);
}
</style>

