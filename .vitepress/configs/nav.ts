import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  {
    text: '编程',
    items: [
      { text: '常用框架', link: '/coding/common-framework/' },
      { text: '博客社区', link: '/coding/blog-community/' },
      { text: '代码托管', link: '/coding/code-hosting/' },
      { text: '源码资源', link: '/coding/code-resource/' },
      { text: '求职兼职', link: '/coding/apply-job/' },
      { text: '前端导航', link: '/coding/frontend-nav/' },
      { text: '在线工具', link: '/coding/tools/' }
    ]
  },
  { text: 'AI', link: '/ai/' },
  {
    text: '剪辑',
    items: [
      { text: '视频剪辑', link: '/montage/' },
      { text: '音乐剪辑', link: '/montage/music/' },
    ]

  },
  { text: '办公', link: '/office/' },
  { text: '设计', link: '/design/' },
  { text: '娱乐', link: '/recreation/' },
  { text: '科普', link: '/popular-science/' },
  { text: '图库', link: '/gallery/' },
  {
    text: '常用',
    items: [
      { text: '综合学习', link: '/used/study/' },
      { text: '电脑软件', link: '/used/software/' },
      { text: '在线工具', link: '/used/tools/' },
      { text: '魔法VPN', link: '/used/vpn/' },
      { text: '友链导航', link: '/used/friend-link/' },
    ]
  },
]