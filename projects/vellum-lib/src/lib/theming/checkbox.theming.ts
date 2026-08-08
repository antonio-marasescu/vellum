import type { CheckboxSize, CheckboxTheme } from '../types/checkbox.types';

export const CHECKED_CLASSES: Record<CheckboxTheme, string> = {
  primary:
    'border-transparent bg-[color:var(--vlm-checkbox-primary-color)] text-[color:var(--vlm-checkbox-primary-fg)]',
  secondary:
    'border-transparent bg-[color:var(--vlm-checkbox-secondary-color)] text-[color:var(--vlm-checkbox-secondary-fg)]'
};

export const INVALID_CLASSES =
  'border-transparent bg-[color:var(--vlm-checkbox-error-color)] text-[color:var(--vlm-checkbox-error-fg)]';

export const UNCHECKED_CLASSES =
  'border-[color:var(--vlm-checkbox-unchecked-border-color)] bg-[color:var(--vlm-checkbox-unchecked-bg)]';

export const SIZE_CLASSES: Record<CheckboxSize, string> = {
  xs: 'h-[var(--vlm-checkbox-size-xs-box-size)] w-[var(--vlm-checkbox-size-xs-box-size)]',
  sm: 'h-[var(--vlm-checkbox-size-sm-box-size)] w-[var(--vlm-checkbox-size-sm-box-size)]',
  md: 'h-[var(--vlm-checkbox-size-md-box-size)] w-[var(--vlm-checkbox-size-md-box-size)]',
  lg: 'h-[var(--vlm-checkbox-size-lg-box-size)] w-[var(--vlm-checkbox-size-lg-box-size)]',
  xl: 'h-[var(--vlm-checkbox-size-xl-box-size)] w-[var(--vlm-checkbox-size-xl-box-size)]'
};

export const LABEL_FONT_SIZE_CLASSES: Record<CheckboxSize, string> = {
  xs: 'text-[length:var(--vlm-checkbox-size-xs-font-size)]',
  sm: 'text-[length:var(--vlm-checkbox-size-sm-font-size)]',
  md: 'text-[length:var(--vlm-checkbox-size-md-font-size)]',
  lg: 'text-[length:var(--vlm-checkbox-size-lg-font-size)]',
  xl: 'text-[length:var(--vlm-checkbox-size-xl-font-size)]'
};

export const ENABLED_CLASSES = 'cursor-pointer';
export const DISABLED_CLASSES = 'cursor-not-allowed opacity-[var(--vlm-checkbox-disabled-opacity)]';

export const BASE_CLASSES =
  'vlm-checkbox__box inline-flex shrink-0 items-center justify-center rounded-[var(--vlm-checkbox-radius)] border-[length:var(--vlm-checkbox-border-width)] outline-none transition-[background-color,border-color] duration-[var(--vlm-checkbox-transition-duration)] ease-[ease] peer-focus-visible:ring-[length:var(--vlm-checkbox-focus-ring-width)]';
