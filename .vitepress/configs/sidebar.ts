import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] =  {
  '/coding/common-framework/': [
    {
      text: 'CSS生态',
      collapsed: false,
      items: [
        { text: 'CSS框架', link: '/coding/common-framework/' },
        { text: 'CSS教程', link: '/coding/common-framework/course/' },
        { text: 'CSS项目', link: '/coding/common-framework/project/' },
        { text: 'CSS组件库', link: '/coding/common-framework/components/' },
        { text: 'CSS动画库', link: '/coding/common-framework/animate/' },
        { text: 'CSS阴影库', link: '/coding/common-framework/shadow/' },
        { text: 'CSS代码生成器', link: '/coding/common-framework/code-generate/' }
      ]
    },
    {
      text: 'Vue生态',
      collapsed: true,
      items: [
        { text: 'Vue全家桶', link: '/coding/common-framework/vue/' }
      ]
    },
    {
      text: 'React生态',
      collapsed: true,
      items: [
        { text: 'React全家桶', link: '/coding/common-framework/react/' }
      ]
    },
    {
      text: 'Node生态',
      collapsed: true,
      items: [
        { text: 'Node框架', link: '/coding/common-framework/node-frame/' },
        { text: '构建打包', link: '/coding/common-framework/node-build/' }

      ]
    },
    {
      text: '小程序生态',
      collapsed: true,
      items: [
        { text: '小程序框架', link: '/coding/common-framework/miniprogram/' }
      ]
    },
    {
      text: '跨平台生态',
      collapsed: true,
      items: [
        { text: '跨平台框架', link: '/coding/common-framework/cross-platform/' }
      ]
    },
    {
      text: '图标库',
      collapsed: true,
      items: [
        { text: '图标库', link: '/coding/common-framework/icon/' },
        { text: '插图库', link: '/coding/common-framework/illustration/' }
      ]
    },
    {
      text: '颜色库',
      collapsed: true,
      items: [
        { text: '颜色库', link: '/coding/common-framework/color/' }
      ]
    }
  ],
}