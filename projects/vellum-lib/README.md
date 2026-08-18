# Vellum

Accessible and customizable UI signal-first components for Angular.

## Installation

```bash
npm install vellum-lib
# or
pnpm add vellum-lib
# or
yarn add vellum-lib
```

## Usage

### 1. Import the CSS

Add the compiled styles to your application's global styles:

```css
/* In your global styles.css or styles.scss */
@import 'vellum-lib/styles/index.css';
```

### 2. Import components

All components are standalone and can be imported directly:

```typescript
import { VlmButtonComponent } from 'vellum-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VlmButtonComponent],
  template: `<vlm-button>Click me</vlm-button>`
})
export class AppComponent {}
```

### 3. Configure theming

Vellum ships with light and dark themes. Control the active theme via a `data-theme` attribute on any ancestor element:

```html
<html data-theme="dark">
  <!-- All Vellum components inside will use the dark theme -->
</html>
```

Or toggle it programmatically:

```typescript
document.documentElement.setAttribute('data-theme', 'dark');
```

Light theme is the default when no `data-theme` attribute is present.

### 4. Customize with CSS custom properties

Every visual aspect of Vellum components is controlled by CSS custom properties (`--vlm-*` tokens). Override them to customize the theme globally or per-component.

#### Global Theme Tokens

**Color System** — Semantic color tokens with light/dark theme support:

```css
/* Brand colors */
--vlm-color-primary          /* Primary brand color */
--vlm-color-primary-hover    /* Primary hover state */
--vlm-color-primary-foreground /* Text on primary bg */
--vlm-color-primary-text     /* Primary text color */

/* Neutral colors */
--vlm-color-secondary        /* Secondary/muted color */
--vlm-color-secondary-hover
--vlm-color-secondary-foreground
--vlm-color-secondary-text

/* Status colors */
--vlm-color-error           /* Error/destructive */
--vlm-color-error-hover
--vlm-color-error-foreground
--vlm-color-error-text

--vlm-color-warning         /* Warning/caution */
--vlm-color-success         /* Success/positive */
--vlm-color-info            /* Info/neutral */
/* (each with -hover, -foreground, -text variants) */

/* Surface colors */
--vlm-color-bg              /* Page background */
--vlm-color-bg-surface      /* Card/panel background */
--vlm-color-bg-surface-hover

/* Text colors */
--vlm-color-text            /* Primary text */
--vlm-color-text-muted      /* Secondary text */

/* Borders & outlines */
--vlm-color-border
--vlm-color-outline
--vlm-color-outline-border
```

**Typography** — Font system tokens:

```css
/* Font families */
--vlm-font-family-sans      /* Default: 'Geist Sans' */
--vlm-font-family-mono      /* Monospace font */

/* Font sizes */
--vlm-font-size-xs          /* 12px */
--vlm-font-size-sm          /* 13px */
--vlm-font-size-md          /* 14px */
--vlm-font-size-lg          /* 16px */
--vlm-font-size-xl          /* 18px */
--vlm-font-size-xxl         /* 20px */

/* Font weights */
--vlm-font-weight-regular   /* 400 */
--vlm-font-weight-medium    /* 500 */
--vlm-font-weight-semibold  /* 600 */
--vlm-font-weight-bold      /* 700 */

/* Line heights */
--vlm-line-height-tight     /* 1.2 */
--vlm-line-height-normal    /* 1.5 */
--vlm-line-height-relaxed   /* 1.75 */
```

**Example customization:**

```css
:root {
  --vlm-color-primary: oklch(55% 0.2 270deg);
  --vlm-font-family-sans: 'Inter', system-ui, sans-serif;
  --vlm-font-size-md: 15px;
}
```

Individual components expose their own `--vlm-<component>-*` tokens. Refer to each component's Storybook documentation for component-specific tokens.

## Components

- **Button** — Primary, secondary, and ghost button variants
- **Checkbox** — Accessible checkbox with indeterminate state support
- **Chip** — Compact, dismissible labels
- **Dropdown** — Accessible dropdown menu with keyboard navigation
- **Icon** — SVG icon wrapper with dynamic loading
- **Input** — Text input with label, error states, and validation
- **Menu** — Navigation menu with nested items
- **Radio Group** — Accessible radio button group
- **Select** — Custom select dropdown with search
- **Toggle** — Switch/toggle input
- **Typography** — Heading, paragraph, and text utilities
- **And more...**

## Development

See the [main repository](https://github.com/marasa/vellum) for contributing guidelines and development setup.

## License

MIT © Antonio Marasescu-Duran
