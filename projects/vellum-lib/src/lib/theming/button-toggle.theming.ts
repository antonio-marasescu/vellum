import type { ButtonToggleSize, ButtonToggleTheme } from '../types/button-toggle.types';

export const THEME_SELECTED_CLASSES: Record<ButtonToggleTheme, string> = {
  primary:
    'border-transparent bg-[color:var(--vlm-button-toggle-primary-bg)] text-[color:var(--vlm-button-toggle-primary-fg)] enabled:hover:bg-[color:var(--vlm-button-toggle-primary-bg-hover)]',
  secondary:
    'border-transparent bg-[color:var(--vlm-button-toggle-secondary-bg)] text-[color:var(--vlm-button-toggle-secondary-fg)] enabled:hover:bg-[color:var(--vlm-button-toggle-secondary-bg-hover)]',
  info: 'border-transparent bg-[color:var(--vlm-button-toggle-info-bg)] text-[color:var(--vlm-button-toggle-info-fg)] enabled:hover:bg-[color:var(--vlm-button-toggle-info-bg-hover)]',
  success:
    'border-transparent bg-[color:var(--vlm-button-toggle-success-bg)] text-[color:var(--vlm-button-toggle-success-fg)] enabled:hover:bg-[color:var(--vlm-button-toggle-success-bg-hover)]',
  warning:
    'border-transparent bg-[color:var(--vlm-button-toggle-warning-bg)] text-[color:var(--vlm-button-toggle-warning-fg)] enabled:hover:bg-[color:var(--vlm-button-toggle-warning-bg-hover)]'
};

export const UNSELECTED_CLASSES =
  'border-[color:var(--vlm-button-toggle-unselected-border-color)] bg-[color:var(--vlm-button-toggle-unselected-bg)] text-[color:var(--vlm-button-toggle-unselected-color)] opacity-[var(--vlm-button-toggle-unselected-opacity)] enabled:hover:bg-[color:var(--vlm-button-toggle-unselected-bg-hover)] enabled:hover:opacity-100';

export const SIZE_CLASSES: Record<ButtonToggleSize, string> = {
  xs: 'py-[var(--vlm-button-toggle-size-xs-padding-block)] px-[var(--vlm-button-toggle-size-xs-padding-inline)] text-[length:var(--vlm-button-toggle-size-xs-font-size)]',
  sm: 'py-[var(--vlm-button-toggle-size-sm-padding-block)] px-[var(--vlm-button-toggle-size-sm-padding-inline)] text-[length:var(--vlm-button-toggle-size-sm-font-size)]',
  md: 'py-[var(--vlm-button-toggle-size-md-padding-block)] px-[var(--vlm-button-toggle-size-md-padding-inline)] text-[length:var(--vlm-button-toggle-size-md-font-size)]',
  lg: 'py-[var(--vlm-button-toggle-size-lg-padding-block)] px-[var(--vlm-button-toggle-size-lg-padding-inline)] text-[length:var(--vlm-button-toggle-size-lg-font-size)]',
  xl: 'py-[var(--vlm-button-toggle-size-xl-padding-block)] px-[var(--vlm-button-toggle-size-xl-padding-inline)] text-[length:var(--vlm-button-toggle-size-xl-font-size)]',
  xxl: 'py-[var(--vlm-button-toggle-size-xxl-padding-block)] px-[var(--vlm-button-toggle-size-xxl-padding-inline)] text-[length:var(--vlm-button-toggle-size-xxl-font-size)]'
};

export const BASE_CLASSES =
  'vlm-button-toggle inline-flex items-center justify-center cursor-pointer border rounded-[var(--vlm-button-toggle-radius)] font-[family-name:var(--vlm-font-family-sans)] font-[weight:var(--vlm-button-toggle-font-weight)] leading-none transition-[background-color,color,border-color] duration-[var(--vlm-button-toggle-transition-duration)] ease-[ease] disabled:cursor-not-allowed disabled:opacity-[var(--vlm-button-toggle-disabled-opacity)]';
