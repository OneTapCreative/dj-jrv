# DJ JRV / Romero Vision — Vercel Ready

This package preserves the original ChatGPT Site design, page components,
global CSS, and all public images.

Only the deployment configuration was changed:

- `npm run dev` now runs `next dev`
- `npm run build` now runs `next build`
- `npm run start` now runs `next start`
- Node.js is set to `22.x`
- The ChatGPT Sites `vite.config.ts` file was removed because Vercel does not use it

## GitHub

Place the contents of this folder at the root of the GitHub repository.

## Vercel settings

- Framework Preset: Next.js
- Root Directory: repository root
- Build Command: `npm run build` (default)
- Output Directory: leave blank
- Install Command: `npm install` or leave default
- Node.js: 22.x
