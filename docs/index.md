---
layout: home

hero:
  name: 导航-资源库
  text: 收集一些日常使用的网站资源和网站社区
  tagline: 书山有路勤为径，学海无涯苦作舟。
  image:
    src: /logo.png
    alt: 前端导航网站
  actions:
    - text: 开始阅读
      link: /front/
    - text: 前端资源
      link: https://notes.fe-mm.com
      theme: alt
    - text: 编程笔记
      link: https://netease-music.fe-mm.com
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

<!-- 样式 -->
<style>
/*爱的魔力转圈圈*/
/* hero-image */
.VPHome .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}
/* features的样式 */
.VPHome .details small {
  opacity: 0.8;
}
/* features的样式 */
.VPHome .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
