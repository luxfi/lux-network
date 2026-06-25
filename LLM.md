# network — lux.network

**Org:** lux-apps · **Ecosystem:** lux · **Path:** `/Users/a/work/lux/lux-apps/network`
**Origin:** https://github.com/luxfi/lux-network.git (also checked out at `~/work/lux/luxfi/lux-network`)
**Package:** `@luxfi/network` · **Live:** https://lux.network (Cloudflare-fronted)

`CLAUDE.md` is a symlink to this file.

## What this is

The flagship lux.network site: a **full dynamic Next.js 14 app** (NOT a static
export). Real `@luxfi/ui` Header/Footer chrome (Lux ▼ logo + mega-menus),
`@hanzo/commerce` crypto-native `/checkout`, `@hanzo/auth` login routed to
**lux.id**, auth API routes, device/auth middleware, and a pure-**monochrome**
theme (zero gold/amber/orange). The post-quantum landing content (14 chains,
hero copy) sits on top of that full chrome.

## Architecture (one way)

- **Dynamic, `output: 'standalone'`** Node server (`next.config.mjs`). The app
  has API routes (`src/app/api/auth/{login,logout,set-auth-token,clear-auth-token}`),
  `src/middleware.ts` (`determineDeviceMW`), SSR chrome, and SSR commerce — none
  of which work under `output: 'export'`. Do **not** re-introduce static export.
- **Pages**: `/` (HomeContent), `/[slug]` (coin, validator — server segment →
  client `ProductDetailContent`), `/chain/[id]` + `/docs/[chain]` (14 chains,
  SSG), `/docs`, `/checkout` (force-dynamic).
- **Chrome lives in client components.** The `@luxfi/ui` Header/Footer nav passes
  function props that cannot cross an RSC server→client boundary, so every page
  that renders them is a client component (or a server segment that delegates to
  one). Route segments that embed auth/commerce are `export const dynamic =
  'force-dynamic'`.
- **Theme**: monochrome only. `src/data/chains.ts` chain cards + `page` use a
  single neutral `from-foreground/[0.06]` gradient — never per-chain rainbow,
  never gold/amber/orange. Hero CTAs are `bg-primary`/`bg-accent`/outline (all
  monochrome in the dark theme).
- **Login → lux.id**: `@hanzo/auth` AuthWidget builds
  `${NEXT_PUBLIC_LOGIN_SITE_URL}?redirectUrl=…`. Set
  `NEXT_PUBLIC_LOGIN_SITE_URL=https://lux.id/login` at **build** time (Dockerfile
  ARG + CI env) or the link bakes as `undefined`.

## Required patches (`patches/`, via pnpm `patchedDependencies`)

- **`@luxfi/ui@5.5.3`** — point the header/footer `LuxLogo` at the canonical
  `@luxfi/logo` ▼ mark (monochrome, `variant='white'`).
- **`@hanzo/auth@2.5.8`** — fix invalid TS in `server/firebase-support.ts`
  (`const { …, type App } = await import(...)` → drop the inline `type` from the
  runtime destructure; the build otherwise fails to compile the auth API routes).

## Two non-obvious gotchas (do not regress)

1. **SVGR loader is required.** `next.config.mjs` adds the `@svgr/webpack` rule so
   `*.svg` imports become React components. `@luxfi/ui`'s footer (community
   column) imports an inline `.svg` as a component; without the loader it
   resolves to an asset object and React throws "Element type is invalid … got:
   object" on hydration (whole page goes black). This was the real cause behind a
   cascade of red-herring symptoms — fix it here, not by stripping features.
2. **Body un-hide.** `@luxfi/ui`'s RootLayout ships `<body style="display:none">`
   and relies on its `<Analytics/>` effect to reveal it; that loses a hydration
   race on the standalone build, leaving the page invisible. `src/components/ShowBody.tsx`
   pins the body visible with a `MutationObserver`. Keep it mounted in `layout.tsx`.

## Build & verify

```bash
# build the standalone server (validates the whole app compiles)
NEXT_PUBLIC_LOGIN_SITE_URL=https://lux.id/login pnpm build   # -> .next/standalone/server.js

# run it like the container does (copy assets, then serve)
cp -r .next/static .next/standalone/.next/static && cp -r public .next/standalone/public
( cd .next/standalone && PORT=3000 NEXT_PUBLIC_LOGIN_SITE_URL=https://lux.id/login node server.js )

# real-browser proof: logo, 0 gold, mega-menu, checkout, login→lux.id, no crash
BASE=http://localhost:3000 node e2e/restore-verify.mjs
```

Gotcha when testing locally: kill stale `node server.js` by **port** (`lsof
-tiTCP:<port> -sTCP:LISTEN | xargs kill -9`), not `pkill -f` — detached servers
serve an old build's HTML with mismatched chunk hashes → all JS 400s → black page.

## Deploy (unified infra)

`Dockerfile` → multi-stage Node runner baking `.next/standalone` + `.next/static`
+ `public`. CI on luxfi/lux-network (`lux-build` self-hosted ARC runner on evo —
no GitHub builders) publishes `ghcr.io/luxfi/lux-network:<semver>`; the tag is
pinned in `luxfi/universe` (`k8s/lux-web/lux-network.yaml`, namespace `lux-web`),
reconciled onto `do-sfo3-lux-k8s` behind hanzoai/ingress + cert-manager, fronted
by Cloudflare (A `lux.network` → ingress LB, proxied). The universe Deployment's
container/probes must target the Node server (port 3000, probe `/`) — NOT the old
`hanzoai/static` + `/healthz` static-export variant.

## Sibling repos

See `/Users/a/work/lux/lux-apps/LLM.md`.
