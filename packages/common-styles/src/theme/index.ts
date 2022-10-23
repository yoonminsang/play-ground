import { color } from './color';
import { media } from './media';
import { typo } from './typo';
import { scroll } from './scroll';
import { center } from './utils/center';
import { lineClamp, truncate } from './utils/ellipsis';
import { position } from './utils/position';
import { size } from './utils/size';

export const theme = {
  color,
  media,
  typo,
  scroll,
  center,
  truncate,
  lineClamp,
  position,
  size,
};

export type TTheme = typeof theme;
