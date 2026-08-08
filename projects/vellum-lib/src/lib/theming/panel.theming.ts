import type { PanelSize, PanelTheme } from '../types/panel.types';

export const THEME_CLASSES: Record<PanelTheme, string> = {
  primary: 'border-[color:var(--vlm-panel-primary-border)]',
  secondary: 'border-[color:var(--vlm-panel-secondary-border)]',
  info: 'border-[color:var(--vlm-panel-info-border)]',
  success: 'border-[color:var(--vlm-panel-success-border)]',
  warning: 'border-[color:var(--vlm-panel-warning-border)]',
  neutral: 'border-[color:var(--vlm-panel-neutral-border)]'
};

export const HEADER_SIZE_CLASSES: Record<PanelSize, string> = {
  xs: 'py-[var(--vlm-panel-size-xs-padding-block)] px-[var(--vlm-panel-size-xs-padding-inline)] text-[length:var(--vlm-panel-size-xs-font-size)] gap-[var(--vlm-panel-size-xs-gap)] [--chevron-size:var(--vlm-panel-size-xs-chevron-size)]',
  sm: 'py-[var(--vlm-panel-size-sm-padding-block)] px-[var(--vlm-panel-size-sm-padding-inline)] text-[length:var(--vlm-panel-size-sm-font-size)] gap-[var(--vlm-panel-size-sm-gap)] [--chevron-size:var(--vlm-panel-size-sm-chevron-size)]',
  md: 'py-[var(--vlm-panel-size-md-padding-block)] px-[var(--vlm-panel-size-md-padding-inline)] text-[length:var(--vlm-panel-size-md-font-size)] gap-[var(--vlm-panel-size-md-gap)] [--chevron-size:var(--vlm-panel-size-md-chevron-size)]',
  lg: 'py-[var(--vlm-panel-size-lg-padding-block)] px-[var(--vlm-panel-size-lg-padding-inline)] text-[length:var(--vlm-panel-size-lg-font-size)] gap-[var(--vlm-panel-size-lg-gap)] [--chevron-size:var(--vlm-panel-size-lg-chevron-size)]',
  xl: 'py-[var(--vlm-panel-size-xl-padding-block)] px-[var(--vlm-panel-size-xl-padding-inline)] text-[length:var(--vlm-panel-size-xl-font-size)] gap-[var(--vlm-panel-size-xl-gap)] [--chevron-size:var(--vlm-panel-size-xl-chevron-size)]',
  xxl: 'py-[var(--vlm-panel-size-xxl-padding-block)] px-[var(--vlm-panel-size-xxl-padding-inline)] text-[length:var(--vlm-panel-size-xxl-font-size)] gap-[var(--vlm-panel-size-xxl-gap)] [--chevron-size:var(--vlm-panel-size-xxl-chevron-size)]'
};

export const BODY_SIZE_CLASSES: Record<PanelSize, string> = {
  xs: 'px-[var(--vlm-panel-size-xs-padding-inline)] pb-[var(--vlm-panel-size-xs-padding-block)] text-[length:var(--vlm-panel-size-xs-font-size)]',
  sm: 'px-[var(--vlm-panel-size-sm-padding-inline)] pb-[var(--vlm-panel-size-sm-padding-block)] text-[length:var(--vlm-panel-size-sm-font-size)]',
  md: 'px-[var(--vlm-panel-size-md-padding-inline)] pb-[var(--vlm-panel-size-md-padding-block)] text-[length:var(--vlm-panel-size-md-font-size)]',
  lg: 'px-[var(--vlm-panel-size-lg-padding-inline)] pb-[var(--vlm-panel-size-lg-padding-block)] text-[length:var(--vlm-panel-size-lg-font-size)]',
  xl: 'px-[var(--vlm-panel-size-xl-padding-inline)] pb-[var(--vlm-panel-size-xl-padding-block)] text-[length:var(--vlm-panel-size-xl-font-size)]',
  xxl: 'px-[var(--vlm-panel-size-xxl-padding-inline)] pb-[var(--vlm-panel-size-xxl-padding-block)] text-[length:var(--vlm-panel-size-xxl-font-size)]'
};

export const DISABLED_CLASSES = 'pointer-events-none opacity-[var(--vlm-panel-disabled-opacity)]';

export const BASE_CLASSES =
  'vlm-panel block rounded-[var(--vlm-panel-radius)] border bg-[color:var(--vlm-panel-bg)] text-[color:var(--vlm-panel-color)] font-[family-name:var(--vlm-font-family-sans)]';

export const HEADER_BASE_CLASSES =
  'vlm-panel__header grid w-full cursor-pointer items-center font-[weight:var(--vlm-panel-header-font-weight)] outline-none [grid-template-columns:0.9fr_0.1fr]';
