# Bitsy UI agent instructions

Bitsy UI is a token-led visual design system for building across web, apps, and brands.

## Architecture

- Tokens are the source of truth.
- CSS custom properties are the runtime layer for web.
- Astro is used for docs, templates, and examples.
- Solid is the first interactive runtime.
- Storybook is for isolated component states, QA, and regression checks.
- Do not introduce React packages unless the task explicitly asks for them.

## Package boundaries

- packages/tokens: base, semantic, and theme tokens
- packages/styles: reset, base, compositions, blocks, utilities, themes
- packages/ui-solid: interactive Solid components and patterns
- apps/docs: Astro documentation and visual gallery
- apps/storybook: component workbench and state coverage

## Engineering rules

- Prefer native CSS and CSS variables over CSS-in-JS.
- Prefer semantic HTML first.
- Keep framework-neutral logic and styling separate from framework-specific wrappers.
- Do not introduce Sass dependencies unless explicitly requested.
- Do not create large abstractions before the component model is proven.

## Output expectations

- Make small, reviewable changes.
- Update docs when components or tokens change.
- Add or update stories for UI changes.
- Preserve accessibility and keyboard support.
