import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',
  title: "导航-资源库", // 标题
  description: "收集一些日常使用的网站资源和网站社区", // 描述
  lang: "zh-CN", // 设置语言
  head, // 设置favicon
  srcDir: 'docs', // 文档目录

  lastUpdated: true, // 开启最后更新时间
  cleanUrls: true, // 开启无后缀的url

  /* markdown 配置 */
 /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    i18nRouting: false,
    logo: "/logo.png",
    // 导航栏
    nav,
    // 侧边栏
    sidebar,
    // Github链接
   socialLinks: [{ icon: 'github', link: 'https://github.com/hefung/nav'}],   
   search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "没有找到结果",
            resetButtonTitle: "清除搜索条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
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
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2019-present hefung'
    },
  }
})
