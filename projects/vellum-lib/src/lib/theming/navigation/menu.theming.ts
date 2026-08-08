import type { MenuSize, MenuTheme } from '../../types/navigation/menu.types';

export const ACTIVE_THEME_CLASSES: Record<MenuTheme, string> = {
  primary: 'bg-[color:var(--vlm-menu-primary-bg)] text-[color:var(--vlm-menu-primary-fg)]',
  secondary: 'bg-[color:var(--vlm-menu-secondary-bg)] text-[color:var(--vlm-menu-secondary-fg)]',
  info: 'bg-[color:var(--vlm-menu-info-bg)] text-[color:var(--vlm-menu-info-fg)]',
  success: 'bg-[color:var(--vlm-menu-success-bg)] text-[color:var(--vlm-menu-success-fg)]',
  warning: 'bg-[color:var(--vlm-menu-warning-bg)] text-[color:var(--vlm-menu-warning-fg)]'
};

export const INACTIVE_CLASSES =
  'bg-transparent text-[color:var(--vlm-menu-item-color)] enabled:hover:bg-[color:var(--vlm-menu-item-hover-bg)]';

export const SIZE_CLASSES: Record<MenuSize, string> = {
  xs: 'py-[var(--vlm-menu-size-xs-padding-block)] px-[var(--vlm-menu-size-xs-padding-inline)] text-[length:var(--vlm-menu-size-xs-font-size)] gap-[var(--vlm-menu-size-xs-gap)]',
  sm: 'py-[var(--vlm-menu-size-sm-padding-block)] px-[var(--vlm-menu-size-sm-padding-inline)] text-[length:var(--vlm-menu-size-sm-font-size)] gap-[var(--vlm-menu-size-sm-gap)]',
  md: 'py-[var(--vlm-menu-size-md-padding-block)] px-[var(--vlm-menu-size-md-padding-inline)] text-[length:var(--vlm-menu-size-md-font-size)] gap-[var(--vlm-menu-size-md-gap)]',
  lg: 'py-[var(--vlm-menu-size-lg-padding-block)] px-[var(--vlm-menu-size-lg-padding-inline)] text-[length:var(--vlm-menu-size-lg-font-size)] gap-[var(--vlm-menu-size-lg-gap)]',
  xl: 'py-[var(--vlm-menu-size-xl-padding-block)] px-[var(--vlm-menu-size-xl-padding-inline)] text-[length:var(--vlm-menu-size-xl-font-size)] gap-[var(--vlm-menu-size-xl-gap)]',
  xxl: 'py-[var(--vlm-menu-size-xxl-padding-block)] px-[var(--vlm-menu-size-xxl-padding-inline)] text-[length:var(--vlm-menu-size-xxl-font-size)] gap-[var(--vlm-menu-size-xxl-gap)]'
};

export const CHEVRON_SIZE_CLASSES: Record<MenuSize, string> = {
  xs: 'h-[var(--vlm-menu-size-xs-chevron-size)] w-[var(--vlm-menu-size-xs-chevron-size)]',
  sm: 'h-[var(--vlm-menu-size-sm-chevron-size)] w-[var(--vlm-menu-size-sm-chevron-size)]',
  md: 'h-[var(--vlm-menu-size-md-chevron-size)] w-[var(--vlm-menu-size-md-chevron-size)]',
  lg: 'h-[var(--vlm-menu-size-lg-chevron-size)] w-[var(--vlm-menu-size-lg-chevron-size)]',
  xl: 'h-[var(--vlm-menu-size-xl-chevron-size)] w-[var(--vlm-menu-size-xl-chevron-size)]',
  xxl: 'h-[var(--vlm-menu-size-xxl-chevron-size)] w-[var(--vlm-menu-size-xxl-chevron-size)]'
};

export const ROW_BASE_CLASSES =
  'vlm-menu-item__row flex w-full cursor-pointer items-center border-0 font-[family-name:var(--vlm-font-family-sans)] font-[weight:var(--vlm-menu-item-font-weight)] rounded-[var(--vlm-menu-item-radius)] outline-none transition-[background-color,color] duration-[var(--vlm-menu-item-transition-duration)] ease-[ease] disabled:cursor-not-allowed disabled:opacity-[var(--vlm-menu-item-disabled-opacity)]';

export const CHEVRON_BASE_CLASSES =
  'vlm-menu-item__chevron ml-auto shrink-0 transition-transform duration-[var(--vlm-menu-item-transition-duration)] ease-[ease]';

export const SUBMENU_WRAPPER_BASE_CLASSES =
  'vlm-menu-item__submenu-wrapper grid overflow-hidden transition-[grid-template-rows] duration-[var(--vlm-menu-item-transition-duration)] ease-[ease]';

export const SUBMENU_INDENT_CLASSES = 'pl-[var(--vlm-menu-item-submenu-indent)]';

// Horizontal menus render their submenu as a floating panel anchored under the trigger
// item, sized to its own content — an in-flow submenu would otherwise be squeezed to the
// trigger row's width.
export const SUBMENU_FLOATING_CLASSES =
  'absolute top-full left-0 z-10 mt-[var(--vlm-menu-item-submenu-offset)] w-max min-w-[var(--vlm-menu-item-submenu-min-width)] rounded-[var(--vlm-menu-item-radius)] border border-[color:var(--vlm-menu-item-submenu-panel-border-color)] bg-[color:var(--vlm-menu-item-submenu-panel-bg)] shadow-[var(--vlm-menu-item-submenu-panel-shadow)]';
