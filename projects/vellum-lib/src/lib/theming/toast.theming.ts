import type { ToastTheme, ToastVariant } from '../types/toast.types';

export const VARIANT_THEME_CLASSES: Record<ToastVariant, Record<ToastTheme, string>> = {
  basic: {
    primary:
      'border-transparent bg-[color:var(--vlm-toast-primary-bg)] text-[color:var(--vlm-toast-primary-fg)]',
    secondary:
      'border-transparent bg-[color:var(--vlm-toast-secondary-bg)] text-[color:var(--vlm-toast-secondary-fg)]',
    info: 'border-transparent bg-[color:var(--vlm-toast-info-bg)] text-[color:var(--vlm-toast-info-fg)]',
    success:
      'border-transparent bg-[color:var(--vlm-toast-success-bg)] text-[color:var(--vlm-toast-success-fg)]',
    warning:
      'border-transparent bg-[color:var(--vlm-toast-warning-bg)] text-[color:var(--vlm-toast-warning-fg)]'
  },
  outlined: {
    primary:
      'bg-[color:var(--vlm-toast-outlined-bg)] border-[color:var(--vlm-toast-primary-color)] text-[color:var(--vlm-toast-primary-color)]',
    secondary:
      'bg-[color:var(--vlm-toast-outlined-bg)] border-[color:var(--vlm-toast-secondary-color)] text-[color:var(--vlm-toast-secondary-color)]',
    info: 'bg-[color:var(--vlm-toast-outlined-bg)] border-[color:var(--vlm-toast-info-color)] text-[color:var(--vlm-toast-info-color)]',
    success:
      'bg-[color:var(--vlm-toast-outlined-bg)] border-[color:var(--vlm-toast-success-color)] text-[color:var(--vlm-toast-success-color)]',
    warning:
      'bg-[color:var(--vlm-toast-outlined-bg)] border-[color:var(--vlm-toast-warning-color)] text-[color:var(--vlm-toast-warning-color)]'
  }
};

export const DISABLED_CLASSES = 'pointer-events-none opacity-[var(--vlm-toast-disabled-opacity)]';

export const BASE_CLASSES =
  'vlm-toast inline-flex items-center gap-[var(--vlm-toast-gap)] rounded-[var(--vlm-toast-radius)] border px-[var(--vlm-toast-padding-inline)] py-[var(--vlm-toast-padding-block)] font-[family-name:var(--vlm-font-family-sans)] font-[weight:var(--vlm-toast-font-weight)] text-[length:var(--vlm-toast-font-size)] leading-[var(--vlm-toast-line-height)] shadow-[var(--vlm-toast-shadow)]';
