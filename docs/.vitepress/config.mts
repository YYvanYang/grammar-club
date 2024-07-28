// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '语法俱乐部',
  description: 'Grammar Club in Chinese',

  themeConfig: {
    logo: '/cover.png',
    nav: [
      { text: '目录', link: '/content/menu' }
    ],
    sidebar: [
      { text: '序', link: '/content/Preface' },
      { text: '前言', link: '/content/Introduction' },
      { text: '目录', link: '/content/menu' },
      {
        text: '第一篇 初级句型--简单句',
        items: [
          { text: 'Chapter 1', link: '/content/Chapter01' },
          { text: 'Chapter 2', link: '/content/Chapter02' },
          { text: 'Chapter 3', link: '/content/Chapter03' },
          { text: 'Chapter 4', link: '/content/Chapter04' },
          { text: 'Chapter 5', link: '/content/Chapter05' },
          { text: 'Chapter 6', link: '/content/Chapter06' },
          { text: 'Chapter 7', link: '/content/Chapter07' },
          { text: 'Chapter 8', link: '/content/Chapter08' },
          { text: 'Chapter 9', link: '/content/Chapter09' },
          { text: 'Chapter 10', link: '/content/Chapter10' },
          { text: 'Chapter 11', link: '/content/Chapter11' }
        ]
      },
      {
        text: '第二篇 中级句型--复句',
        items: [
          { text: 'Chapter 12', link: '/content/Chapter12' },
          { text: 'Chapter 13', link: '/content/Chapter13' },
          { text: 'Chapter 14', link: '/content/Chapter14' },
          { text: 'Chapter 15', link: '/content/Chapter15' }
        ]
      },
      {
        text: '第三篇 高级句型--简化从句',
        items: [
          { text: 'Chapter 16', link: '/content/Chapter16' },
          { text: 'Chapter 17', link: '/content/Chapter17' },
          { text: 'Chapter 18', link: '/content/Chapter18' },
          { text: 'Chapter 19', link: '/content/Chapter19' },
          { text: 'Chapter 20', link: '/content/Chapter20' },
          { text: 'Chapter 21', link: '/content/Chapter21' },
          { text: 'Chapter 22', link: '/content/Chapter22' }
          
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YYvanYang/grammar-club' }
    ]
  },

  vite: {
    resolve: {
      alias: {
        '@components': '/docs/.vitepress/theme/components'
      }
    }
  }
})