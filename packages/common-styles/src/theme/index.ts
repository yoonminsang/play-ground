import { color } from './color';
import { media } from './media';
import { typoStyle as typo } from './typo.style';
import { scrollStyle as scroll } from './scroll.style';
import { lineClampStyle as lineClamp, truncateStyle as truncate } from './helper.style';

export const theme = {
  color,
  media,
  typo,
  scroll,
  truncate,
  lineClamp,
};

export type TTheme = typeof theme;
