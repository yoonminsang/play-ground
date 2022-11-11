import { useState, useCallback, useRef, CSSProperties, MutableRefObject, useMemo } from 'react';
import type { FC, ReactNode, HTMLAttributes } from 'react';

import { css, useTheme } from '@emotion/react';
import { createPortal } from 'react-dom';

import type { Property } from 'csstype';

// TODO:
// type 추가(timeout 등등) + lint disabled 제거
// 주석추가

// 툴팁 스타일을 외부에서 주입하게 변경? 지금은 backgroundColor, color, maxWidth만 변경 가능
// but 외부에서 주입하면 코드를 작성하기 힘들어짐. 그럼에도 불구하고 더 높은 자유도를 주는 것도 필요해 보이긴 함
// mui는 클래스와 styles 내부 라이브러리를 이요해서 제어.
// 나는 그냥 클래스이름에 prefix붙여서 안겹치제 만들고 emotion으로 제어해야 할 듯

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode;
  type?: 'hover';
  position?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'left-start'
    | 'left'
    | 'left-end';
  portalContainer?: Element | DocumentFragment;
  arrow?: boolean;
  maxWidth?: CSSProperties['maxWidth'];
  backgroundColor?: Property.BackgroundColor;
  color?: Property.Color;
  children?: ReactNode;
}
const Tooltip: FC<Props> = ({
  title,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type = 'hover',
  position = 'bottom',
  portalContainer,
  arrow = true,
  maxWidth = 300,
  backgroundColor: _backgroundColor,
  color: _color,
  children,
  ...otherProps
}) => {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const HOVER_GAP = useMemo(() => {
    if (arrow) return DEFAULT_GAP + ARROW_HEIGHT;
    return DEFAULT_GAP;
  }, [arrow]);
  const backgroundColor = useMemo(() => _backgroundColor ?? theme.color.grey600, [_backgroundColor, theme]);
  const color = useMemo(() => _color ?? theme.color.white, [_color, theme]);

  const onMouseEnter = useCallback(() => {
    setShow(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setShow(false);
  }, []);

  const getTooltipPositions = useCallback((): CSSProperties => {
    if (!ref.current || !tooltipRef.current) return {};
    const { top, right, bottom, left } = ref.current.getBoundingClientRect();
    const [tooltipWidth, tooltipHeight] = [tooltipRef.current.scrollWidth, tooltipRef.current.scrollHeight];

    const calcTop = { top: bottom + HOVER_GAP };
    const calcBottom = { bottom: document.body.clientHeight - top + HOVER_GAP };
    const calcLeft = { left: right + HOVER_GAP };
    const calcRight = { right: left + HOVER_GAP };
    const calcSubTop = { top: (top + bottom) / 2 - tooltipHeight / 2 };
    const calcSubBottom = { bottom: document.body.clientHeight - bottom };
    const calcSubLeft = { left: (left + right) / 2 - tooltipWidth / 2 };
    const calcSubRight = { right: document.body.clientWidth - right };

    switch (position) {
      case 'top-start':
        return { ...calcBottom, left };
      case 'top':
        return { ...calcBottom, ...calcSubLeft };
      case 'top-end':
        return { ...calcBottom, ...calcSubRight };
      case 'bottom-start':
        return { ...calcTop, left };
      case 'bottom':
        return { ...calcTop, ...calcSubLeft };
      case 'bottom-end':
        return { ...calcTop, ...calcSubRight };
      case 'left-start':
        return { ...calcRight, top };
      case 'left':
        return { ...calcRight, ...calcSubTop };
      case 'left-end':
        return { ...calcRight, ...calcSubBottom };
      case 'right-start':
        return { ...calcLeft, top };
      case 'right':
        return { ...calcLeft, ...calcSubTop };
      case 'right-end':
        return { ...calcLeft, ...calcSubBottom };
      default:
        return { top: 'auto' };
    }
  }, [HOVER_GAP, position]);

  const getArrowPositions = useCallback(() => {
    const topBorderColor = { 'border-color': `${backgroundColor} transparent transparent transparent` };
    const bottomBorderColor = { 'border-color': `transparent transparent ${backgroundColor} transparent` };
    const leftBorderColor = { 'border-color': `transparent transparent transparent ${backgroundColor}` };
    const rightBorderColor = { 'border-color': `transparent ${backgroundColor} transparent transparent` };
    switch (position) {
      case 'top-start':
        return css`
          &::after {
            ${theme.position.absolute({ bottom: 0, left: ARROW_WIDTH })}
            margin-bottom: -${ARROW_WIDTH}px;
            ${topBorderColor}
          }
        `;
      case 'top':
        return css`
          &::after {
            ${theme.position.absolute({ bottom: 0, left: '50%' })}
            margin-left: -${ARROW_HEIGHT}px;
            margin-bottom: -${ARROW_WIDTH}px;
            ${topBorderColor}
          }
        `;
      case 'top-end':
        return css`
          &::after {
            ${theme.position.absolute({ bottom: 0, right: ARROW_WIDTH })}
            margin-bottom: -${ARROW_WIDTH}px;
            ${topBorderColor}
          }
        `;
      case 'bottom-start':
        return css`
          &::after {
            ${theme.position.absolute({ top: -ARROW_WIDTH, left: ARROW_WIDTH })}
            ${bottomBorderColor}
          }
        `;
      case 'bottom':
        return css`
          &::after {
            ${theme.position.absolute({ top: -ARROW_WIDTH, left: '50%' })}
            margin-left: -${ARROW_HEIGHT}px;
            ${bottomBorderColor}
          }
        `;
      case 'bottom-end':
        return css`
          &::after {
            ${theme.position.absolute({ top: -ARROW_WIDTH, right: ARROW_WIDTH })}
            margin-bottom: -${ARROW_WIDTH}px;
            ${bottomBorderColor}
          }
        `;
      case 'left-start':
        return css`
          &::after {
            ${theme.position.absolute({ top: ARROW_WIDTH, left: '100%' })}
            ${leftBorderColor}
          }
        `;
      case 'left':
        return css`
          &::after {
            ${theme.position.absolute({ top: '50%', left: '100%' })}
            margin-top: -${ARROW_HEIGHT}px;
            ${leftBorderColor}
          }
        `;
      case 'left-end':
        return css`
          &::after {
            ${theme.position.absolute({ bottom: ARROW_WIDTH, left: '100%' })}
            ${leftBorderColor}
          }
        `;
      case 'right-start':
        return css`
          &::after {
            ${theme.position.absolute({ top: ARROW_WIDTH, right: '100%' })}
            border-color: transparent ${backgroundColor} transparent transparent;
          }
        `;
      case 'right':
        return css`
          &::after {
            ${theme.position.absolute({ top: '50%', right: '100%' })}
            margin-top: -${ARROW_HEIGHT}px;
            ${rightBorderColor}
          }
        `;
      case 'right-end':
        return css`
          &::after {
            ${theme.position.absolute({ bottom: ARROW_WIDTH, right: '100%' })}
            ${rightBorderColor}
          }
        `;
      default:
        return css``;
    }
  }, [backgroundColor, position, theme]);

  const getComponent = useCallback(
    (hiddne = false, tooltipRef?: MutableRefObject<HTMLDivElement | null>) => (
      <div
        ref={tooltipRef}
        css={css`
          ${hiddne
            ? css`
                opacity: 0;
              `
            : css`
                ${theme.position.fixed({ ...getTooltipPositions() })}
              `}
          position: fixed;

          ${theme.size({ width: 'fit-content', maxWidth })}

          padding: 6px 9px;
          border-radius: 10px;

          background-color: ${backgroundColor};
          color: ${color};

          pointer-events: none;

          ${theme.typo.titleM}

          ${arrow && [
            css`
              &::after {
                content: '';
                border-style: solid;
                border-width: ${ARROW_HEIGHT}px;
              }
            `,
            getArrowPositions(),
          ]}
        `}
      >
        {title}
      </div>
    ),
    [arrow, backgroundColor, color, getArrowPositions, getTooltipPositions, maxWidth, title, theme],
  );

  return (
    <>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        css={css`
          width: fit-content;
        `}
        {...otherProps}
      >
        {children}
        {getComponent(true, tooltipRef)}
      </div>
      {show && createPortal(getComponent(), portalContainer ?? document.body)}
    </>
  );
};

export default Tooltip;

/**
 * DEFAULT_GAP: children과 tooltip의 거리
 * ARROW_HEIGHT: 화살표의 높이
 * ARROW_WIDTH: 활살표의 크기(높이*2를 유지해주세요)
 */
const DEFAULT_GAP = 4;
const ARROW_HEIGHT = 5;
const ARROW_WIDTH = ARROW_HEIGHT * 2;
