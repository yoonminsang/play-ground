// https://github.com/toss/slash 참조
import { CSSProperties } from 'react';

import { css, SerializedStyles } from '@emotion/react';

export interface FlexOptions {
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
}

/**
 * @name flex
 * @description flex 스타일링을 위한 유틸리티
 *
 * ```ts
 * function flex(options: FlexOptions): SerializedStyles;
 * function flex(
 *   align: CSSProperties['alignItems'],
 *   justify?: CSSProperties['justifyContent'],
 *   direction?: CSSProperties['flexDirection'],
 * ): SerializedStyles;
 * ```
 *
 * @example
 * const MyButton = styled.button`
 *   width: 50px;
 *   height: 50px;
 *   background-color: rgb(249, 250, 251, 0.6);
 *   ${flex({ justify: 'center', align: 'center' })};
 * `;
 *
 * const MyButton2 = styled.button`
 *   width: 50px;
 *   height: 50px;
 *   background-color: rgb(249, 250, 251, 0.6);
 *   ${flex('center', 'center')};
 * `;
 */
export function flex(options: FlexOptions): SerializedStyles;
export function flex(
  align: CSSProperties['alignItems'],
  justify?: CSSProperties['justifyContent'],
  direction?: CSSProperties['flexDirection'],
): SerializedStyles;
export function flex(
  alignOrFlexOptions: FlexOptions | CSSProperties['alignItems'],
  justify = 'flex-start',
  direction = 'row',
) {
  if (typeof alignOrFlexOptions === 'object') {
    const { align = 'stretch', direction = 'row', justify = 'flex-start' } = alignOrFlexOptions;

    return css`
      align-items: ${align};
      display: flex;
      flex-direction: ${direction};
      justify-content: ${justify};
    `;
  }

  return css`
    align-items: ${alignOrFlexOptions};
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
  `;
}

flex.center = (direction?: FlexOptions['direction']) => flex({ justify: 'center', align: 'center', direction });
