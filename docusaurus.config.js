// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'StreamElements Docs',
  tagline: 'The official documentation for StreamElements',
  favicon: '/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.streamelements.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'StreamElements', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Streamelements/docs/tree/master/',
          routeBasePath: '/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/open_graph_preview.jpg',
      navbar: {
        title: 'StreamElements Docs',
      },
      metadata: [
        {name: 'keywords', content: 'StreamElements, Commands, Timers, Variables, Twitch, YouTube, Command Variables, Chatbot Modules, Chatbot Timers, Documentation, Guides, Tutorials'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      colorMode: {
        respectPrefersColorScheme: true,
        defaultMode: 'dark'
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/chatbot/gettingstarted/customcommands/creating',
              },
              {
                label: 'Variables',
                to: '/chatbot/variables',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitch',
                href: 'https://twitch.tv/StreamElements',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/se',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/StreamElements',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/StreamElements',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} StreamElements.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
