import type { ChipSize, ChipTheme } from '../../types/data-display/chip.types';

export const THEME_BASE_CLASSES: Record<ChipTheme, string> = {
  primary: 'bg-[color:var(--vlm-chip-primary-bg)] text-[color:var(--vlm-chip-primary-fg)]',
  secondary: 'bg-[color:var(--vlm-chip-secondary-bg)] text-[color:var(--vlm-chip-secondary-fg)]',
  info: 'bg-[color:var(--vlm-chip-info-bg)] text-[color:var(--vlm-chip-info-fg)]',
  success: 'bg-[color:var(--vlm-chip-success-bg)] text-[color:var(--vlm-chip-success-fg)]',
  warning: 'bg-[color:var(--vlm-chip-warning-bg)] text-[color:var(--vlm-chip-warning-fg)]'
};

export const THEME_HOVER_VARIANT_CLASSES: Record<ChipTheme, string> = {
  primary: 'hover:bg-[color:var(--vlm-chip-primary-bg-hover)]',
  secondary: 'hover:bg-[color:var(--vlm-chip-secondary-bg-hover)]',
  info: 'hover:bg-[color:var(--vlm-chip-info-bg-hover)]',
  success: 'hover:bg-[color:var(--vlm-chip-success-bg-hover)]',
  warning: 'hover:bg-[color:var(--vlm-chip-warning-bg-hover)]'
};

export const THEME_HIGHLIGHTED_CLASSES: Record<ChipTheme, string> = {
  primary: 'bg-[color:var(--vlm-chip-primary-bg-hover)] text-[color:var(--vlm-chip-primary-fg)]',
  secondary:
    'bg-[color:var(--vlm-chip-secondary-bg-hover)] text-[color:var(--vlm-chip-secondary-fg)]',
  info: 'bg-[color:var(--vlm-chip-info-bg-hover)] text-[color:var(--vlm-chip-info-fg)]',
  success: 'bg-[color:var(--vlm-chip-success-bg-hover)] text-[color:var(--vlm-chip-success-fg)]',
  warning: 'bg-[color:var(--vlm-chip-warning-bg-hover)] text-[color:var(--vlm-chip-warning-fg)]'
};

export const SIZE_CLASSES: Record<ChipSize, string> = {
  xs: 'py-[var(--vlm-chip-size-xs-padding-block)] px-[var(--vlm-chip-size-xs-padding-inline)] text-[length:var(--vlm-chip-size-xs-font-size)] gap-[var(--vlm-chip-size-xs-gap)]',
  sm: 'py-[var(--vlm-chip-size-sm-padding-block)] px-[var(--vlm-chip-size-sm-padding-inline)] text-[length:var(--vlm-chip-size-sm-font-size)] gap-[var(--vlm-chip-size-sm-gap)]',
  md: 'py-[var(--vlm-chip-size-md-padding-block)] px-[var(--vlm-chip-size-md-padding-inline)] text-[length:var(--vlm-chip-size-md-font-size)] gap-[var(--vlm-chip-size-md-gap)]',
  lg: 'py-[var(--vlm-chip-size-lg-padding-block)] px-[var(--vlm-chip-size-lg-padding-inline)] text-[length:var(--vlm-chip-size-lg-font-size)] gap-[var(--vlm-chip-size-lg-gap)]',
  xl: 'py-[var(--vlm-chip-size-xl-padding-block)] px-[var(--vlm-chip-size-xl-padding-inline)] text-[length:var(--vlm-chip-size-xl-font-size)] gap-[var(--vlm-chip-size-xl-gap)]',
  xxl: 'py-[var(--vlm-chip-size-xxl-padding-block)] px-[var(--vlm-chip-size-xxl-padding-inline)] text-[length:var(--vlm-chip-size-xxl-font-size)] gap-[var(--vlm-chip-size-xxl-gap)]'
};

export const ENABLED_CLASSES = 'cursor-pointer';
export const DISABLED_CLASSES =
  'cursor-not-allowed pointer-events-none opacity-[var(--vlm-chip-disabled-opacity)]';

export const BASE_CLASSES =
  'vlm-chip inline-flex items-center rounded-[var(--vlm-chip-radius)] font-[family-name:var(--vlm-font-family-sans)] font-[weight:var(--vlm-chip-font-weight)] leading-none select-none transition-[background-color,color] duration-[var(--vlm-chip-transition-duration)] ease-[ease]';
