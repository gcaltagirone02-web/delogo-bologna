# Architecture

## Patterns & Paradigms
- **Component-Based**: UI is built using reusable Astro components in `src/components`.
- **Content-Driven**: Data-driven pages (like the menu) use Astro Content Collections (`src/content`).
- **File-Based Routing**: Pages are defined by files in `src/pages`.

## Layers
- **Layouts**: Base templates in `src/layouts/Layout.astro`.
- **Components**: UI blocks (Hero, Header, Footer, MenuCard, etc.).
- **Pages**: Top-level entry points for `it` and `en` routes.
- **Content**: JSON data for the menu located in `src/content/menu/it` and `src/content/menu/en`.

## Data Flow
- Menu data is defined in JSON files, validated by Zod in `src/content/config.ts`.
- Astro components fetch content using `getCollection` and pass it down as props.
