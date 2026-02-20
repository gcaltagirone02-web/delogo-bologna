# Directory Structure

## Key Locations
- `src/pages/`: Entry points for the website.
  - `index.astro`: Italian homepage.
  - `menu.astro`: Italian menu page.
  - `en/`: English version of pages.
- `src/components/`: Reusable UI components.
- `src/layouts/`: Base layout templates.
- `src/content/`: Data for the menu (JSON).
  - `it/`: Italian translations.
  - `en/`: English translations.
- `src/styles/`: Global CSS styling.
- `public/`: Static assets served at the root.
- `src/asset/`: Internal images and resources.

## Naming Conventions
- **Components**: PascalCase (e.g., `MenuCard.astro`).
- **Pages/Files**: lowercase (e.g., `menu.astro`).
- **Data**: snake_case for JSON files (e.g., `01_antipasti.json`).
