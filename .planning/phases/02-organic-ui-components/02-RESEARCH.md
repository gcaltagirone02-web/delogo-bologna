# Phase 02: Organic UI Components - Research

## Watercolor/Ink Blot Effects

### SVG Filters for Organic Edges
To create a "watercolor blot" or "ink stain" effect, we can use SVG filters to distort simple shapes. The `feTurbulence` and `feDisplacementMap` primitives are key.

**Example Filter:**
```xml
<svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg">
  <filter id="watercolor-filter">
    <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" result="noise" />
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
  </filter>
</svg>
```

**Implementation in CSS:**
Apply the filter to a `div` or `span` that serves as the background highlight for the active menu item.
```css
.nav-highlight-watercolor {
  background-color: rgba(75, 156, 211, 0.15); /* Blu Egeo at low opacity */
  filter: url(#watercolor-filter);
  border-radius: 50% 40% 60% 45%; /* Irregular shape */
}
```

## Organic SVG Dividers

### Wavy Lines
A simple hand-drawn wavy line can be created with a single SVG path.
```xml
<svg viewBox="0 0 100 10" preserveAspectRatio="none">
  <path d="M0 5 Q 25 8 50 5 T 100 5" fill="none" stroke="#4B9CD3" stroke-width="0.5" stroke-linecap="round" />
</svg>
```

### Minimalist Olive Branch
For a Mediterranean touch, a minimalist line-art olive branch:
```xml
<svg viewBox="0 0 100 20" fill="none" stroke="#D14638" stroke-width="0.75" stroke-linecap="round">
  <path d="M10 10 Q 50 5 90 10" /> <!-- Stem -->
  <circle cx="20" cy="7" r="1.5" /> <!-- Leaves -->
  <circle cx="35" cy="13" r="1.5" />
  <circle cx="50" cy="6" r="1.5" />
  <circle cx="65" cy="14" r="1.5" />
  <circle cx="80" cy="8" r="1.5" />
</svg>
```

## Mobile Navigation (Snap & Fade)

### Horizontal Scroll with Snap-Center
Tailwind utility classes make implementation straightforward:
- `flex overflow-x-auto`: Enable horizontal scrolling.
- `snap-x snap-mandatory`: Enable scroll snapping.
- `snap-center`: Apply to each navigation link to align it centrally when clicked or scrolled to.
- `scrollbar-hide`: Useful to keep the UI clean (via a custom utility or plugin).

### Fade Edges (Visual Affordance)
Use a CSS mask-image to fade the left and right edges, indicating more content.
```css
.scroll-fade-edges {
  mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}
```

## Soft Edges & Non-Geometric UI

### Irregular Border Radius (Blob Shapes)
The "8-value border-radius" creates organic, non-circular ovals.
```css
.organic-pill {
  border-radius: 68% 32% 44% 56% / 46% 52% 48% 54%;
}
```

### Subtle Non-Straight Edges
To avoid perfect rectangles on MenuCards, use a very subtle `clip-path` that deviates from a perfect box by just 1-2 pixels.
```css
.soft-card-edge {
  clip-path: polygon(
    0.5% 1%, 99% 0%, 100% 98.5%, 1.5% 100%
  );
}
```

## Pitfalls & Considerations
- **Performance:** Complex SVG filters (especially with high `numOctaves`) can be CPU intensive on mobile. Keep `numOctaves` to 3 or 4.
- **Accessibility:** Ensure the active highlight color has enough contrast against the background and that the text color itself is sufficiently dark/light as per WCAG.
- **Interactivity:** Clipped backgrounds might slightly affect hit areas if the clip is extreme.

## RESEARCH COMPLETE
