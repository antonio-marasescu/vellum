# Vellum

A personal Angular component library with accessible and customizable UI signal-first components for Angular.

## Project Structure

This is a monorepo containing:

- **`projects/vellum-lib/`** — The published component library
- **`.storybook/`** — Component documentation and visual development environment
- **`scripts/`** — Build tooling for compiling styles and assets

## Installation & Usage

See the [library README](projects/vellum-lib/README.md) for installation instructions and usage examples.

For the full component catalog and interactive examples, see the [Storybook documentation](https://github.com/marasa/vellum#storybook).

## Development

### Prerequisites

- Node.js 20+
- pnpm 10+

### Setup

```bash
# Install dependencies
pnpm install

# Start Storybook for component development
pnpm storybook

# Build the library
pnpm build

# Run tests
pnpm test
pnpm test:stories

# Type check
pnpm typecheck

# Lint and format
pnpm lint
pnpm format
```

### Component Development Workflow

1. **Create component files** — Every component follows a fixed 6-file anatomy:
   - `<name>.ts` — Component class
   - `<name>.html` — Template
   - `_<name>.tokens.css` — CSS custom properties
   - `<name>.spec.ts` — Unit tests
   - `<name>.stories.ts` — Storybook stories
   - `<name>.mdx` — Component documentation

2. **Style with tokens** — Use Tailwind utility classes in templates with arbitrary-value syntax referencing `--vlm-*` tokens:

   ```html
   <button class="bg-[var(--vlm-button-primary-bg)]">Click me</button>
   ```

3. **Export from public API** — Add the component to `projects/vellum-lib/src/public-api.ts`

4. **Document in Storybook** — Write stories and MDX documentation showing all variants, states, and customization options

5. **Test** — Write unit tests and ensure a11y checks pass in Storybook

### Theming

- Global tokens: `projects/vellum-lib/src/styles/_colors.tokens.css`, `_typography.tokens.css`
- Theme variants: `styles/dark.css` overrides color tokens under `[data-theme="dark"]`
- Component tokens: Each component's `_<name>.tokens.css` defines its own `--vlm-<name>-*` tokens

### Package Verification

After building, verify the package artifact:

```bash
pnpm build
pnpm verify:package
```

This runs `publint` to check for common packaging issues.

## Scripts

- `pnpm start` — Start development server (currently no app, use Storybook)
- `pnpm build` — Build the library (runs ng-packagr + style compilation)
- `pnpm test` — Run unit tests
- `pnpm test:stories` — Run Storybook a11y tests
- `pnpm test:coverage` — Run tests with coverage
- `pnpm typecheck` — Type check without emitting
- `pnpm lint` — Lint TypeScript and HTML
- `pnpm format` — Format code with Prettier
- `pnpm format:check` — Check formatting without modifying files
- `pnpm storybook` — Start Storybook dev server
- `pnpm build-storybook` — Build static Storybook
- `pnpm verify:package` — Verify built package with publint

## Architecture

### No Runtime Styling Dependencies

Tailwind CSS is a **devDependency** and build-time tool only. It compiles to a single `dist/vellum-lib/styles/index.css` file that consumers import — they never install Tailwind, configure `tailwind.config.js`, or run PostCSS themselves.

The only allowed runtime dependency beyond `@angular/*` is `@angular/cdk` for behavior primitives (a11y, overlay, focus management).

### Component Conventions

- Selector prefix: `vlm`
- No `any` types (enforced by ESLint)
- Use `type` aliases, not `interface` for object shapes
- Prefer signals over RxJS where Angular supports it
- All input/output/model types live in `projects/vellum-lib/src/lib/types/<name>.types.ts`

## License

MIT © Antonio Marasescu-Duran

See [LICENSE](LICENSE) for details.
