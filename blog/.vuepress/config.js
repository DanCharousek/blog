module.exports = {
  title: 'Web Journal',
  description: 'This is my personal blog where I try to formulate my thoughts on variety of topics',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/DanCharousek',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/DanCharousek',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/dan-charousek/',
        },
        {
          type: 'gitlab',
          link: 'https://gitlab.com/DanCharousek'
        }
      ],
      copyright: [
        {
          text: 'Copyright © 2020-present Dan Charousek',
          link: 'https://dan.charousek.dev/',
        },
      ],
    },
  },
}
