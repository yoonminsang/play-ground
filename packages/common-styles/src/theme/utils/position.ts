// https://github.com/toss/slash 참조
import { css, SerializedStyles } from '@emotion/react';

import { CSSPixelValue } from '../types';

import type { Property } from 'csstype';

interface Coordinates {
  top?: CSSPixelValue;
  right?: CSSPixelValue;
  bottom?: CSSPixelValue;
  left?: CSSPixelValue;
}

type PositionOrTopOrCordinates = Property.Position | CSSPixelValue | Coordinates;
type TopOrRightOrCoordinates = CSSPixelValue | Coordinates;

/**
 * @name position
 * @description
 * CSS `position`과 `position`에 연관된 프로퍼티(`top`, `right`, `bottom`, `left`)를 쉽게 선언할 수 있도록 하는 shorthand 유틸리티입니다.
 *
 * ```ts
 * type CSSPixelValue = string | number;
 *
 * function position(
 *   position: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky',
 *   top: CSSPixelValue,
 *   right: CSSPixelValue,
 *   bottom: CSSPixelValue,
 *   left: CSSPixelValue
 * ): SerializedStyles;
 * ```
 *
 * @example
 * import { position } from '@toss/emotion-utils';
 *
 * const fullPageLayer = position('fixed', 0, 0, 0, 0);
 * // 위 코드는 아래 코드와 동치입니다.
 * const fullPageLayer = css`
 *   position: fixed;
 *   top: 0;
 *   right: 0;
 *   bottom: 0;
 *   left: 0;
 * `;
 *
 * // 다음처럼도 사용 가능합니다
 * position('absolute', {top: 0, left: 0});
 *
 * // 다음처럼도 사용 가능합니다(absolute, fixed, sticky)
 * position.absolute(0, 0, 0, ,0);
 * position.absolute({top: 0, left: 0});
 */
export function position(
  position: Property.Position,
  top: CSSPixelValue,
  right: CSSPixelValue,
  bottom: CSSPixelValue,
  left: CSSPixelValue,
): SerializedStyles;
export function position(position: Property.Position, coordinates?: Coordinates): SerializedStyles;

export function position(
  positionOrTopOrCoordinates: PositionOrTopOrCordinates,
  topOrRightOrCoordinates: TopOrRightOrCoordinates = {},
  ...values: CSSPixelValue[]
) {
  const [top, right, bottom, left] = (() => {
    // position(position, coordinates);
    if (!isCSSPixelValue(topOrRightOrCoordinates)) {
      return [
        topOrRightOrCoordinates.top,
        topOrRightOrCoordinates.right,
        topOrRightOrCoordinates.bottom,
        topOrRightOrCoordinates.left,
      ];
    }
    // position(position, top, right, bottom, left);
    return [topOrRightOrCoordinates, ...values];
  })();

  return css([
    css({ position: isPositionValue(positionOrTopOrCoordinates) ? positionOrTopOrCoordinates : undefined }),
    css({ top, right, bottom, left }),
  ]);
}

function isPositionValue(value: unknown): value is Property.Position {
  const positions: Property.Position[] = ['static', 'relative', 'absolute', 'fixed', 'sticky', '-webkit-sticky'];
  return positions.includes(value as any);
}

function isCSSPixelValue(value: unknown): value is CSSPixelValue {
  return typeof value === 'string' || typeof value === 'number';
}

position.absolute = createPosition('absolute');
position.fixed = createPosition('fixed');
position.sticky = createPosition('sticky');

function createPosition(pos: Property.Position) {
  function func(coordinates: Coordinates): SerializedStyles;
  function func(top: CSSPixelValue, right: CSSPixelValue, bottom: CSSPixelValue, left: CSSPixelValue): SerializedStyles;
  function func(topOrCoordinates: Coordinates | CSSPixelValue, ...values: CSSPixelValue[]) {
    // position(position, coordinates);
    if (!isCSSPixelValue(topOrCoordinates)) {
      return position(pos, topOrCoordinates);
    }
    // position(position, top, right, bottom, left);
    return position(pos, topOrCoordinates, values[0], values[1], values[2]);
  }

  return func;
}
