import { color } from './color';
import { media } from './media';
import { typo } from './typo';
import { scroll } from './scroll';
import { center } from './center';
import { lineClamp, truncate } from './utils/ellipsis';

export const theme = {
  color,
  media,
  typo,
  scroll,
  center,
  truncate,
  lineClamp,
};

export type TTheme = typeof theme;
