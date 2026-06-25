# lux.network — full dynamic Next.js app served by a Node server.
#
# This is NOT a static export. The app has auth API routes (/api/auth/*),
# src/middleware.ts (device + auth), an SSR @luxfi/ui Header/Footer chrome, and
# the @hanzo/commerce crypto-native /checkout — none of which can run under
# `output: 'export'`. next.config.mjs uses `output: 'standalone'`, so we bake
# the standalone Node server (.next/standalone/server.js) + static assets into a
# slim node:alpine runtime. Built by luxfi/lux-network self-hosted CI (the
# `lux-build` ARC runner on evo — never GitHub builders), published to
# ghcr.io/luxfi/lux-network:<semver>, pinned in luxfi/universe, served behind
# hanzoai/ingress on DOKS, fronted by Cloudflare. See LLM.md.

# --- build stage ---
FROM node:22.14.0-alpine AS build
RUN apk add --no-cache libc6-compat python3 make g++ git
RUN corepack enable && corepack prepare pnpm@10.12.4 --activate
WORKDIR /app

# Cacheable dependency layer (lockfile + patches drive resolution).
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY patches ./patches
RUN pnpm install --frozen-lockfile

# Build the standalone server. NEXT_PUBLIC_LOGIN_SITE_URL must be set at build
# time — @hanzo/auth's AuthWidget bakes the lux.id login URL into the bundle.
ARG NEXT_PUBLIC_LOGIN_SITE_URL=https://lux.id/login
ENV NEXT_PUBLIC_LOGIN_SITE_URL=${NEXT_PUBLIC_LOGIN_SITE_URL}
COPY . .
ENV NODE_OPTIONS="--max-old-space-size=8192"
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build && test -f .next/standalone/server.js

# --- runtime stage ---
FROM node:22.14.0-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup -g 1001 -S nodejs && adduser -u 1001 -S nextjs -G nodejs

# The standalone output bundles only the server's runtime deps. Static assets
# and /public are NOT included in standalone and must be copied alongside.
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=build --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
