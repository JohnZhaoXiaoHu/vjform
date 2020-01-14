module.exports = {
  lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
  title: "JForm",
  description: "render ui by json expression",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" }
    ],
    sidebar: [
      {
        title: "基础",
        collapsable: false,
        children: ["/guide/basic/basic-form", "/guide/basic/2"]
      }
    ],
    sidebarDepth: 2
  },
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2] }
  },
  plugins: [
    [
      "vuepress-plugin-container",
      {
        type: "right",
        defaultTitle: ""
      }
    ]
  ]
};
