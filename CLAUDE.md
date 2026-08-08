# Vellum

Personal Angular component library, published to npm as `vellum-lib`. **No third-party UI
or styling library is used.** The only runtime dependency allowed beyond `@angular/*` is
`@angular/cdk` — framework-agnostic behavior primitives (a11y, overlay, focus trap,
layout) — for behavior only, never for styling.

- Angular: v22+ only, standalone components, no NgModules.
- Package manager: pnpm. Library project: `projects/vellum-lib` (selector prefix `vlm`).
- Build: `@angular/build:ng-packagr`. Tests: Vitest. Docs/dev: Storybook. Lint: ESLint
  (`angular-eslint`). Format: Prettier.
- `pnpm build` runs `ng build` (ng-packagr) then `scripts/build-styles.mjs`, which compiles
  `src/styles/index.scss` → `dist/vellum-lib/styles/index.css` and copies `src/assets/` →
  `dist/vellum-lib/assets/`, preserving the same relative depth so relative `url()`s in the
  compiled CSS keep resolving. ng-packagr merges the `exports` map from
  `projects/vellum-lib/package.json` (`./styles/index.css`, `./assets/*`) with its own
  generated entries — add new deep-import paths there, don't let ng-packagr overwrite them.

## Commands

- `pnpm start` / `pnpm build` — serve / build the workspace (ng-packagr for the lib).
- `pnpm test` — Vitest unit tests.
- `pnpm lint` / `pnpm format` — ESLint / Prettier.
- `pnpm storybook` / `pnpm build-storybook` — component docs & visual dev.

A PostToolUse hook already runs `pnpm run format` and `pnpm run lint` after every
`Edit`/`Write`/`MultiEdit` — don't re-run `lint`/`format`/`format:check` yourself after
editing files, it's redundant. The hook does not typecheck, so a one-off `tsc`/build check
is still fine when there's a specific reason to doubt a type-level change.

## Component anatomy

Every component under `projects/vellum-lib/src/lib/components/<name>/` gets this fixed
file set — don't drop pieces or invent a different layout:

```
<name>.ts             standalone component, selector `vlm-<name>`
<name>.html
<name>.scss           structural/behavioral styles only — visual values come from CSS vars
_<name>.tokens.scss    the component's CSS custom properties (--vlm-<name>-*), with defaults
<name>.spec.ts         Vitest
<name>.stories.ts      Storybook stories (no 'autodocs' tag — docs page is hand-authored)
<name>.mdx             Storybook docs page (Meta/Controls/Canvas blocks from '@storybook/addon-docs/blocks')
```

All input/output/model types (unions, aliases, etc.) live in
`projects/vellum-lib/src/lib/types/<name>.types.ts`, imported into the component with
`import type { ... }` — never declared inline in `<name>.ts`.

Export the component and its types from `projects/vellum-lib/src/public-api.ts`.

## Theming

Single compiled CSS layer, not a Sass API for consumers — no Sass toolchain required to use
the library. Rules:

- Every visual value (color, spacing, radius, shadow, font) is a `--vlm-*` CSS custom
  property, defined in the component's `_<name>.tokens.scss` with a sensible default.
- Light and dark are the two shipped themes, switched at runtime via a `[data-theme]`
  attribute on an ancestor element (e.g. `[data-theme="dark"]`), not a class per component.
- Global tokens (color, typography, and later spacing/radius/etc.) live in
  `projects/vellum-lib/src/styles/`:
  - `_colors.tokens.scss` — the `vlm-color-tokens` mixin + `:root` defaults (= light values).
  - `_typography.tokens.scss` — the `vlm-typography-tokens` mixin + `:root` defaults
    (font-family, font-size xs–xxl, font-weight, line-height). Not theme-dependent, so it
    isn't re-emitted in `light.scss`/`dark.scss`.
  - `_fonts.scss` — `@font-face` declarations (currently Geist Sans, self-hosted from
    `src/assets/fonts/`). Keep font files down to the variable-weight woff2s only (one
    normal + one italic) — no static per-weight files, no otf/ttf, unless a real need for
    static fallbacks shows up.
  - `light.scss` / `dark.scss` — the color tokens re-emitted under `[data-theme="light"]` /
    `[data-theme="dark"]`. Only override token values here — never structural CSS.
  - `index.scss` — the entry point compiled to `dist/vellum-lib/styles/index.css`; `@use`s
    the files above.
- Consumers can override any `--vlm-*` variable directly for one-off customization without
  touching Sass.
- Color tokens follow `--vlm-color-<name>` (+ `-hover` / `-foreground` for brand/status
  colors, `-surface` / `-surface-hover` for `bg`). Keep new colors to this pattern — base,
  interactive state, and text-on-color — rather than a full numeric shade scale.
- Components reference the shared typography tokens (`var(--vlm-font-family-sans)`, etc.)
  rather than hardcoding font values or redeclaring their own font-family token.

## Conventions

- Never import a component/styling library. If `@angular/cdk` doesn't provide a primitive
  you need, implement it locally.
- Prefer signals over RxJS/Zone-based patterns for component state where Angular v21 supports it.
- Selector prefix is `vlm` (enforced by ESLint) — element selectors kebab-case, attribute
  selectors camelCase.

## TypeScript rules

Enforced by ESLint (`eslint.config.js`) — don't disable inline, fix the type instead:

- No `any` (`@typescript-eslint/no-explicit-any`). Use `unknown` + narrowing, or a real type.
- Use `type` aliases, not `interface`, for object shapes
  (`@typescript-eslint/consistent-type-definitions`).