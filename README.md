# Flaura Website

Marketing website for [flaura.ai](https://flaura.ai), built with Next.js and deployed to AWS via SST.

## Tech Stack

- **Framework:** Next.js 15 (App Router, static export)
- **UI:** React 18, Tailwind CSS v4, shadcn/ui (Radix UI)
- **Deployment:** SST v2 `StaticSite` → AWS S3 + CloudFront
- **Region:** ap-southeast-2 (Sydney)
- **Domain:** flaura.ai

## Project Structure

```
app/                  # Next.js app router pages
  page.tsx            # Home (/)
  contact/page.tsx    # Contact (/contact)
  privacy/page.tsx    # Privacy policy (/privacy)
  terms/page.tsx      # Terms of service (/terms)
  layout.tsx          # Root layout

components/
  ui/                 # shadcn/ui base components
  navbar.tsx
  hero.tsx
  features.tsx
  how-it-works.tsx
  cta-section.tsx
  testimonial.tsx
  footer.tsx

sst.config.ts         # SST deployment config (domain, env vars)
fix-symlinks.js       # Fixes SST v2 packaging issue with Node symlinks
sst-deploy-wrapper.js # Wraps SST deploy with the symlink fix applied mid-deploy
next.config.mjs       # Next.js config — includes output: 'export' for static build
```

## Architecture

All pages are statically prerendered at build time (`output: 'export'`). The `out/` directory is uploaded to S3 and served via CloudFront. There is no Lambda or server-side rendering.

If server-side rendering or API routes are ever needed, the architecture must change to `NextjsSite` — but note that this AWS account has Lambda Function URL public access blocked, which will need to be disabled in the AWS Console (Lambda → Account Settings) before `NextjsSite` will work.

## Local Development

**Prerequisites:** Node.js 18+, npm

```bash
npm install --legacy-peer-deps
npm run dev
```

> `--legacy-peer-deps` is required because SST v2 pins React 18 internally,
> which conflicts with some newer peer dependency declarations.

Open [http://localhost:3000](http://localhost:3000).

## Deployment

All infrastructure (CloudFront, S3, ACM cert, Route 53 records) is managed by SST.

### Prerequisites

1. **AWS credentials** configured for the `flaura` AWS account:

   ```bash
   aws configure --profile flaura
   # Region: ap-southeast-2
   ```

2. **Route 53 hosted zone** for `flaura.ai` must exist in the `flaura` AWS account.

### First-time setup (bootstrap)

Run once per AWS account — sets up the CDK deployment bucket and IAM roles:

```bash
AWS_PROFILE=flaura npx sst bootstrap --stage prod
```

### Deploy to production

```bash
AWS_PROFILE=flaura npm run deploy
```

This runs `sst-deploy-wrapper.js` which starts the SST deploy and applies `fix-symlinks.js` mid-deploy to work around a known SST v2 packaging bug (ENOENT on `.bin/semver`).

### Deploy to dev/staging

```bash
AWS_PROFILE=flaura npm run deploy:dev
```

### SST version note

SST is pinned to `2.49.6` and React is pinned to `^18.2.0`. **Do not upgrade SST to v3+ or React to v19** without migrating `sst.config.ts` to SST Ion format — they are incompatible with the current setup.

## Environment Variables

Environment variables are injected at build time. Add them to the `environment` block in `sst.config.ts` and pass them in via your shell or CI:

```ts
environment: {
  NODE_ENV: "production",
  NEXT_PUBLIC_MY_VAR: process.env.NEXT_PUBLIC_MY_VAR || "",
},
```

Since this is a static export, all env vars must be prefixed with `NEXT_PUBLIC_` to be available in the browser.
