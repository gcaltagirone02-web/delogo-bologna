# PROJECT: Delogo - Menu Improvement

## Vision
Transform the `menu.astro` page from a tech-heavy, dashboard-like interface into an authentic, convivial, and "organic" digital representation of a Greek taverna. The goal is to align the menu's aesthetics with the "watercolor/rustic-chic" vibe of the brand, emphasizing warmth and hospitality ("Dal Mar Egeo a Creta").

## Goal
Implement the improvement plan detailed in `prompt.md`, focusing on softening the UI, adding storytelling elements, ensuring stylistic consistency, and improving the page's rhythm and readability.

## Stack
- **Framework**: Astro v5
- **Styling**: Tailwind CSS (v4)
- **i18n**: Multilingual (IT/EN)
- **Data**: JSON-driven Content Collections

## Requirements

### Validated
- ✓ **STRUC-01**: Existing project structure with /it and /en routes. — existing
- ✓ **DATA-01**: Menu data driven by JSON files in `src/content/menu/`. — existing
- ✓ **COMP-01**: Basic Astro components for header, footer, and menu items. — existing

### Active
- [ ] **UI-01**: Replace "Liquid Glass" floating nav with a more organic "pill" or "brush-stroke" design.
- [ ] **UI-02**: Use warm white (Bianco Carta #FFFFFF) as the primary background instead of cold pure white.
- [ ] **STORY-01**: Add a warm narrative introduction to the menu page.
- [ ] **STORY-02**: Integrate evocative "taverna-style" imagery (Bento layout style).
- [ ] **STORY-03**: Add watercolor-style separators or decorative elements (e.g., olive branches).
- [ ] **STYLE-01**: Consistent use of design system colors (Blu Egeo #4B9CD3, Rosso Corallo #D14638, Grigio Ardesia #2F4F4F).
- [ ] **STYLE-02**: Apply Serif font (Marcellus) to all category titles for a "materica" feel.
- [ ] **PACE-01**: Increase white space and padding between categories to improve readability rhythm.

### Out of Scope
- [REF-01] — Full site refactor. (Only focus on `menu.astro` and related components).
- [AUTH-01] — User authentication or ordering systems.

## Key Decisions
| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Organic UI | Replace tech-heavy iOS style with rustic-chic elements to match brand vibe. | — Pending |
| Narrative Intro | Move from a simple list to a storytelling approach to build immersion. | — Pending |
| Design System Colors | Use specific HEX codes from brief to ensure brand consistency. | — Pending |

---
*Last updated: 2026-02-20 after initialization*
