# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install --legacy-peer-deps   # --legacy-peer-deps required due to SST v2 pinning React 18
npm run dev                      # local dev (wraps next dev with sst bind)
npm run build                    # next build only
AWS_PROFILE=flaura npm run deploy        # deploy to prod
AWS_PROFILE=flaura npm run deploy:dev    # deploy to dev/staging
```

There are no tests.

## Architecture

Static marketing site for flaura.ai. All pages are prerendered at build time (`output: 'export'` in `next.config.mjs`) — no server-side rendering, no API routes, no Lambda. The `out/` directory is uploaded to S3 and served via CloudFront, managed by SST v2.

**Page sections** (assembled in `app/page.tsx`): `Navbar` → `Hero` → `HowItWorks` → `Features` → `Testimonial` → `CtaSection` → `Footer`

**Fonts:** DM Sans (`font-sans`) for body, Playfair Display (`font-serif`) for headings — both loaded via `next/font/google` in `app/layout.tsx`.

**UI components:** `components/ui/` contains shadcn/ui (Radix UI) primitives — treat as library code, don't modify unless necessary.

**Store badges:** `public/images/app-store-badge.webp` and `public/images/google-play-badge.png` — used in `hero.tsx` and `cta-section.tsx`.

## Deployment Notes

- SST is pinned to `2.49.6`, React to `^18.2.0`. Do not upgrade SST to v3+ or React to v19 — incompatible with current `sst.config.ts`.
- `sst-deploy-wrapper.js` runs the SST deploy and applies `fix-symlinks.js` mid-deploy to work around an SST v2 packaging bug (ENOENT on `.bin/semver`).
- Requires a Route 53 hosted zone for `flaura.ai` in the `flaura` AWS account (account `767828745955`, region `ap-southeast-2`).
- First-time bootstrap: `AWS_PROFILE=flaura npx sst bootstrap --stage prod`
- If `NextjsSite` (SSR) is ever needed: Lambda Function URL public access must be unblocked in AWS Console (Lambda → Account Settings).
- All env vars must be `NEXT_PUBLIC_` prefixed (static export — no server runtime). Add them to the `environment` block in `sst.config.ts`.
