import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Celf CLI",
  description: "Celf CLI Document",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Github', link: 'https://github.com/cellinlab/celf-cli' }
    ],

    sidebar: [
      {
        text: 'Guide',
        path: '/guide',
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/cellinlab' },
      { icon: 'github', link: 'https://github.com/cellinlab' }
    ],

    footer: {
      message: 'Built with ❤️ by Cell',
      copyright: `Copyright © Cellinlab 2019-${(new Date()).getFullYear()}`
    }
  }
})
