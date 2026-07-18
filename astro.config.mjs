// @ts-check
import fs from 'node:fs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmsTxt from 'starlight-llms-txt';
import mermaid from 'astro-mermaid';

const streamelementsGrammar = JSON.parse(
  fs.readFileSync('./grammars/streamelements.tmLanguage.json', 'utf-8'),
);

// Preserve old Docusaurus URLs that moved during the revamp. Astro builds
// these as meta-refresh pages (works on any host / local preview); the
// emitRedirectsFile integration below also writes them to dist/_redirects so
// Cloudflare Workers serves real HTTP 301s, which take precedence there.
const redirects = {
    '/chatbot/gettingstarted/commands': '/chatbot/getting-started',
    '/chatbot/gettingstarted/timers': '/chatbot/getting-started',
    // Pages whose old URLs came from Docusaurus id: frontmatter, not filenames.
    '/chatbot/modules/emote-bingo': '/chatbot/modules/bingo',
    '/overlays/custom-code-alertboxes': '/overlays/custom-code-in-alertbox',
    '/overlays/custom-widget-events': '/overlays/events',
    '/chatbot/changelog': '/changelog',
    '/api': 'https://dev.streamelements.com/',
    '/patch-notes': '/changelog',
    // Legacy feed URLs are served as real feeds (src/pages/patch-notes/) since
    // feed readers don't follow meta-refresh redirects.
    '/patch-notes/rss-feed-test': '/changelog',
    '/patch-notes/patch-notes-coming-soon': '/changelog',
    '/patch-notes/archive': '/changelog',
    '/patch-notes/tags': '/changelog',
    '/websockets/topics/chatbot/chatbot-status': '/websockets/topics/chatbot-status',
    // Old URL used the page's Docusaurus id (chatbot-counters), not its filename.
    '/websockets/topics/chatbot/chatbot-counters': '/websockets/topics/chatbot-counters',
    '/websockets/topics/chatbot/modules-emotecombo': '/websockets/topics/chatbot-modules-emotecombo',
    '/websockets/topics/chatbot/modules-pyramid': '/websockets/topics/chatbot-modules-pyramid',
    '/websockets/topics/chatbot/timeout': '/websockets/topics/chatbot-timeout',
};

/** Writes dist/_redirects (Cloudflare redirects file) from the map above.
    Each path is emitted with and without a trailing slash so both forms 301. */
function emitRedirectsFile() {
  return {
    name: 'emit-cloudflare-redirects',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const lines = Object.entries(redirects).flatMap(([from, to]) => {
          const variants = from.endsWith('/') ? [from] : [from, `${from}/`];
          return variants.map((path) => `${path} ${to} 301`);
        });
        fs.writeFileSync(new URL('_redirects', dir), `${lines.join('\n')}\n`);
      },
    },
  };
}

export default defineConfig({
  site: 'https://docs.streamelements.com',

  // URLs have no trailing slash (parity with the old Docusaurus site, so
  // inbound links and search results resolve without a 301 hop). Output stays
  // in directory format (/path/index.html); Cloudflare serves /path from it
  // via html_handling: 'drop-trailing-slash' in wrangler.jsonc.
  trailingSlash: 'never',

  redirects,

  integrations: [
    emitRedirectsFile(),
    mermaid({ autoTheme: true }),
    starlight({
      title: 'StreamElements Docs',
      description: 'The official documentation for StreamElements',
      // Brand mark from @streamelements/assets (true vector); the PNG/ICO
      // fallbacks below mirror the dashboard's favicon set.
      favicon: '/favicon.svg',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/StreamElements/docs' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/se' },
        { icon: 'twitch', label: 'Twitch', href: 'https://www.twitch.tv/streamelements' },
        { icon: 'x.com', label: 'X', href: 'https://twitter.com/StreamElements' },
      ],
      editLink: {
        baseUrl: 'https://github.com/StreamElements/docs/edit/master/',
      },
      lastUpdated: true,
      customCss: ['@fontsource-variable/inter', './src/styles/custom.css'],
      head: [
        // Favicon fallbacks + touch icons (same set as the dashboard app).
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/site.webmanifest' } },
        {
          tag: 'script',
          attrs: { src: 'https://docs.streamelements.com/z/i.js', referrerpolicy: 'origin', defer: true },
        },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://docs.streamelements.com' } },
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: 'https://docs.streamelements.com/img/open_graph_preview.jpg' },
        },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'meta', attrs: { name: 'twitter:site', content: '@StreamElements' } },
        { tag: 'meta', attrs: { name: 'twitter:creator', content: '@StreamElements' } },
        { tag: 'meta', attrs: { name: 'robots', content: 'max-image-preview:large' } },
      ],
      components: {
        PageTitle: './src/components/overrides/PageTitle.astro',
        Head: './src/components/overrides/Head.astro',
      },
      expressiveCode: {
        defaultProps: { wrap: true },
        shiki: {
          langs: [streamelementsGrammar],
        },
      },
      plugins: [
        starlightLinksValidator({
          errorOnLocalLinks: false,
          // Changelog routes are custom pages the validator can't see.
          exclude: ['/changelog', '/changelog/**'],
        }),
        starlightLlmsTxt(),
        starlightSidebarTopics(
          [
            {
              label: 'Chatbot',
              link: '/chatbot',
              icon: 'comment',
              items: [
                { label: 'Overview', slug: 'chatbot' },
                { label: 'Getting Started', slug: 'chatbot/getting-started' },
                {
                  label: 'Commands',
                  items: [
                    { label: 'Overview', slug: 'chatbot/commands' },
                    { label: 'Custom Commands', slug: 'chatbot/commands/custom' },
                    {
                      label: 'Default Commands',
                      collapsed: true,
                      items: [{ autogenerate: { directory: 'chatbot/commands/default' } }],
                    },
                  ],
                },
                { label: 'Variables', collapsed: true, items: [{ autogenerate: { directory: 'chatbot/variables' } }] },
                { label: 'Modules', collapsed: true, items: [{ autogenerate: { directory: 'chatbot/modules' } }] },
                { label: 'Spam Filters', collapsed: true, items: [{ autogenerate: { directory: 'chatbot/filters' } }] },
                { label: 'Timers', slug: 'chatbot/timers' },
                { label: 'Quotes', slug: 'chatbot/quotes' },
                { label: 'Counters', slug: 'chatbot/counters' },
                { label: 'Troubleshooting', slug: 'chatbot/troubleshooting' },
              ],
            },
            {
              label: 'Overlays',
              link: '/overlays',
              icon: 'desktop',
              items: [
                { label: 'Overview', slug: 'overlays' },
                { label: 'Getting Started', slug: 'overlays/getting-started' },
                {
                  label: 'Your First Custom Widget',
                  slug: 'overlays/first-custom-widget',
                  badge: { text: 'Tutorial', variant: 'tip' },
                },
                {
                  label: 'Custom Widgets',
                  items: [
                    { label: 'Code Editor', slug: 'overlays/widget-structure' },
                    { label: 'SE_API Reference', slug: 'overlays/custom-widget' },
                    { label: 'Widget Events', slug: 'overlays/events' },
                    { label: 'Session Data Reference', slug: 'overlays/session-data' },
                  ],
                },
                { label: 'Custom Code in AlertBoxes', slug: 'overlays/custom-code-in-alertbox' },
                { label: 'Editor Shortcuts', slug: 'overlays/overlay-editor-shortcuts' },
              ],
            },
            {
              label: 'WebSockets',
              link: '/websockets',
              icon: 'server',
              items: [
                { label: 'Introduction', slug: 'websockets' },
                { label: 'Client Examples', slug: 'websockets/examples' },
                {
                  label: 'Topics',
                  items: [
                    { label: 'Overview', slug: 'websockets/topics' },
                    {
                      label: 'Session & Stream',
                      items: [
                        'websockets/topics/channel-session-update',
                        'websockets/topics/channel-session-reset',
                        'websockets/topics/channel-stream-status',
                      ],
                    },
                    {
                      label: 'Activity & Engagement',
                      items: [
                        'websockets/topics/channel-activities',
                        'websockets/topics/channel-chat-message',
                        'websockets/topics/channel-tips',
                        'websockets/topics/channel-tips-moderation',
                        'websockets/topics/channel-contests',
                        'websockets/topics/channel-giveaway',
                        'websockets/topics/channel-songrequest',
                      ],
                    },
                    {
                      label: 'Overlays',
                      items: [
                        'websockets/topics/channel-overlay-action',
                        'websockets/topics/channel-overlay-broadcast',
                        'websockets/topics/channel-overlay-update',
                      ],
                    },
                    {
                      label: 'Chatbot',
                      items: [
                        'websockets/topics/chatbot-status',
                        'websockets/topics/chatbot-counters',
                        'websockets/topics/chatbot-modules-emotecombo',
                        'websockets/topics/chatbot-modules-pyramid',
                        { slug: 'websockets/topics/chatbot-timeout', badge: { text: 'In dev', variant: 'caution' } },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: 'API Reference',
              link: 'https://dev.streamelements.com/',
              icon: 'external',
              attrs: { target: '_blank', rel: 'noopener' },
            },
            {
              label: 'Changelog',
              link: '/changelog',
              icon: 'rocket',
            },
          ],
          {
            exclude: ['/', '/404'],
          },
        ),
      ],
    }),
  ],
});
