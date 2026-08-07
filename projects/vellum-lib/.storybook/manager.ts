import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

const theme = create({
  base: 'dark',
  brandTitle: 'Vellum',

  colorPrimary: 'oklch(0.7686 0.1647 70.0804)',
  colorSecondary: 'oklch(0.7686 0.1647 70.0804)',

  appBg: 'oklch(0.2046 0 0)',
  appContentBg: 'oklch(0.2686 0 0)',
  appPreviewBg: 'oklch(0.2046 0 0)',
  appBorderColor: 'oklch(0.3715 0 0)',
  appBorderRadius: 6,

  textColor: 'oklch(0.9219 0 0)',
  textInverseColor: 'oklch(0.2046 0 0)',
  textMutedColor: 'oklch(0.7155 0 0)',

  barBg: 'oklch(0.2686 0 0)',
  barTextColor: 'oklch(0.7155 0 0)',
  barSelectedColor: 'oklch(0.7686 0.1647 70.0804)',
  barHoverColor: 'oklch(0.8369 0.1644 84.4286)',

  buttonBg: 'oklch(0.3715 0 0)',
  buttonBorder: 'oklch(0.3715 0 0)',
  booleanBg: 'oklch(0.2686 0 0)',
  booleanSelectedBg: 'oklch(0.7686 0.1647 70.0804)',

  inputBg: 'oklch(0.2046 0 0)',
  inputBorder: 'oklch(0.3715 0 0)',
  inputTextColor: 'oklch(0.9219 0 0)',
  inputBorderRadius: 4
});

addons.setConfig({ theme });
