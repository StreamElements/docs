# Docs

This repository contains the source code for the StreamElements documentation, built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

## Development

```sh
npm install
npm run dev      # dev server at localhost:4321
npm run build    # production build (also validates all internal links)
npm run preview  # preview the production build
```

Requires Node.js >= 22.12.

## Layout

- `src/content/docs/` — documentation pages (Markdown/MDX). The sidebar is configured per topic in `astro.config.mjs`.
- `src/content/changelog/{product}/YYYY-MM-DD-slug.mdx` — changelog entries. The folder name is the entry's product; entries appear at `/changelog/` with per-product feeds and RSS.
- `src/components/` — shared components (`ChatExample`, `PlatformBadges`) and Starlight overrides.
- `grammars/` — the custom `streamelements` syntax-highlighting grammar for command examples.

Command/feature pages can declare `platforms: [twitch, youtube, trovo, kick]` in frontmatter to render platform badges under the title.

## Deployment notes

The site builds to static output in `dist/`. Old Docusaurus URLs are preserved via redirects in `astro.config.mjs` (emitted as meta-refresh pages); if the host supports real HTTP redirects, prefer configuring them there. The legacy `/patch-notes/rss.xml` and `/patch-notes/atom.xml` feed URLs keep serving the changelog feed directly.

### Contributing

We welcome contributions to this document. Please see our [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

<a href="https://github.com/streamelements/docs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=streamelements/docs" />
</a>
