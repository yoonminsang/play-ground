import { useState, useCallback, useRef, CSSProperties, MutableRefObject, useMemo } from 'react';
import type { FC, ReactNode } from 'react';

import { css, useTheme } from '@emotion/react';
import { createPortal } from 'react-dom';

// TODO:
// type 추가(timeout 등등) + lint disabled 제거
// 주석추가

// 툴팁 스타일을 외부에서 주입하게 변경? 지금은 backgroundColor, color, maxWidth만 변경 가능
// but 외부에서 주입하면 코드를 작성하기 힘들어짐. 그럼에도 불구하고 더 높은 자유도를 주는 것도 필요해 보이긴 함
// mui는 클래스와 styles 내부 라이브러리를 이요해서 제어.
// 나는 그냥 클래스이름에 prefix붙여서 안겹치제 만들고 emotion으로 제어해야 할 듯

interface Props {
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
  backgroundColor?: string;
  color?: string;
  children?: ReactNode;
}
const Tooltip: FC<Props> = ({
  title: text,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type = 'hover',
  position = 'bottom',
  portalContainer,
  arrow = true,
  maxWidth = 300,
  backgroundColor,
  color,
  children,
}) => {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const HOVER_GAP = useMemo(() => {
    if (arrow) return DEFAULT_GAP + 5;
    return DEFAULT_GAP;
  }, [arrow]);

  const onMouseEnter = useCallback(() => {
    setShow(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setShow(false);
  }, []);

  const getPositions = useCallback((): CSSProperties => {
    if (!ref.current || !tooltipRef.current) return {};
    const { top, right, bottom, left } = ref.current.getBoundingClientRect();
    const [tooltipWidth, tooltipHeight] = [tooltipRef.current.scrollWidth, tooltipRef.current.scrollHeight];

    const calcTop = bottom + HOVER_GAP;
    const calcBottom = document.body.clientHeight - top + HOVER_GAP;
    const calcLeft = right + HOVER_GAP;
    const calcRight = left + HOVER_GAP;
    const calcSubTop = (top + bottom) / 2 - tooltipHeight / 2;
    const calcSubBottom = document.body.clientHeight - bottom;
    const calcSubLeft = (left + right) / 2 - tooltipWidth / 2;
    const calcSubRight = document.body.clientWidth - right;

    switch (position) {
      case 'top-start':
        return { bottom: calcBottom, left };
      case 'top':
        return { bottom: calcBottom, left: calcSubLeft };
      case 'top-end':
        return { bottom: calcBottom, right: calcSubRight };
      case 'bottom-start':
        return { top: calcTop, left };
      case 'bottom':
        return { top: calcTop, left: calcSubLeft };
      case 'bottom-end':
        return { top: calcTop, right: calcSubRight };
      case 'left-start':
        return { right: calcRight, top };
      case 'left':
        return { right: calcRight, top: calcSubTop };
      case 'left-end':
        return { right: calcRight, bottom: calcSubBottom };
      case 'right-start':
        return { left: calcLeft, top };
      case 'right':
        return { left: calcLeft, top: calcSubTop };
      case 'right-end':
        return { left: calcLeft, bottom: calcSubBottom };
      default:
        return { top: 'auto' };
    }
  }, [HOVER_GAP, position]);

  const getArrowPositions = useCallback(() => {
    switch (position) {
      case 'top-start':
        return css`
          &::after {
            bottom: 0px;
            left: ${ARROW_SIZE * 2}px;
            margin-bottom: -${ARROW_SIZE * 2}px;
            border-color: ${backgroundColor ?? theme.color.grey600} transparent transparent transparent;
          }
        `;
      case 'top':
        return css`
          &::after {
            bottom: 0px;
            left: 50%;
            margin-left: -${ARROW_SIZE}px;
            margin-bottom: -${ARROW_SIZE * 2}px;
            border-color: ${backgroundColor ?? theme.color.grey600} transparent transparent transparent;
          }
        `;
      case 'top-end':
        return css`
          &::after {
            bottom: 0px;
            right: ${ARROW_SIZE * 2}px;
            margin-bottom: -${ARROW_SIZE * 2}px;
            border-color: ${backgroundColor ?? theme.color.grey600} transparent transparent transparent;
          }
        `;
      case 'bottom-start':
        return css`
          &::after {
            top: -${ARROW_SIZE * 2}px;
            left: ${ARROW_SIZE * 2}px;
            border-color: transparent transparent ${backgroundColor ?? theme.color.grey600} transparent;
          }
        `;
      case 'bottom':
        return css`
          &::after {
            top: -${ARROW_SIZE * 2}px;
            left: 50%;
            margin-left: -${ARROW_SIZE}px;
            border-color: transparent transparent ${backgroundColor ?? theme.color.grey600} transparent;
          }
        `;
      case 'bottom-end':
        return css`
          &::after {
            top: -${ARROW_SIZE * 2}px;
            right: ${ARROW_SIZE * 2}px;
            margin-bottom: -${ARROW_SIZE * 2}px;
            border-color: transparent transparent ${backgroundColor ?? theme.color.grey600} transparent;
          }
        `;
      case 'left-start':
        return css`
          &::after {
            top: ${ARROW_SIZE * 2}px;
            left: 100%;
            border-color: transparent transparent transparent ${backgroundColor ?? theme.color.grey600};
          }
        `;
      case 'left':
        return css`
          &::after {
            top: 50%;
            left: 100%;
            margin-top: -${ARROW_SIZE}px;
            border-color: transparent transparent transparent ${backgroundColor ?? theme.color.grey600};
          }
        `;
      case 'left-end':
        return css`
          &::after {
            bottom: ${ARROW_SIZE * 2}px;
            left: 100%;
            border-color: transparent transparent transparent ${backgroundColor ?? theme.color.grey600};
          }
        `;
      case 'right-start':
        return css`
          &::after {
            top: ${ARROW_SIZE * 2}px;
            right: 100%;
            border-color: transparent ${backgroundColor ?? theme.color.grey600} transparent transparent;
          }
        `;
      case 'right':
        return css`
          &::after {
            top: 50%;
            right: 100%;
            margin-top: -${ARROW_SIZE}px;
            border-color: transparent ${backgroundColor ?? theme.color.grey600} transparent transparent;
          }
        `;
      case 'right-end':
        return css`
          &::after {
            bottom: ${ARROW_SIZE * 2}px;
            right: 100%;
            border-color: transparent ${backgroundColor ?? theme.color.grey600} transparent transparent;
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
                ${theme.position('fixed', { ...getPositions() })}
              `}
          position: fixed;

          ${theme.size({ width: 'fit-content', maxWidth })}

          padding: 6px 9px;
          border-radius: 10px;

          background-color: ${backgroundColor ?? theme.color.grey600};
          color: ${color ?? theme.color.white};

          pointer-events: none;

          ${theme.typo.titleM}

          ${arrow && [
            css`
              &::after {
                content: '';
                position: absolute;
                border-style: solid;
                border-width: ${ARROW_SIZE}px;
              }
            `,
            getArrowPositions(),
          ]}
        `}
      >
        {text}
      </div>
    ),
    [arrow, backgroundColor, color, getArrowPositions, getPositions, maxWidth, text, theme],
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
      >
        {children}
        {getComponent(true, tooltipRef)}
      </div>
      {show && createPortal(getComponent(), portalContainer ?? document.body)}
    </>
  );
};

export default Tooltip;

const DEFAULT_GAP = 4;
const ARROW_SIZE = 5;
