import type { InputSize, InputTheme, InputVariant } from '../types/input.types';

export const VARIANT_THEME_CLASSES: Record<InputVariant, Record<InputTheme, string>> = {
  basic: {
    primary:
      'border-transparent bg-[color:var(--vlm-input-basic-bg)] focus:border-[color:var(--vlm-input-primary-color)] focus:ring-[color:var(--vlm-input-primary-color)]',
    secondary:
      'border-transparent bg-[color:var(--vlm-input-basic-bg)] focus:border-[color:var(--vlm-input-secondary-color)] focus:ring-[color:var(--vlm-input-secondary-color)]'
  },
  outlined: {
    primary:
      'bg-[color:var(--vlm-input-outlined-bg)] border-[color:var(--vlm-input-outlined-border-color)] focus:border-[color:var(--vlm-input-primary-color)] focus:ring-[color:var(--vlm-input-primary-color)]',
    secondary:
      'bg-[color:var(--vlm-input-outlined-bg)] border-[color:var(--vlm-input-outlined-border-color)] focus:border-[color:var(--vlm-input-secondary-color)] focus:ring-[color:var(--vlm-input-secondary-color)]'
  }
};

export const INVALID_CLASSES: Record<InputVariant, string> = {
  basic:
    'border-transparent bg-[color:var(--vlm-input-basic-bg)] focus:border-[color:var(--vlm-input-error-color)] focus:ring-[color:var(--vlm-input-error-color)]',
  outlined:
    'bg-[color:var(--vlm-input-outlined-bg)] border-[color:var(--vlm-input-error-color)] focus:border-[color:var(--vlm-input-error-color)] focus:ring-[color:var(--vlm-input-error-color)]'
};

export const SIZE_CLASSES: Record<InputSize, string> = {
  xs: 'py-[var(--vlm-input-size-xs-padding-block)] px-[var(--vlm-input-size-xs-padding-inline)] text-[length:var(--vlm-input-size-xs-font-size)]',
  sm: 'py-[var(--vlm-input-size-sm-padding-block)] px-[var(--vlm-input-size-sm-padding-inline)] text-[length:var(--vlm-input-size-sm-font-size)]',
  md: 'py-[var(--vlm-input-size-md-padding-block)] px-[var(--vlm-input-size-md-padding-inline)] text-[length:var(--vlm-input-size-md-font-size)]',
  lg: 'py-[var(--vlm-input-size-lg-padding-block)] px-[var(--vlm-input-size-lg-padding-inline)] text-[length:var(--vlm-input-size-lg-font-size)]',
  xl: 'py-[var(--vlm-input-size-xl-padding-block)] px-[var(--vlm-input-size-xl-padding-inline)] text-[length:var(--vlm-input-size-xl-font-size)]'
};

export const BASE_CLASSES =
  'vlm-input__control w-full rounded-[var(--vlm-input-radius)] border font-[family-name:var(--vlm-font-family-sans)] font-[weight:var(--vlm-input-font-weight)] text-[color:var(--vlm-input-color)] placeholder:text-[color:var(--vlm-input-placeholder-color)] outline-none transition-[border-color,box-shadow] duration-[var(--vlm-input-transition-duration)] ease-[ease] focus:ring-[length:var(--vlm-input-focus-ring-width)] disabled:cursor-not-allowed disabled:opacity-[var(--vlm-input-disabled-opacity)]';
