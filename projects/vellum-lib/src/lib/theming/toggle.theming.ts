import type { ToggleSize, ToggleTheme } from '../types/toggle.types';

export const CHECKED_TRACK_CLASSES: Record<ToggleTheme, string> = {
  primary: 'border-transparent bg-[color:var(--vlm-toggle-primary-color)]',
  secondary: 'border-transparent bg-[color:var(--vlm-toggle-secondary-color)]'
};

export const CHECKED_THUMB_CLASSES: Record<ToggleTheme, string> = {
  primary: 'bg-[color:var(--vlm-toggle-primary-fg)]',
  secondary: 'bg-[color:var(--vlm-toggle-secondary-fg)]'
};

export const INVALID_TRACK_CLASSES = 'border-transparent bg-[color:var(--vlm-toggle-error-color)]';
export const INVALID_THUMB_CLASSES = 'bg-[color:var(--vlm-toggle-error-fg)]';

export const UNCHECKED_TRACK_CLASSES =
  'border-[color:var(--vlm-toggle-unchecked-border-color)] bg-[color:var(--vlm-toggle-unchecked-bg)]';
export const UNCHECKED_THUMB_CLASSES = 'bg-[color:var(--vlm-toggle-unchecked-thumb-color)]';

export const TRACK_SIZE_CLASSES: Record<ToggleSize, string> = {
  xs: 'h-[var(--vlm-toggle-size-xs-track-height)] w-[var(--vlm-toggle-size-xs-track-width)]',
  sm: 'h-[var(--vlm-toggle-size-sm-track-height)] w-[var(--vlm-toggle-size-sm-track-width)]',
  md: 'h-[var(--vlm-toggle-size-md-track-height)] w-[var(--vlm-toggle-size-md-track-width)]',
  lg: 'h-[var(--vlm-toggle-size-lg-track-height)] w-[var(--vlm-toggle-size-lg-track-width)]',
  xl: 'h-[var(--vlm-toggle-size-xl-track-height)] w-[var(--vlm-toggle-size-xl-track-width)]'
};

export const THUMB_SIZE_CLASSES: Record<ToggleSize, string> = {
  xs: 'h-[var(--vlm-toggle-size-xs-thumb-size)] w-[var(--vlm-toggle-size-xs-thumb-size)]',
  sm: 'h-[var(--vlm-toggle-size-sm-thumb-size)] w-[var(--vlm-toggle-size-sm-thumb-size)]',
  md: 'h-[var(--vlm-toggle-size-md-thumb-size)] w-[var(--vlm-toggle-size-md-thumb-size)]',
  lg: 'h-[var(--vlm-toggle-size-lg-thumb-size)] w-[var(--vlm-toggle-size-lg-thumb-size)]',
  xl: 'h-[var(--vlm-toggle-size-xl-thumb-size)] w-[var(--vlm-toggle-size-xl-thumb-size)]'
};

export const THUMB_TRAVEL_CLASSES: Record<ToggleSize, string> = {
  xs: 'translate-x-[var(--vlm-toggle-size-xs-thumb-travel)]',
  sm: 'translate-x-[var(--vlm-toggle-size-sm-thumb-travel)]',
  md: 'translate-x-[var(--vlm-toggle-size-md-thumb-travel)]',
  lg: 'translate-x-[var(--vlm-toggle-size-lg-thumb-travel)]',
  xl: 'translate-x-[var(--vlm-toggle-size-xl-thumb-travel)]'
};

export const LABEL_FONT_SIZE_CLASSES: Record<ToggleSize, string> = {
  xs: 'text-[length:var(--vlm-toggle-size-xs-font-size)]',
  sm: 'text-[length:var(--vlm-toggle-size-sm-font-size)]',
  md: 'text-[length:var(--vlm-toggle-size-md-font-size)]',
  lg: 'text-[length:var(--vlm-toggle-size-lg-font-size)]',
  xl: 'text-[length:var(--vlm-toggle-size-xl-font-size)]'
};

export const ENABLED_CLASSES = 'cursor-pointer';
export const DISABLED_CLASSES = 'cursor-not-allowed opacity-[var(--vlm-toggle-disabled-opacity)]';

export const TRACK_BASE_CLASSES =
  'vlm-toggle__track relative inline-flex shrink-0 items-center rounded-[var(--vlm-toggle-radius)] border-[length:var(--vlm-toggle-border-width)] outline-none transition-[background-color,border-color] duration-[var(--vlm-toggle-transition-duration)] ease-[ease] peer-focus-visible:ring-[length:var(--vlm-toggle-focus-ring-width)]';

export const THUMB_BASE_CLASSES =
  'vlm-toggle__thumb absolute left-[var(--vlm-toggle-thumb-inset)] rounded-full transition-[transform,background-color] duration-[var(--vlm-toggle-transition-duration)] delay-[var(--vlm-toggle-thumb-transition-delay)] ease-[ease]';
