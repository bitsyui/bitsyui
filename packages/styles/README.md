# @bitsyui/styles

CSS resets, base styles, compositions, blocks, utilities, and themes.

This package exposes native CSS entrypoints only.

Structure:

- `src/reset`: low-level reset styles
- `src/base`: token variable runtime layer and base element styles
- `src/compositions`: layout primitives
- `src/blocks`: small component-level patterns
- `src/utilities`: single-purpose utility classes
- `src/themes`: theme variable overrides

Key files:

- `src/base/tokens.css`: initial CSS custom property output structure for Bitsy UI tokens
- `src/themes/themes.css`: light and dark theme hooks for semantic runtime variables
- `src/index.css`: full package entrypoint

Example:

```css
@import "@bitsyui/styles/index.css";
```
