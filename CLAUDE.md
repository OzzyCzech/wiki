# ozzyczech.cz site

Astro Starlight site that publishes content from [OzzyCzech/wiki](https://github.com/OzzyCzech/wiki).

This repo holds **only the site build/deploy** — themes, layout, Astro config, GitHub Actions. The wiki content (Markdown/MDX) lives in a separate repo and is pulled at build time into `src/content/docs/`.

## Local development

```bash
npm install
npm run dev
```

`predev` and `prebuild` automatically clone (or pull) the wiki into `src/content/docs/` via `scripts/sync-content.mjs`. To sync manually:

```bash
npm run sync
```

## Deploy

GitHub Pages, configured in `.github/workflows/deploy.yml`:

- Push to `main` in this repo → rebuilds and deploys
- Push to `main` in the wiki repo → fires `repository_dispatch` (`wiki-content-updated`) → rebuilds and deploys

The wiki workflow needs a PAT with `repo` scope stored as `SITE_DISPATCH_TOKEN` secret in the wiki repo.

## What lives where

- **Content (Markdown/MDX):** [OzzyCzech/wiki](https://github.com/OzzyCzech/wiki) — see its `CLAUDE.md` for content authoring conventions
- **Sidebar / navigation:** `astro.config.mjs` here
- **Site styling:** `src/` (excluding `content/docs/`)
