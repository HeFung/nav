import { defineConfig } from 'vitepress';

import footer from './config/footer';
import head from './config/head';
import nav from './config/nav';
import sidebar from './config/sidebar';
import socialLinks from './config/socialLinks';

console.log(process.env.APP_BASE_PATH, 'process.env.APP_BASE_PATH')

export default defineConfig({
  base: "/nav/", 
  title: "导航-资源库", // 标题
  description: "收集一些日常使用的网站资源和网站社区", // 描述
  lang: "zh-CN", // 设置语言
  head, // 设置favicon
  outDir: "dist", // 打包目录
   srcDir: 'docs', // 文档目录

  lastUpdated: true, // 开启最后更新时间
  cleanUrls: true, // 开启无后缀的url

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },

  // 指定public目录路径 
  vite: {
    publicDir: "../public"
  },

  themeConfig: {
    i18nRouting: false,
    logo: "/logo.png",
    // 导航栏
    nav,
    // 侧边栏
    sidebar,
    // Github链接
    socialLinks,
    // 右侧目录
    outline: {
      level: 'deep', // ## 或 ###
      label: '页面导航'
    },
    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // full
        timeStyle: 'short', // medium
      },
    },

    /* Algolia DocSearch 配置 */
    // algolia,
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    /* 生成站点地图 */
    // sitemap: {
    //   hostname: 'https://example.com',
    // },
    footer,
  }
})
