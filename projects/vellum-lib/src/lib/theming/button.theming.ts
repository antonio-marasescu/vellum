import type { ButtonSize, ButtonTheme, ButtonVariant } from '../types/button.types';

type ButtonFamily = 'filled' | 'text' | 'outlined';

export const FAMILY_BY_VARIANT: Record<ButtonVariant, ButtonFamily> = {
  basic: 'filled',
  fab: 'filled',
  text: 'text',
  outlined: 'outlined',
  'fab-outlined': 'outlined'
};

export const FAMILY_THEME_CLASSES: Record<ButtonFamily, Record<ButtonTheme, string>> = {
  filled: {
    primary:
      'border-transparent bg-[color:var(--vlm-button-primary-bg)] text-[color:var(--vlm-button-primary-fg)] enabled:hover:bg-[color:var(--vlm-button-primary-bg-hover)]',
    secondary:
      'border-transparent bg-[color:var(--vlm-button-secondary-bg)] text-[color:var(--vlm-button-secondary-fg)] enabled:hover:bg-[color:var(--vlm-button-secondary-bg-hover)]'
  },
  text: {
    primary:
      'border-transparent bg-transparent text-[color:var(--vlm-button-primary-color)] enabled:hover:bg-[color:var(--vlm-button-primary-bg-hover-subtle)]',
    secondary:
      'border-transparent bg-transparent text-[color:var(--vlm-button-secondary-color)] enabled:hover:bg-[color:var(--vlm-button-secondary-bg-hover-subtle)]'
  },
  outlined: {
    primary:
      'bg-transparent text-[color:var(--vlm-button-primary-color)] border-[color:var(--vlm-button-primary-color)] enabled:hover:bg-[color:var(--vlm-button-primary-bg-hover-subtle)]',
    secondary:
      'bg-transparent text-[color:var(--vlm-button-secondary-color)] border-[color:var(--vlm-button-secondary-color)] enabled:hover:bg-[color:var(--vlm-button-secondary-bg-hover-subtle)]'
  }
};

export const SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: 'py-[var(--vlm-button-size-xs-padding-block)] px-[var(--vlm-button-size-xs-padding-inline)] text-[length:var(--vlm-button-size-xs-font-size)] gap-[var(--vlm-button-size-xs-gap)]',
  sm: 'py-[var(--vlm-button-size-sm-padding-block)] px-[var(--vlm-button-size-sm-padding-inline)] text-[length:var(--vlm-button-size-sm-font-size)] gap-[var(--vlm-button-size-sm-gap)]',
  md: 'py-[var(--vlm-button-size-md-padding-block)] px-[var(--vlm-button-size-md-padding-inline)] text-[length:var(--vlm-button-size-md-font-size)] gap-[var(--vlm-button-size-md-gap)]',
  lg: 'py-[var(--vlm-button-size-lg-padding-block)] px-[var(--vlm-button-size-lg-padding-inline)] text-[length:var(--vlm-button-size-lg-font-size)] gap-[var(--vlm-button-size-lg-gap)]',
  xl: 'py-[var(--vlm-button-size-xl-padding-block)] px-[var(--vlm-button-size-xl-padding-inline)] text-[length:var(--vlm-button-size-xl-font-size)] gap-[var(--vlm-button-size-xl-gap)]',
  xxl: 'py-[var(--vlm-button-size-xxl-padding-block)] px-[var(--vlm-button-size-xxl-padding-inline)] text-[length:var(--vlm-button-size-xxl-font-size)] gap-[var(--vlm-button-size-xxl-gap)]'
};

export const FAB_SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: 'w-[var(--vlm-button-size-xs-fab-diameter)] h-[var(--vlm-button-size-xs-fab-diameter)]',
  sm: 'w-[var(--vlm-button-size-sm-fab-diameter)] h-[var(--vlm-button-size-sm-fab-diameter)]',
  md: 'w-[var(--vlm-button-size-md-fab-diameter)] h-[var(--vlm-button-size-md-fab-diameter)]',
  lg: 'w-[var(--vlm-button-size-lg-fab-diameter)] h-[var(--vlm-button-size-lg-fab-diameter)]',
  xl: 'w-[var(--vlm-button-size-xl-fab-diameter)] h-[var(--vlm-button-size-xl-fab-diameter)]',
  xxl: 'w-[var(--vlm-button-size-xxl-fab-diameter)] h-[var(--vlm-button-size-xxl-fab-diameter)]'
};

export const BASE_CLASSES =
  'vlm-button inline-flex items-center justify-center border rounded-[var(--vlm-button-radius)] font-[family-name:var(--vlm-font-family-sans)] font-[weight:var(--vlm-button-font-weight)] leading-none cursor-pointer transition-[background-color,color,border-color,box-shadow] duration-[var(--vlm-button-transition-duration)] ease-[ease] disabled:cursor-not-allowed disabled:opacity-[var(--vlm-button-disabled-opacity)]';
