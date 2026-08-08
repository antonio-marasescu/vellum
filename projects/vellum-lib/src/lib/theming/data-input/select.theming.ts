import type { SelectSize, SelectTheme, SelectVariant } from '../../types/data-input/select.types';

export const VARIANT_THEME_CLASSES: Record<SelectVariant, Record<SelectTheme, string>> = {
  basic: {
    primary:
      'border-transparent bg-[color:var(--vlm-select-basic-bg)] focus:border-[color:var(--vlm-select-primary-color)] focus:ring-[color:var(--vlm-select-primary-color)]',
    secondary:
      'border-transparent bg-[color:var(--vlm-select-basic-bg)] focus:border-[color:var(--vlm-select-secondary-color)] focus:ring-[color:var(--vlm-select-secondary-color)]'
  },
  outlined: {
    primary:
      'bg-[color:var(--vlm-select-outlined-bg)] border-[color:var(--vlm-select-outlined-border-color)] focus:border-[color:var(--vlm-select-primary-color)] focus:ring-[color:var(--vlm-select-primary-color)]',
    secondary:
      'bg-[color:var(--vlm-select-outlined-bg)] border-[color:var(--vlm-select-outlined-border-color)] focus:border-[color:var(--vlm-select-secondary-color)] focus:ring-[color:var(--vlm-select-secondary-color)]'
  }
};

export const INVALID_CLASSES: Record<SelectVariant, string> = {
  basic:
    'border-transparent bg-[color:var(--vlm-select-basic-bg)] focus:border-[color:var(--vlm-select-error-color)] focus:ring-[color:var(--vlm-select-error-color)]',
  outlined:
    'bg-[color:var(--vlm-select-outlined-bg)] border-[color:var(--vlm-select-error-color)] focus:border-[color:var(--vlm-select-error-color)] focus:ring-[color:var(--vlm-select-error-color)]'
};

export const SIZE_CLASSES: Record<SelectSize, string> = {
  xs: 'py-[var(--vlm-select-size-xs-padding-block)] pl-[var(--vlm-select-size-xs-padding-inline)] pr-[var(--vlm-select-chevron-padding)] text-[length:var(--vlm-select-size-xs-font-size)]',
  sm: 'py-[var(--vlm-select-size-sm-padding-block)] pl-[var(--vlm-select-size-sm-padding-inline)] pr-[var(--vlm-select-chevron-padding)] text-[length:var(--vlm-select-size-sm-font-size)]',
  md: 'py-[var(--vlm-select-size-md-padding-block)] pl-[var(--vlm-select-size-md-padding-inline)] pr-[var(--vlm-select-chevron-padding)] text-[length:var(--vlm-select-size-md-font-size)]',
  lg: 'py-[var(--vlm-select-size-lg-padding-block)] pl-[var(--vlm-select-size-lg-padding-inline)] pr-[var(--vlm-select-chevron-padding)] text-[length:var(--vlm-select-size-lg-font-size)]',
  xl: 'py-[var(--vlm-select-size-xl-padding-block)] pl-[var(--vlm-select-size-xl-padding-inline)] pr-[var(--vlm-select-chevron-padding)] text-[length:var(--vlm-select-size-xl-font-size)]'
};

export const BASE_CLASSES =
  'vlm-select__control w-full appearance-none rounded-[var(--vlm-select-radius)] border bg-no-repeat font-[family-name:var(--vlm-font-family-sans)] font-[weight:var(--vlm-select-font-weight)] text-[color:var(--vlm-select-color)] outline-none transition-[border-color,box-shadow] duration-[var(--vlm-select-transition-duration)] ease-[ease] focus:ring-[length:var(--vlm-select-focus-ring-width)] disabled:cursor-not-allowed disabled:opacity-[var(--vlm-select-disabled-opacity)]';
