import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "StreamElements Docs",
  tagline: "The official documentation for StreamElements",
  favicon: "/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.streamelements.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "StreamElements", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  scripts: [
    {
      src: "https://docs.streamelements.com/z/i.js",
      referrerpolicy: "origin",
    },
  ],


  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/Streamelements/docs/tree/master/",
          routeBasePath: "/",
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/open_graph_preview.jpg",
    navbar: {
      title: "StreamElements Docs",
    },
    algolia: {
      appId: 'WL7E3ZBLD0',
      apiKey: '8d7a31c978e30c62a658b21a97d88dfd',
      indexName: 'streamelements',
    },
    metadata: [
      {
        name: "keywords",
        content:
          "StreamElements, Commands, Timers, Variables, Twitch, YouTube, Command Variables, Chatbot Modules, Chatbot Timers, Spam Filters, Documentation, Guides, Tutorials",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://docs.streamelements.com',
        },
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: "dark",
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/chatbot/gettingstarted/customcommands/creating",
            },
            {
              label: "Variables",
              to: "/chatbot/variables",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitch",
              href: "https://twitch.tv/StreamElements",
            },
            {
              label: "Discord",
              href: "https://discord.gg/se",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/StreamElements",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/StreamElements",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} StreamElements.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
