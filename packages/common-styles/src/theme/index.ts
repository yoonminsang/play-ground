import { color } from './color';
import { media } from './media';
import { typo } from './typo';
import { scroll } from './scroll';
import { helperStyle } from './helper.style';
import { ellipsisStyle } from './utils/ellipsis';

export const theme = {
  color,
  media,
  typo,
  scroll,
  ...helperStyle,
  ...ellipsisStyle,
};

export type TTheme = typeof theme;
