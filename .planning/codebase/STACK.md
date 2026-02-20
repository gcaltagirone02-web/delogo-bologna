# Tech Stack

## Core
- **Framework**: Astro (v5.17.1)
- **Language**: TypeScript (v5.9.3)
- **Styling**: Tailwind CSS (v4.1.18) via `@tailwindcss/vite`
- **Runtime**: Node.js (implicit)

## Key Dependencies
- `astro`: Static site generator
- `tailwindcss`: Utility-first CSS framework
- `@astrojs/check`: Type-checking for Astro components

## Configuration
- `astro.config.mjs`: i18n support (`it`, `en`), Tailwind integration, image domain whitelist (`images.unsplash.com`).
- `tsconfig.json`: TypeScript configuration.
- `package.json`: Dependency management and scripts (`dev`, `build`, `preview`).
