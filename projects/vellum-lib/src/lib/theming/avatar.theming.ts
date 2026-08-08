import type { AvatarSize, AvatarVariant } from '../types/avatar.types';

export const VARIANT_CLASSES: Record<AvatarVariant, string> = {
  round: 'rounded-full',
  square: 'rounded-none',
  rounded: 'rounded-[var(--vlm-avatar-radius)]'
};

export const SIZE_CLASSES: Record<AvatarSize, string> = {
  xs: 'w-[var(--vlm-avatar-size-xs-diameter)] h-[var(--vlm-avatar-size-xs-diameter)] text-[length:var(--vlm-avatar-size-xs-font-size)]',
  sm: 'w-[var(--vlm-avatar-size-sm-diameter)] h-[var(--vlm-avatar-size-sm-diameter)] text-[length:var(--vlm-avatar-size-sm-font-size)]',
  md: 'w-[var(--vlm-avatar-size-md-diameter)] h-[var(--vlm-avatar-size-md-diameter)] text-[length:var(--vlm-avatar-size-md-font-size)]',
  lg: 'w-[var(--vlm-avatar-size-lg-diameter)] h-[var(--vlm-avatar-size-lg-diameter)] text-[length:var(--vlm-avatar-size-lg-font-size)]',
  xl: 'w-[var(--vlm-avatar-size-xl-diameter)] h-[var(--vlm-avatar-size-xl-diameter)] text-[length:var(--vlm-avatar-size-xl-font-size)]',
  xxl: 'w-[var(--vlm-avatar-size-xxl-diameter)] h-[var(--vlm-avatar-size-xxl-diameter)] text-[length:var(--vlm-avatar-size-xxl-font-size)]'
};

export const BASE_CLASSES =
  'vlm-avatar relative inline-flex items-center justify-center overflow-hidden bg-[color:var(--vlm-avatar-bg)] font-[family-name:var(--vlm-font-family-sans)] font-[weight:var(--vlm-avatar-font-weight)] leading-none text-[color:var(--vlm-avatar-fg)] select-none';

export const CLICKABLE_CLASSES =
  'cursor-pointer transition-[box-shadow] duration-[var(--vlm-avatar-transition-duration)] ease-[ease] hover:shadow-[0_0_0_var(--vlm-avatar-clickable-ring-width)_var(--vlm-avatar-clickable-ring-color)]';
