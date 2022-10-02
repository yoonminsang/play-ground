import { breakPoints } from '../break-points';
import { mediaQuery } from '../media-query';

export const media = {
  xxlarge: mediaQuery(breakPoints.xxlarge),
  xlarge: mediaQuery(breakPoints.xlarge),
  large: mediaQuery(breakPoints.large),
  medium: mediaQuery(breakPoints.medium),
  small: mediaQuery(breakPoints.small),
  xsmall: mediaQuery(breakPoints.xsmall),
};
