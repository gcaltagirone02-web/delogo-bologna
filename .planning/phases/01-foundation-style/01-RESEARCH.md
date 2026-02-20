# Phase 01: Foundation & Style - Research

## Tech Stack Implementation

### 1. Marcellus Font Integration (Astro + Tailwind)
The most robust way to integrate Marcellus is via **Fontsource**, ensuring high performance and self-hosting.

- **Installation**: `npm install @fontsource/marcellus`
- **Astro Setup**: Import the CSS in your main `Layout.astro` or the `menu.astro` page direttamente:
  ```javascript
  import '@fontsource/marcellus';
  ```
- **Tailwind Configuration (v4)**: Since we are using Tailwind v4 (`@tailwindcss/vite`), configuration is usually done via CSS imports and the theme block in CSS.
- **Usage**: Apply utility classes. Note that Marcellus is limited to Regular 400 weight; for emphasis, rely on letter-spacing and color rather than weight.

### 2. "Bianco Carta" (#FFFFFF) with Organic Texture
To achieve a "materico" (material) feel without using heavy assets, a subtle SVG noise filter is the preferred method for simulating paper grain or stone texture.

- **SVG Noise Implementation**: Use a repeatable SVG background image with a turbulence filter.
- **CSS Example**:
  ```css
  .bg-paper {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    opacity: 0.98; /* Subtle blend with the white background */
  }
  ```

### 3. Generous Vertical Spacing & Rhythm
Establishing a "relaxed reading rhythm" involves moving away from dense grid layouts to a more linear, airy presentation.

- **Section Spacing**: Use ample padding (64px-96px) between menu categories (Antipasti, Secondi, etc.) to signal a deliberate change in pace.
- **Line Height**: For dish descriptions, use leading-relaxed or custom leading to ensure a "painless" reading experience.
- **Letter Spacing**: Use tracking-wide for titles in Marcellus to evoke a classic, hand-printed menu aesthetic.

## Patterns & Examples
- **Tactile Minimalism**: Combining a high-contrast serif font with a textured background creates a "web-to-print" bridge, making the digital menu feel like a physical artifact.
- **Vertical Rhythm**: Consistent use of whitespace helps users navigate the menu intuitively without visual fatigue.

## Pitfalls & Considerations
- **Performance**: SVG base64 backgrounds are lightweight but should be tested for rendering performance on older mobile devices when combined with CSS filters.
- **Accessibility**: Contrast remains high (approx 10:1 for #2F4F4F on #FFFFFF), exceeding WCAG AAA standards.
- **Rendering**: SVG filters can appear different across browsers; a `baseFrequency` between 0.6 and 0.8 is the "sweet spot" for subtle grain.
