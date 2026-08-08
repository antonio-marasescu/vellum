import type { DividerTheme } from '../../types/layout/divider.types';

export const THEME_CLASSES: Record<DividerTheme, string> = {
  neutral: 'border-[color:var(--vlm-divider-neutral-color)]',
  primary: 'border-[color:var(--vlm-divider-primary-color)]',
  secondary: 'border-[color:var(--vlm-divider-secondary-color)]'
};
