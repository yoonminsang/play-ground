import { color } from './color';
import { media } from './media';
import { typoStyle as typo } from './typo.style';
import { scrollStyle as scroll } from './scroll.style';
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
