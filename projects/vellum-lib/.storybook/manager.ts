import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

// Storybook's manager UI runs colors through the `polished` library (opacify, parseToRgb, ...),
// which can't parse the `oklch()` syntax used by our design tokens — hex equivalents only.
const theme = create({
  base: 'dark',
  brandTitle: 'Vellum',

  colorPrimary: '#f59e0b',
  colorSecondary: '#f59e0b',

  appBg: '#171717',
  appContentBg: '#262626',
  appPreviewBg: '#171717',
  appBorderColor: '#404040',
  appBorderRadius: 6,

  textColor: '#e5e5e5',
  textInverseColor: '#171717',
  textMutedColor: '#a3a3a3',

  barBg: '#262626',
  barTextColor: '#a3a3a3',
  barSelectedColor: '#f59e0b',
  barHoverColor: '#fbbf24',

  buttonBg: '#404040',
  buttonBorder: '#404040',
  booleanBg: '#262626',
  booleanSelectedBg: '#f59e0b',

  inputBg: '#171717',
  inputBorder: '#404040',
  inputTextColor: '#e5e5e5',
  inputBorderRadius: 4
});

addons.setConfig({ theme });
