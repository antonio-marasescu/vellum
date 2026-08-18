# Vellum

Personal Angular component library, published to npm as `vellum-lib`. **No third-party UI
or styling library is shipped to consumers.** The only runtime dependency allowed beyond
`@angular/*` is `@angular/cdk` — framework-agnostic behavior primitives (a11y, overlay,
focus trap, layout) — for behavior only, never for styling. Tailwind CSS is used to
_author_ component styles, but it's a devDependency/build-time tool only (same status
`sass` used to have) — it's never a runtime dependency, and consumers never install or
configure it themselves.

- Angular: v22+ only, standalone components, no NgModules.
- Package manager: pnpm. Library project: `projects/vellum-lib` (selector prefix `vlm`).
- Build: `@angular/build:ng-packagr`. Tests: Vitest. Docs/dev: Storybook. Lint: ESLint
  (`angular-eslint`). Format: Prettier.
- `pnpm build` runs `ng build` (ng-packagr) then `scripts/build-styles.mjs`, which runs
  `src/styles/index.css` through `@tailwindcss/postcss` (scanning component templates/`.ts`
  files per the `@source` directives in that file) and `cssnano` → writes
  `dist/vellum-lib/styles/index.css`, and copies `src/assets/` → `dist/vellum-lib/assets/`,
  preserving the same relative depth so relative `url()`s in the compiled CSS keep
  resolving. ng-packagr merges the `exports` map from `projects/vellum-lib/package.json`
  (`./styles/index.css`, `./assets/*`) with its own generated entries — add new deep-import
  paths there, don't let ng-packagr overwrite them.

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
<name>.html            structural/variant/state styling is Tailwind utility classes here
                       (or `host: {...}` metadata in <name>.ts for host-only concerns),
                       always via arbitrary-value syntax against --vlm-* tokens
                       (`bg-[var(--vlm-button-primary-bg)]`) — never Tailwind's own
                       fixed scale/`@theme` tokens
_<name>.tokens.css     the component's CSS custom properties (--vlm-<name>-*), with
                       defaults; normally the component's only styleUrl
<name>.spec.ts         Vitest
<name>.stories.ts      Storybook stories (no 'autodocs' tag — docs page is hand-authored)
<name>.mdx             Storybook docs page (Meta/Controls/Canvas blocks from '@storybook/addon-docs/blocks')
```

A plain `<name>.css` is optional — add it only for CSS that Tailwind utilities/tokens
genuinely can't express (e.g. `@keyframes`). It must never contain `@import "tailwindcss"`
or any Tailwind import — Tailwind only ever runs once, against the single global
`src/styles/index.css` entry (see Theming below); `@angular/build`/ng-packagr both have
their own native per-`styleUrl` Tailwind hook, and we deliberately don't use it, to avoid
duplicating the whole utility layer into every component's compiled output.

Shared non-component helpers (e.g. the local `cx()` class-merge helper in
`src/lib/utils/class-names.ts`) live under `projects/vellum-lib/src/lib/utils/` — not
exported from `public-api.ts`.

All input/output/model types (unions, aliases, etc.) live in
`projects/vellum-lib/src/lib/types/<name>.types.ts`, imported into the component with
`import type { ... }` — never declared inline in `<name>.ts`.

Export the component and its types from `projects/vellum-lib/src/public-api.ts`.

## Theming

Single compiled CSS layer, not a Sass/Tailwind API for consumers — no build toolchain
required to use the library. Rules:

- Every visual value (color, spacing, radius, shadow, font) is a `--vlm-*` CSS custom
  property, defined in the component's `_<name>.tokens.css` with a sensible default.
- Light and dark are the two shipped themes, switched at runtime via a `[data-theme]`
  attribute on an ancestor element (e.g. `[data-theme="dark"]`), not a class per component.
- Global tokens (color, typography, and later spacing/radius/etc.) live in
  `projects/vellum-lib/src/styles/`:
  - `_colors.tokens.css` — `:root, [data-theme="light"] { --vlm-color-*: ...; }` (light is
    the default theme, so both selectors share one rule).
  - `_typography.tokens.css` — `:root { --vlm-font-*: ...; }` (font-family, font-size
    xs–xxl, font-weight, line-height). Not theme-dependent, so there's no dark override.
  - `fonts.css` — `@font-face` declarations (currently Geist Sans, self-hosted from
    `src/assets/fonts/`). Keep font files down to the variable-weight woff2s only (one
    normal + one italic) — no static per-weight files, no otf/ttf, unless a real need for
    static fallbacks shows up.
  - `dark.css` — the color tokens re-emitted under `[data-theme="dark"]` with dark values.
    Only override token values here — never structural CSS.
  - `index.css` — the entry point compiled to `dist/vellum-lib/styles/index.css`. Imports
    `tailwindcss/theme` + `tailwindcss/utilities` directly (Preflight is deliberately
    excluded — a global CSS reset would leak onto a consumer's whole page), declares the
    `@source` globs Tailwind scans for utility classes (component `.html`/`.ts` files), then
    `@import`s the token files above. The leading underscore on `_colors.tokens.css` /
    `_typography.tokens.css` is now just a naming convention (no compiler meaning, unlike
    the old Sass partials) — keep it for continuity.
- Consumers can override any `--vlm-*` variable directly for one-off customization without
  installing Tailwind or any build tooling.
- Color tokens follow `--vlm-color-<name>` (+ `-hover` / `-foreground` for brand/status
  colors, `-surface` / `-surface-hover` for `bg`). Keep new colors to this pattern — base,
  interactive state, and text-on-color — rather than a full numeric shade scale.
- Components reference the shared typography tokens (`var(--vlm-font-family-sans)`, etc.)
  rather than hardcoding font values or redeclaring their own font-family token.

## Conventions

- Never import a component library, and never reach for Tailwind's own fixed
  scale/`@theme` tokens or a classnames/`cn()`-style npm package — arbitrary-value Tailwind
  classes against `--vlm-*` tokens plus the local `cx()` helper cover class composition. If
  `@angular/cdk` doesn't provide a behavior primitive you need, implement it locally.
- Prefer signals over RxJS/Zone-based patterns for component state where Angular v21 supports it.
- Selector prefix is `vlm` (enforced by ESLint) — element selectors kebab-case, attribute
  selectors camelCase.

## TypeScript rules

Enforced by ESLint (`eslint.config.js`) — don't disable inline, fix the type instead:

- No `any` (`@typescript-eslint/no-explicit-any`). Use `unknown` + narrowing, or a real type.
- Use `type` aliases, not `interface`, for object shapes
  (`@typescript-eslint/consistent-type-definitions`).
