import { FC, useMemo } from 'react';

import { css, useTheme } from '@emotion/react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Color = 'grey' | 'white';

interface Props {
  size: Size;
  color?: Color;
}

// https://loading.io/css/
const Spinner: FC<Props> = ({ size, color = 'white' }) => {
  const theme = useTheme();
  const wrapperSize = useMemo(() => {
    switch (size) {
      case 'xl':
        return 80;
      case 'lg':
        return 60;
      case 'md':
        return 40;
      case 'sm':
        return 26;
      case 'xs':
      default:
        return 18;
    }
  }, [size]);

  const spinnerBorder = useMemo(() => {
    return wrapperSize / 10;
  }, [wrapperSize]);

  const innerSize = useMemo(() => {
    return wrapperSize - 2 * spinnerBorder;
  }, [spinnerBorder, wrapperSize]);

  const borderColor = useMemo(() => {
    switch (color) {
      case 'grey':
        return theme.color.grey500;
      case 'white':
      default:
        return theme.color.white;
    }
  }, [color, theme]);

  return (
    <div
      css={css`
        display: inline-block;
        position: relative;
        width: ${wrapperSize}px;
        height: ${wrapperSize}px;
        div {
          box-sizing: border-box;
          display: block;
          position: absolute;
          width: ${innerSize}px;
          height: ${innerSize}px;
          margin: ${spinnerBorder}px;
          border: ${spinnerBorder}px solid ${borderColor};
          border-radius: 50%;
          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          border-color: ${borderColor} transparent transparent transparent;
        }
        div:nth-of-type(1) {
          animation-delay: -0.45s;
        }
        div:nth-of-type(2) {
          animation-delay: -0.3s;
        }
        div:nth-of-type(3) {
          animation-delay: -0.15s;
        }
        @keyframes lds-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;
