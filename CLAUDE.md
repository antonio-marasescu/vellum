# Vellum

Personal Angular component library, published to npm as `vellum-lib`. **No third-party UI
or styling library is used.** The only runtime dependency allowed beyond `@angular/*` is
`@angular/cdk` — framework-agnostic behavior primitives (a11y, overlay, focus trap,
layout) — for behavior only, never for styling.

- Angular: v22+ only, standalone components, no NgModules.
- Package manager: pnpm. Library project: `projects/vellum-lib` (selector prefix `vlm`).
- Build: `@angular/build:ng-packagr`. Tests: Vitest. Docs/dev: Storybook. Lint: ESLint
  (`angular-eslint`). Format: Prettier.

## Commands

- `pnpm start` / `pnpm build` — serve / build the workspace (ng-packagr for the lib).
- `pnpm test` — Vitest unit tests.
- `pnpm lint` / `pnpm format` — ESLint / Prettier.
- `pnpm storybook` / `pnpm build-storybook` — component docs & visual dev.

## Component anatomy

Every component under `projects/vellum-lib/src/lib/<name>/` gets this fixed file set —
don't drop pieces or invent a different layout:

```
<name>.ts             standalone component, selector `vlm-<name>`
<name>.html
<name>.scss           structural/behavioral styles only — visual values come from CSS vars
_<name>.tokens.scss    the component's CSS custom properties (--vlm-<name>-*), with defaults
<name>.spec.ts         Vitest
<name>.stories.ts      Storybook, tag: 'autodocs'
```

Export the component from `projects/vellum-lib/src/public-api.ts`.

## Theming

Single compiled CSS layer, not a Sass API for consumers — no Sass toolchain required to use
the library. Rules:

- Every visual value (color, spacing, radius, shadow, font) is a `--vlm-*` CSS custom
  property, defined in the component's `_<name>.tokens.scss` with a sensible default.
- Light and dark are the two shipped themes, switched at runtime via a `[data-theme]`
  attribute on an ancestor element (e.g. `[data-theme="dark"]`), not a class per component.
- Global tokens (color, and later spacing/radius/etc.) live in
  `projects/vellum-lib/src/styles/`:
  - `_colors.tokens.scss` — the `vlm-color-tokens` mixin + `:root` defaults (= light values).
  - `light.scss` / `dark.scss` — the same tokens re-emitted under `[data-theme="light"]` /
    `[data-theme="dark"]`. Only override token values here — never structural CSS.
  - `index.scss` — the entry point consumers compile; `@use`s the three files above.
- Consumers can override any `--vlm-*` variable directly for one-off customization without
  touching Sass.
- Color tokens follow `--vlm-color-<name>` (+ `-hover` / `-foreground` for brand/status
  colors, `-surface` / `-surface-hover` for `bg`). Keep new colors to this pattern — base,
  interactive state, and text-on-color — rather than a full numeric shade scale.

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