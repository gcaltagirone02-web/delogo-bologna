# Conventions

## Code Style
- **Astro Components**: Follow standard Astro structure (frontmatter script + HTML template).
- **TypeScript**: Used for props and logic in components.
- **CSS**: Utility-first approach with Tailwind CSS. Global styles in `src/styles/global.css`.

## Development Workflow
- **Naming**: Descriptive component names.
- **Props**: Defined within the frontmatter of Astro components.
- **State Management**: Minimal client-side state; predominantly static rendering.

## Error Handling
- Zod validation for content collections in `config.ts` ensures data integrity for the menu.
