// https://github.com/toss/slash 참조
import { CSSProperties } from 'react';

import { css } from '@emotion/react';

interface SizeOptions {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

/**
 * @description width, height 스타일링을 위한 유틸리티입니다.
 *
 * ```ts
 * function size(options: {
 *   width?: CSSProperties['width'];
 *   height?: CSSProperties['height'];
 * }): SerializedStyles;
 *
 * size.full: SerializedStyles
 * size.wFull: SerializedStyles;
 * size.hFull: SerializedStyles;
 * ```
 *
 * @example
 * size({ width: '50%', height: '100px' });
 * // =>
 * // css`
 * //   width: 50%;
 * //   height: 100px;
 * // `;
 */
export function size({ width, height }: SizeOptions) {
  return css({ width, height });
}

size.full = size({ width: '100%', height: '100%' });
size.wFull = size({ width: '100%' });
size.hFull = size({ height: '100%' });
