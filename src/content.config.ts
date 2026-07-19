import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        /**
         * Streaming platforms a command/feature supports.
         * Rendered as badges under the page title (see PageTitle override).
         */
        platforms: z.array(z.enum(['twitch', 'youtube', 'kick'])).optional(),
        /** SEO keywords emitted as a <meta name="keywords"> tag (see Head override). */
        keywords: z.array(z.string()).optional(),
        /**
         * WebSocket topic metadata, rendered as an info row under the page
         * title on topic pages (see PageTitle override / TopicInfo).
         * Named wsTopic because `topic` is reserved by starlight-sidebar-topics.
         */
        wsTopic: z.string().optional(),
        scope: z.string().optional(),
        status: z.enum(['stable', 'in-development']).optional(),
        /**
         * Chatbot variable metadata, rendered as an info row under the page
         * title on variable pages (see PageTitle override / VariableInfo).
         */
        syntax: z.string().optional(),
        arguments: z.enum(['required', 'optional', 'none']).optional(),
        /**
         * Chatbot command metadata, rendered as an info row under the page
         * title on command pages (see PageTitle override / CommandInfo) and
         * consumed by the generated command overview + sidebar.
         * `access` values mirror bot/levels.go in the chatbot repo (the
         * user-facing subset; Admin/2000+ are internal). `category` mirrors the
         * groups in commands/default/index.
         */
        aliases: z.array(z.string()).optional(),
        /** Short one-line blurb for listing tables (command/variable overviews),
         *  distinct from the SEO `description`. */
        summary: z.string().optional(),
        access: z
          .enum(['everyone', 'subscriber', 'regular', 'vip', 'moderator', 'super-moderator', 'broadcaster'])
          .optional(),
        requires: z.string().optional(),
        cooldown: z.string().optional(),
        category: z
          .enum([
            // Command categories (see commands/default overview).
            'points-loyalty',
            'games-betting',
            'giveaways-raffles',
            'song-requests',
            'viewer-queue',
            'store',
            'stream-management',
            'moderation',
            'bot-command-management',
            'fun-emotes',
            'stream-info-utility',
            // Variable categories (see variables overview). `stream-management`
            // is shared with commands; the overview tables also filter by path
            // so there is no cross-contamination.
            'stream-info',
            'user-chat',
            'emotes',
            'counters-data',
            'games',
            'utility-web',
            'fun',
          ])
          .optional(),
      }),
    }),
  }),

  /**
   * Cloudflare-style changelog. One MDX file per entry at
   * src/content/changelog/{product}/YYYY-MM-DD-slug.mdx — the folder is the
   * entry's primary product and is auto-added to `products` at build time.
   */
  changelog: defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/changelog' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      products: z.array(z.enum(['chatbot', 'overlays', 'websockets', 'dashboard', 'docs'])).default([]),
      /** Hide from the feed and RSS without deleting the file. */
      hidden: z.boolean().default(false),
    }),
  }),
};
