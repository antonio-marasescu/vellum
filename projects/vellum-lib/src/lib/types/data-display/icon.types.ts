import type { IconName } from '../../utils/icons';

export type IconSize = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type IconTheme =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'neutral';

export type IconProps = {
  icon: IconName;
  size?: IconSize;
  theme?: IconTheme;
  alt?: string;
};
