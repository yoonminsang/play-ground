import { color } from './color';
import { media } from './media';
import { typo } from './typo';
import { scroll } from './scroll';
import { ellipsisStyle } from './utils/ellipsis';
import { center } from './center';

export const theme = {
  color,
  media,
  typo,
  scroll,
  center,
  ...ellipsisStyle,
};

export type TTheme = typeof theme;
