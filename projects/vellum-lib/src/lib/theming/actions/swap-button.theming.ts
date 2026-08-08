import type { SwapButtonSize } from '../../types/actions/swap-button.types';

export const SIZE_CLASSES: Record<SwapButtonSize, string> = {
  xs: 'w-[var(--vlm-swap-button-size-xs-diameter)] h-[var(--vlm-swap-button-size-xs-diameter)] text-[length:var(--vlm-swap-button-size-xs-icon-size)]',
  sm: 'w-[var(--vlm-swap-button-size-sm-diameter)] h-[var(--vlm-swap-button-size-sm-diameter)] text-[length:var(--vlm-swap-button-size-sm-icon-size)]',
  md: 'w-[var(--vlm-swap-button-size-md-diameter)] h-[var(--vlm-swap-button-size-md-diameter)] text-[length:var(--vlm-swap-button-size-md-icon-size)]',
  lg: 'w-[var(--vlm-swap-button-size-lg-diameter)] h-[var(--vlm-swap-button-size-lg-diameter)] text-[length:var(--vlm-swap-button-size-lg-icon-size)]',
  xl: 'w-[var(--vlm-swap-button-size-xl-diameter)] h-[var(--vlm-swap-button-size-xl-diameter)] text-[length:var(--vlm-swap-button-size-xl-icon-size)]',
  xxl: 'w-[var(--vlm-swap-button-size-xxl-diameter)] h-[var(--vlm-swap-button-size-xxl-diameter)] text-[length:var(--vlm-swap-button-size-xxl-icon-size)]'
};

export const BASE_CLASSES =
  'vlm-swap-button relative inline-flex items-center justify-center rounded-[var(--vlm-swap-button-radius)] border-transparent bg-[color:var(--vlm-swap-button-bg)] text-[color:var(--vlm-swap-button-color)] cursor-pointer transition-[background-color,color] duration-[var(--vlm-swap-button-transition-duration)] ease-[ease] enabled:hover:bg-[color:var(--vlm-swap-button-bg-hover)] disabled:cursor-not-allowed disabled:opacity-[var(--vlm-swap-button-disabled-opacity)]';

export const ICON_BASE_CLASSES =
  'vlm-swap-button__icon pointer-events-none absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-[var(--vlm-swap-button-transition-duration)] ease-[ease]';

export const ICON_ACTIVE_CLASSES = 'opacity-100 scale-100';

export const ICON_INACTIVE_CLASSES = 'opacity-0 scale-[var(--vlm-swap-button-inactive-scale)]';
