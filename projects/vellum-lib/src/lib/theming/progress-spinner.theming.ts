import type { ProgressSpinnerTheme } from '../types/progress-spinner.types';

export const THEME_STROKE_CLASSES: Record<ProgressSpinnerTheme, string> = {
  primary: 'stroke-[color:var(--vlm-progress-spinner-primary-color)]',
  secondary: 'stroke-[color:var(--vlm-progress-spinner-secondary-color)]',
  info: 'stroke-[color:var(--vlm-progress-spinner-info-color)]',
  success: 'stroke-[color:var(--vlm-progress-spinner-success-color)]',
  warning: 'stroke-[color:var(--vlm-progress-spinner-warning-color)]'
};

// Pseudo-elements (::before/::after) can't take Tailwind classes, so the inner ring's
// theme color is set via an inline CSS custom property referencing one of these var names.
export const THEME_COLOR_VARS: Record<ProgressSpinnerTheme, string> = {
  primary: '--vlm-progress-spinner-primary-color',
  secondary: '--vlm-progress-spinner-secondary-color',
  info: '--vlm-progress-spinner-info-color',
  success: '--vlm-progress-spinner-success-color',
  warning: '--vlm-progress-spinner-warning-color'
};
