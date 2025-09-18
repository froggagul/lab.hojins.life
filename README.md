# lab.hojins.life

Personal research website built with [Gatsby](https://www.gatsbyjs.com/) and TypeScript. The site highlights an introduction, selected research results, impactful projects, and curriculum vitae information in a clean single-page layout.

## Getting started

```bash
npm install
npm run develop
```

The development server is available at `http://localhost:8000`.

## Available scripts

- `npm run develop` – start a local development server
- `npm run build` – create a production build in the `public` directory
- `npm run serve` – serve the production build locally
- `npm run clean` – clear the Gatsby cache
- `npm run typecheck` – run TypeScript type checking without emitting files

## Deployment

A GitHub Actions workflow (`.github/workflows/ci.yml`) builds the project on every push to ensure the site compiles successfully before deployment.
