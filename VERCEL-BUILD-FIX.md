# Vercel Build Fix

The original ChatGPT Sites export contains Cloudflare-specific database,
worker, migration, testing, and build-tool files. The DJ website does not use
those files, but Next.js type-checks all TypeScript files by default.

The `tsconfig.json` file now excludes those unused platform-specific folders.
The visual website source in `app/`, the styles, components, and images were
not changed.

Verified locally with:

npm install
npm run build

Result: successful production build.
