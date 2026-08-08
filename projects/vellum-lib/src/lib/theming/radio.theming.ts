import type { RadioSize, RadioTheme } from '../types/radio.types';

export const CHECKED_CLASSES: Record<RadioTheme, string> = {
  primary: 'border-transparent bg-[color:var(--vlm-radio-primary-color)]',
  secondary: 'border-transparent bg-[color:var(--vlm-radio-secondary-color)]'
};

export const DOT_CLASSES: Record<RadioTheme, string> = {
  primary: 'bg-[color:var(--vlm-radio-primary-fg)]',
  secondary: 'bg-[color:var(--vlm-radio-secondary-fg)]'
};

export const INVALID_DOT_CLASSES = 'bg-[color:var(--vlm-radio-error-fg)]';

export const INVALID_CLASSES = 'border-transparent bg-[color:var(--vlm-radio-error-color)]';

export const UNCHECKED_CLASSES =
  'border-[color:var(--vlm-radio-unchecked-border-color)] bg-[color:var(--vlm-radio-unchecked-bg)]';

export const SIZE_CLASSES: Record<RadioSize, string> = {
  xs: 'h-[var(--vlm-radio-size-xs-box-size)] w-[var(--vlm-radio-size-xs-box-size)]',
  sm: 'h-[var(--vlm-radio-size-sm-box-size)] w-[var(--vlm-radio-size-sm-box-size)]',
  md: 'h-[var(--vlm-radio-size-md-box-size)] w-[var(--vlm-radio-size-md-box-size)]',
  lg: 'h-[var(--vlm-radio-size-lg-box-size)] w-[var(--vlm-radio-size-lg-box-size)]',
  xl: 'h-[var(--vlm-radio-size-xl-box-size)] w-[var(--vlm-radio-size-xl-box-size)]'
};

export const DOT_SIZE_CLASSES: Record<RadioSize, string> = {
  xs: 'h-[var(--vlm-radio-size-xs-dot-size)] w-[var(--vlm-radio-size-xs-dot-size)]',
  sm: 'h-[var(--vlm-radio-size-sm-dot-size)] w-[var(--vlm-radio-size-sm-dot-size)]',
  md: 'h-[var(--vlm-radio-size-md-dot-size)] w-[var(--vlm-radio-size-md-dot-size)]',
  lg: 'h-[var(--vlm-radio-size-lg-dot-size)] w-[var(--vlm-radio-size-lg-dot-size)]',
  xl: 'h-[var(--vlm-radio-size-xl-dot-size)] w-[var(--vlm-radio-size-xl-dot-size)]'
};

export const LABEL_FONT_SIZE_CLASSES: Record<RadioSize, string> = {
  xs: 'text-[length:var(--vlm-radio-size-xs-font-size)]',
  sm: 'text-[length:var(--vlm-radio-size-sm-font-size)]',
  md: 'text-[length:var(--vlm-radio-size-md-font-size)]',
  lg: 'text-[length:var(--vlm-radio-size-lg-font-size)]',
  xl: 'text-[length:var(--vlm-radio-size-xl-font-size)]'
};

export const ENABLED_CLASSES = 'cursor-pointer';
export const DISABLED_CLASSES = 'cursor-not-allowed opacity-[var(--vlm-radio-disabled-opacity)]';

export const BASE_CLASSES =
  'vlm-radio__circle relative inline-flex shrink-0 items-center justify-center rounded-full border-[length:var(--vlm-radio-border-width)] outline-none transition-[background-color,border-color] duration-[var(--vlm-radio-transition-duration)] ease-[ease] peer-focus-visible:ring-[length:var(--vlm-radio-focus-ring-width)]';

export const DOT_BASE_CLASSES = 'rounded-full';
