# Phase 02: Organic UI Components - Context

**Gathered:** 2026-02-20
**Status:** Ready for planning

<domain>
## Phase Boundary

Redesign the interactive UI components of the menu page (specifically navigation and decorative elements) to replace "tech-heavy" glassmorphism with organic, custom-feel alternatives. This phase also prioritizes mobile UX optimization following modern best practices (touch targets, horizontal scrolling, adaptive layouts).

</domain>

<decisions>
## Implementation Decisions

### Navigation (Category Bar)
- **Decided**: Replace the "Liquid Glass" bar with a "Soft Pill" approach. The container will be semi-transparent "Bianco Carta" with a very subtle organic border (simulating a cut-out paper strip).
- **Decided**: Active state: Use a "watercolor blot" or "hand-drawn highlight" effect (subtle background color with irregular edges) instead of a rigid white pill. The color will be a desaturated Blu Egeo (#4B9CD3 at 10-15% opacity).
- **Decided**: Text in active state: Change from #1D1D1F (blackish) to Blu Egeo (#4B9CD3) to reinforce the brand's primary color.

### Decorative Elements
- **Decided**: Replace the current geometric dots/lines separators with organic SVG dividers (e.g., a wavy watercolor line or a minimalist olive branch accent).
- **Decided**: Implement "soft edges" on MenuCards using extremely subtle CSS `mask-image` or `border-radius` variations to avoid perfect geometric squares.

### Mobile UX Optimization
- **Decided**: Ensure the category navigation bar remains sticky but reduces in vertical height on mobile to maximize content viewport.
- **Decided**: Implement "Snap Center" horizontal scrolling for categories with a "Fade Edge" visual affordance (shadow/gradient at the edges) to signal more content.
- **Decided**: Touch targets: Minimum 44px height for all interactive elements (pills, back-to-top).

### Claude's Discretion
- The exact SVG path for the "watercolor" separators.
- The precise implementation of the "irregular highlight" for active nav (using CSS `clip-path` or `background-image` blobs).
- Mobile-specific padding adjustments.

</decisions>

<specifics>
## Specific Ideas
- "Hand-drawn" feel: Nothing should look perfectly straight or mathematically calculated.
- Primary colors: Blu Egeo for interactive highlights, Rosso Corallo for occasional accents.

</specifics>

<deferred>
## Deferred Ideas
- Narrative introductory text (Phase 3).
- Bento-style evocative images (Phase 3).

</deferred>

---
*Phase: 02-organic-ui-components*
*Context gathered: 2026-02-20*
