import { viteBundler } from '@vuepress/bundler-vite'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { markdownContainerPlugin } from '@vuepress/plugin-markdown-container'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { searchPlugin } from '@vuepress/plugin-search'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { reportPlugin } from './plugins/report.js'
import { worksPlugin } from './plugins/works.js'

export default defineUserConfig({
  lang: 'ja-JP',
  title: '',
  description:
    '香川大学創造工学部造形・メディアデザインコース 現象デザイン研究室の公式サイトです',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
  ],

  bundler: viteBundler(),

  theme: defaultTheme({
    logo: '/assets/img/logo3.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.md' },
      { text: 'Member', link: '/member.md' },
      { text: 'Report', link: '/report.md' },
      { text: 'Works', link: '/works.md' },
      { text: 'Access', link: '/access.md' },
    ],
    sidebar: false,
    contributors: false,
    editLink: false,
    lastUpdated: true,
    lastUpdatedText: '最終更新',
  }),

  plugins: [
    reportPlugin(),
    worksPlugin(),
    // 活動報告ページの「::: theorem 掲載日時:YYYY-MM-DD」ブロック
    markdownContainerPlugin({
      type: 'theorem',
      before: (info) =>
        `<div class="theorem">${info ? `<p class="title">${info}</p>` : ''}\n`,
      after: () => '</div>\n',
    }),
    googleAnalyticsPlugin({ id: 'G-SR7F43NSVG' }),
    searchPlugin({
      locales: { '/': { placeholder: '検索' } },
    }),
    sitemapPlugin({ hostname: 'https://aozoraux.github.io' }),
    pwaPlugin({
      // 旧サイトの Service Worker を確実に置き換えるため、更新があれば通知する
      update: 'hint',
      cacheHTML: true,
      themeColor: '#3e8baf',
      favicon: '/images/favicon.ico',
      manifest: {
        name: '現象デザイン研究室 | 香川大学創造工学部 造形・メディアデザインコース',
        short_name: 'P!P Design Lab.',
        icons: [{ src: '/logo.png', sizes: '127x127', type: 'image/png' }],
      },
    }),
  ],
})
