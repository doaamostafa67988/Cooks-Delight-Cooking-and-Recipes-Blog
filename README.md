# Cooks Delight — Vercel-ready Vite + React SPA

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is emitted to `dist/`.

## Deploy on Vercel

- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

`vercel.json` includes an SPA rewrite so client-side routes (React Router) resolve on refresh.

## Stack

- React 19 + Vite 7
- React Router DOM v6 (client-side routing)
- Tailwind CSS v4
- shadcn/ui + Radix primitives
- TanStack Query (data caching only)
