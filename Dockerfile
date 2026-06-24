# lux.network — static-export site served by the Hanzo static plugin.
#
# Build stage produces Next.js `output: 'export'` into ./out, then bakes it
# into ghcr.io/hanzoai/static (the canonical Hanzo Ingress static server,
# FROM scratch, serves /public on :3000). This is the unified-infra path:
# one semver image, declared in luxfi/universe, built by the self-hosted
# arcd runner, served behind hanzoai/ingress + hanzoai/gateway on DOKS.
# No GitHub Pages, no Cloudflare-by-hand.

# --- build stage: produce the static export ---
FROM node:22.14.0-alpine AS build
RUN apk add --no-cache libc6-compat python3 make g++ git
RUN corepack enable && corepack prepare pnpm@10.12.4 --activate
WORKDIR /app

# Cacheable dependency layer.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build the static export (next.config.mjs has output: 'export' -> ./out).
# NEXT_PUBLIC_LOGIN_SITE_URL must be set at build time or @hanzo/auth's
# AuthWidget renders a literal "undefined" IAM redirect href.
ARG NEXT_PUBLIC_LOGIN_SITE_URL=https://lux.id/login
ENV NEXT_PUBLIC_LOGIN_SITE_URL=${NEXT_PUBLIC_LOGIN_SITE_URL}
COPY . .
ENV NODE_OPTIONS="--max-old-space-size=8192"
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build && test -f out/index.html

# --- runtime stage: Hanzo static plugin serving the export ---
# ghcr.io/hanzoai/static is FROM scratch; ENTRYPOINT ["/static"] defaults to
# --root /public --port 3000. We bake the export into /public.
FROM ghcr.io/hanzoai/static:0.1.0
COPY --from=build /app/out /public
EXPOSE 3000
# Loosen CSP just enough for the exported site's inline styles / web fonts /
# images; everything else stays locked to 'self'. (Default is default-src 'none'.)
ENV HANZO_STATIC_CSP="default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; font-src 'self' data:; script-src 'self'; connect-src 'self' https://api.lux.network"
ENTRYPOINT ["/static", "--root", "/public", "--port", "3000"]
