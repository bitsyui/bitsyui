# @bitsyui/tokens

Foundation, semantic, and theme tokens for Bitsy UI.

This package exposes plain ESM token objects using a DTCG-style shape.

Structure:

- `src/base`: foundational scales for color, type, spacing, radius, shadow, and motion
- `src/semantic`: portable semantic roles layered on top of the base scales
- `src/themes`: light and dark theme overrides for semantic color roles

Example:

```js
import { base, semantic, themes } from "@bitsyui/tokens";

console.log(base.spacing[4].$value);
console.log(semantic.color.text.primary.$value);
console.log(themes.dark.color.background.canvas.$value);
```
